"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8210],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9840:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},p="Express",s={unversionedId:"extensions/express",id:"extensions/express",title:"Express",description:"\u672c\u7ae0\u8282\u5185\u5bb9\uff0c\u4e3b\u8981\u4ecb\u7ecd\u5728 Midway \u4e2d\u5982\u4f55\u4f7f\u7528 Express \u4f5c\u4e3a\u4e0a\u5c42\u6846\u67b6\uff0c\u5e76\u4f7f\u7528\u81ea\u8eab\u7684\u80fd\u529b\u3002",source:"@site/docs/extensions/express.md",sourceDirName:"extensions",slug:"/extensions/express",permalink:"/en/docs/extensions/express",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/docs/extensions/express.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"EggJS",permalink:"/en/docs/extensions/egg"},next:{title:"\u8bf7\u6c42\u5b89\u5168",permalink:"/en/docs/extensions/security"}},d=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",children:[],level:2},{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",children:[],level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",children:[],level:2},{value:"\u63a7\u5236\u5668\uff08Controller\uff09",id:"\u63a7\u5236\u5668controller",children:[],level:2},{value:"\u7f16\u5199 Web \u4e2d\u95f4\u4ef6",id:"\u7f16\u5199-web-\u4e2d\u95f4\u4ef6",children:[],level:2},{value:"\u8def\u7531\u4e2d\u95f4\u4ef6",id:"\u8def\u7531\u4e2d\u95f4\u4ef6",children:[],level:2},{value:"\u5168\u5c40\u4e2d\u95f4\u4ef6",id:"\u5168\u5c40\u4e2d\u95f4\u4ef6",children:[],level:2},{value:"\u6846\u67b6\u542f\u52a8\u53c2\u6570",id:"\u6846\u67b6\u542f\u52a8\u53c2\u6570",children:[],level:2}],m={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"express"},"Express"),(0,l.kt)("p",null,"\u672c\u7ae0\u8282\u5185\u5bb9\uff0c\u4e3b\u8981\u4ecb\u7ecd\u5728 Midway \u4e2d\u5982\u4f55\u4f7f\u7528 Express \u4f5c\u4e3a\u4e0a\u5c42\u6846\u67b6\uff0c\u5e76\u4f7f\u7528\u81ea\u8eab\u7684\u80fd\u529b\u3002"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Express \u7684\u8c03\u6574\u6682\u672a\u5b8c\u6210\uff0c\u8bf7\u7b49\u5f85\u5b8c\u6210\u540e\u518d\u4f7f\u7528\u3002"))),(0,l.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u4f5c\u4e3a\u4e3b\u6846\u67b6\u72ec\u7acb\u4f7f\u7528"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u81ea\u5b9a\u4e49\u65e5\u5fd7"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u72ec\u7acb\u6dfb\u52a0\u4e2d\u95f4\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,l.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/express --save\n")),(0,l.kt)("h2",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6211\u4eec\u7684\u811a\u624b\u67b6\u6765\u521b\u5efa\u4e00\u4e2a\u6a21\u7248\u9879\u76ee\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm -v\n\n# \u5982\u679c\u662f npm v6\n$ npm init midway --type=express hello_express\n\n# \u5982\u679c\u662f npm v7\n$ npm init midway -- --type=express hello_express\n")),(0,l.kt)("p",null,"\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd hello_express  // \u8fdb\u5165\u9879\u76ee\u8def\u5f84\n$ npm run dev       // \u672c\u5730\u8fd0\u884c\n")),(0,l.kt)("p",null,"\u9488\u5bf9 Express\uff0cMidway \u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"@midwayjs/express")," \u5305\u8fdb\u884c\u4e86\u9002\u914d\uff0c\u5728\u5176\u4e2d\u63d0\u4f9b\u4e86 Midway \u7279\u6709\u7684\u4f9d\u8d56\u6ce8\u5165\u3001\u5207\u9762\u7b49\u80fd\u529b\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u5305\u5217\u4e3e\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    "@midwayjs/express": "^2.3.11",\n    "@midwayjs/decorator": "^2.3.11"\n  },\n  "devDependencies": {\n    "@midwayjs/mock": "^2.3.11",\n  },\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"@midwayjs/express"),(0,l.kt)("th",{parentName:"tr",align:null},"Midway \u9488\u5bf9 express \u7684\u9002\u914d\u5c42"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@midwayjs/decorator"),(0,l.kt)("td",{parentName:"tr",align:null},"Midway \u7cfb\u5217\u901a\u7528\u7684\u88c5\u9970\u5668\u5305")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@midwayjs/mock"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u5f00\u53d1\u5de5\u5177\u5305")))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u6211\u4eec\u4f7f\u7528\u7684 Express \u7248\u672c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"v4")," \u3002"))),(0,l.kt)("h2",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 controller                                              # controller\u63a5\u53e3\u7684\u5730\u65b9\n\u2502   \u251c\u2500\u2500 service                                                     # service\u903b\u8f91\u5904\u7406\u7684\u5730\u65b9\n|   \u2514\u2500\u2500 configuration.ts                                    # \u5165\u53e3\u53ca\u751f\u547d\u5468\u671f\u914d\u7f6e\u3001\u7ec4\u4ef6\u7ba1\u7406\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,l.kt)("h2",{id:"\u63a7\u5236\u5668controller"},"\u63a7\u5236\u5668\uff08Controller\uff09"),(0,l.kt)("p",null,"\u6574\u4e2a\u8bf7\u6c42\u63a7\u5236\u5668\u7684\u5199\u6cd5\u548c Midway \u9002\u914d\u5176\u4ed6\u6846\u67b6\u7684\u7c7b\u4f3c\u3002\u4e3a\u4e86\u548c\u5176\u4ed6\u573a\u666f\u7684\u6846\u67b6\u5199\u6cd5\u4e00\u81f4\uff0c\u5728\u8bf7\u6c42\u7684\u65f6\u5019\uff0cMidway \u5c06 Express \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"req")," \u5373\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"ctx")," \u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get, Provide, Query } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/express';\nimport { Request, Response } from 'express';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  ctx: Context;\n\n  @Get('/')\n  async home(@Query() id) {\n    console.log(id);                        // this.ctx.req.query.id === id\n    return 'hello world'                // \u7b80\u5355\u8fd4\u56de\uff0c\u7b49\u4ef7\u4e8e res.send('hello world');\n  }\n}\n")),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u989d\u5916\u6ce8\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"req")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"res")," \u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get, Provide, Query } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/express';\nimport { Request, Response } from 'express';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  ctx: Context;   // \u5373\u4e3a req\n\n  @Inject()\n  req: Request;\n\n  @Inject()\n  res: Response;\n\n  @Get('/')\n  async home(@Query() id) {\n    // this.req.query.id === id\n  }\n}\n")),(0,l.kt)("h2",{id:"\u7f16\u5199-web-\u4e2d\u95f4\u4ef6"},"\u7f16\u5199 Web \u4e2d\u95f4\u4ef6"),(0,l.kt)("p",null,"Express \u7684\u4e2d\u95f4\u4ef6\u5199\u6cd5\u6bd4\u8f83\u7279\u6b8a\uff0c\u5b83\u7684\u53c2\u6570\u4e0d\u540c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide } from '@midwayjs/decorator';\nimport { IWebMiddleware } from '@midwayjs/express';\nimport { Request, Response, NextFunction } from 'express';\n\n@Provide()\nexport class ReportMiddleware implements IWebMiddleware {\n\n  resolve() {\n    return async (\n      req: Request,\n      res: Response,\n      next: NextFunction\n    ) => {\n      console.log('Request...');\n      next();\n    };\n  }\n\n}\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c\u8fd9\u91cc\u6211\u4eec\u5bfc\u51fa\u4e86\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"ReportMiddleware")," \u7c7b\uff0c\u8fd9\u4e2a\u4e2d\u95f4\u4ef6\u7c7b\u7684 id \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"reportMiddleware")," \u3002"),(0,l.kt)("h2",{id:"\u8def\u7531\u4e2d\u95f4\u4ef6"},"\u8def\u7531\u4e2d\u95f4\u4ef6"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u628a\u4e0a\u9762\u7f16\u5199\u7684\u4e2d\u95f4\u4ef6\u5e94\u7528\u5230\u5355\u4e2a Controller \u4e0a\uff0c\u4e5f\u53ef\u4ee5\u5c06\u4e2d\u95f4\u4ef6\u5e94\u7528\u5230\u5355\u4e2a\u8def\u7531\u4e0a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Provide } from '@midwayjs/decorator';\n\n@Provide()\n@Controller('/', { middleware: ['reportMiddleware']})           // controller \u7ea7\u522b\u7684\u4e2d\u95f4\u4ef6\nexport class HomeController {\n\n  @Get('/', { middleware: [ 'reportMiddleware' ]})              // \u8def\u7531\u7ea7\u522b\u7684\u4e2d\u95f4\u4ef6\n  async home() {\n    return 'hello world'\n  }\n}\n")),(0,l.kt)("h2",{id:"\u5168\u5c40\u4e2d\u95f4\u4ef6"},"\u5168\u5c40\u4e2d\u95f4\u4ef6"),(0,l.kt)("p",null,"\u76f4\u63a5\u4f7f\u7528 Midway \u63d0\u4f9b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"app.generateMiddleware")," \u65b9\u6cd5\uff0c\u5728\u5165\u53e3\u5904\u52a0\u8f7d\u5168\u5c40\u4e2d\u95f4\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport { ILifeCycle } from '@midwayjs/core';\nimport { Application } from '@midwayjs/express';\nimport { ReportMiddleware } from './middleware/report.middleware.ts'\n\n@Configuration()\nexport class ContainerLifeCycle implements ILifeCycle {\n\n  @App()\n  app: Application;\n\n  async onReady() {\n    this.app.useMiddleware(ReportMiddleware);\n  }\n}\n")),(0,l.kt)("p",null,"\u9664\u4e86\u52a0\u8f7d Class \u5f62\u5f0f\u7684\u4e2d\u95f4\u4ef6\u5916\uff0c\u4e5f\u652f\u6301\u52a0\u8f7d\u4f20\u7edf\u7684 Express \u4e2d\u95f4\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration, App } from '@midwayjs/decorator';\nimport { ILifeCycle } from '@midwayjs/core';\nimport { Application } from '@midwayjs/express';\nimport { join } from 'path';\n\n@Configuration()\nexport class ContainerLifeCycle implements ILifeCycle {\n\n  @App()\n  app: Application;\n\n  async onReady() {\n    this.app.useMiddleware((req, res, next) => {\n        // xxx\n    });\n  }\n}\n")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u6ce8\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"app")," \u5bf9\u8c61\uff0c\u6765\u8c03\u7528\u5230\u6240\u6709 Express \u4e0a\u7684\u65b9\u6cd5\u3002"),(0,l.kt)("h2",{id:"\u6846\u67b6\u542f\u52a8\u53c2\u6570"},"\u6846\u67b6\u542f\u52a8\u53c2\u6570"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@midwayjs/express"),"  \u6846\u67b6\u7684\u542f\u52a8\u53c2\u6570\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"port"),(0,l.kt)("th",{parentName:"tr",align:null},"number"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\uff0c\u542f\u52a8\u7684\u7aef\u53e3"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Buffer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cert"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Buffer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ca"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Buffer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76d1\u542c\u7684 hostname\uff0c\u9ed8\u8ba4 127.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http2"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0chttp2 \u652f\u6301\uff0c\u9ed8\u8ba4 false")))))}c.isMDXComponent=!0}}]);