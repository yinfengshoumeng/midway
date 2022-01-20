"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[620],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(k,i(i({ref:n},s),{},{components:t})):r.createElement(k,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3122:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={},p="2.x \u5347\u7ea7\u6307\u5357",c={unversionedId:"upgrade_v3",id:"upgrade_v3",title:"2.x \u5347\u7ea7\u6307\u5357",description:"\u672c\u7bc7\u5c06\u4ecb\u7ecd\u4ece midway v2 \u5347\u7ea7\u4e3a midway v3 \u7684\u65b9\u5f0f\u3002",source:"@site/docs/upgrade_v3.md",sourceDirName:".",slug:"/upgrade_v3",permalink:"/en/docs/upgrade_v3",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/docs/upgrade_v3.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"\u521b\u5efa\u7b2c\u4e00\u4e2a\u5e94\u7528",permalink:"/en/docs/quickstart"},next:{title:"\u8def\u7531\u548c\u63a7\u5236\u5668",permalink:"/en/docs/controller"}},s=[{value:"\u9762\u5bf9\u666e\u901a\u7528\u6237",id:"\u9762\u5bf9\u666e\u901a\u7528\u6237",children:[{value:"\u5305\u7248\u672c",id:"\u5305\u7248\u672c",children:[],level:3},{value:"Query/Body/Param/Header \u88c5\u9970\u5668\u53d8\u66f4",id:"querybodyparamheader-\u88c5\u9970\u5668\u53d8\u66f4",children:[],level:3},{value:"Validate/Rule \u88c5\u9970\u5668",id:"validaterule-\u88c5\u9970\u5668",children:[],level:3},{value:"\u914d\u7f6e\u7684\u7edd\u5bf9\u8def\u5f84",id:"\u914d\u7f6e\u7684\u7edd\u5bf9\u8def\u5f84",children:[],level:3},{value:"\u4f7f\u7528\u9ed8\u8ba4\u6846\u67b6/\u591a\u6846\u67b6",id:"\u4f7f\u7528\u9ed8\u8ba4\u6846\u67b6\u591a\u6846\u67b6",children:[],level:3},{value:"\u5220\u9664\u4e86\u4e00\u6279 IoC \u5bb9\u5668 API",id:"\u5220\u9664\u4e86\u4e00\u6279-ioc-\u5bb9\u5668-api",children:[],level:3}],level:2},{value:"\u9762\u5bf9\u7ec4\u4ef6/\u6846\u67b6\u5f00\u53d1\u8005",id:"\u9762\u5bf9\u7ec4\u4ef6\u6846\u67b6\u5f00\u53d1\u8005",children:[{value:"\u7ec4\u4ef6\u4e2d registerObject \u4e0d\u518d\u589e\u52a0 namespace",id:"\u7ec4\u4ef6\u4e2d-registerobject-\u4e0d\u518d\u589e\u52a0-namespace",children:[],level:3},{value:"\u81ea\u5b9a\u4e49\u6846\u67b6\u90e8\u5206",id:"\u81ea\u5b9a\u4e49\u6846\u67b6\u90e8\u5206",children:[],level:3}],level:2}],m={toc:s};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2x-\u5347\u7ea7\u6307\u5357"},"2.x \u5347\u7ea7\u6307\u5357"),(0,o.kt)("p",null,"\u672c\u7bc7\u5c06\u4ecb\u7ecd\u4ece midway v2 \u5347\u7ea7\u4e3a midway v3 \u7684\u65b9\u5f0f\u3002"),(0,o.kt)("p",null,"\u4ece Midway v2 \u5347\u7ea7\u5230 Midway v3\uff0c\u4f1a\u6709\u4e00\u4e9b Breaking Change\u3002\u672c\u7bc7\u6587\u6863\u4f1a\u8be6\u7ec6\u5217\u51fa\u8fd9\u4e9b Breaking \u7684\u5730\u65b9\uff0c\u8ba9\u7528\u6237\u53ef\u4ee5\u63d0\u524d\u77e5\u9053\u53d8\u5316\uff0c\u505a\u51fa\u5e94\u5bf9\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"v2 \u7684\u7528\u6237\u8bf7\u4e0d\u8981\u7740\u6025\u5347\u7ea7\uff0c\u6211\u4eec\u540e\u7eed\u5c06\u4f1a\u63d0\u4f9b\u81ea\u52a8\u5316\u5347\u7ea7\u811a\u672c\u3002"))),(0,o.kt)("h2",{id:"\u9762\u5bf9\u666e\u901a\u7528\u6237"},"\u9762\u5bf9\u666e\u901a\u7528\u6237"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"midway v3 \u652f\u6301\u4ece node v12 \u8d77\u3002")),(0,o.kt)("h3",{id:"\u5305\u7248\u672c"},"\u5305\u7248\u672c"),(0,o.kt)("p",null,"\u6240\u6709\u7684\u7ec4\u4ef6\u5305\uff0c\u6838\u5fc3\u5305\u90fd\u5c06\u5347\u7ea7\u4e3a 3.x \u7248\u672c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/bootstrap": "^3.0.0",\n    "@midwayjs/core": "^3.0.0",\n    "@midwayjs/decorator": "^3.0.0",\n    "@midwayjs/koa": "^3.0.0",\n    "@midwayjs/task": "^3.0.0",\n  },\n  "devDependencies": {\n    "@midwayjs/cli": "^1.2.90",\n    "@midwayjs/luckyeye": "^1.0.0",\n    "@midwayjs/mock": "^3.0.0",\n  }\n}\n\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/cli")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwyajs/luckeye"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/logger")," \u7684\u7248\u672c\u9664\u5916\u3002"),(0,o.kt)("h3",{id:"querybodyparamheader-\u88c5\u9970\u5668\u53d8\u66f4"},"Query/Body/Param/Header \u88c5\u9970\u5668\u53d8\u66f4"),(0,o.kt)("p",null,"\u4e3b\u8981\u662f\u9ed8\u8ba4\u65e0\u53c2\u6570\u4e0b\u7684\u884c\u4e3a\u3002"),(0,o.kt)("p",null,"\u65e7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"async invoke(@Query() name) {\n    // ctx.query.name\n}\n")),(0,o.kt)("p",null,"\u65b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"async invoke(@Query() name) {\n    // ctx.query\n}\n\nasync invoke(@Query('name') name) {\n    // ctx.query.name\n}\n")),(0,o.kt)("h3",{id:"validaterule-\u88c5\u9970\u5668"},"Validate/Rule \u88c5\u9970\u5668"),(0,o.kt)("p",null,"\u65e7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Validate, Rule, RuleType } from '@midwayjs/decorator';\n")),(0,o.kt)("p",null,"\u65b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Validate, Rule, RuleType } from '@midwayjs/validate';\n")),(0,o.kt)("p",null,"\u7531\u4e8e validate \u62bd\u8c61\u6210\u4e86\u7ec4\u4ef6\uff0c\u9700\u8981\u5728\u4ee3\u7801\u4e2d\u5b89\u88c5\u4f9d\u8d56\u5e76\u5f00\u542f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration\nimport * as Validate from '@midwayjs/validate';\n\n@Configuration({\n  // ...\n  imports: [\n    Validate\n  ],\n})\nexport class MainConfiguration {\n    // ...\n}\n\n")),(0,o.kt)("h3",{id:"\u914d\u7f6e\u7684\u7edd\u5bf9\u8def\u5f84"},"\u914d\u7f6e\u7684\u7edd\u5bf9\u8def\u5f84"),(0,o.kt)("p",null,"\u4e0d\u518d\u652f\u6301\u76f8\u5bf9\u8def\u5f84"),(0,o.kt)("p",null,"\u65e7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration\n\n@Configuration({\n  // ...\n  importConfigs: [\n    './config'          // ok\n  ]\n})\nexport class MainConfiguration {\n    // ...\n}\n\n")),(0,o.kt)("p",null,"\u65b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"// src/configuration\nimport { join } from 'path';\n\n@Configuration({\n  // ...\n  importConfigs: [\n-   './config'                                                  // error\n+   join(__dirname, './config')                 // ok\n  ]\n})\nexport class MainConfiguration {\n    // ...\n}\n\n")),(0,o.kt)("h3",{id:"\u4f7f\u7528\u9ed8\u8ba4\u6846\u67b6\u591a\u6846\u67b6"},"\u4f7f\u7528\u9ed8\u8ba4\u6846\u67b6/\u591a\u6846\u67b6"),(0,o.kt)("p",null,"\u65e7\uff0c\u4f1a\u5728 bootstrap.js \u4e2d\u5f15\u5165"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const WebFramework = require('@midwayjs/koa').Framework;\nconst GRPCFramework = require('@midwayjs/grpc').Framework;\nconst { Bootstrap } = require('@midwayjs/bootstrap');\n\nBootstrap\n  .load(config => {\n    return new WebFramework().configure(config.cluster);\n  })\n  .load(config => {\n    return new GRPCFramemwork().configure(config.grpcServer);\n  })\n  .run();\n")),(0,o.kt)("p",null,"\u65b0\u7248\u672c\n\u200b"),(0,o.kt)("p",null,"bootstrap.js \u4e2d\u4e0d\u518d\u9700\u8981\u5355\u72ec\u5b9e\u4f8b\u5316"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const { Bootstrap } = require('@midwayjs/bootstrap');\nBootstrap.run();\n")),(0,o.kt)("p",null,"\u4f5c\u4e3a\u66ff\u4ee3\uff0c\u4ee5\u7ec4\u4ef6\u7684\u5f62\u5f0f\u5f15\u5165"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration\nimport * as Web from '@midwayjs/web';\nimport * as Grpc from '@midwayjs/grpc';\n\n@Configuration({\n  // ...\n  imports: [\n    Web,\n    Grpc,\n    //...\n  ],\n})\nexport class MainConfiguration {\n    // ...\n}\n\n")),(0,o.kt)("p",null,"\u5176\u4ed6\u5f71\u54cd\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1\u3001\u6d4b\u8bd5\u4e2d\u4e0d\u518d\u9700\u8981\u4f7f\u7528 createBootstrap \u65b9\u6cd5\u4ece bootstrap.js \u542f\u52a8"),(0,o.kt)("li",{parentName:"ul"},"2\u3001\u539f\u6709\u5165\u53e3 Framework \u7684\u914d\u7f6e\u73b0\u5728\u53ef\u4ee5\u653e\u5230 config.*.ts \u4e2d\uff0c\u4ee5\u6846\u67b6\u540d\u4f5c\u4e3a key")),(0,o.kt)("h3",{id:"\u5220\u9664\u4e86\u4e00\u6279-ioc-\u5bb9\u5668-api"},"\u5220\u9664\u4e86\u4e00\u6279 IoC \u5bb9\u5668 API"),(0,o.kt)("p",null,"\u79fb\u9664 container \u4e0a\u7684\u4e0b\u5217\u65b9\u6cd5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"getConfigService(): IConfigService;"),(0,o.kt)("li",{parentName:"ul"},"getEnvironmentService(): IEnvironmentService;"),(0,o.kt)("li",{parentName:"ul"},"getInformationService(): IInformationService;"),(0,o.kt)("li",{parentName:"ul"},"setInformationService(service: IInformationService): void;"),(0,o.kt)("li",{parentName:"ul"},"getAspectService(): IAspectService;"),(0,o.kt)("li",{parentName:"ul"},"getCurrentEnv(): string;")),(0,o.kt)("p",null,"\u73b0\u5728\u90fd\u6709\u76f8\u5e94\u7684\u6846\u67b6\u5185\u7f6e\u670d\u52a1\u6765\u66ff\u4ee3\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\u65e7\u5199\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const environmentService = app.getApplicationContext().getEnvironmentService();\nconst env = environmentService.getCurrentEnvironment();\n")),(0,o.kt)("p",null,"\u65b0\u5199\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const environmentService = app.getApplicationContext().get(MidwayEnvironmentService)\nconst env = environmentService.getCurrentEnvironment();\n")),(0,o.kt)("h2",{id:"\u9762\u5bf9\u7ec4\u4ef6\u6846\u67b6\u5f00\u53d1\u8005"},"\u9762\u5bf9\u7ec4\u4ef6/\u6846\u67b6\u5f00\u53d1\u8005"),(0,o.kt)("h3",{id:"\u7ec4\u4ef6\u4e2d-registerobject-\u4e0d\u518d\u589e\u52a0-namespace"},"\u7ec4\u4ef6\u4e2d registerObject \u4e0d\u518d\u589e\u52a0 namespace"),(0,o.kt)("p",null,"\u5728\u7ec4\u4ef6\u5f00\u53d1\u65f6\uff0c\u4e0d\u518d\u589e\u52a0 namespace \u524d\u7f00\u3002"),(0,o.kt)("p",null,"\u65e7\uff0c\u7ec4\u4ef6\u5165\u53e3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Configuration({\n  namespace: 'A'\n  // ...\n})\nexport class ContainerConfiguration {\n\n  async onReady(container) {\n    container.registerObject('aaa', 'bbb');\n  }\n}\n\ncontainer.getAsync('A:aaa'); // => OK\n")),(0,o.kt)("p",null,"\u65b0\uff0c\u7ec4\u4ef6\u5165\u53e3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Configuration({\n  namespace: 'A'\n  // ...\n})\nexport class ContainerConfiguration {\n\n  async onReady(container) {\n    container.registerObject('aaa', 'bbb');\n  }\n}\n\ncontainer.getAsync('aaa'); // => OK\n")),(0,o.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u6846\u67b6\u90e8\u5206"},"\u81ea\u5b9a\u4e49\u6846\u67b6\u90e8\u5206"),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u6846\u67b6\u7684\u53d8\u5316\u6bd4\u8f83\u5927\uff0c\u6846\u67b6\u7ec4\u4ef6\u5316\u662f\u8fd9\u4e00\u7248\u672c\u7684\u76ee\u6807\u3002\u6709\u51e0\u4e2a\u5730\u65b9\u9700\u8981\u4fee\u6539\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1\u3001\u5728\u539f\u6846\u67b6\u4e0a\u589e\u52a0 @Framework \u6807\u8bc6")),(0,o.kt)("p",null,"\u65e7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class CustomKoaFramework extends BaseFramework {\n    // ...\n}\n")),(0,o.kt)("p",null,"\u65b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Framework } from '@midwayjs/decorator';\n\n@Framework()\nexport class CustomKoaFramework extends BaseFramework {\n    // ...\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2\u3001\u5728\u5165\u53e3\u5904\u6309\u7ec4\u4ef6\u89c4\u8303\u5bfc\u51fa Configuration")),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 configuration \u4e2d\u4f7f\u7528\u751f\u547d\u5468\u671f\uff0c\u548c\u7ec4\u4ef6\u76f8\u540c\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"run")," \u65b9\u6cd5\u5c06\u5728\u65b0\u589e\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"onServerReady")," \u8fd9\u4e2a\u751f\u547d\u5468\u671f\u663e\u5f0f\u8c03\u7528\u6267\u884c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration,Inject } from '@midwayjs/decorator';\nimport { MidwayKoaFramework } from './framework';\n\n@Configuration({\n  namespace: 'koa',\n})\nexport class KoaConfiguration {\n  @Inject()\n  framework: MidwayKoaFramework;\n\n  async onReady() {}\n\n  async onServerReady() {\n    await this.framework.run();\n  }\n}\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3\u3001\u6846\u67b6\u5f00\u53d1\u65f6")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7531\u4e8e\u6846\u67b6\u521d\u59cb\u5316\u5728\u7528\u6237\u751f\u547d\u5468\u671f\u524d\uff0c\u6240\u4ee5 applicationInit \u7684\u65f6\u5019\uff0c\u4e0d\u8981\u901a\u8fc7 @Config \u88c5\u9970\u5668\u6ce8\u5165\u914d\u7f6e\uff0c\u800c\u662f\u8c03\u7528 configService \u53bb\u83b7\u53d6\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Framework } from '@midwayjs/decorator';\n\n@Framework()\nexport class CustomKoaFramework extends BaseFramework {\n\n   configure() {\n     /**\n     * \u8fd9\u91cc\u8fd4\u56de\u4f60\u7684\u914d\u7f6e\n     * \u8fd4\u56de\u7684\u503c\u4f1a\u8d4b\u503c\u5230 this.configurationOptions\uff0c\u5bf9\u63a5\u539f\u6765\u7684\u7528\u6237\u663e\u5f0f\u5165\u53c2\n     *\n     */\n     return this.configService.getConfiguration('xxxxxxx');\n   }\n\n  /**\n   * \u8fd9\u4e2a\u65b0\u589e\u7684\u65b9\u6cd5\uff0c\u7528\u6765\u5224\u65ad\u6846\u67b6\u662f\u5426\u52a0\u8f7d\n   * \u6709\u65f6\u5019\u7ec4\u4ef6\u4e2d\u5305\u62ec server \u7aef\uff08\u6846\u67b6\uff09\u548c client \u7aef\uff0c\u5c31\u9700\u8981\u5224\u65ad\n   *\n   */\n   isEnable(): boolean {\n     return this.configurationOptions.services?.length > 0;\n   }\n\n    // ...\n}\n")),(0,o.kt)("p",null,"\u8fd9\u6837\u5728\u5916\u9762\u4f7f\u7528\u65f6\u4e5f\u53ef\u4ee5\u5224\u65ad\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration,Inject } from '@midwayjs/decorator';\nimport { MidwayKoaFramework } from './framework';\n\n@Configuration({\n  namespace: 'koa',\n})\nexport class KoaConfiguration {\n  @Inject()\n  framework: MidwayKoaFramework;\n\n  async onReady() {}\n\n  async onServerReady() {\n    if (this.framework.isEnable()) {\n        await this.framework.run();\n    }\n  }\n}\n\n")))}u.isMDXComponent=!0}}]);