"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[12965],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>g});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),m=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(n),g=a,d=u["".concat(p,".").concat(g)]||u[g]||c[g]||r;return n?o.createElement(d,i(i({ref:t},s),{},{components:n})):o.createElement(d,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<r;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var o=n(58168),a=(n(96540),n(15680));const r={},i="[Open Source Summer] Hertzbeat project introduction",l={permalink:"/blog/2024/05/09/hertzbeat-ospp-subject-introduction",editUrl:"https://github.com/apache/hertzbeat/edit/master/home/blog/2024-05-09-hertzbeat-ospp-subject-introduction.md",source:"@site/blog/2024-05-09-hertzbeat-ospp-subject-introduction.md",title:"[Open Source Summer] Hertzbeat project introduction",description:"What is HertzBeat?",date:"2024-05-09T00:00:00.000Z",formattedDate:"May 9, 2024",tags:[],readingTime:5.31,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"HertzBeat 1.6.0 Upgrade Guide",permalink:"/blog/2024/06/11/hertzbeat-v1.6.0-update"},nextItem:{title:"The open-source real-time monitoring HertzBeat is donated to the Apache Incubator.",permalink:"/blog/2024/04/17/to-apache"}},p={authorsImageUrls:[]},m=[{value:"What is HertzBeat?",id:"what-is-hertzbeat",level:2},{value:"<strong>Features</strong>",id:"features",level:3},{value:"What is Open Source Summer?",id:"what-is-open-source-summer",level:2},{value:"HertzBeat project",id:"hertzbeat-project",level:2},{value:"1\u3001 the realization of monitoring template market store",id:"1-the-realization-of-monitoring-template-market-store",level:3},{value:"2\u3001 implementation of Java native ipmi2 communication protocol",id:"2-implementation-of-java-native-ipmi2-communication-protocol",level:3},{value:"What can you gain by participating in HertzBeat?",id:"what-can-you-gain-by-participating-in-hertzbeat",level:2}],s={toc:m};function c(e){let{components:t,...n}=e;return(0,a.yg)("wrapper",(0,o.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"what-is-hertzbeat"},"What is HertzBeat?"),(0,a.yg)("p",null,"HertzBeat is a powerful custom monitoring capabilities, high-performance cluster, compatible with Prometheus, agentless open source real-time monitoring alarm system."),(0,a.yg)("h3",{id:"features"},(0,a.yg)("strong",{parentName:"h3"},"Features")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Set ",(0,a.yg)("strong",{parentName:"li"},"monitoring + alarm + notification")," as a whole, support for application services, applications, database, cache, operating system, big data, middleware, Web server, cloud native, network, custom and other monitoring threshold alarm notification in one step."),(0,a.yg)("li",{parentName:"ul"},"Easy to use and friendly, no ",(0,a.yg)("inlineCode",{parentName:"li"},"Agent"),", full ",(0,a.yg)("inlineCode",{parentName:"li"},"WEB")," page operation, a mouse click can monitor alarms, zero hand learning costs."),(0,a.yg)("li",{parentName:"ul"},"Protocol specifications such as Http, Jmx, Ssh, Snmp, Jdbc, Prometheus, etc. can be configured, and the monitoring template YML can be configured in the browser to use these protocols to customize the desired metrics. Do you believe that you can immediately adapt a new monitoring type such as",(0,a.yg)("inlineCode",{parentName:"li"}," K8s")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"Docker")," just by configuring it?"),(0,a.yg)("li",{parentName:"ul"},"Compatible with Prometheus` ecosystem and more, only page operations can monitor what Prometheus can monitor."),(0,a.yg)("li",{parentName:"ul"},"High-performance, supports horizontal expansion of multiple collector clusters, supports multi-isolated network monitoring, and cloud edge collaboration."),(0,a.yg)("li",{parentName:"ul"},"Free alarm threshold rules, ",(0,a.yg)("inlineCode",{parentName:"li"},"mail,")," ",(0,a.yg)("inlineCode",{parentName:"li"},"Discord,")," ",(0,a.yg)("inlineCode",{parentName:"li"},"Slack,")," ",(0,a.yg)("inlineCode",{parentName:"li"},"Telegram,")," ",(0,a.yg)("inlineCode",{parentName:"li"},"Dingding,")," ",(0,a.yg)("inlineCode",{parentName:"li"},"wechat,")," ",(0,a.yg)("inlineCode",{parentName:"li"},"Feibook,")," ",(0,a.yg)("inlineCode",{parentName:"li"},"SMS,")," ",(0,a.yg)("inlineCode",{parentName:"li"},"Webhook,")," ",(0,a.yg)("inlineCode",{parentName:"li"},"Server sauce,")," and other ways to send messages in a timely manner.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Github: ",(0,a.yg)("a",{parentName:"strong",href:"https://github.com/apache/hertzbeat"},"https://github.com/apache/hertzbeat"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Gitee: ",(0,a.yg)("a",{parentName:"strong",href:"https://gitee.com/hertzbeat/hertzbeat"},"https://gitee.com/hertzbeat/hertzbeat"))),(0,a.yg)("h2",{id:"what-is-open-source-summer"},"What is Open Source Summer?"),(0,a.yg)("p",null,'Open Source Summer is a summer open source activity initiated and long-term supported by the "Open Source Software Supply Chain Lighting Program" of the Institute of Software of the Chinese Academy of Sciences, aiming to encourage the development of open source'),(0,a.yg)("p",null,"School students actively participate in the development and maintenance of open source software, cultivate and discover more excellent developers, promote the vigorous development of excellent open source software community, and help open"),(0,a.yg)("p",null,"Source software supply chain construction."),(0,a.yg)("p",null,"Open Source Summer The Open source community within and outside the United Nations provides project tasks for the development and maintenance of important open source software, open to university students around the world"),(0,a.yg)("p",null,"Selected students will participate in open source contributions, complete development work and contribute to the open source community under the guidance of senior project developers (project mentors)"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Event Rules")),(0,a.yg)("p",null,"Open Source Summer Website:"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://summer-ospp.ac.cn/"},(0,a.yg)("em",{parentName:"a"},"https://summer-ospp.ac.cn/"))),(0,a.yg)("p",null,"Students are free to choose the project, communicate with the community mentor to realize the plan and write the project plan. The selected students will complete the development work as planned under the guidance of community mentors and contribute the results to the community. The community evaluates the student`s completion, and the sponsor distributes the financial aid to the student based on the evaluation results."),(0,a.yg)("h2",{id:"hertzbeat-project"},"HertzBeat project"),(0,a.yg)("h3",{id:"1-the-realization-of-monitoring-template-market-store"},"1\u3001 the realization of monitoring template market store"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Project difficulty: Advanced /Advanced")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Background:")," Because ",(0,a.yg)("inlineCode",{parentName:"p"},"HertzBeat")," is a highly customized monitoring system through yml files, we can configure the relevant yml files to do so\nCapture the metrics we want to monitor. Some different users may have different requirements for some middleware data indicators, ",(0,a.yg)("inlineCode",{parentName:"p"},"HertzBeat")," official come with\nthe yml configuration may not satisfy every user, so our goal is to let users contribute their own yml template to benefit more people.\nThis can not only make the ecology of ",(0,a.yg)("inlineCode",{parentName:"p"},"HertzBeat")," more perfect, but also make the user experience better!"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Requirements:")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Use Java17, springboot3 to write the back-end code, Angular(recommended) or Vue to write the front-end code."),(0,a.yg)("li",{parentName:"ol"},"Search, download, and share yml template files (no login required)."),(0,a.yg)("li",{parentName:"ol"},"The template page displays the number of downloads, categories, template description, and (optional) template versions."),(0,a.yg)("li",{parentName:"ol"},"Realize user personal page registration, login (later), upload template.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Output:")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Feature code can be incorporated into the HertzBeat repository as PR."),(0,a.yg)("li",{parentName:"ol"},"Complete the HertzBeat official template market"),(0,a.yg)("li",{parentName:"ol"},"Update the help documents")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Contact Tutor:")," Qingran Zhao ",(0,a.yg)("a",{parentName:"p",href:"mailto:zqr10159@dromara.org"},"zqr10159@dromara.org")),(0,a.yg)("h3",{id:"2-implementation-of-java-native-ipmi2-communication-protocol"},"2\u3001 implementation of Java native ipmi2 communication protocol"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Project difficulty: Advanced /Advanced")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Background:")," ",(0,a.yg)("inlineCode",{parentName:"p"},"HertzBeat")," supports multiple monitoring protocols, such as http, jmx, jdbc, and snmp. By encapsulating these protocols can be implemented against various\nmiddleware monitoring without Agent. In order for HertzBeat to have a wider monitoring area, we intend to be based on the Java language and not rely on third parties\npackage, the implementation of the native IPMI2 protocol in the query part, and use the protocol to obtain server motherboard information, network card information, power supply information, fan information,\ntemperature sensor information and clock information."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Requirements:")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Use Java to implement the native IPMI2 protocol (query part) based on the UDP protocol, without relying on any third-party package.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Use the implemented IPMI2 protocol to query indicators of the IPMI enabled server, including mainboard information, network adapter information, power supply information, and fan information\nalarm, temperature sensor information and clock information.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Abstract and standardize the queried indicator information to implement configuration management (optional).")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Output detailed project documents, including design ideas, implementation details, usage instructions, etc."))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Output:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Feature code can be incorporated into the HertzBeat repository as PR.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Complete the encapsulation of native IPMI2 protocol in Java based on UDP protocol and monitor the corresponding server.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"You can configure YML files to highly customize monitoring indicators (optional).")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Improve help documentation."))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Contact Tutor:")," Tiejia Xiaobao ",(0,a.yg)("a",{parentName:"p",href:"mailto:tjxiaobao2024@qq.com"},"tjxiaobao2024@qq.com")),(0,a.yg)("h2",{id:"what-can-you-gain-by-participating-in-hertzbeat"},"What can you gain by participating in HertzBeat?"),(0,a.yg)("p",null,"Some of you may wonder what can be gained by participating in Open Source Summer?"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"\u3010Your code is widely reused by the society\u3011Your code may run in the core business logic of tens of thousands of enterprises to help enterprises solve problems.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"\u3010 Win the maximum 12000 bonus \u3011 The total bonus is divided into advanced 12000 Yuan and basic 8000 Yuan according to the difficulty of the project (Note: the bonus amount is RMB before tax)")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"\u3010 Community core staff counseling rapid growth \u3011 As long as you sign up and are selected, the tutor of each topic will carefully teach you to integrate into the community, and help you complete the design of the topic and the final landing.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"\u3010Recommended Entry/Internship\u3011 Students with excellent performance in this Programming Summer project can be recommended to work in your preferred company.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"\u3010Additional community surprise\u3011 All students participating in this Summer of Programming project have the opportunity to become Apache HertzBeat committer and have their own apache email."))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"There are 100% prizes to take oh"),", now the only problem is that time is running out, hurry up to sign up! The deadline for registration is June 4, so hurry up and sign up for 2023 Summer of Programming."))}c.isMDXComponent=!0}}]);