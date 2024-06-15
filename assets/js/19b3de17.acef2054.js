"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[31229],{15680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>d});var r=o(96540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(o),d=n,h=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return o?r.createElement(h,a(a({ref:t},p),{},{components:o})):r.createElement(h,a({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},60444:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=o(58168),n=(o(96540),o(15680));const i={id:"alert_feishu",title:"Alert FeiShu robot notification",sidebar_label:"Alert FeiShu robot notification",keywords:["open source monitoring tool","open source alerter","open source feishu bot notification"]},a=void 0,s={unversionedId:"help/alert_feishu",id:"version-v1.5.x/help/alert_feishu",title:"Alert FeiShu robot notification",description:"After the threshold is triggered send alarm information and notify the recipient by FeiShu robot.",source:"@site/versioned_docs/version-v1.5.x/help/alert_feishu.md",sourceDirName:"help",slug:"/help/alert_feishu",permalink:"/docs/v1.5.x/help/alert_feishu",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.5.x/help/alert_feishu.md",tags:[],version:"v1.5.x",frontMatter:{id:"alert_feishu",title:"Alert FeiShu robot notification",sidebar_label:"Alert FeiShu robot notification",keywords:["open source monitoring tool","open source alerter","open source feishu bot notification"]},sidebar:"docs",previous:{title:"Alert DingDing robot notification",permalink:"/docs/v1.5.x/help/alert_dingtalk"},next:{title:"Console address in alarm template",permalink:"/docs/v1.5.x/help/alert_console"}},l={},c=[{value:"Operation steps",id:"operation-steps",level:3},{value:"FeiShu robot notification common issues",id:"feishu-robot-notification-common-issues",level:3}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,n.yg)("wrapper",(0,r.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"After the threshold is triggered send alarm information and notify the recipient by FeiShu robot.         ")),(0,n.yg)("h3",{id:"operation-steps"},"Operation steps"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"\u3010FeiShu client\u3011-> \u3010Group settings\u3011-> \u3010Group robot\u3011-> \u3010Add new robot\u3011-> \u3010Set robot name and avatar\u3011-> \u3010Copy its webhook address after adding successfully\u3011"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"\u3010Save the key value of the WebHook address of the robot\u3011"),"     "))),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"eg\uff1a webHook address\uff1a",(0,n.yg)("inlineCode",{parentName:"p"},"https://open.feishu.cn/open-apis/bot/v2/hook/3adafc96-23d0-4cd5-8feb-17f6e0b5fcs4"),(0,n.yg)("br",{parentName:"p"}),"\n","Its robot KEY value is ",(0,n.yg)("inlineCode",{parentName:"p"},"3adafc96-23d0-4cd5-8feb-17f6e0b5fcs4"),"      ")),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"\u3010Alarm notification\u3011->\u3010Add new recipient\u3011 ->\u3010Select FeiShu robot notification method\u3011->\u3010Set FeiShu robot KEY\u3011-> \u3010Confirm\u3011"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Configure the associated alarm notification strategy\u26a0\ufe0f \u3010Add new notification strategy\u3011-> \u3010Associate the recipient just set\u3011-> \u3010Confirm\u3011"),"  "))),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"Note\u26a0\ufe0f Adding a new recipient does not mean that it is effective to receive alarm information. It is also necessary to configure the associated alarm notification strategy, that is, to specify which messages are sent to which recipients."),"   ")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"email",src:o(87538).A,width:"3756",height:"1288"}),"    "),(0,n.yg)("h3",{id:"feishu-robot-notification-common-issues"},"FeiShu robot notification common issues"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"FeiShu group did not receive the robot alarm notification.       ",(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"Please check whether there is any triggered alarm information in the alarm center.",(0,n.yg)("br",{parentName:"p"}),"\n","Please check whether the robot key is configured correctly and whether the alarm strategy association is configured.   ")))),(0,n.yg)("p",null,"Other issues can be fed back through the communication group ISSUE!"))}u.isMDXComponent=!0},87538:(e,t,o)=>{o.d(t,{A:()=>r});const r=o.p+"assets/images/alert-notice-4-7b968f3d348ff468ad66fd59466be545.png"}}]);