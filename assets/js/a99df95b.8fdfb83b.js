"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5633],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),k=a,u=d["".concat(i,".").concat(k)]||d[k]||m[k]||o;return t?r.createElement(u,s(s({ref:n},c),{},{components:t})):r.createElement(u,s({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},229:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],l={title:"WebSocket"},i=void 0,p={unversionedId:"ws",id:"version-2.0.0/ws",title:"WebSocket",description:"ws \u6a21\u5757\u662f Node \u7aef\u7684\u4e00\u4e2a WebSocket \u534f\u8bae\u7684\u5b9e\u73b0\uff0c\u8be5\u534f\u8bae\u5141\u8bb8\u5ba2\u6237\u7aef(\u4e00\u822c\u662f\u6d4f\u89c8\u5668)\u6301\u4e45\u5316\u548c\u670d\u52a1\u7aef\u7684\u8fde\u63a5.",source:"@site/versioned_docs/version-2.0.0/ws.md",sourceDirName:".",slug:"/ws",permalink:"/docs/2.0.0/ws",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/versioned_docs/version-2.0.0/ws.md",tags:[],version:"2.0.0",frontMatter:{title:"WebSocket"},sidebar:"common",previous:{title:"SocketIO",permalink:"/docs/2.0.0/socketio"},next:{title:"\u6d4b\u8bd5",permalink:"/docs/2.0.0/testing"}},c=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",children:[],level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",children:[],level:2},{value:"\u63d0\u4f9b Socket \u670d\u52a1",id:"\u63d0\u4f9b-socket-\u670d\u52a1",children:[],level:2},{value:"\u6d88\u606f\u548c\u54cd\u5e94",id:"\u6d88\u606f\u548c\u54cd\u5e94",children:[],level:2},{value:"\u672c\u5730\u6d4b\u8bd5",id:"\u672c\u5730\u6d4b\u8bd5",children:[],level:2},{value:"\u542f\u52a8\u670d\u52a1",id:"\u542f\u52a8\u670d\u52a1",children:[],level:2},{value:"\u6846\u67b6\u9009\u9879",id:"\u6846\u67b6\u9009\u9879",children:[],level:2},{value:"\u63a5\u5165\u5df2\u6709\u7684 HTTP \u670d\u52a1",id:"\u63a5\u5165\u5df2\u6709\u7684-http-\u670d\u52a1",children:[],level:2}],m={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ws"},"ws")," \u6a21\u5757\u662f Node \u7aef\u7684\u4e00\u4e2a WebSocket \u534f\u8bae\u7684\u5b9e\u73b0\uff0c\u8be5\u534f\u8bae\u5141\u8bb8\u5ba2\u6237\u7aef(\u4e00\u822c\u662f\u6d4f\u89c8\u5668)\u6301\u4e45\u5316\u548c\u670d\u52a1\u7aef\u7684\u8fde\u63a5.\n\u8fd9\u79cd\u53ef\u4ee5\u6301\u7eed\u8fde\u63a5\u7684\u7279\u6027\u4f7f\u5f97 WebScoket \u7279\u522b\u9002\u5408\u7528\u4e8e\u9002\u5408\u7528\u4e8e\u6e38\u620f\u6216\u8005\u804a\u5929\u5ba4\u7b49\u4f7f\u7528\u573a\u666f\u3002\n\u200b"),(0,o.kt)("p",null,"Midway \u63d0\u4f9b\u4e86\u5bf9 ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ws"},"ws")," \u6a21\u5757\u7684\u652f\u6301\u548c\u5c01\u88c5\uff0c\u80fd\u591f\u7b80\u5355\u7684\u521b\u5efa\u4e00\u4e2a WebSocket \u670d\u52a1\u3002\n\u200b"),(0,o.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,o.kt)("p",null,"\u5728\u73b0\u6709\u9879\u76ee\u4e2d\u5b89\u88c5 WebSocket \u7684\u4f9d\u8d56\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/ws --save\n$ npm i @types/ws --save-dev\n")),(0,o.kt)("p",null,"\u200b"),(0,o.kt)("h2",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f WebSocket \u9879\u76ee\u7684\u57fa\u7840\u76ee\u5f55\u7ed3\u6784\uff0c\u548c\u4f20\u7edf\u5e94\u7528\u7c7b\u4f3c\uff0c\u6211\u4eec\u521b\u5efa\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"socket")," \u76ee\u5f55\uff0c\u7528\u6237\u5b58\u653e WebSocket \u4e1a\u52a1\u7684\u670d\u52a1\u4ee3\u7801\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 configuration.ts          ## \u5165\u53e3\u914d\u7f6e\u6587\u4ef6\n\u2502   \u251c\u2500\u2500 interface.ts\n\u2502   \u2514\u2500\u2500 socket                      ## ws \u670d\u52a1\u7684\u6587\u4ef6\n\u2502       \u2514\u2500\u2500 hello.ts\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 bootstrap.js                  ## \u670d\u52a1\u542f\u52a8\u5165\u53e3\n\u2514\u2500\u2500 tsconfig.json\n")),(0,o.kt)("h2",{id:"\u63d0\u4f9b-socket-\u670d\u52a1"},"\u63d0\u4f9b Socket \u670d\u52a1"),(0,o.kt)("p",null,"Midway \u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"@WSController")," \u88c5\u9970\u5668\u5b9a\u4e49 WebSocket \u670d\u52a1\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Provide()\n@WSController()\nexport class HelloSocketController {}\n")),(0,o.kt)("p",null,"\u5f53\u6709\u5ba2\u6237\u7aef\u8fde\u63a5\u65f6\uff0c\u4f1a\u89e6\u53d1 ",(0,o.kt)("inlineCode",{parentName:"p"},"connection")," \u4e8b\u4ef6\uff0c\u6211\u4eec\u5728\u4ee3\u7801\u4e2d\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"@OnWSConnection()")," \u88c5\u9970\u5668\u6765\u4fee\u9970\u4e00\u4e2a\u65b9\u6cd5\uff0c\u5f53\u6bcf\u4e2a\u5ba2\u6237\u7aef\u7b2c\u4e00\u6b21\u8fde\u63a5\u670d\u52a1\u65f6\uff0c\u5c06\u81ea\u52a8\u8c03\u7528\u8be5\u65b9\u6cd5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { WSController, Provide, OnWSConnection, Inject } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/ws';\nimport * as http from 'http';\n\n@Provide()\n@WSController()\nexport class HelloSocketController {\n  @Inject()\n  ctx: Context;\n\n  @OnWSConnection()\n  async onConnectionMethod(socket: Context, request: http.IncomingMessage) {\n    console.log(`namespace / got a connection ${this.ctx.readyState}`);\n  }\n}\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8fd9\u91cc\u7684 ctx \u7b49\u4ef7\u4e8e WebSocket \u5b9e\u4f8b\u3002"))),(0,o.kt)("h2",{id:"\u6d88\u606f\u548c\u54cd\u5e94"},"\u6d88\u606f\u548c\u54cd\u5e94"),(0,o.kt)("p",null,"WebSocket \u662f\u901a\u8fc7\u4e8b\u4ef6\u7684\u76d1\u542c\u65b9\u5f0f\u6765\u83b7\u53d6\u6570\u636e\u3002Midway \u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"@OnWSMessage()")," \u88c5\u9970\u5668\u6765\u683c\u5f0f\u5316\u63a5\u6536\u5230\u7684\u4e8b\u4ef6\uff0c\u6bcf\u6b21\u5ba2\u6237\u7aef\u53d1\u9001\u4e8b\u4ef6\uff0c\u88ab\u4fee\u9970\u7684\u65b9\u6cd5\u90fd\u5c06\u88ab\u6267\u884c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { WSController, Provide, OnWSConnection, Inject } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/ws';\n\n@Provide()\n@WSController()\nexport class HelloSocketController {\n  @Inject()\n  ctx: Context;\n\n  @OnWSMessage('message')\n  async gotMessage(data) {\n    return { name: 'harry', result: parseInt(data) + 5 };\n  }\n}\n")),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"@WSBroadCast")," \u88c5\u9970\u5668\u5c06\u6d88\u606f\u53d1\u9001\u5230\u6240\u6709\u8fde\u63a5\u7684\u5ba2\u6237\u7aef\u4e0a\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { WSController, Provide, OnWSConnection, Inject } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/ws';\n\n@Provide()\n@WSController()\nexport class HelloSocketController {\n  @Inject()\n  ctx: Context;\n\n  @OnWSMessage('message')\n  @WSBroadCast()\n  async gotMyMessage(data) {\n    return { name: 'harry', result: parseInt(data) + 5 };\n  }\n\n  @OnWSDisConnection()\n  async disconnect(id: number) {\n    console.log('disconnect ' + id);\n  }\n}\n")),(0,o.kt)("p",null,"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"@OnWSDisConnection")," \u88c5\u9970\u5668\uff0c\u5728\u5ba2\u6237\u7aef\u65ad\u8fde\u65f6\uff0c\u505a\u4e00\u4e9b\u989d\u5916\u5904\u7406\u3002\n\u200b"),(0,o.kt)("h2",{id:"\u672c\u5730\u6d4b\u8bd5"},"\u672c\u5730\u6d4b\u8bd5"),(0,o.kt)("p",null,"\u548c\u4f20\u7edf web \u7684 midway \u6d4b\u8bd5\u65b9\u6cd5\u4e00\u6837\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"createApp")," \u521b\u5efa\u6211\u4eec\u7684\u670d\u52a1\u7aef\uff0c\u552f\u4e00\u4e0d\u540c\u7684\u662f\uff0c\u6211\u4eec\u8981\u542f\u52a8\u4e00\u4e2a WebSocket \u670d\u52a1\uff0c\u6bd4\u5982\u4f20\u9012\u4e00\u4e2a\u7aef\u53e3\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp } from '@midwayjs/mock';\nimport { Framework } from '@midwayjs/ws';\n\ndescribe('/test/index.test.ts', () => {\n  it('should test create webSocket app', async () => {\n    const app = await createApp<Framework>(process.cwd(), { port: 3000 });\n\n    //...\n\n    await closeApp(app);\n  });\n});\n")),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"ws")," \u6765\u6d4b\u8bd5\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528 Midway \u63d0\u4f9b\u7684\u57fa\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"ws")," \xa0 \u6a21\u5757\u5c01\u88c5\u7684\u6d4b\u8bd5\u5ba2\u6237\u7aef\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp, closeApp, createWebSocketClient } from '@midwayjs/mock';\n\n/ ... \u7701\u7565 describe\n\nit('should test create websocket app', async () => {\n\n  // \u521b\u5efa\u4e00\u4e2a\u670d\u52a1\n  const app = await createApp<Framework>(process.cwd(), { port: 3000});\n\n  // \u521b\u5efa\u4e00\u4e2a\u5ba2\u6237\u7aef\n  const client = await createWebSocketClient(`ws://localhost:3000`);\n\n  const result = await new Promise(resolve => {\n\n    client.on('message', (data) => {\n      // xxxx\n      resolve(data);\n    });\n\n    // \u53d1\u9001\u4e8b\u4ef6\n    client.send(1);\n\n  });\n\n  // \u5224\u65ad\u7ed3\u679c\n  expect(JSON.parse(result)).toEqual({\n    name: 'harry',\n    result: 6,\n  });\n\n  await sleep(1000);\n\n  // \u5173\u95ed\u5ba2\u6237\u7aef\n  await client.close();\n\n  // \u5173\u95ed\u670d\u52a1\u7aef\n  await closeApp(app);\n\n});\n")),(0,o.kt)("p",null,"\u4f7f\u7528 node \u81ea\u5e26\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"events")," \u6a21\u5757\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"once")," \u65b9\u6cd5\u6765\u4f18\u5316\uff0c\u5c31\u4f1a\u53d8\u6210\u4e0b\u9762\u7684\u4ee3\u7801\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { sleep } from '@midwayjs/decorator';\nimport { once } from 'events';\nimport { createApp, closeApp, createWebSocketClient } from '@midwayjs/mock';\n\n// ... \u7701\u7565 describe\n\nit('should test create websocket app', async () => {\n  // \u521b\u5efa\u4e00\u4e2a\u670d\u52a1\n  const app = await createApp<Framework>(process.cwd(), { port: 3000 });\n\n  // \u521b\u5efa\u4e00\u4e2a\u5ba2\u6237\u7aef\n  const client = await createWebSocketClient(`ws://localhost:3000`);\n\n  // \u53d1\u9001\u4e8b\u4ef6\n  client.send(1);\n\n  // \u7528\u4e8b\u4ef6\u7684 promise \u5199\u6cd5\u76d1\u542c\n  let gotEvent = once(client, 'message');\n  // \u7b49\u5f85\u8fd4\u56de\n  let [data] = await gotEvent;\n\n  // \u5224\u65ad\u7ed3\u679c\n  expect(JSON.parse(data)).toEqual({\n    name: 'harry',\n    result: 6,\n  });\n\n  await sleep(1000);\n\n  // \u5173\u95ed\u5ba2\u6237\u7aef\n  await client.close();\n\n  // \u5173\u95ed\u670d\u52a1\u7aef\n  await closeApp(app);\n});\n")),(0,o.kt)("p",null,"\u4e24\u79cd\u5199\u6cd5\u6548\u679c\u76f8\u540c\uff0c\u6309\u81ea\u5df1\u7406\u89e3\u7684\u5199\u5c31\u884c\u3002\n\u200b"),(0,o.kt)("h2",{id:"\u542f\u52a8\u670d\u52a1"},"\u542f\u52a8\u670d\u52a1"),(0,o.kt)("p",null,"ws \u6846\u67b6\u53ef\u4ee5\u72ec\u7acb\u542f\u52a8\uff08\u4f9d\u9644\u4e8e\u9ed8\u8ba4\u7684 http \u670d\u52a1\uff0c\u4e5f\u53ef\u4ee5\u548c\u5176\u4ed6 midway \xa0 \u6846\u67b6\u4e00\u8d77\u542f\u52a8\uff09\u3002\u901a\u8fc7\u7f16\u5199 ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap.js")," \u5373\u53ef\u3002"),(0,o.kt)("p",null,"\u548c\u5176\u4ed6\u6846\u67b6\u7c7b\u4f3c\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// bootstrap.js\nconst WebSocketFramework = require('@midwayjs/ws').Framework;\nconst { Bootstrap } = require('@midwayjs/bootstrap');\n\n// \u521d\u59cb\u5316 socket.io \u6846\u67b6\nconst webSocketFramework = new WebSocketFramework().configure({\n  port: 3000,\n});\n\nBootstrap.load(webSocketFramework).run();\n")),(0,o.kt)("p",null,"\u6211\u4eec\u5728\u672c\u5730\u5f00\u53d1\u65f6\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e2a\u6587\u4ef6\u8fdb\u884c\u5f00\u53d1\uff0c\u6211\u4eec\u7684\u811a\u624b\u67b6\u793a\u4f8b\u5df2\u7ecf\u5c06\u5176\u6dfb\u52a0\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev")," \u547d\u4ee4\u4e2d\u3002"),(0,o.kt)("p",null,"\u800c\u5728\u7ebf\u4e0a\u90e8\u7f72\u65f6\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run start")," \u547d\u4ee4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "start": "NODE_ENV=production node ./bootstrap.js",\n  "dev": "cross-env NODE_ENV=local midway-bin dev --ts --entryFile=bootstrap.js",\n  "test": "midway-bin test --ts",\n  "cov": "midway-bin cov --ts",\n  ...\n},\n')),(0,o.kt)("h2",{id:"\u6846\u67b6\u9009\u9879"},"\u6846\u67b6\u9009\u9879"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/ws")," \u4f5c\u4e3a\u6846\u67b6\u542f\u52a8\u65f6\uff0c\u53ef\u4ee5\u4f20\u9012\u7684\u53c2\u6570\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,"| port | number | \u53ef\u9009\uff0c\u5982\u679c\u4f20\u9012\u4e86\u8be5\u7aef\u53e3\uff0cws \u5185\u90e8\u4f1a\u521b\u5efa\u4e00\u4e2a\u8be5\u7aef\u53e3\u7684 HTTP \u670d\u52a1\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u5982\u679c\u5e0c\u671b\u548c midway \u5176\u4ed6\u7684 web \u6846\u67b6\u914d\u5408\u4f7f\u7528\uff0c\u8bf7\u4e0d\u8981\u4f20\u9012\u8be5\u53c2\u6570\u3002"),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"server"),(0,o.kt)("td",{parentName:"tr",align:null},"httpServer"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0c\u5f53\u4f20\u9012 port \u65f6\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u5df2\u7ecf\u5b58\u5728\u7684 webServer")))),(0,o.kt)("p",null,"\u66f4\u591a\u7684\u542f\u52a8\u9009\u9879\uff0c\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/websockets/ws"},"ws \u6587\u6863"),"\u3002\n\u200b"),(0,o.kt)("h2",{id:"\u63a5\u5165\u5df2\u6709\u7684-http-\u670d\u52a1"},"\u63a5\u5165\u5df2\u6709\u7684 HTTP \u670d\u52a1"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/ws")," \u9ed8\u8ba4\u652f\u6301\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/web")," \uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," \uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/express")," \u7684\u591a\u6846\u67b6\u90e8\u7f72\u3002"),(0,o.kt)("p",null,"\u5f53\u591a\u4e2a\u6846\u67b6\u90e8\u7f72\u65f6\uff0c\u8bf7\u628a HTTP \u7c7b\u578b\u7684\u6846\u67b6\u4f5c\u4e3a\u4e3b\u6846\u67b6\uff0cws \u5c06\u4f5c\u4e3a\u526f\u6846\u67b6\u52a0\u8f7d\uff0c\u540c\u65f6\u4f1a\u81ea\u52a8\u627e\u5230\u5f53\u524d\u7684 HTTP \u670d\u52a1\u63a5\u5165\u3002"),(0,o.kt)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// bootstrap.js\n\nconst WebFramework = require('@midwayjs/koa').Framework;\nconst SocketFramework = require('@midwayjs/ws').Framework;\nconst { Bootstrap } = require('@midwayjs/bootstrap');\n\n// \u52a0\u8f7d\u4e3b web \u6846\u67b6\nconst webFramework = new WebFramework().configure({\n  port: 7001,\n});\n\n// \u52a0\u8f7d\u526f ws \u6846\u67b6\uff0c\u81ea\u52a8\u9002\u914d\u4e3b\u6846\u67b6\uff0c\u8fd9\u91cc\u4e0d\u9700\u8981\u914d\u7f6e port\nconst socketFramework = new SocketFramework().configure({});\n\nBootstrap.load(webFramework).load(socketFramework).run();\n")),(0,o.kt)("h2",{id:""}))}d.isMDXComponent=!0}}]);