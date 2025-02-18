# Web 路由表

从 v2.8.0 开始，Midway 提供了内置的路由表能力，所有的 Web 框架都将使用这份路由表注册路由。

从 v3.4.0 开始，路由服务将作为 Midway 内置服务提供。


在应用启动，onReady 生命周期以及之后可用。



## 获取路由表服务

已默认实例化，可以直接注入使用。

```typescript
import { MidwayWebRouterService, MidwayServerlessFunctionService } from '@midwayjs/core';
import { Configuration, Inject } from '@midawyjs/decorator';

@Configuration({
  // ...
})
export class MainConfiguration {
  @Inject()
  webRouterService: MidwayWebRouterService;
  
  @Inject()
  serverlessFunctionService: MidwayServerlessFunctionService;

  async onReady() {
    // Web 路由
    const routes = await this.webRouterService.getFlattenRouterTable();
    
    // serverless 函数
    const routes = await this.serverlessFunctionService.getFunctionList();
  }
}
```

`MidwayServerlessFunctionService` 仅在 Serverless 场景下生效，方法和 `MidwayServerlessFunctionService` 几乎相同。



## 路由信息定义


每个路由信息由一个 `RouterInfo` 定义表示，包含一些属性。


定义如下：
```typescript
export interface RouterInfo {
  /**
   * router prefix
   */
  prefix: string;
  /**
   * router alias name
   */
  routerName: string;
  /**
   * router path, without prefix
   */
  url: string | RegExp;
  /**
   * request method for http, like get/post/delete
   */
  requestMethod: string;
  /**
   * invoke function method
   */
  method: string;
  description: string;
  summary: string;
  /**
   * router handler function key，for IoC container load
   */
  handlerName: string;
  /**
   *  serverless func load key
   */
  funcHandlerName: string;
  /**
   * controller provideId
   */
  controllerId: string;
  /**
   * router middleware
   */
  middleware: any[];
  /**
   * controller middleware in this router
   */
  controllerMiddleware: any[];
  /**
   * request args metadata
   */
  requestMetadata: any[];
  /**
   * response data metadata
   */
  responseMetadata: any[];
}
```
| 属性                 | 类型     | 描述                                                         |
| --- | --- | --- |
| prefix | string | 路由前缀，比如 / 或者 /api，用户写在 @Controller 装饰器上的部分 |
| routerName | string | 路由名 |
| url | string | 路由的去除路由前缀的部分，也是用户写在 @Get 等装饰器上的部分 |
| requestMethod | string | get/post/delete/put/all 等 |
| method | string | 实际调用的类上的方法名 |
| description | string | 描述，路由装饰器上的参数 |
| summary | string | 摘要，路由装饰器上的参数 |
| handlerName | string | 等价于 controllerId.method |
| funcHandlerName | string | 使用 @Func 写的 handler 名字 |
| controllerId | string | controller 的依赖注入容器的 key（providerId） |
| middleware | string[] | 路由中间件字符串数组 |
| controllerMiddleware | string[] | 控制器中间件字符串数组 |
| requestMetadata | any[] | 请求参数的元数据，@Query/@Body 等元数据 |
| responseMetadata | any[] | 响应参数的元数据，@SetHeader/@ContentType 等元数据 |



## 路由优先级


以往我们需要关心路由的加载顺序，比如通配的 `/*` 比如在实际的 `/abc` 之后，否则会加载到错误的路由。在新版本中，我们对此种情况做了自动排序。


规则如下：


- 1. 绝对路径规则优先级最高如 `/ab/cb/e`
- 2. 星号只能出现最后且必须在/后面，如 `/ab/cb/**`
- 3. 如果绝对路径和通配都能匹配一个路径时，绝对规则优先级高
- 4. 有多个通配能匹配一个路径时，最长的规则匹配，如 `/ab/**` 和 `/ab/cd/**` 在匹配 `/ab/cd/f` 时命中 `/ab/cd/**`
- 5. 如果 `/` 与 `/*` 都能匹配 / ,但 `/` 的优先级高于 `/*`


此规则也与 Serverless 下函数的路由规则保持一致。


简单理解为，“明确的路由优先级最高，长的路由优先级高，通配的优先级最低”。


比如，排序完的优先级如下（高到低）：
```typescript
/api/invoke/abc
/api/invoke/*
/api/abc
/api/*
/abc
/*
```



## 当前匹配的路由

通过 `getMatchedRouterInfo` 方法，我们可以知道当前的路由，匹配到哪个路由信息（RouterInfo），从而进一步处理，这个逻辑在鉴权等场景很有用。

