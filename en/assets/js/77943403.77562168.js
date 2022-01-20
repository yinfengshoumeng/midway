"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2459],{3905:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return N}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),d=m(n),N=r,s=d["".concat(o,".").concat(N)]||d[N]||u[N]||l;return n?a.createElement(s,i(i({ref:e},k),{},{components:n})):a.createElement(s,i({ref:e},k))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4331:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return k},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={},o="\u8bf7\u6c42\u5b89\u5168",m={unversionedId:"extensions/security",id:"extensions/security",title:"\u8bf7\u6c42\u5b89\u5168",description:"\u9002\u7528\u4e8e @midwayjs/faas \u3001@midwayjs/web \u3001@midwayjs/koa \u548c @midwayjs/express \u591a\u79cd\u6846\u67b6\u7684\u901a\u7528\u5b89\u5168\u7ec4\u4ef6\uff0c\u652f\u6301 csrf \u3001xss \u7b49\u591a\u79cd\u5b89\u5168\u7b56\u7565\u3002",source:"@site/docs/extensions/security.md",sourceDirName:"extensions",slug:"/extensions/security",permalink:"/en/docs/extensions/security",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/docs/extensions/security.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"Express",permalink:"/en/docs/extensions/express"},next:{title:"\u6a21\u677f\u6e32\u67d3",permalink:"/en/docs/extensions/render"}},k=[{value:"\u5b89\u88c5\u4f7f\u7528",id:"\u5b89\u88c5\u4f7f\u7528",children:[],level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"csrf",id:"csrf",children:[],level:3},{value:"xframe",id:"xframe",children:[],level:3},{value:"hsts",id:"hsts",children:[],level:3},{value:"csp",id:"csp",children:[],level:3},{value:"noopen",id:"noopen",children:[],level:3},{value:"nosniff",id:"nosniff",children:[],level:3},{value:"xssProtection",id:"xssprotection",children:[],level:3}],level:2}],u={toc:k};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u8bf7\u6c42\u5b89\u5168"},"\u8bf7\u6c42\u5b89\u5168"),(0,l.kt)("p",null,"\u9002\u7528\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"@midwayjs/faas")," \u3001",(0,l.kt)("inlineCode",{parentName:"p"},"@midwayjs/web")," \u3001",(0,l.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"@midwayjs/express")," \u591a\u79cd\u6846\u67b6\u7684\u901a\u7528\u5b89\u5168\u7ec4\u4ef6\uff0c\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"csrf")," \u3001",(0,l.kt)("inlineCode",{parentName:"p"},"xss")," \u7b49\u591a\u79cd\u5b89\u5168\u7b56\u7565\u3002"),(0,l.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"web \u652f\u6301\u60c5\u51b5"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@midwayjs/koa"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@midwayjs/faas"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@midwayjs/web"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@midwayjs/express"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,l.kt)("h2",{id:"\u5b89\u88c5\u4f7f\u7528"},"\u5b89\u88c5\u4f7f\u7528"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u4f9d\u8d56")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/security --save\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u5728 configuration \u4e2d\u5f15\u5165\u7ec4\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as security from '@midwayjs/security';\n@Configuration({\n  imports: [\n    // ...other components\n    security\n  ],\n})\nexport class AutoConfiguration {}\n")),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u9ed8\u8ba4\u914d\u7f6e\nexport const security = {\n  csrf: {\n    enable: true,\n    type: 'ctoken',\n    useSession: false,\n    cookieName: 'csrfToken',\n    sessionName: 'csrfToken',\n    headerName: 'x-csrf-token',\n    bodyName: '_csrf',\n    queryName: '_csrf',\n    refererWhiteList: [],\n  },\n  xframe: {\n    enable: true,\n    value: 'SAMEORIGIN',\n  },\n  csp: {\n    enable: false,\n  },\n  hsts: {\n    enable: false,\n    maxAge: 365 * 24 * 3600,\n    includeSubdomains: false,\n  },\n  noopen: {\n    enable: false,\n  },\n  nosniff: {\n    enable: false,\n  },\n  xssProtection: {\n    enable: true,\n    value: '1; mode=block',\n  },\n}\n")),(0,l.kt)("h3",{id:"csrf"},"csrf"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enable"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"'all' / 'any' / 'ctoken' / 'referer'"),(0,l.kt)("td",{parentName:"tr",align:null},"csrf \u6821\u9a8c\u7c7b\u578b\uff0call/any \u7b49\u4e8e ctoken + referer"),(0,l.kt)("td",{parentName:"tr",align:null},"'ctoken' \u4ecequery/header/body \u4e2d\u83b7\u53d6 csrf token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"useSession"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"csrf token \u662f\u5426\u5b58\u653e\u5728 session \u4e2d"),(0,l.kt)("td",{parentName:"tr",align:null},"false\uff0c\u9ed8\u8ba4\u5b58\u653e\u5728 cookies \u4e2d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cookieName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"token \u5728 cookie \u4e2d\u5b58\u653e\u7684 \u5b57\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:null},"'csrfToken'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sessionName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"token \u5728 session \u4e2d\u5b58\u653e\u7684 \u5b57\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:null},"'csrfToken'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headerName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"token \u5728 header \u4e2d\u5b58\u653e\u7684 \u5b57\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:null},"'x-csrf-token'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bodyName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"token \u5728 body \u4e2d\u5b58\u653e\u7684 \u5b57\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:null},"'_csrf'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"queryName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"token \u5728 query \u4e2d\u5b58\u653e\u7684 \u5b57\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:null},"'_csrf'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"refererWhiteList"),(0,l.kt)("td",{parentName:"tr",align:null},"Array<string",">"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u7684\u6765\u6e90\u767d\u540d\u5355"),(0,l.kt)("td",{parentName:"tr",align:null},"[]")))),(0,l.kt)("h3",{id:"xframe"},"xframe"),(0,l.kt)("p",null,"xframe \u7528\u6765\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"X-Frame-Options")," \u54cd\u5e94\u5934\uff0c\u7528\u6765\u7ed9\u6d4f\u89c8\u5668\u6307\u793a\u5141\u8bb8\u4e00\u4e2a\u9875\u9762\u53ef\u5426\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"frame"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"iframe"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"embed")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," \u4e2d\u5c55\u73b0\u7684\u6807\u8bb0\u3002\u7ad9\u70b9\u53ef\u4ee5\u901a\u8fc7\u786e\u4fdd\u7f51\u7ad9\u6ca1\u6709\u88ab\u5d4c\u5165\u5230\u522b\u4eba\u7684\u7ad9\u70b9\u91cc\u9762\uff0c\u4ece\u800c\u907f\u514d ",(0,l.kt)("inlineCode",{parentName:"p"},"clickjacking")," \u653b\u51fb\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"X-Frame-Options")," \u6709\u4e09\u4e2a\u53ef\u80fd\u7684\u503c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"X-Frame-Options: deny\uff1a\u9875\u9762\u4e0d\u5141\u8bb8\u5728 frame \u4e2d\u5c55\u793a"),(0,l.kt)("li",{parentName:"ul"},"X-Frame-Options: sameorigin\uff1a\u8be5\u9875\u9762\u53ef\u4ee5\u5728\u76f8\u540c\u57df\u540d\u9875\u9762\u7684 frame \u4e2d\u5c55\u793a"),(0,l.kt)("li",{parentName:"ul"},"X-Frame-Options: allow-from ",(0,l.kt)("a",{parentName:"li",href:"https://example.com/%EF%BC%9A%E8%AF%A5%E9%A1%B5%E9%9D%A2%E5%8F%AF%E4%BB%A5%E5%9C%A8%E6%8C%87%E5%AE%9A%E6%9D%A5%E6%BA%90%E7%9A%84"},"https://example.com/\uff1a\u8be5\u9875\u9762\u53ef\u4ee5\u5728\u6307\u5b9a\u6765\u6e90\u7684")," frame \u4e2d\u5c55\u793a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enable"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"X-Frame-Options \u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"'SAMEORIGIN'")))),(0,l.kt)("h3",{id:"hsts"},"hsts"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"HTTP Strict Transport Security"),"\uff08\u901a\u5e38\u7b80\u79f0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"HSTS")," \uff09\u662f\u4e00\u4e2a\u5b89\u5168\u529f\u80fd\uff0c\u5b83\u544a\u8bc9\u6d4f\u89c8\u5668\u53ea\u80fd\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"HTTPS")," \u8bbf\u95ee\u5f53\u524d\u8d44\u6e90\uff0c\u800c\u4e0d\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"HTTP"),"\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enable"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxAge"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u6d4f\u89c8\u5668\u6536\u5230\u8fd9\u4e2a\u8bf7\u6c42\u540e\u7684\u591a\u5c11 ",(0,l.kt)("inlineCode",{parentName:"td"},"\u79d2")," \u65f6\u95f4\u5185\u51e1\u662f\u8bbf\u95ee\u8fd9\u4e2a\u57df\u540d\u4e0b\u7684\u8bf7\u6c42\u90fd\u4f7f\u7528HTTPS\u8bf7\u6c42"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"365 * 24 * 3600")," \u5373\u4e00\u5e74")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"includeSubdomains"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64\u89c4\u5219\u662f\u5426\u9002\u7528\u4e8e\u8be5\u7f51\u7ad9\u7684\u6240\u6709\u5b50\u57df\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h3",{id:"csp"},"csp"),(0,l.kt)("p",null,"HTTP \u54cd\u5e94\u5934 ",(0,l.kt)("inlineCode",{parentName:"p"},"Content-Security-Policy")," \u5141\u8bb8\u7ad9\u70b9\u7ba1\u7406\u8005\u63a7\u5236\u6307\u5b9a\u7684\u9875\u9762\u52a0\u8f7d\u54ea\u4e9b\u8d44\u6e90\u3002\u8fd9\u5c06\u5e2e\u52a9\u9632\u6b62\u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff08XSS\uff09\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enable"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"policy"),(0,l.kt)("td",{parentName:"tr",align:null},"Object<key: string, value: string / string[] / boolean>"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b56\u7565\u5217\u8868"),(0,l.kt)("td",{parentName:"tr",align:null},"{}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reportOnly"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"supportIE"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301IE\u6d4f\u89c8\u5668"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("p",null,"\u8be6\u7ec6\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"policy")," \u914d\u7f6e\u53ef\u4ee5\u53c2\u8003: ",(0,l.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/21979782/answer/122682029"},"Content Security Policy (CSP) \u662f\u4ec0\u4e48\uff1f\u963f\u91cc\u805a\u5b89\u5168")),(0,l.kt)("h3",{id:"noopen"},"noopen"),(0,l.kt)("p",null,"\u7528\u4e8e\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"IE 8")," \u4ee5\u4e0a\u7248\u672c\u7684\u7528\u6237\u4e0d\u6253\u5f00\u6587\u4ef6\u800c\u76f4\u63a5\u4fdd\u5b58\u6587\u4ef6\u3002\u5728\u4e0b\u8f7d\u5bf9\u8bdd\u6846\u4e2d\u4e0d\u663e\u793a\u201c\u6253\u5f00\u201d\u9009\u9879\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enable"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h3",{id:"nosniff"},"nosniff"),(0,l.kt)("p",null,"\u5f00\u542f\u540e\uff0c\u5982\u679c\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"script")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"stylesheet")," \u8bfb\u5165\u7684\u6587\u4ef6\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"MIME")," \u7c7b\u578b\u4e0e\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"MIME")," \u7c7b\u578b\u4e0d\u5339\u914d\uff0c\u4e0d\u5141\u8bb8\u8bfb\u53d6\u8be5\u6587\u4ef6\u3002\u7528\u4e8e\u9632\u6b62 ",(0,l.kt)("inlineCode",{parentName:"p"},"XSS")," \u7b49\u8de8\u7ad9\u811a\u672c\u653b\u51fb\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enable"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h3",{id:"xssprotection"},"xssProtection"),(0,l.kt)("p",null,"\u7528\u4e8e\u542f\u7528\u6d4f\u89c8\u5668\u7684XSS\u8fc7\u6ee4\u529f\u80fd\uff0c\u4ee5\u9632\u6b62 ",(0,l.kt)("inlineCode",{parentName:"p"},"XSS")," \u8de8\u7ad9\u811a\u672c\u653b\u51fb\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection")," \u54cd\u5e94\u5934\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"IE"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Chrome")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Safari")," \u7684\u4e00\u4e2a\u7279\u6027\uff0c\u5f53\u68c0\u6d4b\u5230\u8de8\u7ad9\u811a\u672c\u653b\u51fb (XSS (en-US))\u65f6\uff0c\u6d4f\u89c8\u5668\u5c06\u505c\u6b62\u52a0\u8f7d\u9875\u9762\u3002\u82e5\u7f51\u7ad9\u8bbe\u7f6e\u4e86\u826f\u597d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Content-Security-Policy")," \u6765\u7981\u7528\u5185\u8054 JavaScript ('unsafe-inline')\uff0c\u73b0\u4ee3\u6d4f\u89c8\u5668\u4e0d\u592a\u9700\u8981\u8fd9\u4e9b\u4fdd\u62a4\uff0c \u4f46\u5176\u4ecd\u7136\u53ef\u4ee5\u4e3a\u5c1a\u4e0d\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"CSP")," \u7684\u65e7\u7248\u6d4f\u89c8\u5668\u7684\u7528\u6237\u63d0\u4f9b\u4fdd\u62a4\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection")," \u53ef\u4ee5\u914d\u7f6e\u4e0b\u8ff0\u56db\u4e2a\u503c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0"),": \u7981\u6b62XSS\u8fc7\u6ee4\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1"),"\uff1a\u542f\u7528XSS\u8fc7\u6ee4\uff08\u901a\u5e38\u6d4f\u89c8\u5668\u662f\u9ed8\u8ba4\u7684\uff09\u3002 \u5982\u679c\u68c0\u6d4b\u5230\u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff0c\u6d4f\u89c8\u5668\u5c06\u6e05\u9664\u9875\u9762\uff08\u5220\u9664\u4e0d\u5b89\u5168\u7684\u90e8\u5206\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1;mode=block"),"\uff1a\u542f\u7528XSS\u8fc7\u6ee4\u3002 \u5982\u679c\u68c0\u6d4b\u5230\u653b\u51fb\uff0c\u6d4f\u89c8\u5668\u5c06\u4e0d\u4f1a\u6e05\u9664\u9875\u9762\uff0c\u800c\u662f\u963b\u6b62\u9875\u9762\u52a0\u8f7d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1; report=<reporting-URI>"),"\uff1a Chromium only\uff0c\u542f\u7528XSS\u8fc7\u6ee4\u3002 \u5982\u679c\u68c0\u6d4b\u5230\u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff0c\u6d4f\u89c8\u5668\u5c06\u6e05\u9664\u9875\u9762\u5e76\u4f7f\u7528CSP report-uri (en-US)\u6307\u4ee4\u7684\u529f\u80fd\u53d1\u9001\u8fdd\u89c4\u62a5\u544a\u3002")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enable"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"X-XSS-Protection \u914d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1; mode=block"))))))}d.isMDXComponent=!0}}]);