"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8287],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(k,l(l({ref:e},c),{},{components:n})):r.createElement(k,l({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5293:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},p="Koa",u={unversionedId:"extensions/koa",id:"extensions/koa",title:"Koa",description:"Koa \u662f\u4e00\u4e2a\u975e\u5e38\u8f7b\u91cf\u6613\u7528\u7684 Web \u6846\u67b6\u3002\u672c\u7ae0\u8282\u5185\u5bb9\uff0c\u4e3b\u8981\u4ecb\u7ecd\u5728 Midway \u4e2d\u5982\u4f55\u4f7f\u7528 Koa \u4f5c\u4e3a\u4e0a\u5c42\u6846\u67b6\uff0c\u5e76\u4f7f\u7528\u81ea\u8eab\u7684\u80fd\u529b\u3002",source:"@site/docs/extensions/koa.md",sourceDirName:"extensions",slug:"/extensions/koa",permalink:"/en/docs/extensions/koa",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/docs/extensions/koa.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"MongoDB",permalink:"/en/docs/extensions/mongodb"},next:{title:"EggJS",permalink:"/en/docs/extensions/egg"}},c=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",children:[],level:2},{value:"\u5f00\u542f\u7ec4\u4ef6",id:"\u5f00\u542f\u7ec4\u4ef6",children:[],level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[],level:2}],s={toc:c};function m(t){var e=t.components,n=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"koa"},"Koa"),(0,o.kt)("p",null,"Koa \u662f\u4e00\u4e2a\u975e\u5e38\u8f7b\u91cf\u6613\u7528\u7684 Web \u6846\u67b6\u3002\u672c\u7ae0\u8282\u5185\u5bb9\uff0c\u4e3b\u8981\u4ecb\u7ecd\u5728 Midway \u4e2d\u5982\u4f55\u4f7f\u7528 Koa \u4f5c\u4e3a\u4e0a\u5c42\u6846\u67b6\uff0c\u5e76\u4f7f\u7528\u81ea\u8eab\u7684\u80fd\u529b\u3002"),(0,o.kt)("p",null,"Midway \u9ed8\u8ba4\u7684\u793a\u4f8b\u90fd\u662f\u57fa\u4e8e\u8be5\u5305\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," \u5305\u9ed8\u8ba4\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"koa@2")," \u4ee5\u53ca\u96c6\u6210\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"@koa/router")," \u4f5c\u4e3a\u8def\u7531\u57fa\u7840\u80fd\u529b\uff0c\u5e76\u9ed8\u8ba4\u5185\u7f6e\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"session")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"body-parser")," \u529f\u80fd\u3002"),(0,o.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/koa --save\n$ npm i @types/koa --save-dev\n")),(0,o.kt)("h2",{id:"\u5f00\u542f\u7ec4\u4ef6"},"\u5f00\u542f\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration, App } from '@midwayjs/decorator';\nimport * as koa from '@midwayjs/koa';\nimport { join } from 'path';\n\n@Configuration({\n  imports: [koa],\n  importConfigs: [join(__dirname, './config')],\n})\nexport class ContainerLifeCycle {\n  @App()\n  app: koa.Application;\n\n  async onReady() {\n\n  }\n}\n\n")),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa"),"\xa0 \u7684\u914d\u7f6e\u6837\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport const koa = {\n  port: 7001\n}\n")),(0,o.kt)("p",null,"\u6240\u6709\u5c5e\u6027\u63cf\u8ff0\u5982\u4e0b\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"port"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0c\u542f\u52a8\u7684\u7aef\u53e3")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"globalPrefix"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0c\u5168\u5c40\u7684 http \u524d\u7f00")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"keys"),(0,o.kt)("td",{parentName:"tr",align:null},"string[]"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0cCookies \u7b7e\u540d\uff0c\u5982\u679c\u4e0a\u5c42\u672a\u5199 keys\uff0c\u4e5f\u53ef\u4ee5\u5728\u8fd9\u91cc\u8bbe\u7f6e")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hostname"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0c\u76d1\u542c\u7684 hostname\uff0c\u9ed8\u8ba4 127.1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"key"),(0,o.kt)("td",{parentName:"tr",align:null},"string ","|"," Buffer ","|"," Array<Buffer","|","Object>"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0cHttps key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cert"),(0,o.kt)("td",{parentName:"tr",align:null},"string ","|"," Buffer ","|"," Array<Buffer","|","Object>"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0cHttps cert")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ca"),(0,o.kt)("td",{parentName:"tr",align:null},"string ","|"," Buffer ","|"," Array<Buffer","|","Object>"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0cHttps ca")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"http2"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0chttp2 \u652f\u6301\uff0c\u9ed8\u8ba4 false")))))}m.isMDXComponent=!0}}]);