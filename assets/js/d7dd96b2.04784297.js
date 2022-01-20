"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9977],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,u=d["".concat(p,".").concat(g)]||d[g]||m[g]||o;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},645:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},p="egg:ts-helper",l={unversionedId:"tool/egg-ts-helper",id:"tool/egg-ts-helper",title:"egg:ts-helper",description:"\u9488\u5bf9 midway \u652f\u6301 Egg.js \u7684\u573a\u666f\uff0c\u91cd\u5199\u4e86\u539f egg-ts-helper \u5305\uff0c\u79fb\u9664\u4e86\u539f\u6709\u7684 TS\uff0cAST \u5206\u6790\u7b49\u5927\u4f9d\u8d56\u3002",source:"@site/docs/tool/egg-ts-helper.md",sourceDirName:"tool",slug:"/tool/egg-ts-helper",permalink:"/docs/tool/egg-ts-helper",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/docs/tool/egg-ts-helper.md",tags:[],version:"current",frontMatter:{},sidebar:"other",previous:{title:"typeorm:Model Generator",permalink:"/docs/tool/typeorm_generator"},next:{title:"\u5e38\u89c1\u6846\u67b6\u95ee\u9898",permalink:"/docs/faq/framework_problem"}},c=[],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"eggts-helper"},"egg:ts-helper"),(0,o.kt)("p",null,"\u9488\u5bf9 midway \u652f\u6301 Egg.js \u7684\u573a\u666f\uff0c\u91cd\u5199\u4e86\u539f ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/whxaxes/egg-ts-helper"},"egg-ts-helper")," \u5305\uff0c\u79fb\u9664\u4e86\u539f\u6709\u7684 TS\uff0cAST \u5206\u6790\u7b49\u5927\u4f9d\u8d56\u3002"),(0,o.kt)("p",null,"\u539f\u6765\u7684\u5305\u4f9d\u8d56\u7684 ts v3 \u73af\u5883\uff0c\u4f9d\u8d56 egg \u7684\u76ee\u5f55\u7ed3\u6784\uff0c\u8003\u8651\u975e\u5e38\u591a\u7684\u53ef\u80fd\u6027\uff0c\u5728 midway \u7684\u573a\u666f\u4e2d\u4e0d\u4f1a\u4f7f\u7528\u5230\u3002\u57fa\u4e8e\u4e0a\u8ff0\u8003\u8651 midway \u5c06\u6b64\u5305\u8fdb\u884c\u4e86\u91cd\u5199\uff0c\u7528\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u63d0\u4f9b egg \u5b9a\u4e49\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/egg-ts-helper"},"@midwayjs/egg-ts-helper")," \u5305\u63d0\u4f9b ",(0,o.kt)("inlineCode",{parentName:"p"},"ets")," \u5168\u5c40\u547d\u4ee4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/egg-ts-helper --save-dev\n$ ets\n")),(0,o.kt)("p",null,"\u4e00\u822c\u6211\u4eec\u4f1a\u5728\u5f00\u53d1\u547d\u4ee4\u91cc\u52a0\u5165\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "scripts": {\n    "dev": "cross-env ets && cross-env NODE_ENV=local midway-bin dev --ts",\n  },\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6b64\u5305\u662f\u9488\u5bf9 midway \u5b9a\u5236\u7684\uff0c\u53ea\u80fd\u7528\u4e8e\u65b0\u7248\u672c midway \u53ca\u5176\u914d\u5957\u4ee3\u7801\u3002"))),(0,o.kt)("p",null,"\u6700\u7ec8\u4f1a\u5728\u9879\u76ee\u6839\u76ee\u5f55\u751f\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"typings")," \u76ee\u5f55\uff0c\u5176\u5b9a\u4e49\u7ed3\u6784\u548c\u6587\u4ef6\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 ...\n\u2514\u2500\u2500 typings\n    \u251c\u2500\u2500 extend\n    \u2502       \u251c\u2500\u2500 request.d.ts\n    \u2502       \u251c\u2500\u2500 response.d.ts\n    \u2502       \u251c\u2500\u2500 application.d.ts\n    \u2502\xa0\xa0 \u2514\u2500\u2500 context.d.ts\n    \u251c\u2500\u2500 app\n    \u2502\xa0\xa0 \u2514\u2500\u2500 index.d.ts\n    \u2514\u2500\u2500 config\n        \u251c\u2500\u2500 index.d.ts\n        \u2514\u2500\u2500 plugin.d.ts\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6ce8\u610f\uff0c\u8be5\u6a21\u5757\u53ea\u662f\u5c06 midway v2\uff08Egg.js\uff09\u7684\u6846\u67b6 + \u63d2\u4ef6\u5b9a\u4e49\u805a\u5408\u5230\u4e00\u8d77\uff0c\u8ba9\u5f53\u524d\u7684\u4e1a\u52a1\u4ee3\u7801\u80fd\u591f\u987a\u5229\u7684\u8bfb\u53d6\u5230\u6846\u67b6\u548c\u63d2\u4ef6\u7684\u5b9a\u4e49\uff0c\u4e0d\u652f\u6301\u751f\u6210\u4e1a\u52a1\u4ee3\u7801\u672c\u8eab\u7684\u5b9a\u4e49\uff0c\u4e5f\u4e0d\u652f\u6301\u5728\u5f00\u53d1 egg \u63d2\u4ef6\u65f6\u751f\u6210\u5b9a\u4e49\u3002"))))}d.isMDXComponent=!0}}]);