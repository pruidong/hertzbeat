"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[584],{15680:(e,t,n)=>{n.d(t,{xA:()=>i,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):g(g({},t),e)),n},i=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,i=y(e,["components","mdxType","originalType","parentName"]),m=o(n),u=r,c=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(c,g(g({ref:t},i),{},{components:n})):a.createElement(c,g({ref:t},i))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,g=new Array(l);g[0]=m;var y={};for(var p in t)hasOwnProperty.call(t,p)&&(y[p]=t[p]);y.originalType=e,y.mdxType="string"==typeof e?e:r,g[1]=y;for(var o=2;o<l;o++)g[o]=n[o];return a.createElement.apply(null,g)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>d,frontMatter:()=>l,metadata:()=>y,toc:()=>o});var a=n(58168),r=(n(96540),n(15680));const l={id:"rocketmq",title:"\u76d1\u63a7 Apache RocketMQ \u6d88\u606f\u4e2d\u95f4\u4ef6",sidebar_label:"RocketMQ\u6d88\u606f\u4e2d\u95f4\u4ef6",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u4e2d\u95f4\u4ef6\u76d1\u63a7","RocketMQ\u6d88\u606f\u4e2d\u95f4\u4ef6\u76d1\u63a7"]},g=void 0,y={unversionedId:"help/rocketmq",id:"version-v1.5.x/help/rocketmq",title:"\u76d1\u63a7 Apache RocketMQ \u6d88\u606f\u4e2d\u95f4\u4ef6",description:"\u5bf9 RocketMQ \u6d88\u606f\u4e2d\u95f4\u4ef6\u7684broker\uff0c\u6d88\u8d39\u8005\u7b49\u76f8\u5173\u6307\u6807\u8fdb\u884c\u76d1\u6d4b\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.5.x/help/rocketmq.md",sourceDirName:"help",slug:"/help/rocketmq",permalink:"/zh-cn/docs/v1.5.x/help/rocketmq",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.5.x/help/rocketmq.md",tags:[],version:"v1.5.x",frontMatter:{id:"rocketmq",title:"\u76d1\u63a7 Apache RocketMQ \u6d88\u606f\u4e2d\u95f4\u4ef6",sidebar_label:"RocketMQ\u6d88\u606f\u4e2d\u95f4\u4ef6",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u4e2d\u95f4\u4ef6\u76d1\u63a7","RocketMQ\u6d88\u606f\u4e2d\u95f4\u4ef6\u76d1\u63a7"]},sidebar:"docs",previous:{title:"ActiveMQ\u6d88\u606f\u4e2d\u95f4\u4ef6",permalink:"/zh-cn/docs/v1.5.x/help/activemq"},next:{title:"Spring Gateway",permalink:"/zh-cn/docs/v1.5.x/help/spring_gateway"}},p={},o=[{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u91c7\u96c6\u6307\u6807",id:"\u91c7\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u96c6\u5408\uff1a\u96c6\u7fa4",id:"\u6307\u6807\u96c6\u5408\u96c6\u7fa4",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1a\u6d88\u8d39\u8005",id:"\u6307\u6807\u96c6\u5408\u6d88\u8d39\u8005",level:4}],i={toc:o};function d(e){let{components:t,...n}=e;return(0,r.yg)("wrapper",(0,a.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u5bf9 RocketMQ \u6d88\u606f\u4e2d\u95f4\u4ef6\u7684broker\uff0c\u6d88\u8d39\u8005\u7b49\u76f8\u5173\u6307\u6807\u8fdb\u884c\u76d1\u6d4b\u3002")),(0,r.yg)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u6ce8\u518c\u4e2d\u5fc3Host"),(0,r.yg)("td",{parentName:"tr",align:null},"RocketMQ\u6ce8\u518c\u4e2d\u5fc3\u7684IPV4,IPV6(eg: https://, http://)\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u4efb\u52a1\u540d\u79f0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6b64\u76d1\u63a7\u7684\u540d\u79f0\uff0c\u540d\u79f0\u9700\u8981\u4fdd\u8bc1\u552f\u4e00\u6027\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6ce8\u518c\u4e2d\u5fc3\u7aef\u53e3\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"accessKey"),(0,r.yg)("td",{parentName:"tr",align:null},"accessKey\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"secretKey"),(0,r.yg)("td",{parentName:"tr",align:null},"secretKey\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u91c7\u96c6\u95f4\u9694"),(0,r.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u5468\u671f\u6027\u91c7\u96c6\u6570\u636e\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\uff0c\u53ef\u8bbe\u7f6e\u7684\u6700\u5c0f\u95f4\u9694\u4e3a30\u79d2\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7ed1\u5b9a\u6807\u7b7e"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5bf9\u76d1\u63a7\u8d44\u6e90\u8fdb\u884c\u5206\u7c7b\u7ba1\u7406\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u5907\u6ce8"),(0,r.yg)("td",{parentName:"tr",align:null},"\u66f4\u591a\u6807\u8bc6\u548c\u63cf\u8ff0\u6b64\u76d1\u63a7\u7684\u5907\u6ce8\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u91cc\u5907\u6ce8\u4fe1\u606f\u3002")))),(0,r.yg)("h3",{id:"\u91c7\u96c6\u6307\u6807"},"\u91c7\u96c6\u6307\u6807"),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408\u96c6\u7fa4"},"\u6307\u6807\u96c6\u5408\uff1a\u96c6\u7fa4"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BrokerId"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"Broker\u552f\u4e00ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Address"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"Broker\u5730\u5740")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Version"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7248\u672c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Producer_Message_TPS"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u751f\u4ea7\u6d88\u606fTPS")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Consumer_Message_TPS"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u6d88\u606fTPS")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Yesterday_Produce_Count"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6628\u5929\u751f\u4ea7\u6d88\u606f\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Yesterday_Consume_Count"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6628\u5929\u6d88\u8d39\u6d88\u606f\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Today_Produce_Count"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4eca\u5929\u751f\u4ea7\u6d88\u606f\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Today_Consume_Count"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4eca\u5929\u6d88\u8d39\u6d88\u606f\u6570")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408\u6d88\u8d39\u8005"},"\u6307\u6807\u96c6\u5408\uff1a\u6d88\u8d39\u8005"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Consumer_group"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u8005\u7ec4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Client_quantity"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u6570\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Message_model"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6d88\u606f\u6a21\u5f0f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Consume_type"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u7c7b\u578b")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Consume_tps"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6d88\u8d39TPS")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Delay"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5ef6\u8fdf")))))}d.isMDXComponent=!0}}]);