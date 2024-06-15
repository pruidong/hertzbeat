"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[66080],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>u});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),g=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=g(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),h=g(a),u=n,y=h["".concat(p,".").concat(u)]||h[u]||c[u]||l;return a?r.createElement(y,i(i({ref:t},m),{},{components:a})):r.createElement(y,i({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var g=2;g<l;g++)i[g]=a[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},10018:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var r=a(58168),n=(a(96540),a(15680));const l={title:"HertzBeat v1.4.2 \u7248\u672c\u53d1\u5e03\uff0c\u81ea\u5b9a\u4e49\u6d88\u606f\u901a\u77e5\u6a21\u7248",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["open source monitoring system","alerting system","Linux monitoring"]},i=void 0,o={permalink:"/zh-cn/blog/2023/11/12/hertzbeat-v1.4.2",editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-blog/2023-11-12-hertzbeat-v1.4.2.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/2023-11-12-hertzbeat-v1.4.2.md",title:"HertzBeat v1.4.2 \u7248\u672c\u53d1\u5e03\uff0c\u81ea\u5b9a\u4e49\u6d88\u606f\u901a\u77e5\u6a21\u7248",description:"\u54c8\u55bd\u5927\u5bb6\u597d\uff0c\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7 HertzBeat \u65b0\u7248\u672c v1.4.2 \u53d1\u5e03\uff0c\u6b22\u8fce\u4e86\u89e3\u4f7f\u7528\u3002",date:"2023-11-12T00:00:00.000Z",formattedDate:"2023\u5e7411\u670812\u65e5",tags:[{label:"opensource",permalink:"/zh-cn/blog/tags/opensource"},{label:"practice",permalink:"/zh-cn/blog/tags/practice"}],readingTime:4.455,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"HertzBeat v1.4.2 \u7248\u672c\u53d1\u5e03\uff0c\u81ea\u5b9a\u4e49\u6d88\u606f\u901a\u77e5\u6a21\u7248",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["open source monitoring system","alerting system","Linux monitoring"]},prevItem:{title:"HertzBeat v1.4.3 \u53d1\u5e03\uff0cPrometheus\u517c\u5bb9!",permalink:"/zh-cn/blog/2023/12/11/hertzbeat-v1.4.3"},nextItem:{title:"\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c, \u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7 HertzBeat v1.4.1 \u53d1\u5e03",permalink:"/zh-cn/blog/2023/09/26/hertzbeat-v1.4.1"}},p={authorsImageUrls:[void 0]},g=[{value:"\u603b\u7ed3\u8d77\u6765\u5982\u4e0b\uff1a",id:"\u603b\u7ed3\u8d77\u6765\u5982\u4e0b",level:3},{value:"\u4ec0\u4e48\u662f HertzBeat?",id:"\u4ec0\u4e48\u662f-hertzbeat",level:3},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:3},{value:"\u5c1d\u8bd5\u90e8\u7f72",id:"\u5c1d\u8bd5\u90e8\u7f72",level:3},{value:"\u26c4 \u5df2\u652f\u6301",id:"-\u5df2\u652f\u6301",level:2},{value:"<strong>\u4e0b\u8f7d\u94fe\u63a5</strong>",id:"\u4e0b\u8f7d\u94fe\u63a5",level:3}],m={toc:g};function c(e){let{components:t,...l}=e;return(0,n.yg)("wrapper",(0,r.A)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"\u54c8\u55bd\u5927\u5bb6\u597d\uff0c\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7 HertzBeat \u65b0\u7248\u672c v1.4.2 \u53d1\u5e03\uff0c\u6b22\u8fce\u4e86\u89e3\u4f7f\u7528\u3002"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"hertzBeat",src:a(56850).A,width:"4064",height:"2188"})),(0,n.yg)("h3",{id:"\u603b\u7ed3\u8d77\u6765\u5982\u4e0b"},"\u603b\u7ed3\u8d77\u6765\u5982\u4e0b\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u6d88\u606f\u901a\u77e5\u6a21\u7248\u7279\u6027\uff0c\u5f00\u6e90\u4e4b\u590f\u8bfe\u9898")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u652f\u6301\u534e\u4e3a\u4e91OBS\u5b58\u50a8\u76d1\u63a7\u6a21\u7248\u6587\u4ef6")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u652f\u6301MQTT\u6d88\u606f\u670d\u52a1\u5668 emqx \u76d1\u63a7")," "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u652f\u6301\u5bf9 udp \u7aef\u53e3\u53ef\u7528\u6027\u76d1\u63a7")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u66f4\u591a\u7684\u7279\u6027\u529f\u80fd\u652f\u6301\u548cBUG\u4fee\u590d")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u5b89\u88c5\u5305\u5185\u7f6eJDK\u4e00\u952e\u542f\u52a8"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u66f4\u591a\u7684\u7279\u6027\u548cBUG\u4fee\u590d\u6b22\u8fce\u4f7f\u7528\u63a2\u7d22\uff0c1.4.2 \u7248\u672c\u5171\u6709 13 \u4f4d\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u53c2\u4e0e\uff0c\u611f\u8c22\u4ed6\u4eec\u7684\u8d21\u732e\u2764\ufe0f")," "),(0,n.yg)("h3",{id:"\u4ec0\u4e48\u662f-hertzbeat"},"\u4ec0\u4e48\u662f HertzBeat?"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat"},"HertzBeat \u8d6b\u5179\u8df3\u52a8")," \u662f\u4e00\u4e2a\u62e5\u6709\u5f3a\u5927\u81ea\u5b9a\u4e49\u76d1\u63a7\u80fd\u529b\uff0c\u9ad8\u6027\u80fd\u96c6\u7fa4\uff0c\u65e0\u9700 Agent \u7684\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u544a\u8b66\u7cfb\u7edf\u3002"),(0,n.yg)("h3",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u96c6 ",(0,n.yg)("strong",{parentName:"li"},"\u76d1\u63a7+\u544a\u8b66+\u901a\u77e5")," \u4e3a\u4e00\u4f53\uff0c\u652f\u6301\u5bf9\u5e94\u7528\u670d\u52a1\uff0c\u5e94\u7528\u7a0b\u5e8f\uff0c\u6570\u636e\u5e93\uff0c\u7f13\u5b58\uff0c\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5927\u6570\u636e\uff0c\u4e2d\u95f4\u4ef6\uff0cWeb\u670d\u52a1\u5668\uff0c\u4e91\u539f\u751f\uff0c\u7f51\u7edc\uff0c\u81ea\u5b9a\u4e49\u7b49\u76d1\u63a7\u9608\u503c\u544a\u8b66\u901a\u77e5\u4e00\u6b65\u5230\u4f4d\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u6613\u7528\u53cb\u597d\uff0c\u65e0\u9700 ",(0,n.yg)("inlineCode",{parentName:"li"},"Agent"),"\uff0c\u5168 ",(0,n.yg)("inlineCode",{parentName:"li"},"WEB")," \u9875\u9762\u64cd\u4f5c\uff0c\u9f20\u6807\u70b9\u4e00\u70b9\u5c31\u80fd\u76d1\u63a7\u544a\u8b66\uff0c\u96f6\u4e0a\u624b\u5b66\u4e60\u6210\u672c\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u5c06 ",(0,n.yg)("inlineCode",{parentName:"li"},"Http, Jmx, Ssh, Snmp, Jdbc, Prometheus")," \u7b49\u534f\u8bae\u89c4\u8303\u53ef\u914d\u7f6e\u5316\uff0c\u53ea\u9700\u5728\u6d4f\u89c8\u5668\u914d\u7f6e\u76d1\u63a7\u6a21\u7248 ",(0,n.yg)("inlineCode",{parentName:"li"},"YML")," \u5c31\u80fd\u4f7f\u7528\u8fd9\u4e9b\u534f\u8bae\u53bb\u81ea\u5b9a\u4e49\u91c7\u96c6\u60f3\u8981\u7684\u6307\u6807\u3002\u60a8\u76f8\u4fe1\u53ea\u9700\u914d\u7f6e\u4e0b\u5c31\u80fd\u7acb\u523b\u9002\u914d\u4e00\u6b3e ",(0,n.yg)("inlineCode",{parentName:"li"},"K8s")," \u6216 ",(0,n.yg)("inlineCode",{parentName:"li"},"Docker")," \u7b49\u65b0\u7684\u76d1\u63a7\u7c7b\u578b\u5417\uff1f"),(0,n.yg)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd\uff0c\u652f\u6301\u591a\u91c7\u96c6\u5668\u96c6\u7fa4\u6a2a\u5411\u6269\u5c55\uff0c\u652f\u6301\u591a\u9694\u79bb\u7f51\u7edc\u76d1\u63a7\uff0c\u4e91\u8fb9\u534f\u540c\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u81ea\u7531\u7684\u544a\u8b66\u9608\u503c\u89c4\u5219\uff0c",(0,n.yg)("inlineCode",{parentName:"li"},"\u90ae\u4ef6")," ",(0,n.yg)("inlineCode",{parentName:"li"},"Discord")," ",(0,n.yg)("inlineCode",{parentName:"li"},"Slack")," ",(0,n.yg)("inlineCode",{parentName:"li"},"Telegram")," ",(0,n.yg)("inlineCode",{parentName:"li"},"\u9489\u9489")," ",(0,n.yg)("inlineCode",{parentName:"li"},"\u5fae\u4fe1")," ",(0,n.yg)("inlineCode",{parentName:"li"},"\u98de\u4e66")," ",(0,n.yg)("inlineCode",{parentName:"li"},"\u77ed\u4fe1")," ",(0,n.yg)("inlineCode",{parentName:"li"},"Webhook")," ",(0,n.yg)("inlineCode",{parentName:"li"},"Server\u9171")," \u7b49\u65b9\u5f0f\u6d88\u606f\u53ca\u65f6\u9001\u8fbe\u3002")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("inlineCode",{parentName:"p"},"HertzBeat"),"\u7684\u5f3a\u5927\u81ea\u5b9a\u4e49\uff0c\u591a\u7c7b\u578b\u652f\u6301\uff0c\u9ad8\u6027\u80fd\uff0c\u6613\u6269\u5c55\uff0c\u4f4e\u8026\u5408\uff0c\u5e0c\u671b\u80fd\u5e2e\u52a9\u5f00\u53d1\u8005\u548c\u56e2\u961f\u5feb\u901f\u642d\u5efa\u81ea\u6709\u76d1\u63a7\u7cfb\u7edf\u3002    ")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"hertzBeat",src:a(72428).A,width:"2814",height:"1772"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Github: ",(0,n.yg)("a",{parentName:"strong",href:"https://github.com/apache/hertzbeat"},"https://github.com/apache/hertzbeat"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Gitee: ",(0,n.yg)("a",{parentName:"strong",href:"https://gitee.com/hertzbeat/hertzbeat"},"https://gitee.com/hertzbeat/hertzbeat"))),(0,n.yg)("h3",{id:"\u5c1d\u8bd5\u90e8\u7f72"},"\u5c1d\u8bd5\u90e8\u7f72"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"docker")," \u73af\u5883\u4ec5\u9700\u4e00\u6761\u547d\u4ee4\u5373\u53ef\u5f00\u59cb")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat apache/hertzbeat")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"\u6216\u8005\u4f7f\u7528 quay.io (\u82e5 dockerhub \u7f51\u7edc\u94fe\u63a5\u8d85\u65f6)")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat quay.io/tancloud/hertzbeat")),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,n.yg)("inlineCode",{parentName:"p"},"http://localhost:1157")," \u5373\u53ef\u5f00\u59cb\uff0c\u9ed8\u8ba4\u8d26\u53f7\u5bc6\u7801 ",(0,n.yg)("inlineCode",{parentName:"p"},"admin/hertzbeat"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u90e8\u7f72\u91c7\u96c6\u5668\u96c6\u7fa4"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"docker run -d -e IDENTITY=custom-collector-name -e MANAGER_HOST=127.0.0.1 -e MANAGER_PORT=1158 --name hertzbeat-collector apache/hertzbeat-collector\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-e IDENTITY=custom-collector-name")," : \u914d\u7f6e\u6b64\u91c7\u96c6\u5668\u7684\u552f\u4e00\u6027\u6807\u8bc6\u7b26\u540d\u79f0\uff0c\u591a\u4e2a\u91c7\u96c6\u5668\u540d\u79f0\u4e0d\u80fd\u76f8\u540c\uff0c\u5efa\u8bae\u81ea\u5b9a\u4e49\u82f1\u6587\u540d\u79f0\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-e MANAGER_HOST=127.0.0.1")," : \u914d\u7f6e\u8fde\u63a5\u4e3bHertzBeat\u670d\u52a1\u7684\u5bf9\u5916IP\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-e MANAGER_PORT=1158")," : \u914d\u7f6e\u8fde\u63a5\u4e3bHertzBeat\u670d\u52a1\u7684\u5bf9\u5916\u7aef\u53e3\uff0c\u9ed8\u8ba41158\u3002")),(0,n.yg)("p",null,"\u66f4\u591a\u914d\u7f6e\u8be6\u7ec6\u6b65\u9aa4\u53c2\u8003 ",(0,n.yg)("a",{parentName:"p",href:"https://hertzbeat.com/docs/start/docker-deploy"},"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5HertzBeat")),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"-\u5df2\u652f\u6301"},"\u26c4 \u5df2\u652f\u6301"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"\u6211\u4eec\u5c06\u76d1\u63a7\u91c7\u96c6\u7c7b\u578b(mysql,jvm,k8s)\u90fd\u5b9a\u4e49\u4e3ayml\u76d1\u63a7\u6a21\u7248\uff0c\u7528\u6237\u53ef\u4ee5\u5bfc\u5165\u8fd9\u4e9b\u6a21\u7248\u6765\u652f\u6301\u5bf9\u5e94\u7c7b\u578b\u7684\u76d1\u63a7!",(0,n.yg)("br",{parentName:"p"}),"\n","\u6b22\u8fce\u5927\u5bb6\u4e00\u8d77\u8d21\u732e\u4f60\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u81ea\u5b9a\u4e49\u7684\u901a\u7528\u76d1\u63a7\u7c7b\u578b\u76d1\u63a7\u6a21\u7248\u3002")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Site Monitor, Port Availability, Http Api, Ping Connectivity, Jvm, SiteMap Full Site, Ssl Certificate, SpringBoot, FTP Server"),(0,n.yg)("li",{parentName:"ul"},"Mysql, PostgreSQL, MariaDB, Redis, ElasticSearch, SqlServer, Oracle, MongoDB, Damon, OpenGauss, ClickHouse, IoTDB, Redis Cluster"),(0,n.yg)("li",{parentName:"ul"},"Linux, Ubuntu, CentOS, Windows"),(0,n.yg)("li",{parentName:"ul"},"Tomcat, Nacos, Zookeeper, RabbitMQ, Flink, Kafka, ShenYu, DynamicTp, Jetty, ActiveMQ"),(0,n.yg)("li",{parentName:"ul"},"Kubernetes, Docker"),(0,n.yg)("li",{parentName:"ul"},"Huawei Switch, HPE Switch, TP-LINK Switch, Cisco Switch"),(0,n.yg)("li",{parentName:"ul"},"and more for your custom monitoring."),(0,n.yg)("li",{parentName:"ul"},"Notifications support ",(0,n.yg)("inlineCode",{parentName:"li"},"Discord")," ",(0,n.yg)("inlineCode",{parentName:"li"},"Slack")," ",(0,n.yg)("inlineCode",{parentName:"li"},"Telegram")," ",(0,n.yg)("inlineCode",{parentName:"li"},"Mail")," ",(0,n.yg)("inlineCode",{parentName:"li"},"Pinning")," ",(0,n.yg)("inlineCode",{parentName:"li"},"WeChat")," ",(0,n.yg)("inlineCode",{parentName:"li"},"FlyBook")," ",(0,n.yg)("inlineCode",{parentName:"li"},"SMS")," ",(0,n.yg)("inlineCode",{parentName:"li"},"Webhook"),"."),(0,n.yg)("li",{parentName:"ul"},"\u548c\u66f4\u591a\u81ea\u5b9a\u4e49\u76d1\u63a7\u6a21\u7248\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u901a\u77e5\u652f\u6301 ",(0,n.yg)("inlineCode",{parentName:"li"},"Discord")," ",(0,n.yg)("inlineCode",{parentName:"li"},"Slack")," ",(0,n.yg)("inlineCode",{parentName:"li"},"Telegram")," ",(0,n.yg)("inlineCode",{parentName:"li"},"\u90ae\u4ef6")," ",(0,n.yg)("inlineCode",{parentName:"li"},"\u9489\u9489")," ",(0,n.yg)("inlineCode",{parentName:"li"},"\u5fae\u4fe1")," ",(0,n.yg)("inlineCode",{parentName:"li"},"\u98de\u4e66")," ",(0,n.yg)("inlineCode",{parentName:"li"},"\u77ed\u4fe1")," ",(0,n.yg)("inlineCode",{parentName:"li"},"Webhook")," ",(0,n.yg)("inlineCode",{parentName:"li"},"Server\u9171"),"\u3002")),(0,n.yg)("hr",null),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Github: ",(0,n.yg)("a",{parentName:"strong",href:"https://github.com/apache/hertzbeat"},"https://github.com/apache/hertzbeat")),(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("strong",{parentName:"p"},"Gitee: ",(0,n.yg)("a",{parentName:"strong",href:"https://gitee.com/hertzbeat/hertzbeat"},"https://gitee.com/hertzbeat/hertzbeat"))),(0,n.yg)("h3",{id:"\u4e0b\u8f7d\u94fe\u63a5"},(0,n.yg)("strong",{parentName:"h3"},"\u4e0b\u8f7d\u94fe\u63a5")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"hertzbeat server")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.2/hertzbeat-1.4.2.tar.gz"},"hertzbeat-1.4.2.tar.gz")),(0,n.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.2/hertzbeat-1.4.2.zip"},"hertzbeat-1.4.2.zip")),(0,n.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.2/hertzbeat-linux_amd64_1.4.2.tar.gz"},"hertzbeat-linux_amd64_1.4.2.tar.gz")),(0,n.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.2/hertzbeat-linux_arm64_1.4.2.tar.gz"},"hertzbeat-linux_arm64_1.4.2.tar.gz")),(0,n.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.2/hertzbeat-macos_arm64_1.4.2.tar.gz"},"hertzbeat-macos_arm64_1.4.2.tar.gz")),(0,n.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.2/hertzbeat-macos_amd64_1.4.2.tar.gz"},"hertzbeat-macos_amd64_1.4.2.tar.gz")),(0,n.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.2/hertzbeat-windows64_1.4.2.zip"},"hertzbeat-windows64_1.4.2.zip"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"hertzbeat collector")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.2/hertzbeat-collector-1.4.2.tar.gz"},"hertzbeat-collector-1.4.2.tar.gz")),(0,n.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.2/hertzbeat-collector-1.4.2.zip"},"hertzbeat-collector-1.4.2.zip")),(0,n.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.2/hertzbeat-collector-linux_amd64_1.4.2.tar.gz"},"hertzbeat-collector-linux_amd64_1.4.2.tar.gz")),(0,n.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.2/hertzbeat-collector-linux_arm64_1.4.2.tar.gz"},"hertzbeat-collector-linux_arm64_1.4.2.tar.gz")),(0,n.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.2/hertzbeat-collector-macos_arm64_1.4.2.tar.gz"},"hertzbeat-collector-macos_arm64_1.4.2.tar.gz")),(0,n.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.2/hertzbeat-collector-macos_amd64_1.4.2.tar.gz"},"hertzbeat-collector-macos_amd64_1.4.2.tar.gz")),(0,n.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.2/hertzbeat-collector-windows64_1.4.2.zip"},"hertzbeat-collector-windows64_1.4.2.zip"))))}c.isMDXComponent=!0},72428:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/hertzbeat-arch-d8c2eca122dd35a5e67678da69c8ba0c.png"},56850:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/0-ded5d92a836dc3867ff1619a25466735.png"}}]);