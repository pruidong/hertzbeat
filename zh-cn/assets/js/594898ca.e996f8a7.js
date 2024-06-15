"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[34646],{15680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),g=c(r),d=a,u=g["".concat(l,".").concat(d)]||g[d]||s[d]||i;return r?n.createElement(u,o(o({ref:t},m),{},{components:r})):n.createElement(u,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},35810:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const i={id:"greptime-init",title:"\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93\u670d\u52a1GreptimeDB\u5b89\u88c5\u521d\u59cb\u5316",sidebar_label:"\u4f7f\u7528GreptimeDB\u5b58\u50a8\u6307\u6807\u6570\u636e(\u53ef\u9009)"},o=void 0,p={unversionedId:"start/greptime-init",id:"version-v1.4.x/start/greptime-init",title:"\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93\u670d\u52a1GreptimeDB\u5b89\u88c5\u521d\u59cb\u5316",description:"HertzBeat\u7684\u5386\u53f2\u6570\u636e\u5b58\u50a8\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93\uff0c\u4efb\u9009\u5176\u4e00\u5b89\u88c5\u521d\u59cb\u5316\u5373\u53ef\uff0c\u4e5f\u53ef\u4e0d\u5b89\u88c5(\u6ce8\u610f\u26a0\ufe0f\u4f46\u5f3a\u70c8\u5efa\u8bae\u751f\u4ea7\u73af\u5883\u914d\u7f6e)",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4.x/start/greptime-init.md",sourceDirName:"start",slug:"/start/greptime-init",permalink:"/zh-cn/docs/v1.4.x/start/greptime-init",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4.x/start/greptime-init.md",tags:[],version:"v1.4.x",frontMatter:{id:"greptime-init",title:"\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93\u670d\u52a1GreptimeDB\u5b89\u88c5\u521d\u59cb\u5316",sidebar_label:"\u4f7f\u7528GreptimeDB\u5b58\u50a8\u6307\u6807\u6570\u636e(\u53ef\u9009)"},sidebar:"docs",previous:{title:"\u4f7f\u7528TDengine\u5b58\u50a8\u6307\u6807\u6570\u636e(\u53ef\u9009)",permalink:"/zh-cn/docs/v1.4.x/start/tdengine-init"},next:{title:"\u4f7f\u7528InfluxDB\u5b58\u50a8\u6307\u6807\u6570\u636e(\u53ef\u9009)",permalink:"/zh-cn/docs/v1.4.x/start/influxdb-init"}},l={},c=[{value:"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5GreptimeDB",id:"\u901a\u8fc7docker\u65b9\u5f0f\u5b89\u88c5greptimedb",level:3},{value:"\u5728hertzbeat\u7684<code>application.yml</code>\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u6b64\u6570\u636e\u5e93\u8fde\u63a5",id:"\u5728hertzbeat\u7684applicationyml\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u6b64\u6570\u636e\u5e93\u8fde\u63a5",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:3}],m={toc:c};function s(e){let{components:t,...r}=e;return(0,a.yg)("wrapper",(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"HertzBeat\u7684\u5386\u53f2\u6570\u636e\u5b58\u50a8\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93\uff0c\u4efb\u9009\u5176\u4e00\u5b89\u88c5\u521d\u59cb\u5316\u5373\u53ef\uff0c\u4e5f\u53ef\u4e0d\u5b89\u88c5(\u6ce8\u610f\u26a0\ufe0f\u4f46\u5f3a\u70c8\u5efa\u8bae\u751f\u4ea7\u73af\u5883\u914d\u7f6e)\n\u6211\u4eec\u63a8\u8350\u4f7f\u7528\u5e76\u957f\u671f\u652f\u6301VictoriaMetrics"),(0,a.yg)("p",null,"GreptimeDB is an open-source time-series database with a special focus on scalability, analytical capabilities and efficiency.",(0,a.yg)("br",{parentName:"p"}),"\n","It's designed to work on infrastructure of the cloud era, and users benefit from its elasticity and commodity storage."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u26a0\ufe0f \u82e5\u4e0d\u914d\u7f6e\u65f6\u5e8f\u6570\u636e\u5e93\uff0c\u5219\u53ea\u4f1a\u7559\u6700\u8fd1\u4e00\u5c0f\u65f6\u5386\u53f2\u6570\u636e"),"  "),(0,a.yg)("h3",{id:"\u901a\u8fc7docker\u65b9\u5f0f\u5b89\u88c5greptimedb"},"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5GreptimeDB"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u53ef\u53c2\u8003\u5b98\u65b9\u7f51\u7ad9",(0,a.yg)("a",{parentName:"p",href:"https://docs.greptime.com/getting-started/overview"},"\u5b89\u88c5\u6559\u7a0b"),"  "),(0,a.yg)("ol",{parentName:"blockquote"},(0,a.yg)("li",{parentName:"ol"},"\u4e0b\u8f7d\u5b89\u88c5Docker\u73af\u5883",(0,a.yg)("br",{parentName:"li"}),"Docker \u5de5\u5177\u81ea\u8eab\u7684\u4e0b\u8f7d\u8bf7\u53c2\u8003 ",(0,a.yg)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker\u5b98\u7f51\u6587\u6863"),"\u3002\n\u5b89\u88c5\u5b8c\u6bd5\u540e\u7ec8\u7aef\u67e5\u770bDocker\u7248\u672c\u662f\u5426\u6b63\u5e38\u8f93\u51fa\u3002",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"$ docker -v\nDocker version 20.10.12, build e91ed57\n"))),(0,a.yg)("li",{parentName:"ol"},"Docker\u5b89\u88c5GreptimeDB  "))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"$ docker run -p 4000-4004:4000-4004 \\\n    -p 4242:4242 -v /opt/greptimedb:/tmp/greptimedb \\\n    --name greptime \\\n    greptime/greptimedb standalone start \\\n    --http-addr 0.0.0.0:4000 \\\n    --rpc-addr 0.0.0.0:4001 \n")),(0,a.yg)("p",null,"   ",(0,a.yg)("inlineCode",{parentName:"p"},"-v /opt/greptimedb:/tmp/greptimedb")," \u4e3agreptimedb\u6570\u636e\u76ee\u5f55\u672c\u5730\u6301\u4e45\u5316\u6302\u8f7d\uff0c\u9700\u5c06",(0,a.yg)("inlineCode",{parentName:"p"},"/opt/greptimedb"),"\u66ff\u6362\u4e3a\u5b9e\u9645\u672c\u5730\u5b58\u5728\u7684\u76ee\u5f55\n\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"$ docker ps"),"\u67e5\u770b\u6570\u636e\u5e93\u662f\u5426\u542f\u52a8\u6210\u529f"),(0,a.yg)("h3",{id:"\u5728hertzbeat\u7684applicationyml\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u6b64\u6570\u636e\u5e93\u8fde\u63a5"},"\u5728hertzbeat\u7684",(0,a.yg)("inlineCode",{parentName:"h3"},"application.yml"),"\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u6b64\u6570\u636e\u5e93\u8fde\u63a5"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u914d\u7f6eHertzBeat\u7684\u914d\u7f6e\u6587\u4ef6\n\u4fee\u6539\u4f4d\u4e8e ",(0,a.yg)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml")," \u7684\u914d\u7f6e\u6587\u4ef6 ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/raw/master/script/application.yml"},"/script/application.yml"),(0,a.yg)("br",{parentName:"li"}),"\u6ce8\u610f\u26a0\ufe0fdocker\u5bb9\u5668\u65b9\u5f0f\u9700\u8981\u5c06application.yml\u6587\u4ef6\u6302\u8f7d\u5230\u4e3b\u673a\u672c\u5730,\u5b89\u88c5\u5305\u65b9\u5f0f\u89e3\u538b\u4fee\u6539\u4f4d\u4e8e ",(0,a.yg)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml")," \u5373\u53ef     ")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u4fee\u6539\u91cc\u9762\u7684",(0,a.yg)("inlineCode",{parentName:"strong"},"warehouse.store.jpa.enabled"),"\u53c2\u6570\u4e3a",(0,a.yg)("inlineCode",{parentName:"strong"},"false"),"\uff0c \u914d\u7f6e\u91cc\u9762\u7684",(0,a.yg)("inlineCode",{parentName:"strong"},"warehouse.store.greptime"),"\u6570\u636e\u6e90\u53c2\u6570\uff0cURL\u8d26\u6237\u5bc6\u7801\uff0c\u5e76\u542f\u7528",(0,a.yg)("inlineCode",{parentName:"strong"},"enabled"),"\u4e3a",(0,a.yg)("inlineCode",{parentName:"strong"},"true")),"    "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"warehouse:\n   store:\n      # \u5173\u95ed\u9ed8\u8ba4JPA\n      jpa:\n         enabled: false\n      greptime:\n         enabled: true\n         endpoint: localhost:4001\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u91cd\u542f HertzBeat")),(0,a.yg)("h3",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u65f6\u5e8f\u6570\u636e\u5e93 GreptimeDB \u6216\u8005 IoTDB \u6216\u8005 TDengine \u662f\u5426\u90fd\u9700\u8981\u914d\u7f6e\uff0c\u80fd\u4e0d\u80fd\u90fd\u7528",(0,a.yg)("blockquote",{parentName:"li"},(0,a.yg)("p",{parentName:"blockquote"},"\u4e0d\u9700\u8981\u90fd\u914d\u7f6e\uff0c\u4efb\u9009\u5176\u4e00\u5373\u53ef\uff0c\u7528enable\u53c2\u6570\u63a7\u5236\u5176\u662f\u5426\u4f7f\u7528\uff0c\u4e5f\u53ef\u90fd\u4e0d\u5b89\u88c5\u914d\u7f6e\uff0c\u53ea\u5f71\u54cd\u5386\u53f2\u56fe\u8868\u6570\u636e\u3002")))))}s.isMDXComponent=!0}}]);