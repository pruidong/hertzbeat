"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[40338],{15680:(t,e,a)=>{a.d(e,{xA:()=>m,yg:()=>u});var n=a(96540);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var y=n.createContext({}),i=function(t){var e=n.useContext(y),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},m=function(t){var e=i(t.components);return n.createElement(y.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,y=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),o=i(a),u=r,N=o["".concat(y,".").concat(u)]||o[u]||d[u]||l;return a?n.createElement(N,g(g({ref:e},m),{},{components:a})):n.createElement(N,g({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,g=new Array(l);g[0]=o;var p={};for(var y in e)hasOwnProperty.call(e,y)&&(p[y]=e[y]);p.originalType=t,p.mdxType="string"==typeof t?t:r,g[1]=p;for(var i=2;i<l;i++)g[i]=a[i];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},84622:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>y,contentTitle:()=>g,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var n=a(58168),r=(a(96540),a(15680));const l={id:"openai",title:"\u76d1\u63a7\uff1aOpenAI \u8d26\u6237\u60c5\u51b5",sidebar_label:"OpenAI \u8d26\u6237\u60c5\u51b5",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u7f51\u7edc\u76d1\u63a7","OpenAI\u8d26\u6237\u76d1\u63a7"]},g=void 0,p={unversionedId:"help/openai",id:"version-v1.5.x/help/openai",title:"\u76d1\u63a7\uff1aOpenAI \u8d26\u6237\u60c5\u51b5",description:"\u51c6\u5907\u5de5\u4f5c",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.5.x/help/openai.md",sourceDirName:"help",slug:"/help/openai",permalink:"/zh-cn/docs/v1.5.x/help/openai",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.5.x/help/openai.md",tags:[],version:"v1.5.x",frontMatter:{id:"openai",title:"\u76d1\u63a7\uff1aOpenAI \u8d26\u6237\u60c5\u51b5",sidebar_label:"OpenAI \u8d26\u6237\u60c5\u51b5",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u7f51\u7edc\u76d1\u63a7","OpenAI\u8d26\u6237\u76d1\u63a7"]},sidebar:"docs",previous:{title:"Kubernetes \u76d1\u63a7",permalink:"/zh-cn/docs/v1.5.x/help/kubernetes"},next:{title:"Kafka-PromQL",permalink:"/zh-cn/docs/v1.5.x/help/kafka_promql"}},y={},i=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:3},{value:"\u83b7\u53d6\u4f1a\u8bdd\u5bc6\u94a5",id:"\u83b7\u53d6\u4f1a\u8bdd\u5bc6\u94a5",level:4},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u91c7\u96c6\u6307\u6807",id:"\u91c7\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u96c6\u5408\uff1a\u4fe1\u7528\u989d\u5ea6\u6388\u4e88",id:"\u6307\u6807\u96c6\u5408\u4fe1\u7528\u989d\u5ea6\u6388\u4e88",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1a\u6a21\u578b\u82b1\u8d39",id:"\u6307\u6807\u96c6\u5408\u6a21\u578b\u82b1\u8d39",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1a\u8ba2\u9605\u8ba1\u8d39",id:"\u6307\u6807\u96c6\u5408\u8ba2\u9605\u8ba1\u8d39",level:4}],m={toc:i};function d(t){let{components:e,...a}=t;return(0,r.yg)("wrapper",(0,n.A)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,r.yg)("h4",{id:"\u83b7\u53d6\u4f1a\u8bdd\u5bc6\u94a5"},"\u83b7\u53d6\u4f1a\u8bdd\u5bc6\u94a5"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"\u6253\u5f00 Chrome \u6d4f\u89c8\u5668\u7684\u7f51\u7edc\u8bf7\u6c42\u754c\u9762\n",(0,r.yg)("inlineCode",{parentName:"li"},"Mac: cmd + option + i"),(0,r.yg)("inlineCode",{parentName:"li"},"Windows: ctrl + shift + i")),(0,r.yg)("li",{parentName:"ol"},"\u8bbf\u95ee ",(0,r.yg)("a",{parentName:"li",href:"https://platform.openai.com/usage"},"https://platform.openai.com/usage")),(0,r.yg)("li",{parentName:"ol"},"\u627e\u5230 ",(0,r.yg)("a",{parentName:"li",href:"https://api.openai.com/dashboard/billing/usage"},"https://api.openai.com/dashboard/billing/usage")," \u8bf7\u6c42"),(0,r.yg)("li",{parentName:"ol"},"\u627e\u5230\u8bf7\u6c42\u5934\u4e2d Authorization \u5b57\u6bb5\uff0c\u5e76\u590d\u5236 ",(0,r.yg)("inlineCode",{parentName:"li"},"Bearer ")," \u4e4b\u540e\u7684\u5185\u5bb9\u3002\u4f8b\u5982\uff1a ",(0,r.yg)("inlineCode",{parentName:"li"},"sess-123456")," "))),(0,r.yg)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"\u8bf7\u786e\u4fdd HertzBeat \u53ef\u4ee5\u5177\u5907\u5916\u7f51\u8bbf\u95ee\u80fd\u529b\u3002\u82e5\u4e0d\u786e\u5b9a\u53ef\u4ee5\u901a\u8fc7\u5728 HertzBeat \u4e2d\u521b\u5efa\u5bf9 openai.com \u7684 HTTP API \u76d1\u63a7\u8fdb\u884c\u63a2\u6d4b\u5c1d\u8bd5\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u76d1\u63a7\u5468\u671f\u5e94\u81f3\u5c11\u5927\u4e8e 120 \u79d2\uff0c\u907f\u514d\u53d1\u9001\u7684\u8bf7\u6c42\u8fc7\u4e8e\u9891\u7e41\uff0c\u5bfc\u81f4\u8fd4\u56de\u72b6\u6001\u7801 429 \uff08\u592a\u591a\u8bf7\u6c42\uff09\u3002"))),(0,r.yg)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"\u76d1\u63a7Host"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6b64\u5904\u586b\u5199 api.openai.com \u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"\u4efb\u52a1\u540d\u79f0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6b64\u76d1\u63a7\u7684\u540d\u79f0\uff0c\u540d\u79f0\u9700\u8981\u4fdd\u8bc1\u552f\u4e00\u6027\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"\u4f1a\u8bdd\u5bc6\u94a5"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5373\u51c6\u5907\u5de5\u4f5c\u4e2d\u83b7\u53d6\u7684\u4f1a\u8bdd\u5bc6\u94a5\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"\u91c7\u96c6\u5668"),(0,r.yg)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u6b64\u76d1\u63a7\u4f7f\u7528\u54ea\u53f0\u91c7\u96c6\u5668\u8c03\u5ea6\u91c7\u96c6\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"\u76d1\u63a7\u5468\u671f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u5468\u671f\u6027\u91c7\u96c6\u6570\u636e\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\uff0c\u53ef\u8bbe\u7f6e\u7684\u6700\u5c0f\u95f4\u9694\u4e3a30\u79d2\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"\u7ed1\u5b9a\u6807\u7b7e"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5bf9\u76d1\u63a7\u8d44\u6e90\u7684\u5206\u7c7b\u7ba1\u7406\u6807\u7b7e\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"\u63cf\u8ff0\u5907\u6ce8"),(0,r.yg)("td",{parentName:"tr",align:null},"\u66f4\u591a\u6807\u8bc6\u548c\u63cf\u8ff0\u6b64\u76d1\u63a7\u7684\u5907\u6ce8\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u91cc\u5907\u6ce8\u4fe1\u606f\u3002")))),(0,r.yg)("h3",{id:"\u91c7\u96c6\u6307\u6807"},"\u91c7\u96c6\u6307\u6807"),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408\u4fe1\u7528\u989d\u5ea6\u6388\u4e88"},"\u6307\u6807\u96c6\u5408\uff1a\u4fe1\u7528\u989d\u5ea6\u6388\u4e88"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u603b\u6388\u4e88\u989d\u5ea6"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7f8e\u5143 ($)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u603b\u6388\u4e88\u989d\u5ea6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u603b\u4f7f\u7528\u989d\u5ea6"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7f8e\u5143 ($)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u603b\u4f7f\u7528\u989d\u5ea6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u603b\u53ef\u7528\u989d\u5ea6"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7f8e\u5143 ($)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u603b\u53ef\u7528\u989d\u5ea6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u603b\u4ed8\u8d39\u53ef\u7528\u989d\u5ea6"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7f8e\u5143 ($)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u603b\u4ed8\u8d39\u53ef\u7528\u989d\u5ea6")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408\u6a21\u578b\u82b1\u8d39"},"\u6307\u6807\u96c6\u5408\uff1a\u6a21\u578b\u82b1\u8d39"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u6a21\u578b\u540d\u79f0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6a21\u578b\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u82b1\u8d39"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7f8e\u5143 ($)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u82b1\u8d39")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408\u8ba2\u9605\u8ba1\u8d39"},"\u6307\u6807\u96c6\u5408\uff1a\u8ba2\u9605\u8ba1\u8d39"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u6709\u652f\u4ed8\u65b9\u5f0f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u6709\u652f\u4ed8\u65b9\u5f0f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u662f\u5426\u5df2\u53d6\u6d88"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u662f\u5426\u5df2\u53d6\u6d88")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u53d6\u6d88\u65f6\u95f4"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u53d6\u6d88\u65f6\u95f4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u662f\u5426\u62d6\u6b20"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u662f\u5426\u62d6\u6b20")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u4e00\u5b9a\u65f6\u95f4\u5185\u6700\u5927\u4f7f\u7528\u91cf\u9650\u5236"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6b21"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e00\u5b9a\u65f6\u95f4\u5185\u6700\u5927\u4f7f\u7528\u91cf\u9650\u5236")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u6700\u5927\u4f7f\u7528\u91cf\u9650\u5236"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6b21"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6700\u5927\u4f7f\u7528\u91cf\u9650\u5236")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u786c\u9650\u5236\u4f7f\u7528\u91cf"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6b21"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u786c\u9650\u5236\u4f7f\u7528\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u8f6f\u9650\u5236\u8d39\u7528"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7f8e\u5143 ($)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8f6f\u9650\u5236\u8d39\u7528")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u786c\u9650\u5236\u8d39\u7528"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7f8e\u5143 ($)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u786c\u9650\u5236\u8d39\u7528")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u786c\u9650\u5236\u8d39\u7528"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7f8e\u5143 ($)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u786c\u9650\u5236\u8d39\u7528")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u8ba1\u5212"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u8ba1\u5212")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u662f\u4e3b\u8981\u8ba2\u9605"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u662f\u4e3b\u8981\u8ba2\u9605")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7ed3\u7b97\u673a\u5236"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7ed3\u7b97\u673a\u5236")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u7b26\u5408\u62d6\u6b20\u8d44\u683c"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u7b26\u5408\u62d6\u6b20\u8d44\u683c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u6700\u5927\u4f59\u989d"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7f8e\u5143 ($)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6700\u5927\u4f59\u989d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u7b26\u5408\u81ea\u52a8\u5145\u503c\u8d44\u683c"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u7b26\u5408\u81ea\u52a8\u5145\u503c\u8d44\u683c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u81ea\u52a8\u5145\u503c"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u81ea\u52a8\u5145\u503c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u5145\u503c\u9608\u503c"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7f8e\u5143 ($)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u5145\u503c\u9608\u503c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u5145\u503c\u91d1\u989d"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7f8e\u5143 ($)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u5145\u503c\u91d1\u989d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u4fe1\u7528\u7b49\u7ea7"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4fe1\u7528\u7b49\u7ea7")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u8d26\u6237\u540d\u79f0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8d26\u6237\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u91c7\u8d2d\u53f7"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u91c7\u8d2d\u53f7")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u8d26\u5355\u90ae\u7bb1"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8d26\u5355\u90ae\u7bb1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7a0e\u52a1ID"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7a0e\u52a1ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7ed3\u7b97\u5730\u5740"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7ed3\u7b97\u5730\u5740")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u4e1a\u52a1\u5730\u5740"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e1a\u52a1\u5730\u5740")))))}d.isMDXComponent=!0}}]);