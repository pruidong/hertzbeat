"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[37326],{15680:(t,e,n)=>{n.d(e,{xA:()=>y,yg:()=>u});var a=n(96540);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var g=a.createContext({}),o=function(t){var e=a.useContext(g),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},y=function(t){var e=o(t.components);return a.createElement(g.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,g=t.parentName,y=p(t,["components","mdxType","originalType","parentName"]),m=o(n),u=r,c=m["".concat(g,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(c,i(i({ref:e},y),{},{components:n})):a.createElement(c,i({ref:e},y))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var g in e)hasOwnProperty.call(e,g)&&(p[g]=e[g]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7617:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(58168),r=(n(96540),n(15680));const l={id:"tidb",title:"\u76d1\u63a7\uff1aTiDB\u6570\u636e\u5e93\u76d1\u63a7",sidebar_label:"TiDB\u6570\u636e\u5e93",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u6570\u636e\u5e93\u76d1\u63a7","TiDB\u6570\u636e\u5e93\u76d1\u63a7"]},i=void 0,p={unversionedId:"help/tidb",id:"version-v1.5.x/help/tidb",title:"\u76d1\u63a7\uff1aTiDB\u6570\u636e\u5e93\u76d1\u63a7",description:"\u4f7f\u7528 HTTP \u548c JDBC \u534f\u8bae\u5bf9 TiDB \u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.5.x/help/tidb.md",sourceDirName:"help",slug:"/help/tidb",permalink:"/zh-cn/docs/v1.5.x/help/tidb",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.5.x/help/tidb.md",tags:[],version:"v1.5.x",frontMatter:{id:"tidb",title:"\u76d1\u63a7\uff1aTiDB\u6570\u636e\u5e93\u76d1\u63a7",sidebar_label:"TiDB\u6570\u636e\u5e93",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u6570\u636e\u5e93\u76d1\u63a7","TiDB\u6570\u636e\u5e93\u76d1\u63a7"]},sidebar:"docs",previous:{title:"NebulaGraph\u96c6\u7fa4",permalink:"/zh-cn/docs/v1.5.x/help/nebulagraph_cluster"},next:{title:"MongoDB\u6570\u636e\u5e93",permalink:"/zh-cn/docs/v1.5.x/help/mongodb"}},g={},o=[{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u91c7\u96c6\u6307\u6807",id:"\u91c7\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u96c6\u5408\uff1a\u7cfb\u7edf\u53d8\u91cf",id:"\u6307\u6807\u96c6\u5408\u7cfb\u7edf\u53d8\u91cf",level:4}],y={toc:o};function d(t){let{components:e,...n}=t;return(0,r.yg)("wrapper",(0,a.A)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u4f7f\u7528 HTTP \u548c JDBC \u534f\u8bae\u5bf9 TiDB \u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7\u3002")),(0,r.yg)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u76ee\u6807Host"),(0,r.yg)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u63a7\u7684\u5bf9\u7aefIPV4\uff0cIPV6\u6216\u57df\u540d\u3002\u6ce8\u610f\u26a0\ufe0f\u4e0d\u5e26\u534f\u8bae\u5934(eg: https://, http://)\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u4efb\u52a1\u540d\u79f0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6b64\u76d1\u63a7\u7684\u540d\u79f0\uff0c\u540d\u79f0\u9700\u8981\u4fdd\u8bc1\u552f\u4e00\u6027\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Service\u7aef\u53e3"),(0,r.yg)("td",{parentName:"tr",align:null},"TiDB\u6570\u636e\u5e93\u5bf9\u5916\u63d0\u4f9b\u7528\u4e8e\u72b6\u6001\u62a5\u544a\u7684\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a10080\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PD\u7aef\u53e3"),(0,r.yg)("td",{parentName:"tr",align:null},"TiDB\u6570\u636e\u5e93\u7684PD\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a2379\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6eSQL\u67e5\u8be2\u672a\u54cd\u5e94\u6570\u636e\u65f6\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4dms\u6beb\u79d2\uff0c\u9ed8\u8ba46000\u6beb\u79d2\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JDBC\u7aef\u53e3"),(0,r.yg)("td",{parentName:"tr",align:null},"TiDB\u6570\u636e\u5e93\u5bf9\u5916\u63d0\u4f9b\u7528\u4e8e\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a4000\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u540d\u79f0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5b9e\u4f8b\u540d\u79f0\uff0c\u53ef\u9009\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u8fde\u63a5\u7528\u6237\u540d\uff0c\u53ef\u9009")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u8fde\u63a5\u5bc6\u7801\uff0c\u53ef\u9009")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JDBC URL"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u4f7f\u7528",(0,r.yg)("a",{parentName:"td",href:"https://docs.pingcap.com/zh/tidb/stable/dev-guide-connect-to-tidb#jdbc"},"JDBC\u9a71\u52a8\u7684"),"\u8fde\u63a5URL\uff0c\u53ef\u9009\uff0c\u82e5\u914d\u7f6e\uff0c\u5219URL\u91cc\u9762\u7684\u6570\u636e\u5e93\u540d\u79f0\uff0c\u7528\u6237\u540d\u5bc6\u7801\u7b49\u53c2\u6570\u4f1a\u8986\u76d6\u4e0a\u9762\u914d\u7f6e\u7684\u53c2\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u91c7\u96c6\u95f4\u9694"),(0,r.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u5468\u671f\u6027\u91c7\u96c6\u6570\u636e\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\uff0c\u53ef\u8bbe\u7f6e\u7684\u6700\u5c0f\u95f4\u9694\u4e3a30\u79d2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u63a2\u6d4b"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65b0\u589e\u76d1\u63a7\u524d\u662f\u5426\u5148\u63a2\u6d4b\u68c0\u67e5\u76d1\u63a7\u53ef\u7528\u6027\uff0c\u63a2\u6d4b\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u65b0\u589e\u4fee\u6539\u64cd\u4f5c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u5907\u6ce8"),(0,r.yg)("td",{parentName:"tr",align:null},"\u66f4\u591a\u6807\u8bc6\u548c\u63cf\u8ff0\u6b64\u76d1\u63a7\u7684\u5907\u6ce8\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u91cc\u5907\u6ce8\u4fe1\u606f")))),(0,r.yg)("h3",{id:"\u91c7\u96c6\u6307\u6807"},"\u91c7\u96c6\u6307\u6807"),(0,r.yg)("p",null,"\u76d1\u63a7\u6a21\u677f\u5c06\u4eceTiDB\u7cfb\u7edf\u53d8\u91cf\u8868\u4e2d\u68c0\u7d22\u76d1\u63a7\u6307\u6807\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u884c\u68c0\u7d22",(0,r.yg)("a",{parentName:"p",href:"https://docs.pingcap.com/zh/tidb/stable/system-variables"},"TiDB\u7cfb\u7edf\u53d8\u91cf\u8868"),"\u4ee5\u67e5\u8be2\u6240\u9700\u4fe1\u606f\u6216\u5176\u4ed6\u7cfb\u7edf\u53d8\u91cf\u3002"),(0,r.yg)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0cTiDB\u4e5f\u63d0\u4f9b\u9ed8\u8ba4\u76d1\u63a7\u6307\u6807\u8868\uff0c\u89c1",(0,r.yg)("a",{parentName:"p",href:"https://docs.pingcap.com/zh/tidb/stable/metrics-schema"},"Metrics Schema"),"\u4e0e",(0,r.yg)("a",{parentName:"p",href:"https://docs.pingcap.com/zh/tidb/stable/information-schema-metrics-summary"},"METRICS_SUMMARY"),"\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u81ea\u884c\u6dfb\u52a0\u68c0\u7d22\u5f0f\u3002"),(0,r.yg)("p",null,"\u7531\u4e8e\u53ef\u4ee5\u88ab\u76d1\u63a7\u7684\u6307\u6807\u8fc7\u591a\uff0c\u4e0b\u6587\u4ec5\u4ecb\u7ecd\u76d1\u63a7\u6a21\u677f\u4e2d\u6240\u67e5\u8be2\u7684\u6307\u6807\u3002"),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408\u7cfb\u7edf\u53d8\u91cf"},"\u6307\u6807\u96c6\u5408\uff1a\u7cfb\u7edf\u53d8\u91cf"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"version"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"MySQL \u7684\u7248\u672c\u548c TiDB \u7684\u7248\u672c\uff0c\u4f8b\u5982 '8.0.11-TiDB-v7.5.1'")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"version_comment"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"TiDB \u7248\u672c\u53f7\u7684\u5176\u4ed6\u4fe1\u606f\uff0c\u4f8b\u5982 'TiDB Server (Apache License 2.0) Community Edition, MySQL 8.0 compatible'")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"version_compile_machine"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fd0\u884c TiDB \u7684 CPU \u67b6\u6784\u7684\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"version_compile_os"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"TiDB \u6240\u5728\u64cd\u4f5c\u7cfb\u7edf\u7684\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_connections"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8be5\u53d8\u91cf\u8868\u793a TiDB \u4e2d\u540c\u65f6\u5141\u8bb8\u7684\u6700\u5927\u5ba2\u6237\u7aef\u8fde\u63a5\u6570\uff0c\u7528\u4e8e\u8d44\u6e90\u63a7\u5236\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u53d8\u91cf\u503c\u4e3a 0 \u8868\u793a\u4e0d\u9650\u5236\u5ba2\u6237\u7aef\u8fde\u63a5\u6570\u3002\u5f53\u672c\u53d8\u91cf\u7684\u503c\u5927\u4e8e 0 \u4e14\u5ba2\u6237\u7aef\u8fde\u63a5\u6570\u5230\u8fbe\u6b64\u503c\u65f6\uff0cTiDB \u670d\u52a1\u7aef\u5c06\u4f1a\u62d2\u7edd\u65b0\u7684\u5ba2\u6237\u7aef\u8fde\u63a5\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datadir"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5b58\u50a8\u7684\u4f4d\u7f6e\uff0c\u4f4d\u7f6e\u53ef\u4ee5\u662f\u672c\u5730\u8def\u5f84 /tmp/tidb\u3002\u5982\u679c\u6570\u636e\u5b58\u50a8\u5728 TiKV \u4e0a\uff0c\u5219\u53ef\u4ee5\u662f\u6307\u5411 PD \u670d\u52a1\u5668\u7684\u8def\u5f84\u3002\u53d8\u91cf\u503c\u7684\u683c\u5f0f\u4e3a ${pd-ip}:${pd-port}\uff0c\u8868\u793a TiDB \u5728\u542f\u52a8\u65f6\u8fde\u63a5\u5230\u7684 PD \u670d\u52a1\u5668\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"port"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4f7f\u7528 MySQL \u534f\u8bae\u65f6 tidb-server \u76d1\u542c\u7684\u7aef\u53e3\u3002")))))}d.isMDXComponent=!0}}]);