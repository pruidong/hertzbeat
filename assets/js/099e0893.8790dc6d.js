"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[51684],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>d});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return a?r.createElement(g,i(i({ref:t},s),{},{components:a})):r.createElement(g,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},33828:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(58168),n=(a(96540),a(15680));const l={id:"quickstart",title:"Quick Start",sidebar_label:"Quick Start"},i=void 0,o={unversionedId:"start/quickstart",id:"version-v1.4.x/start/quickstart",title:"Quick Start",description:"\ud83d\udc15 Quick Start",source:"@site/versioned_docs/version-v1.4.x/start/quickstart.md",sourceDirName:"start",slug:"/start/quickstart",permalink:"/docs/v1.4.x/start/quickstart",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.4.x/start/quickstart.md",tags:[],version:"v1.4.x",frontMatter:{id:"quickstart",title:"Quick Start",sidebar_label:"Quick Start"},sidebar:"docs",previous:{title:"Introduce",permalink:"/docs/v1.4.x/"},next:{title:"Install via Docker",permalink:"/docs/v1.4.x/start/docker-deploy"}},c={},p=[{value:"\ud83d\udc15 Quick Start",id:"-quick-start",level:3},{value:"\ud83c\udf5e Install HertzBeat",id:"-install-hertzbeat",level:3},{value:"1\uff1aInstall quickly via docker",id:"1install-quickly-via-docker",level:5},{value:"2\uff1aInstall via package",id:"2install-via-package",level:5},{value:"3\uff1aStart via source code",id:"3start-via-source-code",level:5},{value:"4\uff1aInstall All(hertzbeat+mysql+iotdb/tdengine) via Docker-compose",id:"4install-allhertzbeatmysqliotdbtdengine-via-docker-compose",level:5},{value:"5. Install All(hertzbeat+collector+mysql+iotdb) via kubernetes helm charts",id:"5-install-allhertzbeatcollectormysqliotdb-via-kubernetes-helm-charts",level:5}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,n.yg)("wrapper",(0,r.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h3",{id:"-quick-start"},"\ud83d\udc15 Quick Start"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"If you wish to deploy HertzBeat locally, please refer to the following Deployment Documentation for instructions.")),(0,n.yg)("h3",{id:"-install-hertzbeat"},"\ud83c\udf5e Install HertzBeat"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"HertzBeat supports installation through source code, docker or package, cpu support X86/ARM64.")),(0,n.yg)("h5",{id:"1install-quickly-via-docker"},"1\uff1aInstall quickly via docker"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Just one command to get started:")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat apache/hertzbeat")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"or use quay.io (if dockerhub network connect timeout)")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat quay.io/tancloud/hertzbeat")),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Access ",(0,n.yg)("inlineCode",{parentName:"p"},"http://localhost:1157")," to start, default account: ",(0,n.yg)("inlineCode",{parentName:"p"},"admin/hertzbeat"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Deploy collector clusters"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"docker run -d -e IDENTITY=custom-collector-name -e MANAGER_HOST=127.0.0.1 -e MANAGER_PORT=1158 --name hertzbeat-collector apache/hertzbeat-collector\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-e IDENTITY=custom-collector-name")," : set the collector unique identity name."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-e MODE=public")," : set the running mode(public or private), public cluster or private cloud-edge."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-e MANAGER_HOST=127.0.0.1")," : set the main hertzbeat server ip."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-e MANAGER_PORT=1158")," : set the main hertzbeat server port, default 1158.")),(0,n.yg)("p",null,"Detailed config refer to ",(0,n.yg)("a",{parentName:"p",href:"https://hertzbeat.com/docs/start/docker-deploy"},"Install HertzBeat via Docker")),(0,n.yg)("h5",{id:"2install-via-package"},"2\uff1aInstall via package"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Download the release package ",(0,n.yg)("inlineCode",{parentName:"li"},"hertzbeat-xx.tar.gz")," ",(0,n.yg)("a",{parentName:"li",href:"https://gitee.com/hertzbeat/hertzbeat/releases"},"GITEE Release")," ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases"},"GITHUB Release")),(0,n.yg)("li",{parentName:"ol"},"Configure the HertzBeat configuration yml file ",(0,n.yg)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml")," (optional)"),(0,n.yg)("li",{parentName:"ol"},"Run command ",(0,n.yg)("inlineCode",{parentName:"li"},"$ ./bin/startup.sh ")," or ",(0,n.yg)("inlineCode",{parentName:"li"},"bin/startup.bat")),(0,n.yg)("li",{parentName:"ol"},"Access ",(0,n.yg)("inlineCode",{parentName:"li"},"http://localhost:1157")," to start, default account: ",(0,n.yg)("inlineCode",{parentName:"li"},"admin/hertzbeat")),(0,n.yg)("li",{parentName:"ol"},"Deploy collector clusters",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Download the release package ",(0,n.yg)("inlineCode",{parentName:"li"},"hertzbeat-collector-xx.tar.gz")," to new machine ",(0,n.yg)("a",{parentName:"li",href:"https://gitee.com/hertzbeat/hertzbeat/releases"},"GITEE Release")," ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases"},"GITHUB Release")),(0,n.yg)("li",{parentName:"ul"},"Configure the collector configuration yml file ",(0,n.yg)("inlineCode",{parentName:"li"},"hertzbeat-collector/config/application.yml"),": unique ",(0,n.yg)("inlineCode",{parentName:"li"},"identity")," name, running ",(0,n.yg)("inlineCode",{parentName:"li"},"mode")," (public or private), hertzbeat ",(0,n.yg)("inlineCode",{parentName:"li"},"manager-host"),", hertzbeat ",(0,n.yg)("inlineCode",{parentName:"li"},"manager-port"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"collector:\n  dispatch:\n    entrance:\n      netty:\n        enabled: true\n        identity: ${IDENTITY:}\n        mode: ${MODE:public}\n        manager-host: ${MANAGER_HOST:127.0.0.1}\n        manager-port: ${MANAGER_PORT:1158}\n"))),(0,n.yg)("li",{parentName:"ul"},"Run command ",(0,n.yg)("inlineCode",{parentName:"li"},"$ ./bin/startup.sh ")," or ",(0,n.yg)("inlineCode",{parentName:"li"},"bin/startup.bat")),(0,n.yg)("li",{parentName:"ul"},"Access ",(0,n.yg)("inlineCode",{parentName:"li"},"http://localhost:1157")," and you will see the registered new collector in dashboard")))),(0,n.yg)("p",null,"Detailed config refer to ",(0,n.yg)("a",{parentName:"p",href:"https://hertzbeat.com/docs/start/package-deploy"},"Install HertzBeat via Package")),(0,n.yg)("h5",{id:"3start-via-source-code"},"3\uff1aStart via source code"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Local source code debugging needs to start the back-end project ",(0,n.yg)("inlineCode",{parentName:"li"},"manager")," and the front-end project ",(0,n.yg)("inlineCode",{parentName:"li"},"web-app"),"."),(0,n.yg)("li",{parentName:"ol"},"Backend\uff1aneed ",(0,n.yg)("inlineCode",{parentName:"li"},"maven3+"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"java11"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"lombok"),", start the ",(0,n.yg)("inlineCode",{parentName:"li"},"manager")," service."),(0,n.yg)("li",{parentName:"ol"},"Web\uff1aneed ",(0,n.yg)("inlineCode",{parentName:"li"},"nodejs npm angular-cli")," environment, Run ",(0,n.yg)("inlineCode",{parentName:"li"},"ng serve --open")," in ",(0,n.yg)("inlineCode",{parentName:"li"},"web-app")," directory after backend startup."),(0,n.yg)("li",{parentName:"ol"},"Access ",(0,n.yg)("inlineCode",{parentName:"li"},"http://localhost:4200")," to start, default account: ",(0,n.yg)("inlineCode",{parentName:"li"},"admin/hertzbeat"))),(0,n.yg)("p",null,"Detailed steps refer to ",(0,n.yg)("a",{parentName:"p",href:"../others/contributing"},"CONTRIBUTING"),"   "),(0,n.yg)("h5",{id:"4install-allhertzbeatmysqliotdbtdengine-via-docker-compose"},"4\uff1aInstall All(hertzbeat+mysql+iotdb/tdengine) via Docker-compose"),(0,n.yg)("p",null,"Install and deploy the mysql database, iotdb/tdengine database and hertzbeat at one time through ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat/tree/master/script/docker-compose"},"docker-compose deployment script"),"."),(0,n.yg)("p",null,"Detailed steps refer to ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat/tree/master/script/docker-compose"},"Install via Docker-Compose")),(0,n.yg)("h5",{id:"5-install-allhertzbeatcollectormysqliotdb-via-kubernetes-helm-charts"},"5. Install All(hertzbeat+collector+mysql+iotdb) via kubernetes helm charts"),(0,n.yg)("p",null,"Install HertzBeat cluster in a Kubernetes cluster by Helm chart."),(0,n.yg)("p",null,"Detailed steps refer to ",(0,n.yg)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/hertzbeat/hertzbeat"},"Artifact Hub")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"HAVE FUN")))}u.isMDXComponent=!0}}]);