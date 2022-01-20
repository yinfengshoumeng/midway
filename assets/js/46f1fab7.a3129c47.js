"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7279],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5728:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"HTTP \u89e6\u53d1\u5668"},p=void 0,s={unversionedId:"serverless/aliyun_trigger_http",id:"version-2.0.0/serverless/aliyun_trigger_http",title:"HTTP \u89e6\u53d1\u5668",description:"\u963f\u91cc\u4e91\u7684 HTTP \u89e6\u53d1\u5668\u548c\u5176\u4ed6\u5e73\u53f0\u7684\u6709\u6240\u533a\u522b\uff0c\u662f\u72ec\u7acb\u4e8e API \u7f51\u5173\u7684\u53e6\u4e00\u5957\u670d\u52a1\u4e8e HTTP \u573a\u666f\u7684\u89e6\u53d1\u5668\u3002\u76f8\u6bd4\u4e8e API \u7f51\u5173\uff0c\u8be5\u89e6\u53d1\u5668\u66f4\u6613\u4e8e\u4f7f\u7528\u548c\u914d\u7f6e\u3002",source:"@site/versioned_docs/version-2.0.0/serverless/aliyun_trigger_http.md",sourceDirName:"serverless",slug:"/serverless/aliyun_trigger_http",permalink:"/docs/2.0.0/serverless/aliyun_trigger_http",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/versioned_docs/version-2.0.0/serverless/aliyun_trigger_http.md",tags:[],version:"2.0.0",frontMatter:{title:"HTTP \u89e6\u53d1\u5668"},sidebar:"Serverless",previous:{title:"\u4e8b\u4ef6\u89e6\u53d1\u5668\uff08Event\uff09",permalink:"/docs/2.0.0/serverless/aliyun_trigger_event"},next:{title:"API \u7f51\u5173",permalink:"/docs/2.0.0/serverless/aliyun_trigger_apigw"}},c=[{value:"\u5355\u63a5\u53e3\u914d\u7f6e",id:"\u5355\u63a5\u53e3\u914d\u7f6e",children:[],level:2},{value:"\u672c\u5730\u6d4b\u8bd5",id:"\u672c\u5730\u6d4b\u8bd5",children:[],level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",children:[],level:2},{value:"\u81ea\u5b9a\u4e49\u57df\u540d",id:"\u81ea\u5b9a\u4e49\u57df\u540d",children:[],level:2},{value:"\u4e00\u4e9b\u9650\u5236",id:"\u4e00\u4e9b\u9650\u5236",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u963f\u91cc\u4e91\u7684 HTTP \u89e6\u53d1\u5668\u548c\u5176\u4ed6\u5e73\u53f0\u7684\u6709\u6240\u533a\u522b\uff0c\u662f\u72ec\u7acb\u4e8e API \u7f51\u5173\u7684\u53e6\u4e00\u5957\u670d\u52a1\u4e8e HTTP \u573a\u666f\u7684\u89e6\u53d1\u5668\u3002\u76f8\u6bd4\u4e8e API \u7f51\u5173\uff0c\u8be5\u89e6\u53d1\u5668\u66f4\u6613\u4e8e\u4f7f\u7528\u548c\u914d\u7f6e\u3002"),(0,i.kt)("h2",{id:"\u5355\u63a5\u53e3\u914d\u7f6e"},"\u5355\u63a5\u53e3\u914d\u7f6e"),(0,i.kt)("p",null,"\u901a\u8fc7\u76f4\u63a5\u5728\u4ee3\u7801\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"@ServerlessTrigger")," \u88c5\u9970\u5668\u7ed1\u5b9a HTTP \u89e6\u53d1\u5668\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, ServerlessTrigger, ServerlessTriggerType } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/faas';\n\n@Provide()\nexport class HelloAliyunService {\n  @Inject()\n  ctx: Context;\n\n  @ServerlessTrigger(ServerlessTriggerType.HTTP, {\n    path: '/',\n    method: 'get',\n  })\n  async handleHTTPEvent(@Query() name = 'midway') {\n    return `hello ${name}`;\n  }\n}\n")),(0,i.kt)("h2",{id:"\u672c\u5730\u6d4b\u8bd5"},"\u672c\u5730\u6d4b\u8bd5"),(0,i.kt)("p",null,"\u548c\u5e94\u7528\u7c7b\u4f3c\u76f8\u540c\uff0c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"createFunctionApp")," \u521b\u5efa\u51fd\u6570 app\uff0c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"createHttpRequest")," \u65b9\u5f0f\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Framework } from '@midwayjs/serverless-app';\nimport { createInitializeContext } from '@midwayjs/serverless-fc-trigger';\nimport { createFunctionApp, createHttpRequest } from '@midwayjs/mock';\n\ndescribe('test/hello_aliyun.test.ts', () => {\n  let app: Application;\n  let instance: HelloAliyunService;\n\n  beforeAll(async () => {\n    // create app\n    app = await createFunctionApp<Framework>(join(__dirname, '../'), {\n      initContext: createInitializeContext(),\n    });\n  });\n\n  afterAll(async () => {\n    await close(app);\n  });\n\n  it('should get result from http trigger', async () => {\n    const result = await createHttpRequest(app).get('/').query({\n      name: 'zhangting',\n    });\n    expect(result.text).toEqual('hello zhangting');\n  });\n});\n")),(0,i.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run deploy"),"\xa0 \u90e8\u7f72\u4ee3\u7801\u3002"),(0,i.kt)("p",null,"\u53d1\u5e03\u5b8c\u6210\u540e\uff0c\u5e73\u53f0\u72b6\u6001\u5982\u4e0b\u3002"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1586685106514-c52880d4-c447-4bc1-9b8b-6db99dd81878.png#height=436&id=wtVSC&margin=%5Bobject%20Object%5D&name=image.png&originHeight=872&originWidth=2684&originalType=binary&size=164942&status=done&style=none&width=1342",width:"1342"}),(0,i.kt)("p",null,"\u53d1\u5e03\u6548\u679c\uff0c\u6bcf\u4e2a\u914d\u7f6e\u7684\u51fd\u6570\u90fd\u5c06\u53d1\u5e03\u6210\u4e00\u4e2a\u5e73\u53f0\u4e0a\u7684\u51fd\u6570\uff0c\u5e76\u4e14\u81ea\u52a8\u914d\u7f6e http \u89e6\u53d1\u5668\uff1a"),(0,i.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u57df\u540d"},"\u81ea\u5b9a\u4e49\u57df\u540d"),(0,i.kt)("p",null,"\u4f60\u9700\u8981\u63d0\u524d\u7533\u8bf7\u4e00\u4e2a\u57df\u540d\uff0c\u5728\u56fd\u5185\u7684\u8bdd\uff0c\u9700\u8981\u5907\u6848\uff0c\u5426\u5219\u65e0\u6cd5\u7ed1\u5b9a\u3002"),(0,i.kt)("p",null,"\u7b2c\u4e00\u6b65\uff0c\u5148\u5c06\u9ed8\u8ba4\u81ea\u52a8\u751f\u6210\u7684\u57df\u540d\u7684\u529f\u80fd\u5173\u95ed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"service:\n  name: midway-faas-examples\n\nprovider:\n  name: aliyun\n\ncustom:\n  customDomain:\n    domainName: false ## 5.1 \u4e4b\u540e\uff0c\u628a\u6574\u6bb5\u5220\u9664\u4e5f\u53ef\u4ee5\n")),(0,i.kt)("p",null,"\u7b2c\u4e8c\u6b65\uff0c\u6dfb\u52a0\u57df\u540d\u89e3\u6790\u5230\u4f60\u51fd\u6570\u5bf9\u5e94\u7f51\u5173\u3002"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1588654519449-2c98a9d8-ffac-42b7-bcf2-ac19c21f08ac.png#height=478&id=kmxTj&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1090&originWidth=1700&originalType=binary&size=132002&status=done&style=none&width=746",width:"746"}),(0,i.kt)("p",null,"\u5728\u51fd\u6570\u9875\u9762\u7ed1\u5b9a\u81ea\u5b9a\u4e49\u57df\u540d\uff0c\u6dfb\u52a0\u8def\u7531"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1588654440214-75bfd1c2-1b6a-4c2b-9c57-198bec9d4e64.png#height=706&id=IEhZC&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1412&originWidth=2794&originalType=binary&size=310772&status=done&style=none&width=1397",width:"1397"}),(0,i.kt)("p",null,"\u7ed1\u5b9a\u5b8c\u6210\u540e\uff0c\u5373\u53ef\u7528\u57df\u540d\u8bbf\u95ee\u3002"),(0,i.kt)("h2",{id:"\u4e00\u4e9b\u9650\u5236"},"\u4e00\u4e9b\u9650\u5236"),(0,i.kt)("p",null,"Request Headers \u4e0d\u652f\u6301\u4ee5 x-fc-\u5f00\u5934\u7684\u81ea\u5b9a\u4e49\u53ca\u4ee5\u4e0b\u5b57\u6bb5\u7684\u81ea\u5b9a\u4e49\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"accept-encoding"),(0,i.kt)("li",{parentName:"ul"},"connection"),(0,i.kt)("li",{parentName:"ul"},"keep-alive"),(0,i.kt)("li",{parentName:"ul"},"proxy-authorization"),(0,i.kt)("li",{parentName:"ul"},"te"),(0,i.kt)("li",{parentName:"ul"},"trailer"),(0,i.kt)("li",{parentName:"ul"},"transfer-encoding")),(0,i.kt)("p",null,"Response Headers \u4e0d\u652f\u6301\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"x-fc-")," \u5f00\u5934\u7684\u81ea\u5b9a\u4e49\u53ca\u4ee5\u4e0b\u5b57\u6bb5\u7684\u81ea\u5b9a\u4e49\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"connection"),(0,i.kt)("li",{parentName:"ul"},"content-length"),(0,i.kt)("li",{parentName:"ul"},"content-encoding"),(0,i.kt)("li",{parentName:"ul"},"date"),(0,i.kt)("li",{parentName:"ul"},"keep-alive"),(0,i.kt)("li",{parentName:"ul"},"proxy-authenticate"),(0,i.kt)("li",{parentName:"ul"},"server"),(0,i.kt)("li",{parentName:"ul"},"trailer"),(0,i.kt)("li",{parentName:"ul"},"transfer-encoding"),(0,i.kt)("li",{parentName:"ul"},"upgrade")),(0,i.kt)("p",null,"Request \u9650\u5236\u9879\u3002\u5982\u679c\u8d85\u8fc7\u4ee5\u4e0b\u9650\u5236\uff0c\u4f1a\u8fd4\u56de 400 \u72b6\u6001\u7801\u548c InvalidArgument \u9519\u8bef\u7801\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Headers \u5927\u5c0f\uff1aHeaders \u4e2d\u7684\u6240\u6709 Key \u548c Value \u7684\u603b\u5927\u5c0f\u4e0d\u5f97\u8d85\u8fc7 4 KB\u3002"),(0,i.kt)("li",{parentName:"ul"},"Path \u5927\u5c0f\uff1a\u5305\u62ec\u6240\u6709\u7684 Query Params\uff0cPath \u7684\u603b\u5927\u5c0f\u4e0d\u5f97\u8d85\u8fc7 4 KB\u3002"),(0,i.kt)("li",{parentName:"ul"},"Body \u5927\u5c0f\uff1aHTTP Body \u7684\u603b\u5927\u5c0f\u4e0d\u5f97\u8d85\u8fc7 6 MB\u3002")),(0,i.kt)("p",null,"Response \u9650\u5236\u9879\u3002\u5982\u679c\u8d85\u8fc7\u4ee5\u4e0b\u9650\u5236\uff0c\u4f1a\u8fd4\u56de 502 \u72b6\u6001\u7801\u548c BadResponse \u9519\u8bef\u7801\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Headers \u5927\u5c0f\uff1aHeaders \u4e2d\u7684\u6240\u6709 Key \u548c Value \u7684\u603b\u5927\u5c0f\u4e0d\u5f97\u8d85\u8fc7 4 KB\u3002")))}m.isMDXComponent=!0}}]);