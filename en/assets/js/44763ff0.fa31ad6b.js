"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7864],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=d(n),c=a,k=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return n?r.createElement(k,o(o({ref:e},u),{},{components:n})):r.createElement(k,o({ref:e},u))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3267:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},p="Web \u8def\u7531\u8868",d={unversionedId:"router_table",id:"router_table",title:"Web \u8def\u7531\u8868",description:"\u4ece v2.8.0 \u5f00\u59cb\uff0cMidway \u63d0\u4f9b\u4e86\u5185\u7f6e\u7684\u8def\u7531\u8868\u80fd\u529b\uff0c\u6240\u6709\u7684 Web \u6846\u67b6\u90fd\u5c06\u4f7f\u7528\u8fd9\u4efd\u8def\u7531\u8868\u6ce8\u518c\u8def\u7531\u3002",source:"@site/docs/router_table.md",sourceDirName:".",slug:"/router_table",permalink:"/en/docs/router_table",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/docs/router_table.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"\u5185\u7f6e\u670d\u52a1",permalink:"/en/docs/built_in_service"},next:{title:"\u73b0\u6709\u88c5\u9970\u5668\u7d22\u5f15",permalink:"/en/docs/decorator_index"}},u=[{value:"\u521b\u5efa\u8def\u7531\u8868\u6536\u96c6\u5668",id:"\u521b\u5efa\u8def\u7531\u8868\u6536\u96c6\u5668",children:[],level:2},{value:"\u8def\u7531\u4fe1\u606f\u5b9a\u4e49",id:"\u8def\u7531\u4fe1\u606f\u5b9a\u4e49",children:[],level:2},{value:"\u8def\u7531\u4f18\u5148\u7ea7",id:"\u8def\u7531\u4f18\u5148\u7ea7",children:[],level:2},{value:"\u83b7\u53d6\u6241\u5e73\u5316\u8def\u7531\u5217\u8868",id:"\u83b7\u53d6\u6241\u5e73\u5316\u8def\u7531\u5217\u8868",children:[],level:2},{value:"\u83b7\u53d6 Router \u4fe1\u606f\u5217\u8868",id:"\u83b7\u53d6-router-\u4fe1\u606f\u5217\u8868",children:[],level:2},{value:"\u83b7\u53d6\u5e26\u5c42\u7ea7\u7684\u8def\u7531",id:"\u83b7\u53d6\u5e26\u5c42\u7ea7\u7684\u8def\u7531",children:[],level:2}],m={toc:u};function s(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"web-\u8def\u7531\u8868"},"Web \u8def\u7531\u8868"),(0,l.kt)("p",null,"\u4ece v2.8.0 \u5f00\u59cb\uff0cMidway \u63d0\u4f9b\u4e86\u5185\u7f6e\u7684\u8def\u7531\u8868\u80fd\u529b\uff0c\u6240\u6709\u7684 Web \u6846\u67b6\u90fd\u5c06\u4f7f\u7528\u8fd9\u4efd\u8def\u7531\u8868\u6ce8\u518c\u8def\u7531\u3002"),(0,l.kt)("p",null,"\u5728\u5e94\u7528\u542f\u52a8\uff0conReady \u751f\u547d\u5468\u671f\u4ee5\u53ca\u4e4b\u540e\u53ef\u7528\u3002"),(0,l.kt)("h2",{id:"\u521b\u5efa\u8def\u7531\u8868\u6536\u96c6\u5668"},"\u521b\u5efa\u8def\u7531\u8868\u6536\u96c6\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { WebRouterCollector } from '@midwayjs/core';\nconst collector = new WebRouterCollector();\n")),(0,l.kt)("h2",{id:"\u8def\u7531\u4fe1\u606f\u5b9a\u4e49"},"\u8def\u7531\u4fe1\u606f\u5b9a\u4e49"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u8def\u7531\u4fe1\u606f\u7531\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"RouterInfo")," \u5b9a\u4e49\u8868\u793a\uff0c\u5305\u542b\u4e00\u4e9b\u5c5e\u6027\u3002"),(0,l.kt)("p",null,"\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface RouterInfo {\n  /**\n   * router prefix\n   */\n  prefix: string;\n  /**\n   * router alias name\n   */\n  routerName: string;\n  /**\n   * router path, without prefix\n   */\n  url: string | RegExp;\n  /**\n   * request method for http, like get/post/delete\n   */\n  requestMethod: string;\n  /**\n   * invoke function method\n   */\n  method: string;\n  description: string;\n  summary: string;\n  /**\n   * router handler function key\uff0cfor IoC container load\n   */\n  handlerName: string;\n  /**\n   *  serverless func load key\n   */\n  funcHandlerName: string;\n  /**\n   * controller provideId\n   */\n  controllerId: string;\n  /**\n   * router middleware\n   */\n  middleware: any[];\n  /**\n   * controller middleware in this router\n   */\n  controllerMiddleware: any[];\n  /**\n   * request args metadata\n   */\n  requestMetadata: any[];\n  /**\n   * response data metadata\n   */\n  responseMetadata: any[];\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8def\u7531\u524d\u7f00\uff0c\u6bd4\u5982 / \u6216\u8005 /api\uff0c\u7528\u6237\u5199\u5728 @Controller \u88c5\u9970\u5668\u4e0a\u7684\u90e8\u5206")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"routerName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8def\u7531\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8def\u7531\u7684\u53bb\u9664\u8def\u7531\u524d\u7f00\u7684\u90e8\u5206\uff0c\u4e5f\u662f\u7528\u6237\u5199\u5728 @Get \u7b49\u88c5\u9970\u5668\u4e0a\u7684\u90e8\u5206")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"requestMethod"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"get/post/delete/put/all \u7b49")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u9645\u8c03\u7528\u7684\u7c7b\u4e0a\u7684\u65b9\u6cd5\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\uff0c\u8def\u7531\u88c5\u9970\u5668\u4e0a\u7684\u53c2\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"summary"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6458\u8981\uff0c\u8def\u7531\u88c5\u9970\u5668\u4e0a\u7684\u53c2\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"handlerName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b49\u4ef7\u4e8e controllerId.method")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"funcHandlerName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 @Func \u5199\u7684 handler \u540d\u5b57")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controllerId"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"controller \u7684\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\u7684 key\uff08providerId\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"middleware"),(0,l.kt)("td",{parentName:"tr",align:null},"string[]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8def\u7531\u4e2d\u95f4\u4ef6\u5b57\u7b26\u4e32\u6570\u7ec4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controllerMiddleware"),(0,l.kt)("td",{parentName:"tr",align:null},"string[]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a7\u5236\u5668\u4e2d\u95f4\u4ef6\u5b57\u7b26\u4e32\u6570\u7ec4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"requestMetadata"),(0,l.kt)("td",{parentName:"tr",align:null},"any[]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u53c2\u6570\u7684\u5143\u6570\u636e\uff0c@Query/@Body \u7b49\u5143\u6570\u636e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"responseMetadata"),(0,l.kt)("td",{parentName:"tr",align:null},"any[]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u54cd\u5e94\u53c2\u6570\u7684\u5143\u6570\u636e\uff0c@SetHeader/@ContentType \u7b49\u5143\u6570\u636e")))),(0,l.kt)("h2",{id:"\u8def\u7531\u4f18\u5148\u7ea7"},"\u8def\u7531\u4f18\u5148\u7ea7"),(0,l.kt)("p",null,"\u4ee5\u5f80\u6211\u4eec\u9700\u8981\u5173\u5fc3\u8def\u7531\u7684\u52a0\u8f7d\u987a\u5e8f\uff0c\u6bd4\u5982\u901a\u914d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"/*")," \u6bd4\u5982\u5728\u5b9e\u9645\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"/abc")," \u4e4b\u540e\uff0c\u5426\u5219\u4f1a\u52a0\u8f7d\u5230\u9519\u8bef\u7684\u8def\u7531\u3002\u5728\u65b0\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5bf9\u6b64\u79cd\u60c5\u51b5\u505a\u4e86\u81ea\u52a8\u6392\u5e8f\u3002"),(0,l.kt)("p",null,"\u89c4\u5219\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u7edd\u5bf9\u8def\u5f84\u89c4\u5219\u4f18\u5148\u7ea7\u6700\u9ad8\u5982 /ab/cb/e"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:2},(0,l.kt)("li",{parentName:"ol"},"\u661f\u53f7\u53ea\u80fd\u51fa\u73b0\u6700\u540e\u4e14\u5fc5\u987b\u5728/\u540e\u9762\uff0c\u5982 /ab/cb/**"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:3},(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u7edd\u5bf9\u8def\u5f84\u548c\u901a\u914d\u90fd\u80fd\u5339\u914d\u4e00\u4e2a\u8def\u5f84\u65f6\uff0c\u7edd\u5bf9\u89c4\u5219\u4f18\u5148\u7ea7\u9ad8"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:4},(0,l.kt)("li",{parentName:"ol"},"\u6709\u591a\u4e2a\u901a\u914d\u80fd\u5339\u914d\u4e00\u4e2a\u8def\u5f84\u65f6\uff0c\u6700\u957f\u7684\u89c4\u5219\u5339\u914d\uff0c\u5982 /ab/",(0,l.kt)("strong",{parentName:"li"}," \u548c /ab/cd/")," \u5728\u5339\u914d /ab/cd/f \u65f6\u547d\u4e2d /ab/cd/**"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:5},(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c / \u4e0e /",(0,l.kt)("em",{parentName:"li"}," \u90fd\u80fd\u5339\u914d / ,\u4f46 / \u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e /"))))),(0,l.kt)("p",null,"\u6b64\u89c4\u5219\u4e5f\u4e0e Serverless \u4e0b\u51fd\u6570\u7684\u8def\u7531\u89c4\u5219\u4fdd\u6301\u4e00\u81f4\u3002"),(0,l.kt)("p",null,"\u7b80\u5355\u7406\u89e3\u4e3a\uff0c\u201c\u660e\u786e\u7684\u8def\u7531\u4f18\u5148\u7ea7\u6700\u9ad8\uff0c\u957f\u7684\u8def\u7531\u4f18\u5148\u7ea7\u9ad8\uff0c\u901a\u914d\u7684\u4f18\u5148\u7ea7\u6700\u4f4e\u201d\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\uff0c\u6392\u5e8f\u5b8c\u7684\u4f18\u5148\u7ea7\u5982\u4e0b\uff08\u9ad8\u5230\u4f4e\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"/api/invoke/abc\n/api/invoke/*\n/api/abc\n/api/*\n/abc\n/*\n")),(0,l.kt)("h2",{id:"\u83b7\u53d6\u6241\u5e73\u5316\u8def\u7531\u5217\u8868"},"\u83b7\u53d6\u6241\u5e73\u5316\u8def\u7531\u5217\u8868"),(0,l.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u6240\u6709\u53ef\u6ce8\u518c\u5230 HTTP \u670d\u52a1\u7684\u8def\u7531\u5217\u8868\uff08\u5305\u62ec @Func/@Controller\uff0c\u4ee5\u53ca\u4e00\u5207\u6309\u7167\u6807\u51c6\u4fe1\u606f\u6ce8\u518c\u7684\u81ea\u5b9a\u4e49\u88c5\u9970\u5668\uff09\u3002"),(0,l.kt)("p",null,"\u4f1a\u6309\u7167\u4f18\u5148\u7ea7\u4ece\u9ad8\u5230\u4f4e\u81ea\u52a8\u6392\u5e8f\u3002"),(0,l.kt)("p",null,"\u5b9a\u4e49\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"async getFlattenRouterTable(): Promise<RouterInfo[]>\n")),(0,l.kt)("p",null,"\u83b7\u53d6\u8def\u7531\u8868 API\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const result = await collector.getFlattenRouterTable();\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'[\n  {\n    "prefix": "/",\n    "routerName": "",\n    "url": "/set_header",\n    "requestMethod": "get",\n    "method": "homeSet",\n    "description": "",\n    "summary": "",\n    "handlerName": "apiController.homeSet",\n    "funcHandlerName": "apiController.homeSet",\n    "controllerId": "apiController",\n    "middleware": [],\n    "controllerMiddleware": [],\n    "requestMetadata": [],\n    "responseMetadata": [\n      {\n        "type": "web:response_header",\n        "setHeaders": {\n          "ccc": "ddd"\n        }\n      },\n      {\n        "type": "web:response_header",\n        "setHeaders": {\n          "bbb": "aaa"\n        }\n      }\n    ],\n  },\n  {\n    "prefix": "/",\n    "routerName": "",\n    "url": "/ctx-body",\n    "requestMethod": "get",\n    "method": "getCtxBody",\n    "description": "",\n    "summary": "",\n    "handlerName": "apiController.getCtxBody",\n    "funcHandlerName": "apiController.getCtxBody",\n    "controllerId": "apiController",\n    "middleware": [],\n    "controllerMiddleware": [],\n    "requestMetadata": [],\n    "responseMetadata": [],\n  },\n    // ...\n]\n')),(0,l.kt)("h2",{id:"\u83b7\u53d6-router-\u4fe1\u606f\u5217\u8868"},"\u83b7\u53d6 Router \u4fe1\u606f\u5217\u8868"),(0,l.kt)("p",null,"\u5728 Midway \u4e2d\uff0c\u6bcf\u4e2a Controller \u5bf9\u5e94\u4e00\u4e2a Router \u5bf9\u8c61\uff0c\u6bcf\u4e2a Router \u90fd\u4f1a\u6709\u4e00\u4e2a\u8def\u7531\u524d\u7f00\uff08prefix\uff09\uff0c\u5728\u6b64\u4e4b\u4e2d\u7684\u6240\u6709\u8def\u7531\u90fd\u4f1a\u6309\u7167\u4e0a\u9762\u7684\u89c4\u5219\u8fdb\u884c\u6392\u5e8f\u3002"),(0,l.kt)("p",null,"Router \u672c\u8eab\u4e5f\u4f1a\u6309\u7167 prefix \u8fdb\u884c\u6392\u5e8f\u3002"),(0,l.kt)("p",null,"\u5b9a\u4e49\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface RouterPriority {\n  prefix: string;\n  priority: number;\n  middleware: any[];\n  routerOptions: any;\n  controllerId: string;\n}\n\nasync getRoutePriorityList(): Promise<RouterPriority[]>\n")),(0,l.kt)("p",null,"Router \u7684\u6570\u636e\u76f8\u5bf9\u7b80\u5355\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8def\u7531\u524d\u7f00\uff0c\u6bd4\u5982 / \u6216\u8005 /api\uff0c\u7528\u6237\u5199\u5728 @Controller \u88c5\u9970\u5668\u4e0a\u7684\u90e8\u5206")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"priority"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Router \u7684\u4f18\u5148\u7ea7\uff0c@Priority \u88c5\u9970\u5668\u586b\u5199\u7684\u503c\uff0c/ \u6839 Router \u9ed8\u8ba4\u4f18\u5148\u7ea7\u6700\u4f4e\uff0c\u4e3a -999")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"middleware"),(0,l.kt)("td",{parentName:"tr",align:null},"string[]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a7\u5236\u5668\u4e2d\u95f4\u4ef6\u5b57\u7b26\u4e32\u6570\u7ec4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controllerId"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"controller \u7684\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\u7684 key\uff08providerId\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"routerOptions"),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null},"@Controller \u88c5\u9970\u5668\u7684 options")))),(0,l.kt)("p",null,"\u83b7\u53d6\u8def\u7531\u8868 API\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const list = await collector.getRoutePriorityList();\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'[\n  {\n    "prefix": "/case",\n    "priority": 0,\n    "middleware": [],\n    "routerOptions": {\n      "middleware": [],\n      "sensitive": true\n    },\n    "controllerId": "caseController"\n  },\n  {\n    "prefix": "/user",\n    "priority": 0,\n    "middleware": [],\n    "routerOptions": {\n      "middleware": [],\n      "sensitive": true\n    },\n    "controllerId": "userController"\n  },\n  {\n    "prefix": "/",\n    "priority": -999,\n    "middleware": [],\n    "routerOptions": {\n      "middleware": [],\n      "sensitive": true\n    },\n    "controllerId": "apiController"\n  }\n]\n')),(0,l.kt)("h2",{id:"\u83b7\u53d6\u5e26\u5c42\u7ea7\u7684\u8def\u7531"},"\u83b7\u53d6\u5e26\u5c42\u7ea7\u7684\u8def\u7531"),(0,l.kt)("p",null,"\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u9700\u8981\u62ff\u5230\u5e26\u5c42\u7ea7\u7684\u8def\u7531\uff0c\u5305\u62ec\u54ea\u4e9b\u8def\u7531\u5728\u54ea\u4e2a\u63a7\u5236\u5668\uff08Controller\uff09\u4e0b\uff0c\u8fd9\u6837\u80fd\u66f4\u597d\u7684\u521b\u5efa\u8def\u7531\u3002"),(0,l.kt)("p",null,"Midway \u4e5f\u63d0\u4f9b\u4e86\u83b7\u53d6\u5e26\u5c42\u7ea7\u7684\u8def\u7531\u8868\u65b9\u6cd5\u3002\u5c42\u7ea7\u5185\u4f1a\u6309\u7167\u4f18\u5148\u7ea7\u4ece\u9ad8\u5230\u4f4e\u81ea\u52a8\u6392\u5e8f\u3002"),(0,l.kt)("p",null,"\u5b9a\u4e49\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"async getRouterTable(): Promise<Map<string, RouterInfo[]>>\n")),(0,l.kt)("p",null,"\u83b7\u53d6\u5c42\u7ea7\u8def\u7531\u8868 API\uff0c\u8fd4\u56de\u7684\u662f\u4e2a Map\uff0ckey \u4e3a\u63a7\u5236\u5668\u7684\u8def\u7531\u524d\u7f00 prefix \u5b57\u7b26\u4e32\u3002\u672a\u660e\u786e\u5199\u660e\u8def\u7531\u524d\u7f00\u7684\uff08\u6bd4\u5982\u51fd\u6570\u6216\u8005\u5176\u4ed6\u573a\u666f\uff09\uff0c\u90fd\u5c06\u5f52\u4e3a / \u8def\u7531\u524d\u7f00\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const result = await collector.getRouterTable();\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"Map(3) {\n  '/' => [\n    {\n      prefix: '/',\n      routerName: '',\n      url: '/set_header',\n      requestMethod: 'get',\n      method: 'homeSet',\n      description: '',\n      summary: '',\n      handlerName: 'apiController.homeSet',\n      funcHandlerName: 'apiController.homeSet',\n      controllerId: 'apiController',\n      middleware: [],\n      controllerMiddleware: [],\n      requestMetadata: [],\n      responseMetadata: [Array],\n    },\n    {\n      prefix: '/',\n      routerName: '',\n      url: '/ctx-body',\n      requestMethod: 'get',\n      method: 'getCtxBody',\n      description: '',\n      summary: '',\n      handlerName: 'apiController.getCtxBody',\n      funcHandlerName: 'apiController.getCtxBody',\n      controllerId: 'apiController',\n      middleware: [],\n      controllerMiddleware: [],\n      requestMetadata: [],\n      responseMetadata: [],\n    },\n    // ...\n  ]\n}\n")))}s.isMDXComponent=!0}}]);