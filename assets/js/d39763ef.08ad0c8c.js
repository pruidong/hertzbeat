"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[86424],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>c});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),h=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=h(e.components);return a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=h(n),c=i,m=u["".concat(s,".").concat(c)]||u[c]||g[c]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var h=2;h<o;h++)r[h]=n[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var a=n(58168),i=(n(96540),n(15680));const o={title:"HertzBeat's Monitoring Practice for API Gateway Apache ShenYu",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"]},r=void 0,l={permalink:"/blog/2023/01/08/monitor-shenyu",editUrl:"https://github.com/apache/hertzbeat/edit/master/home/blog/2023-01-08-monitor-shenyu.md",source:"@site/blog/2023-01-08-monitor-shenyu.md",title:"HertzBeat's Monitoring Practice for API Gateway Apache ShenYu",description:"Monitoring practice for API gateway Apache ShenYu using HertzBeat, 5 minutes!",date:"2023-01-08T00:00:00.000Z",formattedDate:"January 8, 2023",tags:[{label:"opensource",permalink:"/blog/tags/opensource"},{label:"practice",permalink:"/blog/tags/practice"}],readingTime:5.4,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"HertzBeat's Monitoring Practice for API Gateway Apache ShenYu",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"]},prevItem:{title:"Monitoring Practices for DynamicTp Thread Pooling Framework with HertzBeat",permalink:"/blog/2023/02/02/monitor-dynamic-tp"},nextItem:{title:"Use HertzBeat Monitoring IoTDB",permalink:"/blog/2023/01/05/monitor-iotdb"}},s={authorsImageUrls:[void 0]},h=[{value:"Monitoring practice for API gateway Apache ShenYu using HertzBeat, 5 minutes!",id:"monitoring-practice-for-api-gateway-apache-shenyu-using-hertzbeat-5-minutes",level:3},{value:"Introduction to Apache ShenYu",id:"introduction-to-apache-shenyu",level:3},{value:"HertzBeat Introduction",id:"hertzbeat-introduction",level:3},{value:"Monitor Apache ShenYu in HertzBeat in 5 minutes!",id:"monitor-apache-shenyu-in-hertzbeat-in-5-minutes",level:3},{value:"You must have a ShenYu environment and a HertzBeat environment.",id:"you-must-have-a-shenyu-environment-and-a-hertzbeat-environment",level:4},{value:"i. Enable the <code>metrics</code> plugin on the ShenYu side, which will provide the metrics interface data.",id:"i-enable-the-metrics-plugin-on-the-shenyu-side-which-will-provide-the-metrics-interface-data",level:4},{value:"ii. Adding ShenYu Monitor in HertzBeat Monitor Page",id:"ii-adding-shenyu-monitor-in-hertzbeat-monitor-page",level:4},{value:"III. Adding ShenYu Metrics Threshold Alerts to the HertzBeat System",id:"iii-adding-shenyu-metrics-threshold-alerts-to-the-hertzbeat-system",level:4},{value:"Over and out, now wait for the alert message to come through. Ding, ding, ding, ding.",id:"over-and-out-now-wait-for-the-alert-message-to-come-through-ding-ding-ding-ding",level:3},{value:"Summary",id:"summary",level:2}],p={toc:h};function g(e){let{components:t,...o}=e;return(0,i.yg)("wrapper",(0,a.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h3",{id:"monitoring-practice-for-api-gateway-apache-shenyu-using-hertzbeat-5-minutes"},"Monitoring practice for API gateway Apache ShenYu using HertzBeat, 5 minutes!"),(0,i.yg)("h3",{id:"introduction-to-apache-shenyu"},"Introduction to Apache ShenYu"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Apache ShenYu is an asynchronous, high-performance, cross-language, responsive API gateway.")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Proxy: supports Apache Dubbo, Spring Cloud, gRPC, Motan, SOFA, TARS, WebSocket, MQTT."),(0,i.yg)("li",{parentName:"ul"},"Security: Signature, OAuth 2.0, JSON Web Token, WAF Plugin"),(0,i.yg)("li",{parentName:"ul"},"API Governance: Request, Response, Parameter Mapping, Hystrix, RateLimiter Plugin"),(0,i.yg)("li",{parentName:"ul"},"Observability: tracing, metrics, logging plug-ins"),(0,i.yg)("li",{parentName:"ul"},"Dashboard: dynamic flow control, visual backend for user menu permissions"),(0,i.yg)("li",{parentName:"ul"},"Extension: plugin hot-plugging, dynamic loading"),(0,i.yg)("li",{parentName:"ul"},"Clustering: NGINX, Docker, Kubernetes"),(0,i.yg)("li",{parentName:"ul"},"Languages: .NET, Python, Go, Java clients available for API registration")),(0,i.yg)("h3",{id:"hertzbeat-introduction"},"HertzBeat Introduction"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"HertzBeat is an open source, easy to use and friendly real-time monitoring tool, no Agent, with powerful custom monitoring capabilities.",(0,i.yg)("br",{parentName:"p"}),"\n","Support for application services, database, operating system, middleware, cloud native monitoring, threshold alarms, alarm notification (email WeChat Nail Flybook).",(0,i.yg)("br",{parentName:"p"}),"\n","HertzBeat's powerful customization, multi-type support, easy to extend, low-coupling, hope to help developers and small and medium-sized teams to quickly build their own monitoring system.")),(0,i.yg)("h3",{id:"monitor-apache-shenyu-in-hertzbeat-in-5-minutes"},"Monitor Apache ShenYu in HertzBeat in 5 minutes!"),(0,i.yg)("h4",{id:"you-must-have-a-shenyu-environment-and-a-hertzbeat-environment"},"You must have a ShenYu environment and a HertzBeat environment."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"ShenYu ",(0,i.yg)("a",{parentName:"li",href:"https://shenyu.apache.org/zh/docs/deployment/deployment-before"},"Deployment and Installation Documentation")),(0,i.yg)("li",{parentName:"ul"},"HertzBeat ",(0,i.yg)("a",{parentName:"li",href:"https://hertzbeat.com/docs/start/docker-deploy"},"Deployment and Installation Documentation"))),(0,i.yg)("h4",{id:"i-enable-the-metrics-plugin-on-the-shenyu-side-which-will-provide-the-metrics-interface-data"},"i. Enable the ",(0,i.yg)("inlineCode",{parentName:"h4"},"metrics")," plugin on the ShenYu side, which will provide the metrics interface data."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"The plugin is the core implementer of the Apache ShenYu gateway, and metrics data collection is also integrated at ",(0,i.yg)("inlineCode",{parentName:"p"},"ShenYu")," in the form of a plugin - ",(0,i.yg)("inlineCode",{parentName:"p"},"Metrics Plugin"),".",(0,i.yg)("br",{parentName:"p"}),"\n","The ",(0,i.yg)("inlineCode",{parentName:"p"},"Metrics plugin")," is used by the gateway to monitor its own operational status (",(0,i.yg)("inlineCode",{parentName:"p"},"JVM")," related), request responses and other related metrics.")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Add the ",(0,i.yg)("inlineCode",{parentName:"li"},"metrics plugin")," dependency to the ",(0,i.yg)("inlineCode",{parentName:"li"},"pom.xml")," file of the gateway.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-metrics</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"metric")," plugin Capture is turned off by default, edit the following in the gateway's configuration ",(0,i.yg)("inlineCode",{parentName:"li"},"yaml")," file:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  metrics:\n    enabled: true #Set to true to enable\n    name: prometheus \n    host: 127.0.0.1 #exposed ip\n    port: 8090 #Exposed port\n    jmxConfig: #jmx configuration\n    props: #jvm_enabled: true\n      jvm_enabled: true #Enable monitoring metrics for jvm\n")),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},"Restart ShenYu Gateway, open a browser or use curl to access ",(0,i.yg)("inlineCode",{parentName:"li"},"http://ip:8090"),", you can see the metric data.")),(0,i.yg)("h4",{id:"ii-adding-shenyu-monitor-in-hertzbeat-monitor-page"},"ii. Adding ShenYu Monitor in HertzBeat Monitor Page"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Click Add ShenYu Monitor")),(0,i.yg)("p",null,"Path: Menu -> Middleware Monitor -> ShenYu Monitor -> Add ShenYu Monitor"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"hertzbeat",src:n(13852).A,width:"4064",height:"2166"})),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Configure the parameters required for monitoring ShenYu")),(0,i.yg)("p",null,"On the monitor page, fill in ShenYu ",(0,i.yg)("strong",{parentName:"p"},"service IP"),", ",(0,i.yg)("strong",{parentName:"p"},"monitor port")," (default 8090), and click OK to add.",(0,i.yg)("br",{parentName:"p"}),"\n","For other parameters such as ",(0,i.yg)("strong",{parentName:"p"},"collection interval"),", ",(0,i.yg)("strong",{parentName:"p"},"timeout"),", etc., you can refer to the ",(0,i.yg)("a",{parentName:"p",href:"https://hertzbeat.com/docs/help/shenyu/"},"help file")," ",(0,i.yg)("a",{parentName:"p",href:"https://hertzbeat.com/docs/help/shenyu/"},"https://hertzbeat.com/docs/help/shenyu/")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"hertzbeat",src:n(13852).A,width:"4064",height:"2166"})),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},"Done \u2705, now we have added monitoring for ShenYu, check the monitor list to see our additions.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"hertzbeat",src:n(26382).A,width:"4064",height:"2166"})),(0,i.yg)("ol",{start:4},(0,i.yg)("li",{parentName:"ol"},"Click ",(0,i.yg)("strong",{parentName:"li"},"Options"),"->",(0,i.yg)("strong",{parentName:"li"},"Monitoring Details icon")," in the monitor list to view ShenYu's real-time monitoring metrics.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"hertzbeat",src:n(44097).A,width:"4064",height:"2166"})),(0,i.yg)("ol",{start:5},(0,i.yg)("li",{parentName:"ol"},"Click the ",(0,i.yg)("strong",{parentName:"li"},"Monitor History TAB")," to view ShenYu's historical monitoring metrics graphs \ud83d\udcc8.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"hertzbeat",src:n(22968).A,width:"4064",height:"2166"})),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"hertzbeat",src:n(68723).A,width:"4064",height:"2166"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"DONE! With the above steps, it's really only two steps")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"The first step is to enable the ",(0,i.yg)("inlineCode",{parentName:"strong"},"metrics")," plugin on the ShenYu side"),"."),(0,i.yg)("li",{parentName:"ul"},"**The second step is to configure the IP ports on the HertzBeat monitoring page to add monitoring")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"By the above two steps we have finished monitoring Apache ShenYu, we can check the monitoring details and metrics information in HertzBeat anytime to observe its service status.\nOf course, just looking at it is not perfect, monitoring is often accompanied by alarm thresholds, when some of ShenYu's indicators exceed our expectations or abnormalities, we can promptly notify the person in charge of our counterparts, the person in charge of the notification to deal with the problem, so that is a complete monitoring and alerting process.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Next we will demonstrate step by step how to configure the threshold alarm notification in HertzBeat system, so that when ShenYu's metrics are abnormal, we will be notified in a timely manner")," **This is a complete monitoring and alerting process."),(0,i.yg)("h4",{id:"iii-adding-shenyu-metrics-threshold-alerts-to-the-hertzbeat-system"},"III. Adding ShenYu Metrics Threshold Alerts to the HertzBeat System"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Configure an alarm threshold for an important metric.")),(0,i.yg)("p",null,"Path: Menu -> Alert Thresholds -> Add Thresholds"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"There are a lot of metrics in ShenYu monitoring, for example, we will set the threshold for the ",(0,i.yg)("inlineCode",{parentName:"li"},"number of open file descriptors")," ",(0,i.yg)("inlineCode",{parentName:"li"},"process_open_fds")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"value")," metric, which will alert you when the number of open file descriptors on the server side is greater than 3,000."),(0,i.yg)("li",{parentName:"ul"},"Here we configure an alert to be issued when the ",(0,i.yg)("inlineCode",{parentName:"li"},"value' of "),"process_open_fds` exceeds 3000, with an alert level of ",(0,i.yg)("strong",{parentName:"li"},"Warning alert"),", which is triggered three times, as shown in the following figure.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"hertzbeat",src:n(13514).A,width:"4064",height:"2166"})),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Add message notification recipients")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Configure recipients to let alert message know who to send to and in what way.")),(0,i.yg)("p",null,"Path: Menu -> Alert Notification -> Alert Recipients -> Add New Recipient."),(0,i.yg)("p",null,"Message notification methods support ",(0,i.yg)("strong",{parentName:"p"},"Email, Nail, WeChat, Flybook, WebHook, SMS"),", etc. Here we take the commonly used Nail as an example."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Refer to this ",(0,i.yg)("a",{parentName:"li",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"help document")," ",(0,i.yg)("a",{parentName:"li",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"https://hertzbeat.com/docs/help/alert_dingtalk")," Configure the bot on the pinning side, set the security customization keyword ",(0,i.yg)("inlineCode",{parentName:"li"}," HertzBeat"),", get the corresponding ",(0,i.yg)("inlineCode",{parentName:"li"},"access_token")," value."),(0,i.yg)("li",{parentName:"ul"},"Configure the recipient parameters in HertzBeat as follows.")),(0,i.yg)("p",null,"[Alert Notification]"," -> ","[Add Recipient]"," -> ","[Select Nailed Bot Notification Method]"," -> ","[Set Nailed Bot ACCESS_TOKEN]"," -> ","[OK]"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"hertzbeat",src:n(34162).A,width:"3436",height:"890"})),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},"Configure the associated alert notification policy \u26a0\ufe0f ","[Add Notification Policy]"," -> ","[Associate the recipient you just set]"," -> ","[OK]"," !")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Configure the alert notification policy to bind alert messages to recipients so that you can decide which alerts go to which person.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"hertzbeat",src:n(41225).A,width:"3436",height:"1088"})),(0,i.yg)("h3",{id:"over-and-out-now-wait-for-the-alert-message-to-come-through-ding-ding-ding-ding"},"Over and out, now wait for the alert message to come through. Ding, ding, ding, ding."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"[HertzBeat Alert Notification]\nAlert target object : shenyu.process_open_fds.value\nTask ID : 205540620349696\nTask name : SHENYU_localhost\nAlarm level : Warning alarm\nAlarm Trigger Time : 2023-01-08 22:17:06\nDetails : Please note that the number of file descriptors opened by \u26a0\ufe0f ShenYu gateway is 3044 more than 3000\n")),(0,i.yg)("h2",{id:"summary"},"Summary"),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"This hands-on article takes us through how to use HertzBeat to monitor Apache ShenYu metrics data, and we can find that HertzBeat, which combines ",(0,i.yg)("inlineCode",{parentName:"p"},"Monitoring-Alert-Notification"),", is much more convenient to operate and use, and you can include ShenYu in the monitoring by simply clicking on a page. There is no need to deploy multiple components and write multiple YML configuration files.  ")),(0,i.yg)("p",null,"Apache ShenYu Github: ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu"},"https://github.com/apache/shenyu"),(0,i.yg)("br",{parentName:"p"}),"\n","HertzBeat Github: ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat"},"https://github.com/apache/hertzbeat")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Welcome to learn about using Star Support Oh! ")),(0,i.yg)("p",null,"Experience heartbeat with a single docker command:",(0,i.yg)("br",{parentName:"p"}),"\n",(0,i.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat apache/hertzbeat")))}g.isMDXComponent=!0},34162:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/alert-notice-1-3bad6e06e2c870849bc656a2092d59ac.png"},41225:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/alert-notice-2-8025b90624873463fe0a3f75bd7efafa.png"},13852:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/monitor-shenyu-1-9b12c5875c4c6bb3863f7e4efacb0ab6.png"},26382:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/monitor-shenyu-3-f0835dba46e9e644bbad609fea757d2d.png"},44097:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/monitor-shenyu-4-0300bcf78c5e2f606ab780bec8a31757.png"},22968:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/monitor-shenyu-5-959d049b8246df725b9a7ebfb993ae71.png"},68723:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/monitor-shenyu-6-78533ff8941232b1be80110474edfe17.png"},13514:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/monitor-shenyu-7-17d6e2393770eb0bfe6822e22c70d924.png"}}]);