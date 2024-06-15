"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[40039],{15680:(t,e,a)=>{a.d(e,{xA:()=>m,yg:()=>N});var n=a(96540);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var y=n.createContext({}),i=function(t){var e=n.useContext(y),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},m=function(t){var e=i(t.components);return n.createElement(y.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,y=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=i(a),N=r,o=u["".concat(y,".").concat(N)]||u[N]||d[N]||l;return a?n.createElement(o,g(g({ref:e},m),{},{components:a})):n.createElement(o,g({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,g=new Array(l);g[0]=u;var p={};for(var y in e)hasOwnProperty.call(e,y)&&(p[y]=e[y]);p.originalType=t,p.mdxType="string"==typeof t?t:r,g[1]=p;for(var i=2;i<l;i++)g[i]=a[i];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},25174:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>y,contentTitle:()=>g,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var n=a(58168),r=(a(96540),a(15680));const l={id:"yarn",title:"\u76d1\u63a7\uff1aApache Yarn\u76d1\u63a7",sidebar_label:"Apache Yarn",keywords:["\u5927\u6570\u636e\u76d1\u63a7\u7cfb\u7edf","Apache Yarn\u76d1\u63a7","\u8d44\u6e90\u7ba1\u7406\u5668\u76d1\u63a7"]},g=void 0,p={unversionedId:"help/yarn",id:"version-v1.5.x/help/yarn",title:"\u76d1\u63a7\uff1aApache Yarn\u76d1\u63a7",description:"Hertzbeat \u5bf9 Apache Yarn \u8282\u70b9\u76d1\u63a7\u6307\u6807\u8fdb\u884c\u76d1\u63a7\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.5.x/help/yarn.md",sourceDirName:"help",slug:"/help/yarn",permalink:"/zh-cn/docs/v1.5.x/help/yarn",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.5.x/help/yarn.md",tags:[],version:"v1.5.x",frontMatter:{id:"yarn",title:"\u76d1\u63a7\uff1aApache Yarn\u76d1\u63a7",sidebar_label:"Apache Yarn",keywords:["\u5927\u6570\u636e\u76d1\u63a7\u7cfb\u7edf","Apache Yarn\u76d1\u63a7","\u8d44\u6e90\u7ba1\u7406\u5668\u76d1\u63a7"]},sidebar:"docs",previous:{title:"Hadoop",permalink:"/zh-cn/docs/v1.5.x/help/hadoop"},next:{title:"Apache Hbase Master",permalink:"/zh-cn/docs/v1.5.x/help/hbase_master"}},y={},i=[{value:"\u76d1\u63a7\u524d\u64cd\u4f5c",id:"\u76d1\u63a7\u524d\u64cd\u4f5c",level:2},{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:2},{value:"\u91c7\u96c6\u6307\u6807",id:"\u91c7\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u96c6\u5408\uff1aClusterMetrics",id:"\u6307\u6807\u96c6\u5408clustermetrics",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1aJvmMetrics",id:"\u6307\u6807\u96c6\u5408jvmmetrics",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1aQueueMetrics",id:"\u6307\u6807\u96c6\u5408queuemetrics",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1aruntime",id:"\u6307\u6807\u96c6\u5408runtime",level:4}],m={toc:i};function d(t){let{components:e,...a}=t;return(0,r.yg)("wrapper",(0,n.A)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Hertzbeat \u5bf9 Apache Yarn \u8282\u70b9\u76d1\u63a7\u6307\u6807\u8fdb\u884c\u76d1\u63a7\u3002")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u4f7f\u7528\u534f\u8bae\uff1aHTTP")),(0,r.yg)("h2",{id:"\u76d1\u63a7\u524d\u64cd\u4f5c"},"\u76d1\u63a7\u524d\u64cd\u4f5c"),(0,r.yg)("p",null,"\u83b7\u53d6 Apache Yarn \u7684 HTTP \u76d1\u63a7\u7aef\u53e3\u3002 \u53d6\u503c\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"yarn.resourcemanager.webapp.address")),(0,r.yg)("h2",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u76ee\u6807Host"),(0,r.yg)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u63a7\u7684\u5bf9\u7aefIPV4\uff0cIPV6\u6216\u57df\u540d\u3002\u4e0d\u5e26\u534f\u8bae\u5934\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,r.yg)("td",{parentName:"tr",align:null},"Apache Yarn \u7684\u76d1\u63a7\u7aef\u53e3\u53f7\uff0c\u9ed8\u8ba4\u4e3a8088\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4"),(0,r.yg)("td",{parentName:"tr",align:null},"\u67e5\u8be2 Apache Yarn \u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2\uff0c\u9ed8\u8ba46000\u6beb\u79d2\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u6307\u6807\u91c7\u96c6\u95f4\u9694"),(0,r.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u6570\u636e\u91c7\u96c6\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\u79d2\uff0c\u6700\u5c0f\u95f4\u9694\u4e3a30\u79d2\u3002")))),(0,r.yg)("h3",{id:"\u91c7\u96c6\u6307\u6807"},"\u91c7\u96c6\u6307\u6807"),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408clustermetrics"},"\u6307\u6807\u96c6\u5408\uff1aClusterMetrics"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NumActiveNMs"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5b58\u6d3b\u7684 NodeManager \u4e2a\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NumDecommissionedNMs"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u5f53\u524d Decommissioned \u7684 NodeManager \u4e2a\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NumDecommissioningNMs"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u6b63\u5728\u4e0b\u7ebf\u7684\u8282\u70b9\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NumLostNMs"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u4e22\u5931\u7684\u8282\u70b9\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NumUnhealthyNMs"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u4e0d\u5065\u5eb7\u7684\u8282\u70b9\u6570")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408jvmmetrics"},"\u6307\u6807\u96c6\u5408\uff1aJvmMetrics"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MemNonHeapCommittedM"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"JVM\u5f53\u524d\u975e\u5806\u5185\u5b58\u5927\u5c0f\u5df2\u63d0\u4ea4\u5927\u5c0f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MemNonHeapMaxM"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"JVM\u975e\u5806\u6700\u5927\u53ef\u7528\u5185\u5b58")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MemNonHeapUsedM"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"JVM\u5f53\u524d\u5df2\u4f7f\u7528\u7684\u975e\u5806\u5185\u5b58\u5927\u5c0f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MemHeapCommittedM"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"JVM\u5f53\u524d\u5df2\u4f7f\u7528\u5806\u5185\u5b58\u5927\u5c0f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MemHeapMaxM"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"JVM\u5806\u5185\u5b58\u6700\u5927\u53ef\u7528\u5185\u5b58")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MemHeapUsedM"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"JVM\u5f53\u524d\u5df2\u4f7f\u7528\u5806\u5185\u5b58\u5927\u5c0f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GcTimeMillis"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"JVM GC\u65f6\u95f4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GcCount"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"JVM GC\u6b21\u6570")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408queuemetrics"},"\u6307\u6807\u96c6\u5408\uff1aQueueMetrics"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"queue"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u961f\u5217\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AllocatedVCores"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u5206\u914d\u7684\u865a\u62df\u6838\u6570(\u5df2\u5206\u914d)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ReservedVCores"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u9884\u7559\u6838\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AvailableVCores"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u7528\u6838\u6570(\u5c1a\u672a\u5206\u914d)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PendingVCores"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u963b\u585e\u8c03\u5ea6\u6838\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AllocatedMB"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5df2\u5206\u914d(\u5df2\u7528)\u7684\u5185\u5b58\u5927\u5c0f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AvailableMB"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u7528\u5185\u5b58(\u5c1a\u672a\u5206\u914d)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PendingMB"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"\u963b\u585e\u8c03\u5ea6\u5185\u5b58")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ReservedMB"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"\u9884\u7559\u5185\u5b58")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AllocatedContainers"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u5df2\u5206\u914d(\u5df2\u7528)\u7684container\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PendingContainers"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u963b\u585e\u8c03\u5ea6container\u4e2a\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ReservedContainers"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u9884\u7559container\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AggregateContainersAllocated"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u7d2f\u79ef\u7684container\u5206\u914d\u603b\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AggregateContainersReleased"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u7d2f\u79ef\u7684container\u91ca\u653e\u603b\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AppsCompleted"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u5b8c\u6210\u7684\u4efb\u52a1\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AppsKilled"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u88ab\u6740\u6389\u7684\u4efb\u52a1\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AppsFailed"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u5931\u8d25\u7684\u4efb\u52a1\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AppsPending"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u963b\u585e\u7684\u4efb\u52a1\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AppsRunning"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u63d0\u6b63\u5728\u8fd0\u884c\u7684\u4efb\u52a1\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AppsSubmitted"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u63d0\u4ea4\u8fc7\u7684\u4efb\u52a1\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"running_0"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u65f6\u95f4\u5c0f\u4e8e60\u5206\u949f\u7684\u4f5c\u4e1a\u4e2a\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"running_60"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u65f6\u95f4\u4ecb\u4e8e60~300\u5206\u949f\u7684\u4f5c\u4e1a\u4e2a\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"running_300"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u65f6\u95f4\u4ecb\u4e8e300~1440\u5206\u949f\u7684\u4f5c\u4e1a\u4e2a\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"running_1440"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u65f6\u95f4\u5927\u4e8e1440\u5206\u949f\u7684\u4f5c\u4e1a\u4e2a\u6570")))),(0,r.yg)("h4",{id:"\u6307\u6807\u96c6\u5408runtime"},"\u6307\u6807\u96c6\u5408\uff1aruntime"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"StartTime"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u542f\u52a8\u65f6\u95f4\u6233")))))}d.isMDXComponent=!0}}]);