比如，在中间件中，我们可以在进入控制器之前提前判断。

```typescript
import { Middleware, Inject } from '@midwayjs/decorator';
import { httpError, MidwayWebRouterService } from '@midwayjs/core';

@Middleware()
export class AuthMiddleware {
  @Inject()
  webRouterService: MidwayWebRouterService;

  resolve() {
    return async (ctx, next) => {
      // 查询当前路由是否在路由表中注册
      const routeInfo = await this.webRouterService.getMatchedRouterInfo(ctx.path, ctx.method);
      if (routeInfo) {
        await next();
      } else {
				throw new httpError.NotFoundError();
      }
    }
  }
}
```



## 路由信息


### 获取扁平化路由列表


获取当前所有可注册到 HTTP 服务的路由列表（包括 @Func/@Controller，以及一切按照标准信息注册的自定义装饰器）。


会按照优先级从高到低自动排序。


定义：
```typescript
async getFlattenRouterTable(): Promise<RouterInfo[]>
```


获取路由表 API。
```typescript
const result = await this.webRouterService.getFlattenRouterTable();
```
输出示例：
```typescript
[
  {
    "prefix": "/",
    "routerName": "",
    "url": "/set_header",
    "requestMethod": "get",
    "method": "homeSet",
    "description": "",
    "summary": "",
    "handlerName": "apiController.homeSet",
    "funcHandlerName": "apiController.homeSet",
    "controllerId": "apiController",
    "middleware": [],
    "controllerMiddleware": [],
    "requestMetadata": [],
    "responseMetadata": [
      {
        "type": "web:response_header",
        "setHeaders": {
          "ccc": "ddd"
        }
      },
      {
        "type": "web:response_header",
        "setHeaders": {
          "bbb": "aaa"
        }
      }
    ],
  },
  {
    "prefix": "/",
    "routerName": "",
    "url": "/ctx-body",
    "requestMethod": "get",
    "method": "getCtxBody",
    "description": "",
    "summary": "",
    "handlerName": "apiController.getCtxBody",
    "funcHandlerName": "apiController.getCtxBody",
    "controllerId": "apiController",
    "middleware": [],
    "controllerMiddleware": [],
    "requestMetadata": [],
    "responseMetadata": [],
  },
	// ...
]
```


### 获取 Router 信息列表


在 Midway 中，每个 Controller 对应一个 Router 对象，每个 Router 都会有一个路由前缀（prefix），在此之中的所有路由都会按照上面的规则进行排序。


Router 本身也会按照 prefix 进行排序。


定义：
```typescript
export interface RouterPriority {
  prefix: string;
  priority: number;
  middleware: any[];
  routerOptions: any;
  controllerId: string;
}

async getRoutePriorityList(): Promise<RouterPriority[]>
```
Router 的数据相对简单。



| 属性          | 类型     | 描述                                                         |
| --- | --- | --- |
| prefix | string | 路由前缀，比如 / 或者 /api，用户写在 @Controller 装饰器上的部分 |
| priority | number | Router 的优先级，@Priority 装饰器填写的值，/ 根 Router 默认优先级最低，为 -999 |
| middleware | string[] | 控制器中间件字符串数组 |
| controllerId | string | controller 的依赖注入容器的 key（providerId） |
| routerOptions | any | @Controller 装饰器的 options |



获取路由表 API。

```typescript
const list = await collector.getRoutePriorityList();
```
输出示例：
```typescript
[
  {
    "prefix": "/case",
    "priority": 0,
    "middleware": [],
    "routerOptions": {
      "middleware": [],
      "sensitive": true
    },
    "controllerId": "caseController"
  },
  {
    "prefix": "/user",
    "priority": 0,
    "middleware": [],
    "routerOptions": {
      "middleware": [],
      "sensitive": true
    },
    "controllerId": "userController"
  },
  {
    "prefix": "/",
    "priority": -999,
    "middleware": [],
    "routerOptions": {
      "middleware": [],
      "sensitive": true
    },
    "controllerId": "apiController"
  }
]
```


### 获取带层级的路由


某些情况下，我们需要拿到带层级的路由，包括哪些路由在哪个控制器（Controller）下，这样能更好的创建路由。


Midway 也提供了获取带层级的路由表方法。层级内会按照优先级从高到低自动排序。


定义：
```typescript
async getRouterTable(): Promise<Map<string, RouterInfo[]>>
```


