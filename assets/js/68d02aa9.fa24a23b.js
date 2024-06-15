"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[9376],{15680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),g=p(r),d=a,y=g["".concat(c,".").concat(d)]||g[d]||s[d]||i;return r?n.createElement(y,l(l({ref:t},m),{},{components:r})):n.createElement(y,l({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},21772:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const i={id:"ssl_cert",title:"Monitoring SSL Certificate",sidebar_label:"SSL Monitor",keywords:["open source monitoring tool","open source ssl cert monitoring tool","monitoring website ssl metrics"]},l=void 0,o={unversionedId:"help/ssl_cert",id:"help/ssl_cert",title:"Monitoring SSL Certificate",description:"Monitor the website's SSL certificate expiration time, response time and other Metrics",source:"@site/docs/help/ssl_cert.md",sourceDirName:"help",slug:"/help/ssl_cert",permalink:"/docs/help/ssl_cert",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/help/ssl_cert.md",tags:[],version:"current",frontMatter:{id:"ssl_cert",title:"Monitoring SSL Certificate",sidebar_label:"SSL Monitor",keywords:["open source monitoring tool","open source ssl cert monitoring tool","monitoring website ssl metrics"]},sidebar:"docs",previous:{title:"Full site Monitor",permalink:"/docs/help/fullsite"},next:{title:"Nginx Monitor",permalink:"/docs/help/nginx"}},c={},p=[{value:"Configuration parameters",id:"configuration-parameters",level:3},{value:"Collect metrics",id:"collect-metrics",level:3},{value:"Metric collection: certificate",id:"metric-collection-certificate",level:4}],m={toc:p};function s(e){let{components:t,...r}=e;return(0,a.yg)("wrapper",(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Monitor the website's SSL certificate expiration time, response time and other Metrics")),(0,a.yg)("h3",{id:"configuration-parameters"},"Configuration parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Parameter name"),(0,a.yg)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,a.yg)("td",{parentName:"tr",align:null},"The peer IPV4, IPV6 or domain name to be monitored. Note \u26a0\ufe0fWithout protocol header (eg: https://, http://).")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Monitoring name"),(0,a.yg)("td",{parentName:"tr",align:null},"The name that identifies this monitoring, and the name needs to be unique.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Port"),(0,a.yg)("td",{parentName:"tr",align:null},"The port provided by the website, https generally defaults to 443.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Relative path"),(0,a.yg)("td",{parentName:"tr",align:null},"The suffix path of the website address except the IP port, for example, ",(0,a.yg)("inlineCode",{parentName:"td"},"www.tancloud.cn/console")," The relative path of the website is ",(0,a.yg)("inlineCode",{parentName:"td"},"/console"),".")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Acquisition Interval"),(0,a.yg)("td",{parentName:"tr",align:null},"Interval time for monitoring periodic data collection, in seconds, the minimum interval that can be set is 30 seconds")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Whether to detect"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring, and the operation of adding and modifying will continue after the detection is successful")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Description Remarks"),(0,a.yg)("td",{parentName:"tr",align:null},"More remark information to identify and describe this monitoring, users can remark information here")))),(0,a.yg)("h3",{id:"collect-metrics"},"Collect metrics"),(0,a.yg)("h4",{id:"metric-collection-certificate"},"Metric collection: certificate"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"subject"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"certificate name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"expired"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"expired or not")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"start_time"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"Validity start time")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"start_timestamp"),(0,a.yg)("td",{parentName:"tr",align:null},"ms millisecond"),(0,a.yg)("td",{parentName:"tr",align:null},"Validity start timestamp")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"end_time"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"Expiration time")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"end_timestamp"),(0,a.yg)("td",{parentName:"tr",align:null},"ms milliseconds"),(0,a.yg)("td",{parentName:"tr",align:null},"expiration timestamp")))))}s.isMDXComponent=!0}}]);