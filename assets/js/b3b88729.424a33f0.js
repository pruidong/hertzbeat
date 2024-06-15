"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[41660],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>u});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var g=r.createContext({}),d=function(e){var t=r.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return r.createElement(g.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,g=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(a),u=n,y=s["".concat(g,".").concat(u)]||s[u]||p[u]||l;return a?r.createElement(y,i(i({ref:t},m),{},{components:a})):r.createElement(y,i({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},46610:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(58168),n=(a(96540),a(15680));const l={id:"doris_fe",title:"Monitoring DORIS Database FE Monitoring",sidebar_label:"DORIS Database FE",keywords:["Open Source Monitoring System","Open Source Database Monitoring","DORIS Database FE Monitoring"]},i=void 0,o={unversionedId:"help/doris_fe",id:"version-v1.5.x/help/doris_fe",title:"Monitoring DORIS Database FE Monitoring",description:"Collect and monitor general performance metrics for DORIS database FE. Supports DORIS 2.0.0.",source:"@site/versioned_docs/version-v1.5.x/help/doris_fe.md",sourceDirName:"help",slug:"/help/doris_fe",permalink:"/docs/v1.5.x/help/doris_fe",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.5.x/help/doris_fe.md",tags:[],version:"v1.5.x",frontMatter:{id:"doris_fe",title:"Monitoring DORIS Database FE Monitoring",sidebar_label:"DORIS Database FE",keywords:["Open Source Monitoring System","Open Source Database Monitoring","DORIS Database FE Monitoring"]},sidebar:"docs",previous:{title:"DORIS\u6570\u636e\u5e93BE",permalink:"/docs/v1.5.x/help/doris_be"},next:{title:"Hadoop",permalink:"/docs/v1.5.x/help/hadoop"}},g={},d=[{value:"Pre-monitoring operations",id:"pre-monitoring-operations",level:3},{value:"Configuration Parameters",id:"configuration-parameters",level:3},{value:"Collection Indicators",id:"collection-indicators",level:3},{value:"Metric Set: doris_fe_connection_total",id:"metric-set-doris_fe_connection_total",level:4},{value:"Metric Set: doris_fe_edit_log_clean",id:"metric-set-doris_fe_edit_log_clean",level:4},{value:"Metric Set: doris_fe_edit_log",id:"metric-set-doris_fe_edit_log",level:4},{value:"Metric Set: doris_fe_image_clean",id:"metric-set-doris_fe_image_clean",level:4},{value:"Metric Set: doris_fe_image_write",id:"metric-set-doris_fe_image_write",level:4},{value:"Metric Set: doris_fe_query_err",id:"metric-set-doris_fe_query_err",level:4},{value:"Metric Set: doris_fe_max_journal_id",id:"metric-set-doris_fe_max_journal_id",level:4},{value:"Metric Set: doris_fe_max_tablet_compaction_score",id:"metric-set-doris_fe_max_tablet_compaction_score",level:4},{value:"Metric Set: doris_fe_qps",id:"metric-set-doris_fe_qps",level:4},{value:"Metric Set: doris_fe_query_err_rate",id:"metric-set-doris_fe_query_err_rate",level:4},{value:"Metric Set: doris_fe_report_queue_size",id:"metric-set-doris_fe_report_queue_size",level:4},{value:"Metric Set: doris_fe_rps",id:"metric-set-doris_fe_rps",level:4},{value:"Metric Set: doris_fe_scheduled_tablet_num",id:"metric-set-doris_fe_scheduled_tablet_num",level:4},{value:"Metric Set: doris_fe_txn_status",id:"metric-set-doris_fe_txn_status",level:4}],m={toc:d};function p(e){let{components:t,...a}=e;return(0,n.yg)("wrapper",(0,r.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Collect and monitor general performance metrics for DORIS database FE. Supports DORIS 2.0.0.")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Protocol: HTTP")),(0,n.yg)("h3",{id:"pre-monitoring-operations"},"Pre-monitoring operations"),(0,n.yg)("p",null,"Check the ",(0,n.yg)("inlineCode",{parentName:"p"},"fe/conf/fe.conf")," file to obtain the value of the ",(0,n.yg)("inlineCode",{parentName:"p"},"http_port")," configuration item, which is used for monitoring."),(0,n.yg)("h3",{id:"configuration-parameters"},"Configuration Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Parameter Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Monitor Host"),(0,n.yg)("td",{parentName:"tr",align:null},"The monitored target's IPV4, IPV6, or domain name. Note: Without the protocol header (e.g., https://, http://)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Task Name"),(0,n.yg)("td",{parentName:"tr",align:null},"A unique name identifying this monitoring task")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Port"),(0,n.yg)("td",{parentName:"tr",align:null},"The port provided by the database to the outside, default is 8030 ,get the value of the",(0,n.yg)("inlineCode",{parentName:"td"},"http_port")," configuration item")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Query Timeout"),(0,n.yg)("td",{parentName:"tr",align:null},"The timeout for the connection to not respond, in milliseconds, default is 3000 milliseconds")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Database Name"),(0,n.yg)("td",{parentName:"tr",align:null},"Optional database instance name")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Collection Interval"),(0,n.yg)("td",{parentName:"tr",align:null},"The interval between periodic data collections for monitoring, in seconds, with a minimum interval of 30 seconds")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Probe Required"),(0,n.yg)("td",{parentName:"tr",align:null},"Whether to probe and check the availability of monitoring before adding new monitoring, continue with the addition or modification operation only if the probe is successful")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Description"),(0,n.yg)("td",{parentName:"tr",align:null},"Additional notes and descriptions for this monitoring task")))),(0,n.yg)("h3",{id:"collection-indicators"},"Collection Indicators"),(0,n.yg)("h4",{id:"metric-set-doris_fe_connection_total"},"Metric Set: doris_fe_connection_total"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"value"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"The current number of MySQL port connections on FE")))),(0,n.yg)("h4",{id:"metric-set-doris_fe_edit_log_clean"},"Metric Set: doris_fe_edit_log_clean"),(0,n.yg)("p",null,"Should not fail; if it does, manual intervention is required."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"success"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"The number of successful cleanups of historical metadata logs")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"failed"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"The number of failed cleanups of historical metadata logs")))),(0,n.yg)("h4",{id:"metric-set-doris_fe_edit_log"},"Metric Set: doris_fe_edit_log"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"write"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"The count of metadata log write operations")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"read"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"The count of metadata log read operations")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"current"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"The current number of metadata logs")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"accumulated_bytes"),(0,n.yg)("td",{parentName:"tr",align:null},"Bytes"),(0,n.yg)("td",{parentName:"tr",align:null},"The cumulative value of metadata log writes")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"current_bytes"),(0,n.yg)("td",{parentName:"tr",align:null},"Bytes"),(0,n.yg)("td",{parentName:"tr",align:null},"The current value of metadata logs")))),(0,n.yg)("h4",{id:"metric-set-doris_fe_image_clean"},"Metric Set: doris_fe_image_clean"),(0,n.yg)("p",null,"Should not fail; if it does, manual intervention is required."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"success"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"The number of successful cleanups of historical metadata image files")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"failed"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"The number of failed cleanups of historical metadata image files")))),(0,n.yg)("h4",{id:"metric-set-doris_fe_image_write"},"Metric Set: doris_fe_image_write"),(0,n.yg)("p",null,"Should not fail; if it does, manual intervention is required."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"success"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"The number of successful generations of metadata image files")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"failed"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"The number of failed generations of metadata image files")))),(0,n.yg)("h4",{id:"metric-set-doris_fe_query_err"},"Metric Set: doris_fe_query_err"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"value"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"The cumulative value of erroneous queries")))),(0,n.yg)("h4",{id:"metric-set-doris_fe_max_journal_id"},"Metric Set: doris_fe_max_journal_id"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"value"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"The current maximum metadata log ID on the FE node. If it is a Master FE, it is the maximum ID currently written; if it is a non-Master FE, it represents the maximum metadata log ID currently being replayed. Used to observe if there is a large gap between the IDs of multiple FEs. A large gap indicates issues with metadata synchronization")))),(0,n.yg)("h4",{id:"metric-set-doris_fe_max_tablet_compaction_score"},"Metric Set: doris_fe_max_tablet_compaction_score"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"value"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"The largest compaction score value among all BE nodes. This value can observe the current cluster's maximum compaction score to judge if it is too high. If too high, there may be delays in queries or writes")))),(0,n.yg)("h4",{id:"metric-set-doris_fe_qps"},"Metric Set: doris_fe_qps"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"value"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"The number of queries per second on the current FE (only counts query requests)")))),(0,n.yg)("h4",{id:"metric-set-doris_fe_query_err_rate"},"Metric Set: doris_fe_query_err_rate"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"value"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"The number of erroneous queries per second")))),(0,n.yg)("h4",{id:"metric-set-doris_fe_report_queue_size"},"Metric Set: doris_fe_report_queue_size"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"value"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"The length of the queue for various regular reporting tasks on the BE side at the FE end. This value reflects the degree of blocking of reporting tasks on the Master FE node. A larger value indicates insufficient processing capacity on the FE")))),(0,n.yg)("h4",{id:"metric-set-doris_fe_rps"},"Metric Set: doris_fe_rps"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"value"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"The number of requests per second on the current FE (includes queries and other types of statements)")))),(0,n.yg)("h4",{id:"metric-set-doris_fe_scheduled_tablet_num"},"Metric Set: doris_fe_scheduled_tablet_num"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"value"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"The number of tablets currently being scheduled by the Master FE node. This includes tablets that are being repaired and tablets that are being balanced. This value can reflect the number of tablets currently migrating in the cluster. If there is a value for a long time, it indicates that the cluster is unstable")))),(0,n.yg)("h4",{id:"metric-set-doris_fe_txn_status"},"Metric Set: doris_fe_txn_status"),(0,n.yg)("p",null,"Can observe the number of import transactions in various states to determine if there is a backlog."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,n.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"unknown"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"Unknown state")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"prepare"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"In preparation")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"committed"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"Committed")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"visible"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"Visible")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"aborted"),(0,n.yg)("td",{parentName:"tr",align:null},"None"),(0,n.yg)("td",{parentName:"tr",align:null},"Aborted / Revoked")))))}p.isMDXComponent=!0}}]);