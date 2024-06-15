"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[56126],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),g=r,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},72123:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(58168),r=(a(96540),a(15680));const o={id:"iotdb-init",title:"Use Time Series Database IoTDB to Store Metrics Data (Optional)",sidebar_label:"Use IoTDB Store Metrics"},i=void 0,l={unversionedId:"start/iotdb-init",id:"version-v1.5.x/start/iotdb-init",title:"Use Time Series Database IoTDB to Store Metrics Data (Optional)",description:"Apache HertzBeat (incubating)'s historical data storage relies on the time series database, you can choose one of them to install and initialize, or not to install (note \u26a0\ufe0f but it is strongly recommended to configure in the production environment)",source:"@site/versioned_docs/version-v1.5.x/start/iotdb-init.md",sourceDirName:"start",slug:"/start/iotdb-init",permalink:"/docs/v1.5.x/start/iotdb-init",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.5.x/start/iotdb-init.md",tags:[],version:"v1.5.x",frontMatter:{id:"iotdb-init",title:"Use Time Series Database IoTDB to Store Metrics Data (Optional)",sidebar_label:"Use IoTDB Store Metrics"},sidebar:"docs",previous:{title:"Use VictoriaMetrics Store Metrics(Recommended)",permalink:"/docs/v1.5.x/start/victoria-metrics-init"},next:{title:"Use TDengine Store Metrics",permalink:"/docs/v1.5.x/start/tdengine-init"}},s={},d=[{value:"Install IoTDB via Docker",id:"install-iotdb-via-docker",level:3},{value:"FAQ",id:"faq",level:3}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,r.yg)("wrapper",(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Apache HertzBeat (incubating)'s historical data storage relies on the time series database, you can choose one of them to install and initialize, or not to install (note \u26a0\ufe0f but it is strongly recommended to configure in the production environment)"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"It is recommended to use VictoriaMetrics as metrics storage.")),(0,r.yg)("p",null,"Apache IoTDB is a software system that integrates the collection, storage, management and analysis of time series data of the Internet of Things. We use it to store and analyze the historical data of monitoring metrics collected. Support V1.0.+ version."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note\u26a0\ufe0f Time series database is optional, but production environment configuration is strongly recommended to provide more complete historical chart functions and high performance")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u26a0\ufe0f If you do not configure a time series database, only the last hour of historical data is retained.")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"If you already have an IoTDB environment, you can skip directly to the YML configuration step.")),(0,r.yg)("h3",{id:"install-iotdb-via-docker"},"Install IoTDB via Docker"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Refer to the official website ",(0,r.yg)("a",{parentName:"p",href:"https://iotdb.apache.org/UserGuide/V0.13.x/QuickStart/WayToGetIoTDB.html"},"installation tutorial"))),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download and install Docker environment\nDocker tools download refer to ",(0,r.yg)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker official document"),".\nAfter the installation you can check if the Docker version normally output at the terminal."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"$ docker -v\nDocker version 20.10.12, build e91ed57\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Install IoTDB via Docker"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ docker run -d -p 6667:6667 -p 31999:31999 -p 8181:8181 \\\n    -v /opt/iotdb/data:/iotdb/data \\ \n    --name iotdb \\\n    apache/iotdb:1.2.2-standalone\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"-v /opt/iotdb/data:/iotdb/data")," is local persistent mount of IotDB data directory.",(0,r.yg)("inlineCode",{parentName:"p"},"/iotdb/data")," should be replaced with the actual local directory.\nuse",(0,r.yg)("inlineCode",{parentName:"p"},"$ docker ps")," to check if the database started successfully"),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Configure the database connection in hertzbeat ",(0,r.yg)("inlineCode",{parentName:"p"},"application.yml"),"configuration file"),(0,r.yg)("p",{parentName:"li"},"Modify ",(0,r.yg)("inlineCode",{parentName:"p"},"hertzbeat/config/application.yml")," configuration file\nNote\u26a0\ufe0fThe docker container way need to mount application.yml file locally, while you can use installation package way to unzip and modify ",(0,r.yg)("inlineCode",{parentName:"p"},"hertzbeat/config/application.yml"),"\nConfig the ",(0,r.yg)("inlineCode",{parentName:"p"},"warehouse.store.jpa.enabled")," ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),". Replace ",(0,r.yg)("inlineCode",{parentName:"p"},"warehouse.store.iot-db")," data source parameters, HOST account and password."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"warehouse:\n  store:\n    # disable JPA\n    jpa:\n      enabled: false\n    # enable iot-db\n    iot-db:\n      enabled: true\n      host: 127.0.0.1\n      rpc-port: 6667\n      username: root\n      password: root\n      query-timeout-in-ms: -1\n      # default '7776000000'\uff0890days,unit:ms,-1:no-expire\uff09\n      expire-time: '7776000000'\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"IoTDB Cluster Configuration")),(0,r.yg)("p",null,"If you are using IoTDB for clustering, please refer to the configuration below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"warehouse:\n  store:\n    # Disable default JPA\n    jpa:\n      enabled: false\n    # Enable IoTDB\n    iot-db:\n      enabled: true\n      node-urls: ['127.0.0.1:6667','127.0.0.2:6667','127.0.0.3:6667']\n      username: root\n      password: root\n      # if iotdb version >= 0.13 use default queryTimeoutInMs = -1; else use default queryTimeoutInMs = 0\n      query-timeout-in-ms: -1\n      # Data storage time: default '7776000000' (90 days, in milliseconds, -1 means never expire)\n      expire-time: '7776000000'\n")),(0,r.yg)("p",null,"Configuration parameters:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enabled"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to enable")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"host"),(0,r.yg)("td",{parentName:"tr",align:null},"IoTDB database address")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rpc-port"),(0,r.yg)("td",{parentName:"tr",align:null},"IoTDB database port")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"node-urls"),(0,r.yg)("td",{parentName:"tr",align:null},"IoTDB cluster addresses")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"IoTDB database account")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"IoTDB database password")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"version"),(0,r.yg)("td",{parentName:"tr",align:null},"deprecated")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query-timeout-in-ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Query timeout")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"expire-time"),(0,r.yg)("td",{parentName:"tr",align:null},"Data storage time, default '7776000000' (90 days, in milliseconds, -1 means never expire)")))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"If both cluster configuration ",(0,r.yg)("inlineCode",{parentName:"p"},"node-urls")," and standalone configuration are set simultaneously, the cluster ",(0,r.yg)("inlineCode",{parentName:"p"},"node-urls")," configuration takes precedence.")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Restart HertzBeat")),(0,r.yg)("h3",{id:"faq"},"FAQ"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Do both the time series databases IoTDB and TDengine need to be configured? Can they both be used?")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"You don't need to configure all of them, you can choose one of them. Use the enable parameter to control whether it is used or not. You can also install and configure neither, which only affects the historical chart data.")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"The historical chart of the monitoring page is not displayed, and pops up ","[Unable to provide historical chart data, please configure to rely on the time series database]")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"As shown in the pop-up window, the premise of displaying the history chart is to install and configure the dependent services of hertzbeat - IotDB database or TDengine database")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"The TDengine database is installed and configured, but the page still displays a pop-up ","[Unable to provide historical chart data, please configure the dependent time series database]")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Please check if the configuration parameters are correct\nIs td-engine enable set to true\nNote\u26a0\ufe0fIf both hertzbeat and TDengine are started under the same host for docker containers, 127.0.0.1 cannot be used for communication between containers by default, and the host IP is changed\nYou can check the startup logs according to the logs directory")))}c.isMDXComponent=!0}}]);