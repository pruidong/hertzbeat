"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[89425],{15680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},y=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,y=g(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,c=d["".concat(o,".").concat(u)]||d[u]||p[u]||l;return n?a.createElement(c,i(i({ref:t},y),{},{components:n})):a.createElement(c,i({ref:t},y))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g.mdxType="string"==typeof e?e:r,i[1]=g;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>g,toc:()=>m});var a=n(58168),r=(n(96540),n(15680));const l={id:"centos",title:"CentOS operating system monitoring",sidebar_label:"CentOS operating system",keywords:["open source monitoring tool","open source os monitoring tool","monitoring CentOS operating system metrics"]},i=void 0,g={unversionedId:"help/centos",id:"version-v1.4.x/help/centos",title:"CentOS operating system monitoring",description:"Collect and monitor the general performance Metrics of CentOS operating system.",source:"@site/versioned_docs/version-v1.4.x/help/centos.md",sourceDirName:"help",slug:"/help/centos",permalink:"/docs/v1.4.x/help/centos",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.4.x/help/centos.md",tags:[],version:"v1.4.x",frontMatter:{id:"centos",title:"CentOS operating system monitoring",sidebar_label:"CentOS operating system",keywords:["open source monitoring tool","open source os monitoring tool","monitoring CentOS operating system metrics"]},sidebar:"docs",previous:{title:"Ubuntu operating system",permalink:"/docs/v1.4.x/help/ubuntu"},next:{title:"Zookeeper Monitor",permalink:"/docs/v1.4.x/help/zookeeper"}},o={},m=[{value:"Configuration parameter",id:"configuration-parameter",level:3},{value:"Collection Metric",id:"collection-metric",level:3},{value:"Metric set\uff1abasic",id:"metric-setbasic",level:4},{value:"Metric set\uff1acpu",id:"metric-setcpu",level:4},{value:"Metric set\uff1amemory",id:"metric-setmemory",level:4},{value:"Metric set\uff1adisk",id:"metric-setdisk",level:4},{value:"Metric set\uff1ainterface",id:"metric-setinterface",level:4},{value:"Metric set\uff1adisk_free",id:"metric-setdisk_free",level:4}],y={toc:m};function p(e){let{components:t,...n}=e;return(0,r.yg)("wrapper",(0,a.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Collect and monitor the general performance Metrics of CentOS operating system.")),(0,r.yg)("h3",{id:"configuration-parameter"},"Configuration parameter"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.yg)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,r.yg)("td",{parentName:"tr",align:null},"Monitored IPV4, IPV6 or domain name. Note\u26a0\ufe0fWithout protocol header (eg: https://, http://)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Monitoring name"),(0,r.yg)("td",{parentName:"tr",align:null},"Identify the name of this monitoring. The name needs to be unique")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Port"),(0,r.yg)("td",{parentName:"tr",align:null},"Port provided by Linux SSH. The default is 22")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Username"),(0,r.yg)("td",{parentName:"tr",align:null},"SSH connection user name, optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Password"),(0,r.yg)("td",{parentName:"tr",align:null},"SSH connection password, optional")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Collection interval"),(0,r.yg)("td",{parentName:"tr",align:null},"Interval time of monitor periodic data collection, unit: second, and the minimum interval that can be set is 30 seconds")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Whether to detect"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring. Adding and modifying operations will continue only after the detection is successful")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Description remarks"),(0,r.yg)("td",{parentName:"tr",align:null},"For more information about identifying and describing this monitoring, users can note information here")))),(0,r.yg)("h3",{id:"collection-metric"},"Collection Metric"),(0,r.yg)("h4",{id:"metric-setbasic"},"Metric set\uff1abasic"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hostname"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"Host name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"version"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"Operating system version")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"uptime"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"System running time")))),(0,r.yg)("h4",{id:"metric-setcpu"},"Metric set\uff1acpu"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"info"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"CPU model")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"cores"),(0,r.yg)("td",{parentName:"tr",align:null},"cores"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of CPU cores")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"interrupt"),(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of CPU interrupts")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"load"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"Average load of CPU in the last 1/5/15 minutes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"context_switch"),(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of current context switches")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"usage"),(0,r.yg)("td",{parentName:"tr",align:null},"%"),(0,r.yg)("td",{parentName:"tr",align:null},"CPU usage")))),(0,r.yg)("h4",{id:"metric-setmemory"},"Metric set\uff1amemory"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"total"),(0,r.yg)("td",{parentName:"tr",align:null},"Mb"),(0,r.yg)("td",{parentName:"tr",align:null},"Total memory capacity")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"used"),(0,r.yg)("td",{parentName:"tr",align:null},"Mb"),(0,r.yg)("td",{parentName:"tr",align:null},"User program memory")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"free"),(0,r.yg)("td",{parentName:"tr",align:null},"Mb"),(0,r.yg)("td",{parentName:"tr",align:null},"Free memory capacity")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"buff_cache"),(0,r.yg)("td",{parentName:"tr",align:null},"Mb"),(0,r.yg)("td",{parentName:"tr",align:null},"Memory occupied by cache")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"available"),(0,r.yg)("td",{parentName:"tr",align:null},"Mb"),(0,r.yg)("td",{parentName:"tr",align:null},"Remaining available memory capacity")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"usage"),(0,r.yg)("td",{parentName:"tr",align:null},"%"),(0,r.yg)("td",{parentName:"tr",align:null},"Memory usage")))),(0,r.yg)("h4",{id:"metric-setdisk"},"Metric set\uff1adisk"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"disk_num"),(0,r.yg)("td",{parentName:"tr",align:null},"blocks"),(0,r.yg)("td",{parentName:"tr",align:null},"Total number of disks")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_num"),(0,r.yg)("td",{parentName:"tr",align:null},"partitions"),(0,r.yg)("td",{parentName:"tr",align:null},"Total number of partitions")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"block_write"),(0,r.yg)("td",{parentName:"tr",align:null},"blocks"),(0,r.yg)("td",{parentName:"tr",align:null},"Total number of blocks written to disk")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"block_read"),(0,r.yg)("td",{parentName:"tr",align:null},"blocks"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of blocks read from disk")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"write_rate"),(0,r.yg)("td",{parentName:"tr",align:null},"iops"),(0,r.yg)("td",{parentName:"tr",align:null},"Rate of writing disk blocks per second")))),(0,r.yg)("h4",{id:"metric-setinterface"},"Metric set\uff1ainterface"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"interface_name"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"Network card name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"receive_bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"byte"),(0,r.yg)("td",{parentName:"tr",align:null},"Inbound data traffic(bytes)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"transmit_bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"byte"),(0,r.yg)("td",{parentName:"tr",align:null},"Outbound data traffic(bytes)")))),(0,r.yg)("h4",{id:"metric-setdisk_free"},"Metric set\uff1adisk_free"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"filesystem"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"File system name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"used"),(0,r.yg)("td",{parentName:"tr",align:null},"Mb"),(0,r.yg)("td",{parentName:"tr",align:null},"Used disk size")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"available"),(0,r.yg)("td",{parentName:"tr",align:null},"Mb"),(0,r.yg)("td",{parentName:"tr",align:null},"Available disk size")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"usage"),(0,r.yg)("td",{parentName:"tr",align:null},"%"),(0,r.yg)("td",{parentName:"tr",align:null},"usage")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"mounted"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"Mount point directory")))))}p.isMDXComponent=!0}}]);