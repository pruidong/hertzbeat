"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[32441],{15680:(t,e,n)=>{n.d(e,{xA:()=>d,yg:()=>u});var a=n(96540);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):g(g({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},o=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=y(t,["components","mdxType","originalType","parentName"]),o=p(n),u=r,N=o["".concat(i,".").concat(u)]||o[u]||m[u]||l;return n?a.createElement(N,g(g({ref:e},d),{},{components:n})):a.createElement(N,g({ref:e},d))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,g=new Array(l);g[0]=o;var y={};for(var i in e)hasOwnProperty.call(e,i)&&(y[i]=e[i]);y.originalType=t,y.mdxType="string"==typeof t?t:r,g[1]=y;for(var p=2;p<l;p++)g[p]=n[p];return a.createElement.apply(null,g)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},83996:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>y,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={id:"mysql",title:"\u76d1\u63a7\uff1aMYSQL\u6570\u636e\u5e93\u76d1\u63a7",sidebar_label:"MYSQL\u6570\u636e\u5e93",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u6570\u636e\u5e93\u76d1\u63a7","Mysql\u6570\u636e\u5e93\u76d1\u63a7"]},g=void 0,y={unversionedId:"help/mysql",id:"version-v1.5.x/help/mysql",title:"\u76d1\u63a7\uff1aMYSQL\u6570\u636e\u5e93\u76d1\u63a7",description:"\u5bf9MYSQL\u6570\u636e\u5e93\u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7\u3002\u652f\u6301MYSQL5+\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.5.x/help/mysql.md",sourceDirName:"help",slug:"/help/mysql",permalink:"/zh-cn/docs/v1.5.x/help/mysql",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.5.x/help/mysql.md",tags:[],version:"v1.5.x",frontMatter:{id:"mysql",title:"\u76d1\u63a7\uff1aMYSQL\u6570\u636e\u5e93\u76d1\u63a7",sidebar_label:"MYSQL\u6570\u636e\u5e93",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u6570\u636e\u5e93\u76d1\u63a7","Mysql\u6570\u636e\u5e93\u76d1\u63a7"]},sidebar:"docs",previous:{title:"DynamicTp\u7ebf\u7a0b\u6c60\u76d1\u63a7",permalink:"/zh-cn/docs/v1.5.x/help/dynamic_tp"},next:{title:"MariaDB\u6570\u636e\u5e93",permalink:"/zh-cn/docs/v1.5.x/help/mariadb"}},i={},p=[{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u91c7\u96c6\u6307\u6807",id:"\u91c7\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u96c6\u5408\uff1abasic",id:"\u6307\u6807\u96c6\u5408basic",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1astatus",id:"\u6307\u6807\u96c6\u5408status",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1ainnodb",id:"\u6307\u6807\u96c6\u5408innodb",level:4}],d={toc:p};function m(t){let{components:e,...n}=t;return(0,r.yg)("wrapper",(0,a.A)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u5bf9MYSQL\u6570\u636e\u5e93\u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7\u3002\u652f\u6301MYSQL5+\u3002")),(0,r.yg)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7Host"),(0,r.yg)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u63a7\u7684\u5bf9\u7aefIPV4\uff0cIPV6\u6216\u57df\u540d\u3002\u6ce8\u610f\u26a0\ufe0f\u4e0d\u5e26\u534f\u8bae\u5934(eg: https://, http://)\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u4efb\u52a1\u540d\u79f0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6b64\u76d1\u63a7\u7684\u540d\u79f0\uff0c\u540d\u79f0\u9700\u8981\u4fdd\u8bc1\u552f\u4e00\u6027\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5bf9\u5916\u63d0\u4f9b\u7684\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a3306\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6eSQL\u67e5\u8be2\u672a\u54cd\u5e94\u6570\u636e\u65f6\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4dms\u6beb\u79d2\uff0c\u9ed8\u8ba43000\u6beb\u79d2\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u540d\u79f0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5b9e\u4f8b\u540d\u79f0\uff0c\u53ef\u9009\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u8fde\u63a5\u7528\u6237\u540d\uff0c\u53ef\u9009")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u8fde\u63a5\u5bc6\u7801\uff0c\u53ef\u9009")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"URL"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u8fde\u63a5URL\uff0c\u53ef\u9009\uff0c\u82e5\u914d\u7f6e\uff0c\u5219URL\u91cc\u9762\u7684\u6570\u636e\u5e93\u540d\u79f0\uff0c\u7528\u6237\u540d\u5bc6\u7801\u7b49\u53c2\u6570\u4f1a\u8986\u76d6\u4e0a\u9762\u914d\u7f6e\u7684\u53c2\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u91c7\u96c6\u95f4\u9694"),(0,r.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u5468\u671f\u6027\u91c7\u96c6\u6570\u636e\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\uff0c\u53ef\u8bbe\u7f6e\u7684\u6700\u5c0f\u95f4\u9694\u4e3a30\u79d2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u63a2\u6d4b"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65b0\u589e\u76d1\u63a7\u524d\u662f\u5426\u5148\u63a2\u6d4b\u68c0\u67e5\u76d1\u63a7\u53ef\u7528\u6027\uff0c\u63a2\u6d4b\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u65b0\u589e\u4fee\u6539\u64cd\u4f5c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u5907\u6ce8"),(0,r.yg)("td",{parentName:"tr",align:null},"\u66f4\u591a\u6807\u8bc6\u548c\u63cf\u8ff0\u6b64\u76d1\u63a7\u7684\u5907\u6ce8\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u91cc\u5907\u6ce8\u4fe1\u606f")))),(0,r.yg)("h3",{id:"\u91c7\u96c6\u6307\u6807"},"\u91c7\u96c6\u6307\u6807"),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408basic"},"\u6307\u6807\u96c6\u5408\uff1abasic"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"version"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u7248\u672c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"port"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u66b4\u9732\u670d\u52a1\u7aef\u53e3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datadir"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5b58\u50a8\u6570\u636e\u76d8\u5730\u5740")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_connections"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u6700\u5927\u8fde\u63a5\u6570")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408status"},"\u6307\u6807\u96c6\u5408\uff1astatus"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"threads_created"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"MySql\u5df2\u7ecf\u521b\u5efa\u7684\u603b\u8fde\u63a5\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"threads_connected"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"MySql\u5df2\u7ecf\u8fde\u63a5\u7684\u8fde\u63a5\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"threads_cached"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"MySql\u5f53\u524d\u7f13\u5b58\u7684\u8fde\u63a5\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"threads_running"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"MySql\u5f53\u524d\u6d3b\u8dc3\u7684\u8fde\u63a5\u6570")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408innodb"},"\u6307\u6807\u96c6\u5408\uff1ainnodb"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"innodb_data_reads"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"innodb\u5e73\u5747\u6bcf\u79d2\u4ece\u6587\u4ef6\u4e2d\u8bfb\u53d6\u7684\u6b21\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"innodb_data_writes"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"innodb\u5e73\u5747\u6bcf\u79d2\u4ece\u6587\u4ef6\u4e2d\u5199\u5165\u7684\u6b21\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"innodb_data_read"),(0,r.yg)("td",{parentName:"tr",align:null},"KB"),(0,r.yg)("td",{parentName:"tr",align:null},"innodb\u5e73\u5747\u6bcf\u79d2\u949f\u8bfb\u53d6\u7684\u6570\u636e\u91cf\uff0c\u5355\u4f4d\u4e3aKB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"innodb_data_written"),(0,r.yg)("td",{parentName:"tr",align:null},"KB"),(0,r.yg)("td",{parentName:"tr",align:null},"innodb\u5e73\u5747\u6bcf\u79d2\u949f\u5199\u5165\u7684\u6570\u636e\u91cf\uff0c\u5355\u4f4d\u4e3aKB")))))}m.isMDXComponent=!0}}]);