"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1993],{3905:function(n,e,t){t.d(e,{Zo:function(){return m},kt:function(){return u}});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var p=a.createContext({}),c=function(n){var e=a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},m=function(n){var e=c(n.components);return a.createElement(p.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,p=n.parentName,m=l(n,["components","mdxType","originalType","parentName"]),s=c(t),u=r,k=s["".concat(p,".").concat(u)]||s[u]||d[u]||i;return t?a.createElement(k,o(o({ref:e},m),{},{components:t})):a.createElement(k,o({ref:e},m))}));function u(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=n,l.mdxType="string"==typeof n?n:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9043:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return s}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={},p="\u751f\u547d\u5468\u671f",c={unversionedId:"lifecycle",id:"lifecycle",title:"\u751f\u547d\u5468\u671f",description:"\u5728\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5e0c\u671b\u5728\u5e94\u7528\u542f\u52a8\u7684\u65f6\u5019\u505a\u4e00\u4e9b\u521d\u59cb\u5316\u3001\u6216\u8005\u5176\u4ed6\u4e00\u4e9b\u9884\u5904\u7406\u7684\u4e8b\u60c5\uff0c\u6bd4\u5982\u521b\u5efa\u6570\u636e\u5e93\u8fde\u63a5\u3001\u9884\u751f\u6210\u4e00\u4e9b\u914d\u7f6e\uff0c\u800c\u4e0d\u662f\u5728\u8bf7\u6c42\u54cd\u5e94\u65f6\u53bb\u5904\u7406\u3002",source:"@site/docs/lifecycle.md",sourceDirName:".",slug:"/lifecycle",permalink:"/docs/lifecycle",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/docs/lifecycle.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"\u591a\u73af\u5883\u914d\u7f6e",permalink:"/docs/env_config"},next:{title:"\u65e5\u5fd7",permalink:"/docs/logger"}},m=[{value:"\u9879\u76ee\u751f\u547d\u5468\u671f",id:"\u9879\u76ee\u751f\u547d\u5468\u671f",children:[{value:"onConfigLoad",id:"onconfigload",children:[],level:3},{value:"onReady",id:"onready",children:[],level:3},{value:"onServerReady",id:"onserverready",children:[],level:3},{value:"onStop",id:"onstop",children:[],level:3}],level:2},{value:"\u5168\u5c40\u5bf9\u8c61\u751f\u547d\u5468\u671f",id:"\u5168\u5c40\u5bf9\u8c61\u751f\u547d\u5468\u671f",children:[{value:"onBeforeObjectCreated",id:"onbeforeobjectcreated",children:[],level:3},{value:"onObjectCreated",id:"onobjectcreated",children:[],level:3},{value:"onObjectInit",id:"onobjectinit",children:[],level:3},{value:"onBeforeObjectDestroy",id:"onbeforeobjectdestroy",children:[],level:3}],level:2}],d={toc:m};function s(n){var e=n.components,t=(0,r.Z)(n,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u751f\u547d\u5468\u671f"},"\u751f\u547d\u5468\u671f"),(0,i.kt)("p",null,"\u5728\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5e0c\u671b\u5728\u5e94\u7528\u542f\u52a8\u7684\u65f6\u5019\u505a\u4e00\u4e9b\u521d\u59cb\u5316\u3001\u6216\u8005\u5176\u4ed6\u4e00\u4e9b\u9884\u5904\u7406\u7684\u4e8b\u60c5\uff0c\u6bd4\u5982\u521b\u5efa\u6570\u636e\u5e93\u8fde\u63a5\u3001\u9884\u751f\u6210\u4e00\u4e9b\u914d\u7f6e\uff0c\u800c\u4e0d\u662f\u5728\u8bf7\u6c42\u54cd\u5e94\u65f6\u53bb\u5904\u7406\u3002"),(0,i.kt)("h2",{id:"\u9879\u76ee\u751f\u547d\u5468\u671f"},"\u9879\u76ee\u751f\u547d\u5468\u671f"),(0,i.kt)("p",null,"\u6846\u67b6\u63d0\u4f9b\u4e86\u8fd9\u4e9b\u751f\u547d\u5468\u671f\u51fd\u6570\u4f9b\u5f00\u53d1\u4eba\u5458\u5904\u7406\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u6587\u4ef6\u52a0\u8f7d\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u8fd9\u91cc\u53bb\u4fee\u6539\u914d\u7f6e\uff08",(0,i.kt)("inlineCode",{parentName:"li"},"onConfigLoad"),"\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\u51c6\u5907\u5b8c\u6bd5\uff0c\u53ef\u4ee5\u5728\u8fd9\u4e2a\u9636\u6bb5\u505a\u5927\u90e8\u5206\u7684\u4e8b\u60c5\uff08",(0,i.kt)("inlineCode",{parentName:"li"},"onReady"),"\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u542f\u52a8\u5b8c\u6210\uff0c\u53ef\u4ee5\u62ff\u5230 server\uff08",(0,i.kt)("inlineCode",{parentName:"li"},"onServerReady"),"\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u5e94\u7528\u5373\u5c06\u5173\u95ed\uff0c\u5728\u8fd9\u91cc\u6e05\u7406\u8d44\u6e90\uff08",(0,i.kt)("inlineCode",{parentName:"li"},"onStop"),"\uff09")),(0,i.kt)("p",null,"Midway \u7684\u751f\u547d\u5468\u671f\u662f\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/configuration.ts")," \u6587\u4ef6\uff0c\u5b9e\u73b0 ILifeCycle \u63a5\u53e3\uff0c\u5c31\u53ef\u4ee5\u5728\u9879\u76ee\u542f\u52a8\u65f6\u5019\u81ea\u52a8\u52a0\u8f7d\u3002"),(0,i.kt)("p",null,"\u63a5\u53e3\u5b9a\u4e49\u5982\u4e0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ILifeCycle {\n  /**\n  * \u5728\u5e94\u7528\u914d\u7f6e\u52a0\u8f7d\u540e\u6267\u884c\n  */\n  onConfigLoad?(container: IMidwayContainer, app: IMidwayApplication): Promise<void>;\n\n  /**\n   * \u5728\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668 ready \u7684\u65f6\u5019\u6267\u884c\n   */\n  onReady(container: IMidwayContainer, app: IMidwayApplication): Promise<void>;\n \n  /**\n   * \u5728\u5e94\u7528\u670d\u52a1\u542f\u52a8\u540e\u6267\u884c\n   */\n  onServerReady?(container: IMidwayContainer, app: IMidwayApplication): Promise<void>;\n\n   /**\n   * \u5728\u5e94\u7528\u505c\u6b62\u7684\u65f6\u5019\u6267\u884c\n   */\n  onStop?(container: IMidwayContainer, app: IMidwayApplication): Promise<void>;\n}\n")),(0,i.kt)("h3",{id:"onconfigload"},"onConfigLoad"),(0,i.kt)("p",null,"\u4e00\u822c\u7528\u4e8e\u4fee\u6539\u9879\u76ee\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport { ILifeCycle, IMidwayContainer } from '@midwayjs/core';\n\n@Configuration()\nexport class ContainerConfiguration implements ILifeCycle {\n\n  async onConfigLoad(): Promise<void> {\n    // \u76f4\u63a5\u8fd4\u56de\u6570\u636e\uff0c\u4f1a\u81ea\u52a8\u5408\u5e76\u5230\u914d\u7f6e\u4e2d\n    return {\n      test: 1\n    }\n  }\n}\n")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"@Config")," \u62ff\u5230\u7684\u914d\u7f6e\u5c31\u5305\u542b\u4e86\u8fd4\u56de\u7684\u6570\u636e\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"./env_config#%E5%BC%82%E6%AD%A5%E5%88%9D%E5%A7%8B%E5%8C%96%E9%85%8D%E7%BD%AE"},"\u5f02\u6b65\u521d\u59cb\u5316\u914d\u7f6e")," \u7ae0\u8282\u3002"),(0,i.kt)("h3",{id:"onready"},"onReady"),(0,i.kt)("p",null,"onReady \u662f\u4e00\u4e2a\u5927\u90e8\u5206\u573a\u666f\u4e0b\u90fd\u4f1a\u4f7f\u7528\u5230\u7684\u751f\u547d\u5468\u671f\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6ce8\u610f\uff0c\u8fd9\u91cc\u7684 ready \u6307\u7684\u662f\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668 ready\uff0c\u5e76\u4e0d\u662f\u5e94\u7528 ready\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u5bf9\u5e94\u7528\u505a\u4efb\u610f\u6269\u5c55\uff0c\u6bd4\u5982\u6dfb\u52a0\u4e2d\u95f4\u4ef6\uff0c\u8fde\u63a5\u6570\u636e\u5e93\u7b49\u7b49\u3002"))),(0,i.kt)("p",null,"\u6211\u4eec\u9700\u8981\u5728\u521d\u59cb\u5316\u65f6\u63d0\u524d\u8fde\u63a5\u4e00\u4e2a\u6570\u636e\u5e93\uff0c\u7531\u4e8e\u5728\u7c7b\u4e2d\uff0c\u6240\u4ee5\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"@Inject"),"  \u88c5\u9970\u5668\u6ce8\u5165 db \u8fd9\u6837\u4e00\u4e2a\u6570\u636e\u5e93\u7684\u8fde\u63a5\u5de5\u5177\u7c7b\uff0c\u8fd9\u4e2a\u5b9e\u4f8b\u5305\u542b connect \u548c close \u4e24\u4e2a\u51fd\u6570\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport { ILifeCycle, IMidwayContainer } from '@midwayjs/core';\n\n@Configuration()\nexport class ContainerConfiguration implements ILifeCycle {\n  @Inject()\n  db: any;\n\n  async onReady(container: IMidwayContainer): Promise<void> {\n    // \u5efa\u7acb\u6570\u636e\u5e93\u8fde\u63a5\n    await this.db.connect();\n  }\n  \n  async onStop(): Promise<void> {\n    // \u5173\u95ed\u6570\u636e\u5e93\u8fde\u63a5\n    await this.db.close();\n  }\n}\n")),(0,i.kt)("p",null,"\u8fd9\u6837\uff0c\u6211\u4eec\u5c31\u80fd\u591f\u5728\u5e94\u7528\u542f\u52a8\u65f6\u5efa\u7acb\u6570\u636e\u5e93\u8fde\u63a5\uff0c\u800c\u4e0d\u662f\u5728\u8bf7\u6c42\u54cd\u5e94\u65f6\u518d\u53bb\u521b\u5efa\u3002\u540c\u65f6\uff0c\u5728\u5e94\u7528\u505c\u6b62\u65f6\uff0c\u4e5f\u53ef\u4ee5\u4f18\u96c5\u7684\u5173\u95ed\u6570\u636e\u5e93\u8fde\u63a5\u3002"),(0,i.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u901a\u8fc7\u8fd9\u4e2a\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5bf9\u9ed8\u8ba4\u6ce8\u5165\u7684\u5bf9\u8c61\u505a\u6269\u5145\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport { ILifeCycle, IMidwayContainer } from '@midwayjs/core';\nimport * as sequelize from 'sequelize';\n\n@Configuration()\nexport class ContainerConfiguration implements ILifeCycle {\n  \n  async onReady(container: IMidwayContainer): Promise<void> {\n    // \u4e09\u65b9\u5305\u5bf9\u8c61\n    container.registerObject('sequelize', sequelize);\n  }\n}\n")),(0,i.kt)("p",null,"\u5728\u5176\u4ed6\u7684\u7c7b\u4e2d\u53ef\u4ee5\u76f4\u63a5\u6ce8\u5165\u4f7f\u7528\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export class IndexHandler {\n\n  @Inject()\n  sequelize;\n  \n  async handler() {\n    console.log(this.sequelize);\n  }\n}\n")),(0,i.kt)("h3",{id:"onserverready"},"onServerReady"),(0,i.kt)("p",null,"\u5f53\u8981\u83b7\u53d6\u6846\u67b6\u7684\u670d\u52a1\u5bf9\u8c61\uff0c\u7aef\u53e3\u7b49\u4fe1\u606f\u65f6\uff0c\u5c31\u9700\u8981\u7528\u5230\u8fd9\u4e2a\u751f\u547d\u5468\u671f\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," \u4e3a\u4f8b\uff0c\u5728\u542f\u52a8\u65f6\u83b7\u53d6\u5b83\u7684 Server\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport { ILifeCycle, IMidwayContainer } from '@midwayjs/core';\nimport * as koa from '@midwayjs/koa';\n\n@Configuration({\n  imports: [koa]\n})\nexport class ContainerConfiguration implements ILifeCycle {\n  \n  async onServerReady(container: IMidwayContainer): Promise<void> {\n    // \u83b7\u53d6\u5230 koa \u4e2d\u66b4\u9732\u7684 Framework\n    const framework = container.getAsync(koa.Framework);\n    const server = framework.getServer();\n    // ...\n    \n  }\n}\n")),(0,i.kt)("h3",{id:"onstop"},"onStop"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u8fd9\u4e2a\u9636\u6bb5\u6e05\u7406\u4e00\u4e9b\u8d44\u6e90\uff0c\u6bd4\u5982\u5173\u95ed\u8fde\u63a5\u7b49\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport { ILifeCycle, IMidwayContainer } from '@midwayjs/core';\nimport * as koa from '@midwayjs/koa';\n\n@Configuration({\n  imports: [koa]\n})\nexport class ContainerConfiguration implements ILifeCycle {\n  @Inject()\n  db: any;\n\n  async onReady(container: IMidwayContainer): Promise<void> {\n    // \u5efa\u7acb\u6570\u636e\u5e93\u8fde\u63a5\n    await this.db.connect();\n  }\n  \n  async onStop(): Promise<void> {\n    // \u5173\u95ed\u6570\u636e\u5e93\u8fde\u63a5\n    await this.db.close();\n  }\n}\n")),(0,i.kt)("h2",{id:"\u5168\u5c40\u5bf9\u8c61\u751f\u547d\u5468\u671f"},"\u5168\u5c40\u5bf9\u8c61\u751f\u547d\u5468\u671f"),(0,i.kt)("p",null,"\u6240\u8c13\u5bf9\u8c61\u751f\u547d\u5468\u671f\uff0c\u6307\u7684\u662f\u6bcf\u4e2a\u5bf9\u8c61\uff0c\u5728\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\u4e2d\u521b\u5efa\uff0c\u9500\u6bc1\u7684\u4e8b\u4ef6\u3002\u6211\u4eec\u901a\u8fc7\u8fd9\u4e9b\u751f\u547d\u5468\u671f\uff0c\u53ef\u4ee5\u5728\u5bf9\u8c61\u521b\u5efa\u540e\uff0c\u9500\u6bc1\u65f6\u505a\u4e00\u4e9b\u64cd\u4f5c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface IObjectLifeCycle {\n  onBeforeObjectCreated(/**...**/);\n  onObjectCreated(/**...**/);\n  onObjectInit(/**...**/);\n  onBeforeObjectDestroy(/**...**/);\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ILifeCycle")," \u5b9a\u4e49\u4e2d\u5df2\u7ecf\u5305\u542b\u4e86\u8fd9\u4e9b\u9636\u6bb5\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6ce8\u610f\uff0c\u5bf9\u8c61\u751f\u547d\u5468\u671f API \u4f1a\u5f71\u54cd\u6574\u4e2a\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\u4ee5\u53ca\u4e1a\u52a1\u7684\u4f7f\u7528\uff0c\u8bf7\u8c28\u614e\u64cd\u4f5c\u3002"))),(0,i.kt)("h3",{id:"onbeforeobjectcreated"},"onBeforeObjectCreated"),(0,i.kt)("p",null,"\u5728\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u521b\u5efa\u524d\u6267\u884c\uff0c\u6846\u67b6\u5185\u90e8\u7684\u67d0\u4e9b\u5bf9\u8c61\u7531\u4e8e\u5df2\u7ecf\u521d\u59cb\u5316\uff0c\u65e0\u6cd5\u88ab\u62e6\u622a\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport { ILifeCycle, IMidwayContainer, ObjectBeforeCreatedOptions } from '@midwayjs/core';\n\n@Configuration()\nexport class ContainerConfiguration implements ILifeCycle {\n\n  async onBeforeObjectCreated(Clzz: new (...args), options: ObjectBeforeCreatedOptions): Promise<void> {\n    // ...\n  }\n}\n")),(0,i.kt)("p",null,"\u8fd9\u91cc\u5165\u53c2\u6709\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Clzz")," \u5f53\u524d\u5f85\u521b\u5efa\u5bf9\u8c61\u7684\u539f\u578b\u7c7b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," \u4e00\u4e9b\u53c2\u6570")),(0,i.kt)("p",null,"\u53c2\u6570\u5982\u4e0b:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"options.context"),(0,i.kt)("td",{parentName:"tr",align:null},"IMidwayContainer"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\u672c\u8eab")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"options.definition"),(0,i.kt)("td",{parentName:"tr",align:null},"IObjectDefinition"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8c61\u5b9a\u4e49")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"options.constructorArgs"),(0,i.kt)("td",{parentName:"tr",align:null},"any[]"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6784\u9020\u5668\u5165\u53c2")))),(0,i.kt)("h3",{id:"onobjectcreated"},"onObjectCreated"),(0,i.kt)("p",null,"\u5728\u5bf9\u8c61\u5b9e\u4f8b\u521b\u5efa\u540e\u6267\u884c\uff0c\u8fd9\u4e2a\u9636\u6bb5\u53ef\u4ee5\u66ff\u6362\u521b\u5efa\u7684\u5bf9\u8c61\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport { ILifeCycle, IMidwayContainer, ObjectCreatedOptions } from '@midwayjs/core';\n\n@Configuration()\nexport class ContainerConfiguration implements ILifeCycle {\n\n  async onObjectCreated(ins: any, options: ObjectCreatedOptions): Promise<void> {\n    // ...\n  }\n}\n")),(0,i.kt)("p",null,"\u8fd9\u91cc\u5165\u53c2\u6709\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ins")," \u5f53\u524d\u901a\u8fc7\u6784\u5efa\u5668\u521b\u51fa\u6765\u7684\u5bf9\u8c61"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," \u4e00\u4e9b\u53c2\u6570")),(0,i.kt)("p",null,"\u53c2\u6570\u5982\u4e0b:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"options.context"),(0,i.kt)("td",{parentName:"tr",align:null},"IMidwayContainer"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\u672c\u8eab")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"options.definition"),(0,i.kt)("td",{parentName:"tr",align:null},"IObjectDefinition"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8c61\u5b9a\u4e49")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"options.replaceCallback"),(0,i.kt)("td",{parentName:"tr",align:null},"(ins: any) => void"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8c61\u66ff\u6362\u7684\u56de\u8c03\u65b9\u6cd5")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a\u52a8\u6001\u6dfb\u52a0\u5c5e\u6027")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport { ILifeCycle, IMidwayContainer, ObjectInitOptions } from '@midwayjs/core';\n\n@Configuration()\nexport class ContainerConfiguration implements ILifeCycle {\n\n  async onObjectCreated(ins: any, options: ObjectInitOptions): Promise<void> {\n    // \u6bcf\u4e2a\u521b\u5efa\u7684\u5bf9\u8c61\u90fd\u4f1a\u6dfb\u52a0\u4e00\u4e2a _name \u7684\u5c5e\u6027\n    ins._name = 'xxxx';\n    // ...\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a\u66ff\u6362\u5bf9\u8c61")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport { ILifeCycle, IMidwayContainer, ObjectInitOptions } from '@midwayjs/core';\n\n@Configuration()\nexport class ContainerConfiguration implements ILifeCycle {\n\n  async onObjectCreated(ins: any, options: ObjectInitOptions): Promise<void> {\n    // \u4e4b\u540e\u6bcf\u4e2a\u521b\u5efa\u7684\u5bf9\u8c61\u90fd\u4f1a\u88ab\u66ff\u6362\u4e3a { bbb: 'aaa' }\n    options.replaceCallback({\n      bbb: 'aaa'\n    });\n\n    // ...\n  }\n}\n")),(0,i.kt)("h3",{id:"onobjectinit"},"onObjectInit"),(0,i.kt)("p",null,"\u5728\u5bf9\u8c61\u5b9e\u4f8b\u521b\u5efa\u540e\u6267\u884c\u5f02\u6b65\u521d\u59cb\u5316\u65b9\u6cd5\u540e\u6267\u884c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport { ILifeCycle, IMidwayContainer, ObjectInitOptions } from '@midwayjs/core';\n\n@Configuration()\nexport class ContainerConfiguration implements ILifeCycle {\n\n  async onObjectInit(ins: any, options: ObjectInitOptions): Promise<void> {\n    // ...\n  }\n}\n")),(0,i.kt)("p",null,"\u8fd9\u91cc\u5165\u53c2\u6709\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ins")," \u5f53\u524d\u901a\u8fc7\u6784\u5efa\u5668\u521b\u51fa\u6765\u7684\u5bf9\u8c61"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," \u4e00\u4e9b\u53c2\u6570")),(0,i.kt)("p",null,"\u53c2\u6570\u5982\u4e0b:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"options.context"),(0,i.kt)("td",{parentName:"tr",align:null},"IMidwayContainer"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\u672c\u8eab")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"options.definition"),(0,i.kt)("td",{parentName:"tr",align:null},"IObjectDefinition"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8c61\u5b9a\u4e49")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728\u8fd9\u4e2a\u9636\u6bb5\u4e5f\u53ef\u4ee5\u52a8\u6001\u7ed9\u5bf9\u8c61\u9644\u52a0\u5c5e\u6027\uff0c\u65b9\u6cd5\u7b49\uff0c\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"onObjectCreated")," \u7684\u533a\u522b\u662f\uff0c\u8fd9\u4e2a\u9636\u6bb5\u662f\u5728\u521d\u59cb\u5316\u65b9\u6cd5\u6267\u884c\u4e4b\u540e\u3002"))),(0,i.kt)("h3",{id:"onbeforeobjectdestroy"},"onBeforeObjectDestroy"),(0,i.kt)("p",null,"\u5728\u5bf9\u8c61\u5b9e\u4f8b\u9500\u6bc1\u524d\u6267\u884c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport { ILifeCycle, IMidwayContainer, ObjectBeforeDestroyOptions } from '@midwayjs/core';\n\n@Configuration()\nexport class ContainerConfiguration implements ILifeCycle {\n\n  async onBeforeObjectDestroy(ins: any, options: ObjectBeforeDestroyOptions): Promise<void> {\n    // ...\n  }\n}\n")),(0,i.kt)("p",null,"\u8fd9\u91cc\u5165\u53c2\u6709\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ins")," \u5f53\u524d\u901a\u8fc7\u6784\u5efa\u5668\u521b\u51fa\u6765\u7684\u5bf9\u8c61"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," \u4e00\u4e9b\u53c2\u6570")),(0,i.kt)("p",null,"\u53c2\u6570\u5982\u4e0b:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"options.context"),(0,i.kt)("td",{parentName:"tr",align:null},"IMidwayContainer"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\u672c\u8eab")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"options.definition"),(0,i.kt)("td",{parentName:"tr",align:null},"IObjectDefinition"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8c61\u5b9a\u4e49")))))}s.isMDXComponent=!0}}]);