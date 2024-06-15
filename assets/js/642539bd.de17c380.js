"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[55292],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=m(n),d=a,y=s["".concat(p,".").concat(d)]||s[d]||g[d]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(58168),a=(n(96540),n(15680));const o={id:"prometheus",title:"Monitoring Prometheus Task",sidebar_label:"Prometheus Task Monitor",keywords:["open source monitoring tool","Prometheus protocol monitoring"]},l=void 0,i={unversionedId:"help/prometheus",id:"version-v1.5.x/help/prometheus",title:"Monitoring Prometheus Task",description:"Collect metric data of applications that support the Prometheus protocol.",source:"@site/versioned_docs/version-v1.5.x/help/prometheus.md",sourceDirName:"help",slug:"/help/prometheus",permalink:"/docs/v1.5.x/help/prometheus",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.5.x/help/prometheus.md",tags:[],version:"v1.5.x",frontMatter:{id:"prometheus",title:"Monitoring Prometheus Task",sidebar_label:"Prometheus Task Monitor",keywords:["open source monitoring tool","Prometheus protocol monitoring"]},sidebar:"docs",previous:{title:"Help Center",permalink:"/docs/v1.5.x/help/guide"},next:{title:"Website Monitor",permalink:"/docs/v1.5.x/help/website"}},p={},m=[{value:"Configuration parameter",id:"configuration-parameter",level:3},{value:"Example of usage",id:"example-of-usage",level:3}],u={toc:m};function g(e){let{components:t,...n}=e;return(0,a.yg)("wrapper",(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Collect metric data of applications that support the Prometheus protocol.")),(0,a.yg)("h3",{id:"configuration-parameter"},"Configuration parameter"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Parameter name"),(0,a.yg)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Target Host"),(0,a.yg)("td",{parentName:"tr",align:null},"Monitored IPV4, IPV6 or domain name. Note\u26a0\ufe0fWithout protocol header (eg: https://, http://)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Task Name"),(0,a.yg)("td",{parentName:"tr",align:null},"Identify the name of this monitoring. The name needs to be unique.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Port"),(0,a.yg)("td",{parentName:"tr",align:null},"Monitor HTTP port.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Endpoint Path"),(0,a.yg)("td",{parentName:"tr",align:null},"Monitor the path of HTTP interfaces, Note \u26a0\ufe0f It needs to start with /.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Query Timeout"),(0,a.yg)("td",{parentName:"tr",align:null},"Set the data collection timeout, unit: ms, default: 6000ms.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"HTTPS"),(0,a.yg)("td",{parentName:"tr",align:null},"HTTPS enable,optional,default:false.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Headers"),(0,a.yg)("td",{parentName:"tr",align:null},"HTTP request headers,optional.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Params"),(0,a.yg)("td",{parentName:"tr",align:null},"Request params,optional.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Content-Type"),(0,a.yg)("td",{parentName:"tr",align:null},"ContentType,optional.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"BODY"),(0,a.yg)("td",{parentName:"tr",align:null},"Request body,optional.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Auth Type"),(0,a.yg)("td",{parentName:"tr",align:null},"Authentication methods, optional values include: ",(0,a.yg)("inlineCode",{parentName:"td"},"Basic Auth"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"Digest Auth"),",optional.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Username"),(0,a.yg)("td",{parentName:"tr",align:null},"Username,optional.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Password"),(0,a.yg)("td",{parentName:"tr",align:null},"Password,optional.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Collection interval"),(0,a.yg)("td",{parentName:"tr",align:null},"Interval time of monitor periodic data collection, unit: second, and the minimum interval that can be set is 30 seconds.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Bind Tags"),(0,a.yg)("td",{parentName:"tr",align:null},"Used to classify and manage monitoring resources.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Description remarks"),(0,a.yg)("td",{parentName:"tr",align:null},"For more information about identifying and describing this monitoring, users can note information here.")))),(0,a.yg)("h3",{id:"example-of-usage"},"Example of usage"),(0,a.yg)("p",null,"The exposed monitoring address of the application is: ",(0,a.yg)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080/actuator/prometheus")),(0,a.yg)("p",null,"You can use the following configuration:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Target Host: ",(0,a.yg)("inlineCode",{parentName:"li"},"127.0.0.1")),(0,a.yg)("li",{parentName:"ul"},"Port: ",(0,a.yg)("inlineCode",{parentName:"li"},"8080")),(0,a.yg)("li",{parentName:"ul"},"Endpoint Path: ",(0,a.yg)("inlineCode",{parentName:"li"},"/actuator/prometheus"))),(0,a.yg)("p",null,"Keep the rest of the settings default."))}g.isMDXComponent=!0}}]);