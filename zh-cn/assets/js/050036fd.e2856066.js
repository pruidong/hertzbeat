"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[5267],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>b});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,y=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={id:"rainbond-deploy",title:"\u4f7f\u7528 Rainbond \u90e8\u7f72 HertzBeat",sidebar_label:"Rainbond\u65b9\u5f0f\u90e8\u7f72"},i=void 0,l={unversionedId:"start/rainbond-deploy",id:"version-v1.5.x/start/rainbond-deploy",title:"\u4f7f\u7528 Rainbond \u90e8\u7f72 HertzBeat",description:"\u5982\u679c\u4f60\u4e0d\u719f\u6089 Kubernetes\uff0c\u60f3\u5728 Kubernetes \u4e2d\u5b89\u88c5 Apache HertzBeat (incubating)\uff0c\u53ef\u4ee5\u4f7f\u7528 Rainbond \u6765\u90e8\u7f72\u3002Rainbond \u662f\u4e00\u4e2a\u57fa\u4e8e Kubernetes \u6784\u5efa\u7684\u4e91\u539f\u751f\u5e94\u7528\u7ba1\u7406\u5e73\u53f0\uff0c\u53ef\u4ee5\u5f88\u7b80\u5355\u7684\u5c06\u4f60\u7684\u5e94\u7528\u90e8\u7f72\u5230 Kubernetes\u4e2d\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.5.x/start/rainbond-deploy.md",sourceDirName:"start",slug:"/start/rainbond-deploy",permalink:"/zh-cn/docs/v1.5.x/start/rainbond-deploy",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.5.x/start/rainbond-deploy.md",tags:[],version:"v1.5.x",frontMatter:{id:"rainbond-deploy",title:"\u4f7f\u7528 Rainbond \u90e8\u7f72 HertzBeat",sidebar_label:"Rainbond\u65b9\u5f0f\u90e8\u7f72"},sidebar:"docs",previous:{title:"\u5b89\u88c5\u5305\u65b9\u5f0f\u90e8\u7f72",permalink:"/zh-cn/docs/v1.5.x/start/package-deploy"},next:{title:"\u66f4\u65b0\u8d26\u6237\u548c\u5bc6\u94a5",permalink:"/zh-cn/docs/v1.5.x/start/account-modify"}},c={},p=[{value:"\u524d\u63d0",id:"\u524d\u63d0",level:2},{value:"\u90e8\u7f72 HertzBeat",id:"\u90e8\u7f72-hertzbeat",level:2}],s={toc:p};function d(e){let{components:t,...o}=e;return(0,a.yg)("wrapper",(0,r.A)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u5982\u679c\u4f60\u4e0d\u719f\u6089 Kubernetes\uff0c\u60f3\u5728 Kubernetes \u4e2d\u5b89\u88c5 Apache HertzBeat (incubating)\uff0c\u53ef\u4ee5\u4f7f\u7528 Rainbond \u6765\u90e8\u7f72\u3002Rainbond \u662f\u4e00\u4e2a\u57fa\u4e8e Kubernetes \u6784\u5efa\u7684\u4e91\u539f\u751f\u5e94\u7528\u7ba1\u7406\u5e73\u53f0\uff0c\u53ef\u4ee5\u5f88\u7b80\u5355\u7684\u5c06\u4f60\u7684\u5e94\u7528\u90e8\u7f72\u5230 Kubernetes\u4e2d\u3002"),(0,a.yg)("h2",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,a.yg)("p",null,"\u5b89\u88c5 Rainbond\uff0c\u8bf7\u53c2\u9605 ",(0,a.yg)("a",{parentName:"p",href:"https://www.rainbond.com/docs/quick-start/quick-install"},"Rainbond \u5feb\u901f\u5b89\u88c5"),"\u3002"),(0,a.yg)("h2",{id:"\u90e8\u7f72-hertzbeat"},"\u90e8\u7f72 HertzBeat"),(0,a.yg)("p",null,"\u767b\u5f55 Rainbond \u540e\uff0c\u70b9\u51fb\u5de6\u4fa7\u83dc\u5355\u4e2d\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"\u5e94\u7528\u5e02\u573a"),"\uff0c\u5207\u6362\u5230\u5f00\u6e90\u5e94\u7528\u5546\u5e97\uff0c\u5728\u641c\u7d22\u6846\u4e2d\u641c\u7d22 ",(0,a.yg)("inlineCode",{parentName:"p"},"HertzBeat"),"\uff0c\u70b9\u51fb\u5b89\u88c5\u6309\u94ae\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(69532).A,width:"1787",height:"363"})),(0,a.yg)("p",null,"\u586b\u5199\u4ee5\u4e0b\u4fe1\u606f\uff0c\u7136\u540e\u70b9\u51fb\u786e\u8ba4\u6309\u94ae\u8fdb\u884c\u5b89\u88c5\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u56e2\u961f\uff1a\u9009\u62e9\u73b0\u6709\u56e2\u961f\u6216\u521b\u5efa\u65b0\u7684\u56e2\u961f"),(0,a.yg)("li",{parentName:"ul"},"\u96c6\u7fa4\uff1a\u9009\u62e9\u5bf9\u5e94\u7684\u96c6\u7fa4"),(0,a.yg)("li",{parentName:"ul"},"\u5e94\u7528\uff1a\u9009\u62e9\u73b0\u6709\u5e94\u7528\u6216\u521b\u5efa\u65b0\u7684\u5e94\u7528"),(0,a.yg)("li",{parentName:"ul"},"\u7248\u672c\uff1a\u9009\u62e9\u8981\u5b89\u88c5\u7684 HertzBeat \u7248\u672c")),(0,a.yg)("p",null,"\u7b49\u5f85\u5b89\u88c5\u5b8c\u6210\uff0c\u5373\u53ef\u8bbf\u95ee HertzBeat \u5e94\u7528\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(17760).A,width:"3338",height:"1584"})),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"\u901a\u8fc7 Rainbond \u5b89\u88c5\u7684 HertzBeat\uff0c\u9ed8\u8ba4\u4f7f\u7528\u4e86\u5916\u90e8\u7684 Mysql \u6570\u636e\u5e93 \u548c Redis \u4ee5\u53ca IoTDB\u3002\u540c\u65f6\u4e5f\u6302\u8f7d\u4e86 HertzBeat \u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u53ef\u4ee5\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"\u7ec4\u4ef6 -> \u73af\u5883\u914d\u7f6e -> \u914d\u7f6e\u6587\u4ef6\u8bbe\u7f6e")," \u4e2d\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u3002")))}d.isMDXComponent=!0},17760:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/hertzbeat-topology-8970e596e477c056252a07165065b1e4.png"},69532:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/install-to-rainbond-5d10c5aa591616c51c92ff3481d82c41.png"}}]);