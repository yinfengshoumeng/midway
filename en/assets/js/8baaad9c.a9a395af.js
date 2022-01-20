"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2376],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),s=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=s(t.components);return r.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=s(n),d=a,k=u["".concat(i,".").concat(d)]||u[d]||c[d]||l;return n?r.createElement(k,o(o({ref:e},m),{},{components:n})):r.createElement(k,o({ref:e},m))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=u;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5458:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],p={},i="\u62e6\u622a\u5668\uff08AOP\uff09",s={unversionedId:"aspect",id:"aspect",title:"\u62e6\u622a\u5668\uff08AOP\uff09",description:"\u6211\u4eec\u7ecf\u5e38\u6709\u5168\u5c40\u7edf\u4e00\u5904\u7406\u903b\u8f91\u7684\u9700\u6c42\uff0c\u6bd4\u5982\u7edf\u4e00\u5904\u7406\u9519\u8bef\uff0c\u8f6c\u6362\u683c\u5f0f\u7b49\u7b49\uff0c\u867d\u7136\u5728 Web \u573a\u666f\u6709 Web \u4e2d\u95f4\u4ef6\u6765\u5904\u7406\uff0c\u4f46\u662f\u5728\u5176\u4ed6\u573a\u666f\u4e0b\uff0c\u65e0\u6cd5\u4f7f\u7528\u8fd9\u4e2a\u80fd\u529b\u3002",source:"@site/docs/aspect.md",sourceDirName:".",slug:"/aspect",permalink:"/en/docs/aspect",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/docs/aspect.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"\u73b0\u6709\u88c5\u9970\u5668\u7d22\u5f15",permalink:"/en/docs/decorator_index"},next:{title:"\u6d41\u7a0b\u63a7\u5236",permalink:"/en/docs/pipeline"}},m=[{value:"\u4f7f\u7528\u62e6\u622a\u5668\uff08\u5207\u9762\uff09",id:"\u4f7f\u7528\u62e6\u622a\u5668\u5207\u9762",children:[],level:2},{value:"\u53ef\u5207\u9762\u7684\u751f\u547d\u5468\u671f",id:"\u53ef\u5207\u9762\u7684\u751f\u547d\u5468\u671f",children:[],level:2},{value:"\u5207\u9762\u7684\u5f02\u6b65\u95ee\u9898",id:"\u5207\u9762\u7684\u5f02\u6b65\u95ee\u9898",children:[],level:2},{value:"\u5e94\u7528\u5230\u591a\u4e2a Class",id:"\u5e94\u7528\u5230\u591a\u4e2a-class",children:[],level:2},{value:"\u7279\u5b9a\u65b9\u6cd5\u5339\u914d",id:"\u7279\u5b9a\u65b9\u6cd5\u5339\u914d",children:[],level:2},{value:"\u5207\u9762\u6267\u884c\u987a\u5e8f",id:"\u5207\u9762\u6267\u884c\u987a\u5e8f",children:[],level:2},{value:"\u4e00\u4e9b\u9650\u5236",id:"\u4e00\u4e9b\u9650\u5236",children:[],level:2}],c={toc:m};function u(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u62e6\u622a\u5668aop"},"\u62e6\u622a\u5668\uff08AOP\uff09"),(0,l.kt)("p",null,"\u6211\u4eec\u7ecf\u5e38\u6709\u5168\u5c40\u7edf\u4e00\u5904\u7406\u903b\u8f91\u7684\u9700\u6c42\uff0c\u6bd4\u5982\u7edf\u4e00\u5904\u7406\u9519\u8bef\uff0c\u8f6c\u6362\u683c\u5f0f\u7b49\u7b49\uff0c\u867d\u7136\u5728 Web \u573a\u666f\u6709 Web \u4e2d\u95f4\u4ef6\u6765\u5904\u7406\uff0c\u4f46\u662f\u5728\u5176\u4ed6\u573a\u666f\u4e0b\uff0c\u65e0\u6cd5\u4f7f\u7528\u8fd9\u4e2a\u80fd\u529b\u3002"),(0,l.kt)("p",null,"Midway \u8bbe\u8ba1\u4e86\u4e00\u5957\u901a\u7528\u7684\u65b9\u6cd5\u62e6\u622a\u5668\uff08\u5207\u9762\uff09\uff0c\u7528\u4e8e\u5728\u4e0d\u540c\u573a\u666f\u4e2d\uff0c\u7edf\u4e00\u7f16\u5199\u903b\u8f91\u3002"),(0,l.kt)("p",null,"\u62e6\u622a\u5668\u548c\u4f20\u7edf\u7684 Web \u4e2d\u95f4\u4ef6\u548c\u88c5\u9970\u5668\u90fd\u4e0d\u540c\uff0c\u662f\u7531 Midway \u6846\u67b6\u63d0\u4f9b\u7684\u80fd\u529b\uff0c\u5728\u6267\u884c\u987a\u5e8f\u4e0a\uff0c\u5904\u4e8e\u4e2d\u95f4\u7684\u4f4d\u7f6e\uff0c\u8fd9\u4e2a\u80fd\u529b\u80fd\u5bf9\u4efb\u610f\u7684 Class \u65b9\u6cd5\u505a\u62e6\u622a\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01DFfT1y1FC8xYeocrX_!!6000000000450-2-tps-823-133.png",alt:"image.png"})),(0,l.kt)("h2",{id:"\u4f7f\u7528\u62e6\u622a\u5668\u5207\u9762"},"\u4f7f\u7528\u62e6\u622a\u5668\uff08\u5207\u9762\uff09"),(0,l.kt)("p",null,"\u62e6\u622a\u5668\u4e00\u822c\u4f1a\u653e\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"src/aspect")," \u76ee\u5f55\u3002\u4e0b\u9762\u6211\u4eec\u5199\u4e00\u4e2a\u5bf9\u63a7\u5236\u5668\uff08Controller\uff09\u65b9\u6cd5\u62e6\u622a\u7684\u793a\u4f8b\u3002\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"src/aspect/report.ts")," \u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u279c  my_midway_app tree\n.\n\u251c\u2500\u2500 src\n\u2502   \u2502\u2500\u2500 aspect                    ## \u62e6\u622a\u5668\u76ee\u5f55\n\u2502   \u2502   \u2514\u2500\u2500 report.ts\n\u2502   \u2514\u2500\u2500 controller                ## Web Controller \u76ee\u5f55\n\u2502       \u2514\u2500\u2500 home.ts\n\u251c\u2500\u2500 test  \n\u251c\u2500\u2500 package.json  \n\u2514\u2500\u2500 tsconfig.json\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/home.ts\n\nimport { Controller, Get } from '@midwayjs/decorator';\n\n@Controller('/')\nexport class HomeController {\n\n  @Get('/')\n  async home() {\n    return \"Hello Midwayjs!\";\n  }\n}\n")),(0,l.kt)("p",null,"\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Aspect, IMethodAspect, JoinPoint } from '@midwayjs/decorator';\nimport { HomeController } from '../controller/home';\n\n@Aspect(HomeController)\nexport class ReportInfo implements IMethodAspect {\n  async before(point: JoinPoint) {\n    console.log('before home router run');\n  }\n}\n\n")),(0,l.kt)("p",null,"\u542f\u52a8\u9879\u76ee\uff0c\u8fd0\u884c\u540e\uff0c\u5728\u63a7\u5236\u53f0\u4f1a\u8f93\u51fa ",(0,l.kt)("inlineCode",{parentName:"p"},"before home router run")," \u7684\u5b57\u6837\u3002"),(0,l.kt)("p",null,"\u4f60\u4f1a\u53d1\u73b0\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u53bb\u4fb5\u5165\u63a7\u5236\u5668\u7684\u4ee3\u7801\uff0c\u65e2\u6ca1\u6709\u5728\u4e1a\u52a1\u6587\u4ef6\u4e2d\u52a0\u88c5\u9970\u5668\uff0c\u4e5f\u6ca1\u6709\u5728\u4e3b\u6d41\u7a0b\u524d\u540e\u53ef\u89c1\u7684\u52a0\u4ee3\u7801\u3002"),(0,l.kt)("p",null,"\u62e6\u622a\u5668\uff08\u5207\u9762\uff09\u7684\u80fd\u529b\u975e\u5e38\u5f3a\u5927\uff0c\u4e5f\u975e\u5e38\u53ef\u6015\uff0c\u6211\u4eec\u4e00\u5b9a\u8981\u5c0f\u5fc3\u800c\u6b63\u786e\u7684\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u62e6\u622a\u5668 ",(0,l.kt)("strong",{parentName:"p"},"\u56fa\u5b9a\u4e3a\u5355\u4f8b"),"\u3002"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5728\u7ee7\u627f\u7684\u60c5\u51b5\u4e0b\uff0c\u62e6\u622a\u5668\u4e0d\u4f1a\u5bf9\u7236\u7c7b\u7684\u65b9\u6cd5\u751f\u6548\u3002"))),(0,l.kt)("h2",{id:"\u53ef\u5207\u9762\u7684\u751f\u547d\u5468\u671f"},"\u53ef\u5207\u9762\u7684\u751f\u547d\u5468\u671f"),(0,l.kt)("p",null,"\u65b9\u6cd5\u62e6\u622a\u5668\u53ef\u4ee5\u5bf9\u6574\u4e2a\u65b9\u6cd5\u8fdb\u884c\u62e6\u622a\uff0c\u62e6\u622a\u7684\u65b9\u5f0f\u5305\u62ec\u51e0\u4e2a\u65b9\u9762\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface IMethodAspect {\n  after?(joinPoint: JoinPoint, result: any, error: Error);\n  afterReturn?(joinPoint: JoinPoint, result: any): any;\n  afterThrow?(joinPoint: JoinPoint, error: Error): void;\n  before?(joinPoint: JoinPoint): void;\n  around?(joinPoint: JoinPoint): any;\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u65b9\u6cd5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"before"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65b9\u6cd5\u8c03\u7528\u524d\u6267\u884c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"around"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u88f9\u65b9\u6cd5\u7684\u524d\u540e\u6267\u884c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"afterReturn"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u786e\u8fd4\u56de\u5185\u5bb9\u65f6\u6267\u884c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"afterThrow"),(0,l.kt)("td",{parentName:"tr",align:null},"\u629b\u51fa\u5f02\u5e38\u65f6\u6267\u884c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"after"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u540e\u6267\u884c\uff08\u4e0d\u7ba1\u6b63\u786e\u8fd8\u662f\u9519\u8bef\uff09")))),(0,l.kt)("p",null,"\u7b80\u5355\u7406\u89e3\u5982\u4e0b\uff1b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"try {\n    // before  \n    // around or invokeMethod\n    // afterReturn\n} catch(err){\n    // afterThrow\n} finally {\n    // after\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"\u4fee\u6539\u5165\u53c2"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8c03\u7528\u539f\u65b9\u6cd5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u83b7\u53d6\u8fd4\u56de\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4fee\u6539\u8fd4\u56de\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u83b7\u53d6\u9519\u8bef"),(0,l.kt)("th",{parentName:"tr",align:null},"\u62e6\u622a\u5e76\u629b\u51fa\u9519\u8bef"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"before"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"around"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"afterReturn"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"afterThrow"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"after"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"\u6211\u4eec\u5e38\u4f1a\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"before")," \u7684\u8fc7\u7a0b\u4e2d\u4fee\u6539\u5165\u53c2\u3001\u6821\u9a8c\uff0c\u4ee5\u7b26\u5408\u7a0b\u5e8f\u6267\u884c\u7684\u903b\u8f91\uff0c\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/home.ts\n@Controller('/')\nexport class HomeController {\n\n  @Get('/')\n  async home(data1, data2) {\n    return data1 + data2;           // \u56e0\u4e3a\u62e6\u622a\u4e86\u65b9\u6cd5\uff0c\u8fd9\u91cc\u7684\u8fd4\u56de\u503c\u662f 3\n  }\n}\n\n// src/aspect/\n@Aspect(HomeController, 'home')  // \u8fd9\u91cc\u53ea\u5bf9 home \u65b9\u6cd5\u505a\u62e6\u622a\nexport class ReportInfo implements IMethodAspect {\n  async before(point: JoinPoint) {\n    console.log(point.args);     // \u8fd9\u91cc\u56e0\u4e3a\u5bf9 Controller \u65b9\u6cd5\u505a\u5207\u9762\uff0c\u539f\u672c\u7684\u53c2\u6570\u4e3a [ctx, next]\n    point.args = [1, 2];                 // \u4fee\u6539\u5165\u53c2\n  }\n}\n\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"JoinPoint")," \u5c31\u662f\u53ef\u4ee5\u5bf9\u65b9\u6cd5\u505a\u4fee\u6539\u7684\u53c2\u6570\uff0c\u5b9a\u4e49\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface JoinPoint {\n  methodName: string;\n  target: any;\n  args: any[];\n  proceed(...args: any[]): any;\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"methodName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u62e6\u622a\u5230\u7684\u65b9\u6cd5\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65b9\u6cd5\u8c03\u7528\u65f6\u7684\u5b9e\u4f8b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"args"),(0,l.kt)("td",{parentName:"tr",align:null},"\u539f\u65b9\u6cd5\u8c03\u7528\u7684\u53c2\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proceed"),(0,l.kt)("td",{parentName:"tr",align:null},"\u539f\u65b9\u6cd5\u672c\u8eab\uff0c\u53ea\u4f1a\u5728 before \u548c around \u4e2d\u5b58\u5728")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"around")," \u662f\u6bd4\u8f83\u5168\u80fd\u7684\u65b9\u6cd5\uff0c\u5b83\u53ef\u4ee5\u5305\u88f9\u6574\u4e2a\u65b9\u6cd5\u8c03\u7528\u6d41\u7a0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/home.ts\n@Controller('/')\nexport class HomeController {\n\n  @Get('/')\n  async home() {\n    return 'hello';\n  }\n}\n\n// src/aspect/report.ts\n@Aspect(HomeController, 'home')  // \u8fd9\u91cc\u53ea\u5bf9 home \u65b9\u6cd5\u505a\u62e6\u622a\nexport class ReportInfo implements IMethodAspect {\n  async around(point: JoinPoint) {\n    const result = await point.proceed(...point.args);  // \u6267\u884c\u539f\u65b9\u6cd5\n    return result + ' world';\n  }\n}\n\n")),(0,l.kt)("p",null,"\u6700\u7ec8 Controller \u4f1a\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"hello world")," \u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"afterReturn")," \u65b9\u6cd5\u4f1a\u591a\u4e00\u4e2a\u8fd4\u56de\u7ed3\u679c\u53c2\u6570\uff0c\u5982\u679c\u53ea\u9700\u8981\u4fee\u6539\u8fd4\u56de\u7ed3\u679c\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5b83\uff0c\u4e0a\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"around")," \u4f8b\u5b50\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"afterReturn")," \u6539\u5199\u4f1a\u66f4\u7b80\u5355\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/home.ts\n@Controller('/')\nexport class HomeController {\n\n  @Get('/')\n  async home() {\n    return 'hello';\n  }\n}\n\n// src/aspect/report.ts\n@Aspect(HomeController, 'home')  // \u8fd9\u91cc\u53ea\u5bf9 home \u65b9\u6cd5\u505a\u62e6\u622a\nexport class ReportInfo implements IMethodAspect {\n  async afterReturn(point: JoinPoint, result) {\n    return result + ' world';\n  }\n}\n\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"afterThrow")," \u7528\u4e8e\u62e6\u622a\u9519\u8bef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/home.ts\n@Controller('/')\nexport class HomeController {\n\n  @Get('/')\n  async home() {\n    throw new Error('custom error');\n  }\n}\n\n// src/aspect/report.ts\n@Aspect(HomeController, 'home')\nexport class ReportInfo implements IMethodAspect {\n  async afterThrow(point: JoinPoint, error) {\n    if(/not found/.test(error.message)) {\n        throw new Error('another error');\n    } else {\n        console.error('got custom error');\n    }\n  }\n}\n\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"afterThrow")," \u80fd\u62e6\u622a\u9519\u8bef\uff0c\u76f8\u5e94\u7684\uff0c\u5b83\u4e0d\u80fd\u5728\u6d41\u7a0b\u4e2d\u8fd4\u56de\u7ed3\u679c\uff0c\u4e00\u822c\u7528\u6765\u8bb0\u5f55\u9519\u8bef\u65e5\u5fd7\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"after")," \u7528\u6765\u505a\u6700\u540e\u7684\u5904\u7406\uff0c\u4e0d\u7ba1\u662f\u6210\u529f\u6216\u8005\u5931\u8d25\uff0c\u90fd\u53ef\u4ee5\u7528\u5b83\u6267\u884c\u4e00\u4e9b\u4e8b\u60c5\uff0c\u6bd4\u5982\u8bb0\u5f55\u6240\u6709\u6210\u529f\u6216\u8005\u5931\u8d25\u7684\u6b21\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/home.ts\n@Controller('/')\nexport class HomeController {\n\n  @Get('/')\n  async home() {\n    throw new Error('custom error');\n  }\n}\n\n// src/aspect/report.ts\n@Aspect(HomeController, 'home')\nexport class ReportInfo implements IMethodAspect {\n  async after(point: JoinPoint, result, error) {\n    if(error) {\n        console.error(error);\n    } else {\n      console.log(result);\n    }\n  }\n}\n\n")),(0,l.kt)("h2",{id:"\u5207\u9762\u7684\u5f02\u6b65\u95ee\u9898"},"\u5207\u9762\u7684\u5f02\u6b65\u95ee\u9898"),(0,l.kt)("p",null,"\u5982\u679c\u88ab\u62e6\u622a\u7684\u65b9\u6cd5\u662f\u5f02\u6b65\u7684\uff0c\u5219\u539f\u5219\u4e0a\u6211\u4eec\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"before")," \u7b49\u65b9\u6cd5\u5e94\u8be5\u90fd\u662f\u5f02\u6b65\u7684\uff0c\u53cd\u4e4b\uff0c\u5219\u90fd\u662f\u540c\u6b65\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/home.ts\n@Controller('/')\nexport class HomeController {\n\n  @Get('/')\n  async home() {            // \u8fd9\u91cc\u662f\u5f02\u6b65\u7684\uff0c\u5219\u4e0b\u9762\u7684 before \u662f\u5f02\u6b65\u7684\n    \n  }\n}\n\n// src/aspect/report.ts\n@Aspect(HomeController, 'home')\nexport class ReportInfo implements IMethodAspect {\n  async before(point: JoinPoint) {\n   \n  }\n}\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/home.ts\n@Controller('/')\nexport class HomeController {\n\n  @Get('/')\n  home() {      // \u8fd9\u91cc\u662f\u540c\u6b65\u7684\uff0c\u5219\u4e0b\u9762\u7684 before \u4e5f\u662f\u540c\u6b65\u7684\n    \n  }\n}\n\n// src/aspect/report.ts\n@Aspect(HomeController, 'home')\nexport class ReportInfo implements IMethodAspect {\n  before(point: JoinPoint) {\n   \n  }\n}\n\n")),(0,l.kt)("h2",{id:"\u5e94\u7528\u5230\u591a\u4e2a-class"},"\u5e94\u7528\u5230\u591a\u4e2a Class"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@Aspect")," \u88c5\u9970\u5668\u7684\u53c2\u6570\u53ef\u4ee5\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u6211\u4eec\u53ef\u4ee5\u63d0\u4f9b\u591a\u4e2a Class\uff0c\u8fd9\u4e9b Class \u7684  ",(0,l.kt)("strong",{parentName:"p"},"\u6240\u6709\u65b9\u6cd5 "),"\u90fd\u5c06\u88ab\u62e6\u622a\u3002\u6bd4\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u4e0a\u9762\u7684\u62e6\u622a\u5668\u5e94\u7528\u5230\u591a\u4e2a Controller\uff0c\u8fd9\u6837 ",(0,l.kt)("strong",{parentName:"p"},"\u6bcf\u4e00\u4e2a Class \u7684\u6bcf\u4e00\u4e2a\u65b9\u6cd5 "),"\u90fd\u4f1a\u88ab\u62e6\u622a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@Aspect([HomeController, APIController])\nexport class ReportInfo implements IMethodAspect {\n  \n  async before(point: JoinPoint) {\n    \n  }\n}\n")),(0,l.kt)("h2",{id:"\u7279\u5b9a\u65b9\u6cd5\u5339\u914d"},"\u7279\u5b9a\u65b9\u6cd5\u5339\u914d"),(0,l.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5bf9\u67d0\u4e2a Class \u7279\u5b9a\u7684\u65b9\u6cd5\u505a\u62e6\u622a\u3002\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5339\u914d\u65b9\u6cd5\u7684\u80fd\u529b\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"@Aspect")," \u88c5\u9970\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5219\u662f\u4e00\u4e2a\u901a\u914d\u65b9\u6cd5\u7684\u5b57\u7b26\u4e32\u3002\u4f7f\u7528\u7684\u89c4\u5219\u4e3a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/micromatch/picomatch"},"picomatch"),"\u3002"),(0,l.kt)("p",null,"\u5047\u5982\u6211\u4eec\u7684\u65b9\u6cd5\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/home.ts\n\nimport { Controller, Get } from \"@midwayjs/decorator\";\n\n@Controller('/')\nexport class HomeController {\n\n  @Get('/1')\n  async hello1() {\n    return \"Hello Midwayjs!\";\n  }\n  \n  @Get('/2')\n  async hello2() {\n    return \"Hello Midwayjs, too!\";\n  }\n}\n")),(0,l.kt)("p",null,"\u90a3\u4e48\uff0c\u6211\u4eec\u5982\u4e0b\u914d\u7f6e\u65f6\uff0c\u53ea\u4f1a\u5339\u914d\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"hello2")," \u8fd9\u4e2a\u65b9\u6cd5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@Aspect([HomeController], '*2')\nexport class ReportInfo implements IMethodAspect {\n\n  async before(point: JoinPoint) {\n    console.log('hello method with suffix 2');\n  }\n}\n")),(0,l.kt)("h2",{id:"\u5207\u9762\u6267\u884c\u987a\u5e8f"},"\u5207\u9762\u6267\u884c\u987a\u5e8f"),(0,l.kt)("p",null,"\u5982\u679c\u591a\u4e2a\u62e6\u622a\u5668\uff08\u5207\u9762\uff09\u540c\u65f6\u9488\u5bf9\u4e00\u4e2a\u65b9\u6cd5\u505a\u64cd\u4f5c\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u987a\u5e8f\u9519\u4e71\u7684\u95ee\u9898\uff0c\u5982\u679c\u5728\u4e24\u4e2a\u6587\u4ef6\u4e2d\uff0c\u8fd9\u4e2a\u987a\u5e8f\u662f\u968f\u673a\u7684\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@Aspect")," \u7684\u7b2c\u4e09\u4e2a\u53c2\u6570\u7528\u4e8e\u6307\u5b9a\u62e6\u622a\u5668\u7684\u4f18\u5148\u7ea7\uff0c\u9ed8\u8ba4\u4e3a 0\uff0c\u6570\u5b57\u8d8a\u5927\uff0c\u4f18\u5148\u7ea7\u8d8a\u9ad8\uff0c\u5373\u5148\u88ab\u6ce8\u518c\u5230\u65b9\u6cd5\u4e0a\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u5148\u6ce8\u518c\u7684\u65b9\u6cd5\u4f1a\u88ab\u540e\u8c03\u7528\uff0c"),"\u5373\u6d0b\u8471\u6a21\u578b",(0,l.kt)("strong",{parentName:"p"},"\u3002")),(0,l.kt)("p",null,"\u4ee5\u4e0b\u9762\u7684\u4ee3\u7801\u4f5c\u4e3a\u793a\u4f8b\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"MyAspect2")," \u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"MyAspect1")," \uff0c\u6240\u4ee5\u4f1a\u4f18\u5148\u6ce8\u518c\u3002\u793a\u610f\u56fe\u5982\u4e0b\uff0c\u6574\u4e2a\u62e6\u622a\u6d41\u7a0b\u5206\u4e3a\u4e24\u90e8\u5206\uff0c\u5148\u662f\u6ce8\u518c\uff0c\u540e\u662f\u6267\u884c\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u518c\u6d41\u7a0b")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01d31RXA1cpHyjyPHCs_!!6000000003649-2-tps-924-497.png",alt:"image.png"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6267\u884c\u6d41\u7a0b")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01RXmEtD26Thmkg8eX8_!!6000000007663-2-tps-769-311.png",alt:"image.png"})),(0,l.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@Aspect([HomeController])\nexport class MyAspect1 implements IMethodAspect {\n  before(point: JoinPoint) {\n    console.log('111');\n  }\n}\n\n@Aspect([HomeController], '*', 1)                                                   // \u8fd9\u91cc\u53ef\u4ee5\u8bbe\u7f6e\u4f18\u5148\u7ea7\nexport class MyAspect2 implements IMethodAspect {\n  before(point: JoinPoint) {\n    console.log('222');\n  }\n}\n")),(0,l.kt)("p",null,"\u6267\u884c\u8f93\u51fa\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"111\n222\n")),(0,l.kt)("h2",{id:"\u4e00\u4e9b\u9650\u5236"},"\u4e00\u4e9b\u9650\u5236"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1\u3001\u62e6\u622a\u5668\u4e0d\u4f1a\u5bf9\u7236\u7c7b\u751f\u6548")))}u.isMDXComponent=!0}}]);