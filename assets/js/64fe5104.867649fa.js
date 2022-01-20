"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3882],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8456:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],a={title:"\u6269\u5c55\u4e0a\u4e0b\u6587\u5b9a\u4e49"},l=void 0,p={unversionedId:"context_definition",id:"version-2.0.0/context_definition",title:"\u6269\u5c55\u4e0a\u4e0b\u6587\u5b9a\u4e49",description:"\u200b",source:"@site/versioned_docs/version-2.0.0/context_definition.md",sourceDirName:".",slug:"/context_definition",permalink:"/docs/2.0.0/context_definition",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/versioned_docs/version-2.0.0/context_definition.md",tags:[],version:"2.0.0",frontMatter:{title:"\u6269\u5c55\u4e0a\u4e0b\u6587\u5b9a\u4e49"},sidebar:"common",previous:{title:"\u6846\u67b6\u6269\u5c55",permalink:"/docs/2.0.0/framework_development"},next:{title:"Web \u8def\u7531\u8868",permalink:"/docs/2.0.0/router_table"}},u=[{value:"\u9879\u76ee\u4e2d\u6269\u5c55\u5b9a\u4e49",id:"\u9879\u76ee\u4e2d\u6269\u5c55\u5b9a\u4e49",children:[],level:2},{value:"\u7ec4\u4ef6\u4e2d\u6269\u5c55\u5b9a\u4e49",id:"\u7ec4\u4ef6\u4e2d\u6269\u5c55\u5b9a\u4e49",children:[],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u200b"),(0,i.kt)("p",null,"\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c\u9700\u8981\u6269\u5c55\u4e0a\u4e0b\u6587 ctx \u5c5e\u6027\uff0c\u6bd4\u5982 Web \u573a\u666f\u4e0b\u4e2d\u95f4\u4ef6\uff0c\u6211\u4eec\u53ef\u4ee5\u5f80\u4e0a\u9644\u52a0\u4e00\u4e9b\u65b9\u6cd5\u6216\u8005\u5c5e\u6027\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context } from 'egg';   // \u6216\u8005\u5176\u4ed6\u4e0a\u5c42\u6846\u67b6\u5bfc\u51fa\u7684 Context\n\n@Provide()\nexport class ReportMiddleware implements IWebMiddleware {\n\n  resolve() {\n    return async (ctx: Context, next) {\n\n      ctx.abc = '123';\n      await next();\n\n    }\n  }\n\n}\n")),(0,i.kt)("p",null,"\u4f46\u662f\u7531\u4e8e TypeScript \u6a21\u5757\u5b9a\u4e49\u7684\u5173\u7cfb\uff0c\u6211\u4eec\u65e0\u6cd5\u5f80\u73b0\u6709\u7684\u6a21\u5757\u4e0a\u53bb\u9644\u52a0\u5b9a\u4e49\uff0c\u6240\u4ee5\u6211\u4eec\u4f7f\u7528\u4e86\u4e00\u79cd\u65b0\u7684\u65b9\u6cd5\u6765\u6269\u5c55\u3002\n\u200b"),(0,i.kt)("h2",{id:"\u9879\u76ee\u4e2d\u6269\u5c55\u5b9a\u4e49"},"\u9879\u76ee\u4e2d\u6269\u5c55\u5b9a\u4e49"),(0,i.kt)("p",null,"\u200b"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/interface.ts")," \u901a\u8fc7\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u5728\u9879\u76ee\u4e2d\u6269\u5c55 Midway \u901a\u7528\u7684 Context\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/interface.ts\ndeclare module '@midwayjs/core' {\n  interface Context {\n    abc: string;\n  }\n}\n")),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u4e2d\u6269\u5c55\u5b9a\u4e49"},"\u7ec4\u4ef6\u4e2d\u6269\u5c55\u5b9a\u4e49"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u7ec4\u4ef6\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/index.ts")," \u6216\u8005\u5176\u4ed6\u5bfc\u51fa\u7684\u6587\u4ef6\u51fa\uff0c\u901a\u8fc7\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u6269\u5c55 Midway \u901a\u7528\u7684 Context\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/interface.ts\ndeclare module '@midwayjs/core/dist/interface' {\n  interface Context {\n    abc: string;\n  }\n}\n")),(0,i.kt)("p",null,"\u7ec4\u4ef6\u4e2d\u6269\u5c55\u548c\u9879\u76ee\u4e2d\u7565\u6709\u4e0d\u540c\uff08\u6000\u7591\u662f TS \u7684 bug\uff09\u3002"))}d.isMDXComponent=!0}}]);