获取层级路由表 API，返回的是个 Map，key 为控制器的路由前缀 prefix 字符串。未明确写明路由前缀的（比如函数或者其他场景），都将归为 / 路由前缀下。
```typescript
const result = await collector.getRouterTable();
```
输出示例：
```typescript
Map(3) {
  '/' => [
    {
      prefix: '/',
      routerName: '',
      url: '/set_header',
      requestMethod: 'get',
      method: 'homeSet',
      description: '',
      summary: '',
      handlerName: 'apiController.homeSet',
      funcHandlerName: 'apiController.homeSet',
      controllerId: 'apiController',
      middleware: [],
      controllerMiddleware: [],
      requestMetadata: [],
      responseMetadata: [Array],
    },
    {
      prefix: '/',
      routerName: '',
      url: '/ctx-body',
      requestMethod: 'get',
      method: 'getCtxBody',
      description: '',
      summary: '',
      handlerName: 'apiController.getCtxBody',
      funcHandlerName: 'apiController.getCtxBody',
      controllerId: 'apiController',
      middleware: [],
      controllerMiddleware: [],
      requestMetadata: [],
      responseMetadata: [],
    },
    // ...
  ]
}
```



### 获取所有函数信息

和 `getFlattenRouterTable` 相同，只是返回的内容多了函数部分的信息。

定义：

```typescript
async getFunctionList(): Promise<RouterInfo[]>
```


获取函数路由表 API。

```typescript
const result = await this.serverlessFunctionService.getFunctionList();
```





## 添加路由

### 动态添加 Web 控制器

有些时候我们希望根据某些条件动态的添加一个控制器，就可以使用这个方法。

首先，我们需要有一个控制器类，但是不使用 `@Controller` 装饰器修饰。

```typescript
import { Get, Provide } from '@midwayjs/decorator';

// 注意这里未使用 @Controller 修饰
@Provide()
export class DataController {
  @Get('/query_data')
  async getData() {
    return 'hello world';
  }
}
```

我们可以通过 `addController` 方法动态添加它。

```typescript
// src/configuration.ts
import { MidwayWebRouterService } from '@midwayjs/core';
import { Configuration, Inject } from '@midawyjs/decorator';
import { DataController } from './controller/data.controller';

@Configuration({
  // ...
})
export class MainConfiguration {
  @Inject()
  webRouterService: MidwayWebRouterService;

  async onReady() {
    if (process.env.NODE_ENV === 'test') {
      this.webRouterService.addController(DataController, {
        prefix: '/test',
        routerOptions: {
          middleware: [ 
            // ...
          ]
        }
      });
    }
		// ...
  }
}
```

`addController` 的方法，第一个参数为类本身，第二个参数和 `@Controller` 装饰器参数相同。



### 动态添加 Web 路由函数

在某些场景下，用户可以直接动态添加方法。

```typescript
// src/configuration.ts
import { MidwayWebRouterService } from '@midwayjs/core';
import { Configuration, Inject } from '@midawyjs/decorator';

@Configuration({
  // ...
})
export class MainConfiguration {
  @Inject()
  webRouterService: MidwayWebRouterService;

  async onReady() {
    // koa/egg 格式
    this.webRouterService.addRouter(async (ctx) => {
      return 'hello world';
    }, {
      url: '/api/user',
      requestMethod: 'GET',
    });
		// ...
    
    // express 格式
    this.webRouterService.addRouter(async (req, res) => {
      return 'hello world';
    }, {
      url: '/api/user',
      requestMethod: 'GET',
    });
  }
}
```

`addRouter` 的方法，第一个参数为路由方法体，第二个参数为路由的元数据。



### 动态添加 Serverless 函数

和添加动态 Web 路由类似，使用内置的 `MidwayServerlessFunctionService` 服务来添加。

比如，添加一个 http 函数。

```typescript
// src/configuration.ts
import { MidwayServerlessFunctionService } from '@midwayjs/core';
import { Configuration, Inject } from '@midawyjs/decorator';

@Configuration({
  // ...
})
export class MainConfiguration {
  @Inject()
  serverlessFunctionService: MidwayServerlessFunctionService;

  async onReady() {
    this.serverlessFunctionService.addServerlessFunction(async (ctx, event) => {
      return 'hello world';
    }, {
      type: ServerlessTriggerType.HTTP,
      metadata: {
        method: 'get',
        path: '/api/hello'
      },
      functionName: 'hello',
      handlerName: 'index.hello',
    });
  }
}
```

`metadata` 的信息和 @ServerlessTrigger 的参数相同。

