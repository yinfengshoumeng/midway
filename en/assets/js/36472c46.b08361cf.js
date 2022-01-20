"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7525],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},625:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"TableStore"},l=void 0,c={unversionedId:"extensions/tablestore",id:"version-2.0.0/extensions/tablestore",title:"TableStore",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 midway \u63a5\u5165\u963f\u91cc\u4e91 TableStore\u3002",source:"@site/versioned_docs/version-2.0.0/extensions/tablestore.md",sourceDirName:"extensions",slug:"/extensions/tablestore",permalink:"/en/docs/2.0.0/extensions/tablestore",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/versioned_docs/version-2.0.0/extensions/tablestore.md",tags:[],version:"2.0.0",frontMatter:{title:"TableStore"},sidebar:"component",previous:{title:"\u8fdb\u7a0b\u5171\u4eab\uff08ProcessAgent\uff09",permalink:"/en/docs/2.0.0/extensions/process_agent"},next:{title:"gRPC",permalink:"/en/docs/2.0.0/extensions/grpc"}},p=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",children:[],level:2},{value:"\u5f15\u5165\u7ec4\u4ef6",id:"\u5f15\u5165\u7ec4\u4ef6",children:[],level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[],level:2},{value:"\u4f7f\u7528 TableStore \u670d\u52a1",id:"\u4f7f\u7528-tablestore-\u670d\u52a1",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 midway \u63a5\u5165\u963f\u91cc\u4e91 TableStore\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/tablestore@2 --save\n")),(0,a.kt)("p",null,"\u200b"),(0,a.kt)("h2",{id:"\u5f15\u5165\u7ec4\u4ef6"},"\u5f15\u5165\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u5f15\u5165\u7ec4\u4ef6\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration.ts"),"\xa0 \u4e2d\u5bfc\u5165\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport * as tablestore from '@midwayjs/tablestore';\nimport { join } from 'path';\n\n@Configuration({\n  imports: [\n    tablestore, // \u5bfc\u5165 tablestore \u7ec4\u4ef6\n  ],\n  importConfigs: [join(__dirname, 'config')],\n})\nexport class ContainerLifeCycle {}\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"\u6bd4\u5982\uff1a\n\u200b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5355\u5ba2\u6237\u7aef\u914d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export const tableStore = {\n  client: {\n    accessKeyId: '<your access key id>',\n    secretAccessKey: '<your access key secret>',\n    stsToken:\n      '<your stsToken>' /*When you use the STS authorization, you need to fill in. ref:https://help.aliyun.com/document_detail/27364.html*/,\n    endpoint: '<your endpoint>',\n    instancename: '<your instance name>',\n  },\n};\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u591a\u4e2a\u5ba2\u6237\u7aef\u914d\u7f6e\uff0c\u9700\u8981\u914d\u7f6e\u591a\u4e2a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export const tableStore = {\n  clients: {\n    db1: {\n      accessKeyId: '<your access key id>',\n      secretAccessKey: '<your access key secret>',\n      stsToken:\n        '<your stsToken>' /*When you use the STS authorization, you need to fill in. ref:https://help.aliyun.com/document_detail/27364.html*/,\n      endpoint: '<your endpoint>',\n      instancename: '<your instance name>',\n    },\n    db2: {\n      accessKeyId: '<your access key id>',\n      secretAccessKey: '<your access key secret>',\n      stsToken:\n        '<your stsToken>' /*When you use the STS authorization, you need to fill in. ref:https://help.aliyun.com/document_detail/27364.html*/,\n      endpoint: '<your endpoint>',\n      instancename: '<your instance name>',\n    },\n  },\n};\n")),(0,a.kt)("p",null,"\u66f4\u591a\u53c2\u6570\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aliyun/aliyun-tablestore-nodejs-sdk"},"aliyun tablestore sdk")," \u6587\u6863\u3002\n\u200b"),(0,a.kt)("h2",{id:"\u4f7f\u7528-tablestore-\u670d\u52a1"},"\u4f7f\u7528 TableStore \u670d\u52a1"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u4efb\u610f\u7684\u4ee3\u7801\u4e2d\u6ce8\u5165\u4f7f\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Controller, Inject, Get } from '@midwayjs/decorator';\nimport { TableStoreService } from '@midwayjs/tablestore';\n\n@Provide()\nexport class UserService {\n  @Inject()\n  tableStoreService: TableStoreService;\n\n  async invoke() {\n    await this.tableStoreService.putRow(params);\n  }\n}\n")),(0,a.kt)("p",null,"\u200b"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"TableStoreServiceFactory")," \u83b7\u53d6\u4e0d\u540c\u7684\u5b9e\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { TableStoreServiceFactory } from '@midwayjs/tablestore';\nimport { join } from 'path';\n\n@Provide()\nexport class UserService {\n  @Inject()\n  tableStoreServiceFactory: TableStoreServiceFactory;\n\n  async save() {\n    const db1 = await this.tableStoreServiceFactory.get('db1');\n    const db2 = await this.tableStoreServiceFactory.get('db2');\n\n    //...\n  }\n}\n")),(0,a.kt)("p",null,"\u793a\u4f8b\uff1agetRow"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { join } from 'path';\nimport {\n  TableStoreService,\n  Long,\n  CompositeCondition,\n  SingleColumnCondition,\n  LogicalOperator,\n  ComparatorType,\n} from '@midawyjs/tablestore';\n\n@Provide()\nexport class UserService {\n  @Inject()\n  tableStoreService: TableStoreService;\n\n  async getInfo() {\n    const data = await tableStoreService.getRow({\n      tableName: 'sampleTable',\n      primaryKey: [{ gid: Long.fromNumber(20013) }, { uid: Long.fromNumber(20013) }],\n      columnFilter: condition,\n    });\n\n    // TODO\n  }\n}\n")),(0,a.kt)("p",null,"\u5982\u793a\u4f8b\u6240\u793a\uff0c\u539f\u6709\u7684 tablestore \u5305\u4e2d\u5bfc\u51fa\u7684\u7c7b\u578b\uff0c\u5e94\u8be5\u90fd\u5df2\u7ecf\u88ab @midwayjs/tablestore \u4ee3\u7406\u548c\u63a5\u7ba1\uff0c\u66f4\u591a\u5177\u4f53\u65b9\u6cd5\u53c2\u6570\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/midway/tree/2.x/packages/tablestore/test/sample"},"\u793a\u4f8b"),"\u3002"))}m.isMDXComponent=!0}}]);