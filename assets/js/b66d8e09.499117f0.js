"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8426],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(t),u=l,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return t?a.createElement(k,r(r({ref:n},c),{},{components:t})):a.createElement(k,r({ref:n},c))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9123:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=t(7462),l=t(3366),i=(t(7294),t(3905)),r=["components"],o={title:"midwayjs/cli"},p=void 0,s={unversionedId:"tool/cli",id:"version-2.0.0/tool/cli",title:"midwayjs/cli",description:"@midwayjs/cli\xa0 \u662f\u65b0\u7248\u672c\u7684 Midway \u4f53\u7cfb\u5de5\u5177\u94fe\uff0c\u548c Serverless\uff0c\u4ee5\u53ca\u539f\u5e94\u7528\u7684\u5de5\u5177\u94fe\u8fdb\u884c\u4e86\u6574\u5408\u3002",source:"@site/versioned_docs/version-2.0.0/tool/cli.md",sourceDirName:"tool",slug:"/tool/cli",permalink:"/docs/2.0.0/tool/cli",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/versioned_docs/version-2.0.0/tool/cli.md",tags:[],version:"2.0.0",frontMatter:{title:"midwayjs/cli"},sidebar:"other",next:{title:"Lint \u5de5\u5177\u3001\u89c4\u5219\u548c\u683c\u5f0f\u5316",permalink:"/docs/2.0.0/tool/mwts"}},c=[{value:"\u57fa\u7840\u5165\u53e3",id:"\u57fa\u7840\u5165\u53e3",children:[],level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",children:[{value:"new \u65b0\u5efa\u9879\u76ee",id:"new-\u65b0\u5efa\u9879\u76ee",children:[],level:3},{value:"dev \u672c\u5730\u5f00\u53d1",id:"dev-\u672c\u5730\u5f00\u53d1",children:[{value:"\u53c2\u6570\u8be6\u89e3",id:"\u53c2\u6570\u8be6\u89e3",children:[],level:4}],level:3},{value:"\u672c\u5730\u5355\u6b65 Debug \u8c03\u8bd5",id:"\u672c\u5730\u5355\u6b65-debug-\u8c03\u8bd5",children:[],level:3},{value:"test \u5355\u5143\u6d4b\u8bd5",id:"test-\u5355\u5143\u6d4b\u8bd5",children:[],level:3},{value:"cov \u5355\u6d4b\u8986\u76d6\u7387",id:"cov-\u5355\u6d4b\u8986\u76d6\u7387",children:[],level:3},{value:"check \u95ee\u9898\u68c0\u6d4b",id:"check-\u95ee\u9898\u68c0\u6d4b",children:[],level:3},{value:"build \u672c\u5730\u6784\u5efa",id:"build-\u672c\u5730\u6784\u5efa",children:[],level:3},{value:"deploy \u51fd\u6570\u53d1\u5e03",id:"deploy-\u51fd\u6570\u53d1\u5e03",children:[{value:"\u51fd\u6570\u53d1\u5e03\u65f6\u57df\u540d\u914d\u7f6e",id:"\u51fd\u6570\u53d1\u5e03\u65f6\u57df\u540d\u914d\u7f6e",children:[],level:4}],level:3},{value:"package \u51fd\u6570\u6253\u5305",id:"package-\u51fd\u6570\u6253\u5305",children:[{value:"\u53c2\u6570\u8be6\u89e3",id:"\u53c2\u6570\u8be6\u89e3-1",children:[],level:4},{value:"\u51fd\u6570\u6784\u5efa\u6253\u5305\u65f6\u6587\u4ef6\u62f7\u8d1d\u903b\u8f91",id:"\u51fd\u6570\u6784\u5efa\u6253\u5305\u65f6\u6587\u4ef6\u62f7\u8d1d\u903b\u8f91",children:[],level:4}],level:3}],level:2},{value:"\u5b9e\u9a8c\u6027\u529f\u80fd",id:"\u5b9e\u9a8c\u6027\u529f\u80fd",children:[{value:"1. ignoreTsError",id:"1-ignoretserror",children:[],level:3},{value:"2. removeUselessFiles",id:"2-removeuselessfiles",children:[],level:3},{value:"3. fastInstallNodeModules",id:"3-fastinstallnodemodules",children:[],level:3}],level:2},{value:"\u6269\u5c55",id:"\u6269\u5c55",children:[{value:"1. \u751f\u547d\u5468\u671f\u6269\u5c55",id:"1-\u751f\u547d\u5468\u671f\u6269\u5c55",children:[],level:3},{value:"2. \u901a\u8fc7\u63d2\u4ef6\u8fdb\u884c\u6269\u5c55",id:"2-\u901a\u8fc7\u63d2\u4ef6\u8fdb\u884c\u6269\u5c55",children:[],level:3}],level:2}],d={toc:c};function m(e){var n=e.components,t=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/cli"),"\xa0 \u662f\u65b0\u7248\u672c\u7684 Midway \u4f53\u7cfb\u5de5\u5177\u94fe\uff0c\u548c Serverless\uff0c\u4ee5\u53ca\u539f\u5e94\u7528\u7684\u5de5\u5177\u94fe\u8fdb\u884c\u4e86\u6574\u5408\u3002"),(0,i.kt)("h2",{id:"\u57fa\u7840\u5165\u53e3"},"\u57fa\u7840\u5165\u53e3"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/cli")," \u63d0\u4f9b\u4e86\u4e24\u4e2a\u5165\u53e3\u547d\u4ee4\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"midway-bin"),"\xa0 \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"mw"),"\xa0 \u547d\u4ee4\u3002"),(0,i.kt)("p",null,"\u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/cli")," \u5b89\u88c5\u5230\u5168\u5c40\u65f6\uff0c\u4e00\u822c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"mw"),"\xa0 \u547d\u4ee4\uff0c\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"mw new xxx"),"\xa0\u3002\u5f53\u5b89\u88c5\u5230\u9879\u76ee\u4e2d\uff0c\u505a cli \u5de5\u5177\u65f6\uff0c\u6211\u4eec\u4e00\u822c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"midway-bin"),"\xa0 \u547d\u4ee4\uff0c\u4f46\u662f\u8bf7\u8bb0\u4f4f\uff0c\u8fd9\u4e24\u4e2a\u547d\u4ee4\u662f\u76f8\u540c\u7684\u3002"),(0,i.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,i.kt)("h3",{id:"new-\u65b0\u5efa\u9879\u76ee"},"new \u65b0\u5efa\u9879\u76ee"),(0,i.kt)("p",null,"\u65b0\u5efa\u9879\u76ee"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ mw new [name]\n    --template      \u6307\u5b9a\u8fdc\u7aef\u7684\u7b26\u5408 light-generator \u6807\u51c6\u7684\u811a\u624b\u67b6\u5305\n  --target        \u65b0\u5efa\u7684\u9879\u76ee\u76ee\u6807\u4f4d\u7f6e\n  --type          \u65b0\u7684\u9879\u76ee\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a web\uff0c\u53ef\u9009\u7684\u4e3afaas\u7b49\n  --npm           npm client\uff0c\u9ed8\u8ba4\u4e3a\u81ea\u52a8\u8bc6\u522b\u6dfb\u52a0registry\n")),(0,i.kt)("p",null,"\u53ef\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"--template"),"\xa0 \u6307\u5b9a\u8fdc\u7aef\u7684\u7b26\u5408 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/light-generator"},"light-generator")," \u6807\u51c6\u7684\u811a\u624b\u67b6\u5305\u3002\n\u6bd4\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ mw new hello_midway --template=@midwayjs-examples/applicaiton-koa\n")),(0,i.kt)("h3",{id:"dev-\u672c\u5730\u5f00\u53d1"},"dev \u672c\u5730\u5f00\u53d1"),(0,i.kt)("p",null,"\u4ee5\u5f53\u524d\u76ee\u5f55\u542f\u52a8\u672c\u5730\u5f00\u53d1\u547d\u4ee4\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ mw dev --ts\n  --baseDir          \u5e94\u7528\u76ee\u5f55\uff0c\u4e00\u822c\u4e3a package.json \u6240\u5728\u6587\u4ef6\u5939\uff0c\u9ed8\u8ba4\u4e3a process.cwd()\n  --sourceDir        ts\u4ee3\u7801\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4f1a\u81ea\u52a8\u5206\u6790\n  -p, --port         dev\u4fa6\u542c\u7684\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a 7001\n  --ts                           TS\u6a21\u5f0f\u8fd0\u884c\u4ee3\u7801\n  --fast             \u6781\u901f\u6a21\u5f0f\n  --framework        \u6307\u5b9a\u6846\u67b6\uff0c\u9ed8\u8ba4\u4f1a\u81ea\u52a8\u5206\u6790\n  -f, --entryFile    \u6307\u5b9a\u4f7f\u7528\u5165\u53e3\u6587\u4ef6\u6765\u542f\u52a8 bootstrap.js\n  --watchFile        \u66f4\u591a\u7684\u6587\u4ef6\u6216\u6587\u4ef6\u5939\u4fee\u6539\u4fa6\u542c\n  --notWatch         \u4ee3\u7801\u53d8\u5316\u65f6\u4e0d\u81ea\u52a8\u91cd\u542f\n")),(0,i.kt)("p",null,"\u53ef\u4ee5\u9488\u5bf9 HTTP \u573a\u666f\u4fee\u6539\u542f\u52a8\u7aef\u53e3 \u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ midway-bin dev --ts --port=7002\n")),(0,i.kt)("h4",{id:"\u53c2\u6570\u8be6\u89e3"},"\u53c2\u6570\u8be6\u89e3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--baseDir"),"\uff1a\u6307\u5b9a\u5e94\u7528\u76ee\u5f55\uff0c\u4e00\u822c\u4e3a package.json \u6240\u5728\u6587\u4ef6\u5939\uff0c\u9ed8\u8ba4\u4e3a process.cwd()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"midway-bin dev --ts --baseDir=./app\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--sourceDir"),"\uff1a\u6307\u5b9a ts \u4ee3\u7801\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4f1a\u81ea\u52a8\u5206\u6790")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"midway-bin dev --ts --sourceDir=./app/src\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-p")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"--port"),"\uff1a\u6307\u5b9a\u672c\u5730 dev server \u4fa6\u542c\u7684\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a 7001")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"midway-bin dev --ts --port=7002\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--ts"),"\uff1a\u4f7f\u7528 TS \u6a21\u5f0f\u8fd0\u884c\u4ee3\u7801")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"midway-bin dev --ts\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--fast"),"\uff1a\u6781\u901f\u6a21\u5f0f\uff0c\u66f4\u5feb\u901f\u7684 dev server \u542f\u52a8\u548c\u91cd\u542f")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"// \u4f7f\u7528 ts-node \u7684\u5feb\u901fdev\u6a21\u5f0f\nmidway-bin dev --ts --fast\n\n// \u4f7f\u7528 esbuild \u7684\u5feb\u901fdev\u6a21\u5f0f\nmidway-bin dev --ts --fast=esbuild\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--framework"),"\uff1a\u6307\u5b9a\u542f\u52a8 dev server \u4f7f\u7528\u7684\u6846\u67b6\uff0c\u9ed8\u8ba4\u4f1a\u6839\u636e\u4ee3\u7801\u81ea\u52a8\u5206\u6790")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"midway-bin dev --ts --framework=@midwayjs/faas\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-f")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"--entryFile"),"\uff1a\u6307\u5b9a\u4f7f\u7528\u5165\u53e3\u6587\u4ef6\u6765\u542f\u52a8")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"midway-bin dev --ts --entryFile=bootstrap.js\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--watchFile"),"\uff1a\u6307\u5b9a\u66f4\u591a\u7684\u6587\u4ef6\u6216\u6587\u4ef6\u5939\u4fee\u6539\u4fa6\u542c\uff0c\u9ed8\u8ba4\u4fa6\u542c ",(0,i.kt)("inlineCode",{parentName:"li"},"sourceDir")," \u76ee\u5f55\u4e2d ",(0,i.kt)("inlineCode",{parentName:"li"},".ts"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},".yml"),"\u548c ",(0,i.kt)("inlineCode",{parentName:"li"},".json"),"\u7ed3\u5c3e\u7684\u6587\u4ef6\uff08\u53ef\u901a\u8fc7 --watchExt \u53c2\u6570\u6307\u5b9a\u66f4\u591a\u6269\u5c55\u540d\uff09\uff0c\u4ee5\u53ca ",(0,i.kt)("inlineCode",{parentName:"li"},"baseDir")," \u76ee\u5f55\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"f.yml")," \u6587\u4ef6")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"// \u6307\u5b9a\u591a\u4e2a\u6587\u4ef6\uff0c\u4f7f\u7528\u82f1\u6587\u9017\u53f7\u5206\u9694\nmidway-bin dev --ts --watchFile=./a.txt,./b.txt\n\n// \u6307\u5b9a\u591a\u4e2a\u6587\u4ef6\u5939\u548c\u6587\u4ef6\uff0c\u4f7f\u7528\u82f1\u6587\u9017\u53f7\u5206\u9694\nmidway-bin dev --ts --watchFile=./test,./b.txt\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--watchExt"),"\uff1a\u6307\u5b9a\u66f4\u591a\u7684\u4fa6\u542c\u6587\u4ef6\u6269\u5c55\u540d\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},".ts"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},".yml"),"\u548c ",(0,i.kt)("inlineCode",{parentName:"li"},".json"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"// \u6307\u5b9a\u591a\u4e2a\u6587\u4ef6\u6269\u5c55\u540d\uff0c\u4f7f\u7528\u82f1\u6587\u9017\u53f7\u5206\u9694\nmidway-bin dev --ts --watchExt=.js,.html\n")),(0,i.kt)("h3",{id:"\u672c\u5730\u5355\u6b65-debug-\u8c03\u8bd5"},"\u672c\u5730\u5355\u6b65 Debug \u8c03\u8bd5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"li"},"--debug")," \u53c2\u6570\u542f\u52a8 debug \u6a21\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"chrome devtools")," \u8fdb\u884c\u5355\u6b65\u4ee3\u7801\u8c03\u8bd5\uff1a")),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/128621/1635994136312-f1eda8ba-165d-4322-82b8-b21d3b9c6beb.png#clientId=u32db4720-b7d0-4&crop=0&crop=0&crop=1&crop=1&from=ui&height=177&id=z4u1f&margin=%5Bobject%20Object%5D&name=69456694-513D-4388-B52F-001562D4A520.png&originHeight=666&originWidth=1538&originalType=binary&ratio=1&rotation=0&showTitle=false&size=276022&status=done&style=none&taskId=ud161d835-1e96-4246-8061-c795e9a0ff1&title=&width=409",width:"409"}),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"chrome://inspect/")," \u6253\u5f00 ",(0,i.kt)("inlineCode",{parentName:"p"},"nodejs devtools")," \u8fdb\u884c\u65ad\u70b9\u8c03\u8bd5\uff1a"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/128621/1635995391144-a9ec0d4a-c6fb-4638-a292-615a3588d33d.png#clientId=u069cda7c-313b-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=236&id=u4986bfa4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=942&originWidth=1948&originalType=binary&ratio=1&rotation=0&showTitle=false&size=572568&status=done&style=none&taskId=u07555349-8e09-42b2-bd94-f93160b0431&title=&width=488",width:"488"}),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/128621/1635995418427-282d256a-de65-4eba-9a83-b474d3d74f9f.png#clientId=u069cda7c-313b-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=445&id=u83271ad1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1280&originWidth=2280&originalType=binary&ratio=1&rotation=0&showTitle=false&size=710504&status=done&style=none&taskId=uc2614db9-dea9-48d7-b87d-8cb608c8770&title=&width=792",width:"792"}),(0,i.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 chrome \u6d4f\u89c8\u5668\u6253\u5f00\u547d\u4ee4\u884c\u4e2d\u8f93\u51fa\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"devtools")," \u534f\u8bae\u7684\u94fe\u63a5\uff0c\u7ed9\u5bf9\u5e94\u4ee3\u7801\u6dfb\u52a0\u65ad\u70b9\u540e\u8c03\u8bd5\uff1a"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/128621/1635994137067-f663409a-483d-41f5-bc86-4798182edb38.png#clientId=u32db4720-b7d0-4&crop=0&crop=0&crop=1&crop=1&from=ui&height=135&id=GooAh&margin=%5Bobject%20Object%5D&name=10016148-385E-46A4-8B3A-0A0110BECD18.png&originHeight=950&originWidth=2878&originalType=binary&ratio=1&rotation=0&showTitle=false&size=744085&status=done&style=none&taskId=u892d9925-9206-4946-a1ed-cb6043c557d&title=&width=409",width:"409"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"vscode")," \uff0c\u90a3\u4e48\u60a8\u53ef\u4ee5\u4f7f\u7528 vscode \u7684 js debug terminal\uff0c\u5728\u5176\u4e2d\u6267\u884c dev \u547d\u4ee4\uff08\u65e0\u9700\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"li"},"--debug")," \u53c2\u6570\uff09\u542f\u52a8\u5c31\u53ef\u4ee5\u6253\u65ad\u70b9\u8c03\u8bd5\u4e86\u3002",(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/128621/1625237917317-8e7bf448-fded-4bc7-b743-6aade0ebcba2.png#clientId=u7c8a3183-c32b-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=650&id=u75e3aec7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1300&originWidth=2868&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1140427&status=done&style=none&taskId=ubcffa6c8-02eb-4256-ba7e-7ab3128c1ee&title=&width=1434",width:"1434"}))),(0,i.kt)("h3",{id:"test-\u5355\u5143\u6d4b\u8bd5"},"test \u5355\u5143\u6d4b\u8bd5"),(0,i.kt)("p",null,"\u4ee5\u5f53\u524d\u76ee\u5f55\u542f\u52a8\u6d4b\u8bd5\uff0c\u9ed8\u8ba4\u4f7f\u7528 jest \u5de5\u5177\uff0c\u53ef\u4ee5\u4f7f\u7528 --mocha \u53c2\u6570\u6307\u5b9a\u4f7f\u7528 mocha\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ midway-bin test --ts\n  -c, --cov    \u83b7\u53d6\u4ee3\u7801\u6d4b\u8bd5\u8986\u76d6\u7387\n  -f, --file   \u6307\u5b9a\u6d4b\u8bd5\u6587\u4ef6\uff0c\u4f8b\u5982 ./test/index.test.ts\n  --ts               TS\u6a21\u5f0f\u8fd0\u884c\u5355\u6d4b\n  --forceExit  jest forceExit\n  --runInBand  jest runInBand\n  -w, --watch  watch\u6a21\u5f0f\n  --mocha            \u4f7f\u7528 mocha \u8fdb\u884c\u5355\u6d4b\n")),(0,i.kt)("p",null,"\u4f7f\u7528 mocha \u8fdb\u884c\u5355\u6d4b\u65f6\uff0c\u9700\u8981\u624b\u52a8\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"mocha")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"@types/mocha")," \u4e24\u4e2a\u4f9d\u8d56\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u4e2d\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"npm i mocha @types/mocha -D")," \u3002\n\u200b"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u9879\u76ee\u4e2d\u4f7f\u7528\u4e86 TypeScript \u7684 path alias\uff0c\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"/docs/testing#BKmhH"},"midway_v2/testing")))),(0,i.kt)("p",null,"\u200b"),(0,i.kt)("p",null,"\u5355\u6d4b\u7f16\u5199\u6587\u6863\u8bf7\u53c2\u9605\uff1a",(0,i.kt)("a",{parentName:"p",href:"/docs/serverless_testing"},"Serverless \u51fd\u6570\u7684\u5355\u6d4b"),"\n\u200b"),(0,i.kt)("h3",{id:"cov-\u5355\u6d4b\u8986\u76d6\u7387"},"cov \u5355\u6d4b\u8986\u76d6\u7387"),(0,i.kt)("p",null,"\u4ee5\u5f53\u524d\u76ee\u5f55\u542f\u52a8\u6d4b\u8bd5\uff0c\u5e76\u8f93\u51fa\u8986\u76d6\u7387\u4fe1\u606f\uff0c\u9ed8\u8ba4\u4f7f\u7528 jest \u5de5\u5177\uff0c\u53ef\u4ee5\u4f7f\u7528 --mocha \u53c2\u6570\u6307\u5b9a\u4f7f\u7528 mocha\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ midway-bin cov --ts\n")),(0,i.kt)("p",null,"\u4f7f\u7528 mocha \u8fdb\u884c\u5355\u6d4b\u8986\u76d6\u7387\u65f6\uff0c\u9664 ",(0,i.kt)("inlineCode",{parentName:"p"},"mocha")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"@types/mocha")," \u4e24\u4e2a\u4f9d\u8d56\u5916\uff0c\u8fd8\u9700\u8981\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"nyc")," \u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u4e2d\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"npm i nyc -D")," \u3002\n\u200b"),(0,i.kt)("h3",{id:"check-\u95ee\u9898\u68c0\u6d4b"},"check \u95ee\u9898\u68c0\u6d4b"),(0,i.kt)("p",null,"\u81ea\u52a8\u5206\u6790\u4ee3\u7801\u4e2d\u5b58\u5728\u7684\u95ee\u9898\uff0c\u5e76\u7ed9\u51fa\u4fee\u590d\u5efa\u8bae\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ midway-bin check\n")),(0,i.kt)("p",null,"\u76ee\u524d\u5df2\u63d0\u4f9b 31 \u9879\u95ee\u9898\u7684\u6821\u9a8c\u3002"),(0,i.kt)("h3",{id:"build-\u672c\u5730\u6784\u5efa"},"build \u672c\u5730\u6784\u5efa"),(0,i.kt)("p",null,"\u4f7f\u7528 mwcc\uff08tsc\uff09\u8fdb\u884c ts \u4ee3\u7801\u7f16\u8bd1\uff0c\u9002\u7528\u4e8e\u975e Serverless \u9879\u76ee\uff0cServerless \u9879\u76ee\u8bf7\u4f7f\u7528 package\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ midway-bin build -c\n  -c, --clean    \u6e05\u7406\u6784\u5efa\u7ed3\u679c\u76ee\u5f55\n  --srcDir       \u6e90\u4ee3\u7801\u76ee\u5f55\uff0c\u9ed8\u8ba4 src\n  --outDir       \u6784\u5efa\u8f93\u51fa\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3a tsconfig \u4e2d\u7684 outDir \u6216 dist\n  --tsConfig     tsConfig json \u5b57\u7b26\u4e32\u6216\u6587\u4ef6\u4f4d\u7f6e\n  --buildCache   \u4fdd\u7559\u6784\u5efa\u7f13\u5b58\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"c"),"\xa0 ",(0,i.kt)("inlineCode",{parentName:"li"},"clean"),"\xa0 \u6e05\u7406\u6784\u5efa\u76ee\u5f55")),(0,i.kt)("h3",{id:"deploy-\u51fd\u6570\u53d1\u5e03"},"deploy \u51fd\u6570\u53d1\u5e03"),(0,i.kt)("p",null,"\u9002\u7528\u4e8e Serverless \u9879\u76ee\u53d1\u5e03\u5230 Aliyun FC\u3001Tencent SCF\u3001Aws Lambda \u7b49\u8fd0\u884c\u65f6\u3002"),(0,i.kt)("p",null,"\u6267\u884c deploy \u547d\u4ee4\u4f1a\u81ea\u52a8\u6267\u884c package\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ midway-bin deploy\n  -y, --yes              \u53d1\u5e03\u7684\u786e\u8ba4\u90fd\u662fyes\n  --resetConfig          \u91cd\u7f6e\u53d1\u5e03\u914d\u7f6e\uff0cAK/AK/Region\u7b49\n  --serverlessDev    \u4f7f\u7528 Serverless Dev \u8fdb\u884caliyun fc\u51fd\u6570\u53d1\u5e03\uff0c\u76ee\u524d\u9ed8\u8ba4\u4e3a funcraft\n  ...\u517c\u5bb9package\u547d\u4ee4\u7684\u6240\u6709\u53c2\u6570\n")),(0,i.kt)("h4",{id:"\u51fd\u6570\u53d1\u5e03\u65f6\u57df\u540d\u914d\u7f6e"},"\u51fd\u6570\u53d1\u5e03\u65f6\u57df\u540d\u914d\u7f6e"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"f.yml")," \u4e2d\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"custom.customDomain")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"auto")," \uff0c\u5219\u5728\u53d1\u5e03\u65f6\u4f1a\u914d\u7f6e\u4e00\u4e2a\u4e34\u65f6\u7684\u81ea\u52a8\u57df\u540d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"custom:\n  customDomain: auto\n")),(0,i.kt)("p",null,"\u5982\u679c\u8981\u53d6\u6d88\u81ea\u52a8\u7684\u57df\u540d\uff0c\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"customDomain")," \u6539\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"custom:\n  customDomain: false\n")),(0,i.kt)("p",null,"\u5982\u679c\u6709\u81ea\u5b9a\u4e49\u57df\u540d\uff0c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"customDomain")," \u4e2d\u914d\u7f6e\u5373\u53ef\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"custom:\n    customDomain: test.example.com\n")),(0,i.kt)("h3",{id:"package-\u51fd\u6570\u6253\u5305"},"package \u51fd\u6570\u6253\u5305"),(0,i.kt)("p",null,"\u9002\u7528\u4e8e Serverless \u9879\u76ee\u6784\u5efa"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ midway-bin package\n  --npm                      npm client\uff0c\u9ed8\u8ba4\u4e3a\u81ea\u52a8\u8bc6\u522b\u6dfb\u52a0registry\n  --sourceDir                \u6e90\u4ee3\u7801\u6240\u5728\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4f1a\u81ea\u52a8\u5206\u6790\n  --buildDir                 \u6784\u5efa\u7ed3\u679c\u76ee\u6807\u76ee\u5f55\n  --sharedTargetDir  \u5171\u4eab\u6587\u4ef6\u76ee\u6807\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3astatic\uff0c\u53c2\u8003 --sharedDir \u53c2\u6570\n  --sharedDir                \u6784\u5efa\u65f6\u4f1a\u62f7\u8d1d\u6b64\u76ee\u5f55\u5230\u7ed3\u679c\u76ee\u5f55\u5185\u7684 $sharedTargetDir \u76ee\u5f55\n  --skipZip                  \u8df3\u8fc7zip\u6253\u5305\n  --skipBuild                \u8df3\u8fc7ts\u4ee3\u7801\u6784\u5efa\n  --tsConfig             tsConfig json \u5b57\u7b26\u4e32\u6216\u6587\u4ef6\u4f4d\u7f6e\n  --function                 \u6307\u5b9a\u6253\u5305\u54ea\u51e0\u4e2a\u51fd\u6570\uff0c\u591a\u4e2a\u4f7f\u7528\u82f1\u6587 , \u5206\u9694\n")),(0,i.kt)("h4",{id:"\u53c2\u6570\u8be6\u89e3-1"},"\u53c2\u6570\u8be6\u89e3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--function"),"\uff1a\u6307\u5b9a\u6253\u5305\u54ea\u51e0\u4e2a\u51fd\u6570\uff0c\u591a\u4e2a\u51fd\u6570\u4f7f\u7528\u82f1\u6587 , \u5206\u9694")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"// \u6253\u5305\nmidway-bin package --function=a,b,c\n\n// \u53d1\u5e03\nmidway-bin deploy --function=a,b,c\n")),(0,i.kt)("h4",{id:""}),(0,i.kt)("h4",{id:"\u51fd\u6570\u6784\u5efa\u6253\u5305\u65f6\u6587\u4ef6\u62f7\u8d1d\u903b\u8f91"},"\u51fd\u6570\u6784\u5efa\u6253\u5305\u65f6\u6587\u4ef6\u62f7\u8d1d\u903b\u8f91"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u62f7\u8d1d\u7684\u5185\u5bb9\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"\u540e\u7aef\u4ee3\u7801\u6587\u4ef6\u5939")," \uff08\u4e00\u822c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," \u3001faas \u524d\u540e\u7aef\u4e00\u4f53\u5316\u4e00\u822c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"src/apis"),"\uff09\u5185\u7684\u6240\u6709\u975e ",(0,i.kt)("inlineCode",{parentName:"p"},".ts")," \u540e\u7f00\u7684\u6587\u4ef6\uff0c\u4ee5\u53ca ",(0,i.kt)("inlineCode",{parentName:"p"},"\u9879\u76ee\u6839\u76ee\u5f55")," \u4e0b\u7684\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},".js"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},".json"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},".yml")," \u4e3a\u6269\u5c55\u540d\u7684\u6240\u6709\u6587\u4ef6\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," \u3001",(0,i.kt)("inlineCode",{parentName:"p"},"app")," \u6587\u4ef6\u5939\u5185\u7684\u6240\u6709\u6587\u4ef6\u3002\n\u200b"),(0,i.kt)("p",null,"\u5982\u679c\u8981\u62f7\u8d1d\u989d\u5916\u7684\u6587\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"f.yml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"package"),"\u5b57\u6bb5 \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"include")," \u6765\u6307\u5b9a\uff0c\u53ef\u4ee5\u914d\u7f6e\u6587\u4ef6\u540d\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"fast-glob")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrmlnc/fast-glob#pattern-syntax"},"\u8bed\u6cd5 \u2197")," \u5339\u914d\uff0c\u4f7f\u7528\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"# ...\u5df2\u7701\u7565\u5176\u4ed6\u5c5e\u6027\u7684\u5c55\u793a\n\npackage:\n  include:          # \u901a\u8fc7 include \u5c5e\u6027\u6307\u5b9a\u989d\u5916\u6253\u5305\u6587\u4ef6\u914d\u7f6e\n    - static        # \u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684 static \u6587\u4ef6\u5939\n    - a.json        # \u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684 a.json \u6587\u4ef6\n    - a/b/c.js      # \u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684 a \u76ee\u5f55\u4e0b\u7684 b \u76ee\u5f55\u4e0b\u7684 c.js \u6587\u4ef6\n    - a/b/c.json    # \u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684 a \u76ee\u5f55\u4e0b\u7684 b \u76ee\u5f55\u4e0b\u7684 c.js \u6587\u4ef6\n    - xxx/**/*.js   # \u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684 xxx \u76ee\u5f55\u4e0b\u7684\u6240\u6709 js \u6587\u4ef6\n")),(0,i.kt)("p",null,"\u200b"),(0,i.kt)("h2",{id:"\u5b9e\u9a8c\u6027\u529f\u80fd"},"\u5b9e\u9a8c\u6027\u529f\u80fd"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"f.yml")," \u4e2d\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"experimentalFeatures")," \u914d\u7f6e\u5f00\u542f\u5b9e\u9a8c\u6027\u529f\u80fd"),(0,i.kt)("h3",{id:"1-ignoretserror"},"1. ignoreTsError"),(0,i.kt)("p",null,"\u5728\u6784\u5efa\u65f6\u5ffd\u7565 ts error\uff0c\u4e0d\u4e2d\u65ad\u6784\u5efa\u8fc7\u7a0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"experimentalFeatures:\n    ignoreTsError: true\n")),(0,i.kt)("h3",{id:"2-removeuselessfiles"},"2. removeUselessFiles"),(0,i.kt)("p",null,"\u5728\u6784\u5efa\u65f6\u79fb\u9664\u5927\u91cf\u65e0\u6548\u6587\u4ef6\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"LICENSE"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"*.ts.map"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"**/test/")," \u7b49\u6587\u4ef6\uff0c\u53ef\u4ee5\u6709\u6548\u51cf\u5c11\u6784\u5efa\u5305\u5c3a\u5bf8\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"experimentalFeatures:\n    removeUselessFiles: true\n")),(0,i.kt)("h3",{id:"3-fastinstallnodemodules"},"3. fastInstallNodeModules"),(0,i.kt)("p",null,"\u5728\u6784\u5efa\u65f6\u4ece\u5f53\u524d\u7684 devDependencies \u4e2d\u6311\u9009\u51fa production \u4f9d\u8d56\u8fdb\u884c\u53d1\u5e03\uff0c\u53ef\u80fd\u4f1a\u663e\u8457\u63d0\u5347\u53d1\u5e03\u901f\u5ea6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"experimentalFeatures:\n    fastInstallNodeModules: true\n")),(0,i.kt)("h2",{id:"-1"}),(0,i.kt)("h2",{id:"\u6269\u5c55"},"\u6269\u5c55"),(0,i.kt)("h3",{id:"1-\u751f\u547d\u5468\u671f\u6269\u5c55"},"1. \u751f\u547d\u5468\u671f\u6269\u5c55"),(0,i.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"midway-integration")," \u5b57\u6bb5\u6765\u6839\u636e\u5404\u4e2a\u547d\u4ee4\u7684\u751f\u547d\u5468\u671f\u6269\u5c55 cli \u7684\u884c\u4e3a\u3002\n\u200b"),(0,i.kt)("p",null,"\u6bd4\u5982\uff0c\u5728 package \u547d\u4ee4 ",(0,i.kt)("inlineCode",{parentName:"p"},"installDevDep")," \u7684\u540e\u9762\u6dfb\u52a0\u81ea\u5b9a\u4e49\u903b\u8f91\uff1a\n\u200b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "midway-integration": {\n    "lifecycle": {\n        "after:package:installDevDep": "npm run build"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"\u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"lifecycle")," \u7684\u683c\u5f0f\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"${ 'before' | 'after' | '' }:${ \u547d\u4ee4 }:${ \u547d\u4ee4\u751f\u547d\u5468\u671f }")," \u3002\n\u200b"),(0,i.kt)("p",null,"package \u547d\u4ee4\u7684\u58f0\u660e\u5468\u671f\u5217\u8868\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," 'cleanup', // \u6e05\u7406\u6784\u5efa\u76ee\u5f55\n 'installDevDep', // \u5b89\u88c5\u5f00\u53d1\u671f\u4f9d\u8d56\n 'copyFile', // \u62f7\u8d1d\u6587\u4ef6: package.include \u548c shared content\n 'compile', //\n 'emit', // \u7f16\u8bd1\u51fd\u6570  'package:after:tscompile'\n 'analysisCode', // \u5206\u6790\u4ee3\u7801\n 'copyStaticFile', // \u62f7\u8d1dsrc\u4e2d\u7684\u9759\u6001\u6587\u4ef6\u5230dist\u76ee\u5f55\uff0c\u4f8b\u5982 html \u7b49\n 'checkAggregation', // \u68c0\u6d4b\u9ad8\u5bc6\u5ea6\u90e8\u7f72\n 'generateSpec', // \u751f\u6210\u5bf9\u5e94\u5e73\u53f0\u7684\u63cf\u8ff0\u6587\u4ef6\uff0c\u4f8b\u5982 serverless.yml \u7b49\n 'generateEntry', // \u751f\u6210\u5bf9\u5e94\u5e73\u53f0\u7684\u5165\u53e3\u6587\u4ef6\n 'installLayer', // \u5b89\u88c5layer\n 'installDep', // \u5b89\u88c5\u4f9d\u8d56\n 'package', // \u51fd\u6570\u6253\u5305\n 'finalize', // \u5b8c\u6210\n")),(0,i.kt)("h3",{id:"-2"}),(0,i.kt)("h3",{id:"2-\u901a\u8fc7\u63d2\u4ef6\u8fdb\u884c\u6269\u5c55"},"2. \u901a\u8fc7\u63d2\u4ef6\u8fdb\u884c\u6269\u5c55"),(0,i.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u81ea\u5df1\u7f16\u5199 cli \u63d2\u4ef6\uff0c\u901a\u8fc7\u63d2\u4ef6\u6765\u5b9e\u73b0\u66f4\u4e3a\u590d\u6742\u7684 cli \u7684\u884c\u4e3a\uff0c\u4e5f\u53ef\u4ee5\u6dfb\u52a0\u81ea\u5b9a\u4e49\u547d\u4ee4\u3002\n\u76ee\u524d\u652f\u6301\u4e24\u79cd\u63d2\u4ef6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"npm \u63d2\u4ef6\uff0c\u63d2\u4ef6\u662f\u4e00\u4e2a npm \u5305"),(0,i.kt)("li",{parentName:"ul"},"local \u63d2\u4ef6\uff0c\u63d2\u4ef6\u5728\u672c\u5730\u4f4d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},"\u200b")),(0,i.kt)("p",null,"\u901a\u8fc7\u5728 f.yml \u6587\u4ef6\u4e2d\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," \u5b57\u6bb5\u4f7f cli \u52a0\u8f7d\u63d2\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"plugins:\n    - npm::test-plugin-model\n  - local::./test/plugin\n")),(0,i.kt)("p",null,"plugin \u914d\u7f6e\u683c\u5f0f\u4e3a\uff1a ",(0,i.kt)("inlineCode",{parentName:"p"},"${ 'npm' | 'local' }:${ provider || '' }:${ pluginName || path }"),"\n\u200b"),(0,i.kt)("p",null,"\u63d2\u4ef6\u7684\u4ee3\u7801\u53c2\u8003\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/index.ts\n\nimport { BasePlugin } from '@midwayjs/command-core';\n\nexport class TestLalalaPlugin extends BasePlugin {\n  commands = {\n    lalala: {\n      usage: '\u81ea\u5b9a\u4e49\u547d\u4ee4',\n      lifecycleEvents: [\n        'a', // \u81ea\u5b9a\u4e49\u751f\u547d\u5468\u671f\n        'b',\n      ],\n      // \u6682\u65e0\n      options: {\n        name: {\n          usage: '\u53c2\u6570 name, \u4f8b\u5982: mw lalala --name=123',\n          shortcut: 'n', // \u53c2\u6570\u7f29\u5199\n        },\n      },\n    },\n  };\n\n  hooks = {\n    // \u6dfb\u52a0\u5f53\u524d\u63d2\u4ef6\u5185\u7684\u547d\u4ee4\u751f\u547d\u5468\u671f\u6269\u5c55\n    // lalala \u547d\u4ee4\u7684 a \u751f\u547d\u5468\u671f\n    'lalala:a': async () => {\n      // \u8f93\u51fa\n      this.core.cli.log('lalala command hook');\n\n      // \u83b7\u53d6\u7528\u6237\u8f93\u5165\u7684\u53c2\u6570\n      this.core.cli.log(this.core.options);\n\n      // f.yml \u5185\u5bb9\n      this.core.cli.log(this.core.service);\n\n      // \u4ec5\u5728 -V \u53c2\u6570\u4e0b\u8f93\u51fa\u7684\u5185\u5bb9\n      this.core.debug('lalala');\n    },\n\n    // \u6dfb\u52a0\u5176\u4ed6\u63d2\u4ef6\u5185\u7684\u547d\u4ee4\u751f\u547d\u5468\u671f\u6269\u5c55\n    // \u5728 package \u547d\u4ee4\u7684  copyFile \u751f\u547d\u5468\u671f \u201c\u4e4b\u524d\u201d \u6267\u884c\n    'before:package:copyFile': async () => {\n      console.log('package command hook');\n    },\n  };\n}\n")))}m.isMDXComponent=!0}}]);