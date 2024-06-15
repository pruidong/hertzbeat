"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[29051],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(t),g=r,u=c["".concat(p,".").concat(g)]||c[g]||y[g]||i;return t?a.createElement(u,l(l({ref:n},m),{},{components:t})):a.createElement(u,l({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6626:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=t(58168),r=(t(96540),t(15680));const i={id:"development",title:"How to Run or Build HertzBeat?",sidebar_label:"Development"},l=void 0,o={unversionedId:"community/development",id:"community/development",title:"How to Run or Build HertzBeat?",description:"Getting HertzBeat code up and running",source:"@site/docs/community/development.md",sourceDirName:"community",slug:"/community/development",permalink:"/docs/community/development",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/community/development.md",tags:[],version:"current",frontMatter:{id:"development",title:"How to Run or Build HertzBeat?",sidebar_label:"Development"},sidebar:"docs",previous:{title:"Discussion",permalink:"/docs/community/contact"},next:{title:"Contributor Guide",permalink:"/docs/community/contribution"}},p={},d=[{value:"Getting HertzBeat code up and running",id:"getting-hertzbeat-code-up-and-running",level:2},{value:"Backend start",id:"backend-start",level:3},{value:"Frontend start",id:"frontend-start",level:3},{value:"Build HertzBeat binary package",id:"build-hertzbeat-binary-package",level:2},{value:"Frontend build",id:"frontend-build",level:3},{value:"Backend build",id:"backend-build",level:3},{value:"Collector build",id:"collector-build",level:3}],m={toc:d};function y(e){let{components:n,...t}=e;return(0,r.yg)("wrapper",(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"getting-hertzbeat-code-up-and-running"},"Getting HertzBeat code up and running"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"To get HertzBeat code running on your development tools, and able to debug with breakpoints.",(0,r.yg)("br",{parentName:"p"}),"\n","This is a front-end and back-end separation project.",(0,r.yg)("br",{parentName:"p"}),"\n","To start the local code, the back-end ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat/tree/master/manager"},"manager")," and the front-end ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat/tree/master/web-app"},"web-app")," must be started separately.")),(0,r.yg)("h3",{id:"backend-start"},"Backend start"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Requires ",(0,r.yg)("inlineCode",{parentName:"p"},"maven3+"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"java17")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"lombok")," environments")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"(Optional) Modify the configuration file: ",(0,r.yg)("inlineCode",{parentName:"p"},"manager/src/main/resources/application.yml"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Execute under the project root directory: ",(0,r.yg)("inlineCode",{parentName:"p"},"mvn clean install -DskipTests"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start ",(0,r.yg)("inlineCode",{parentName:"p"},"springboot manager")," service: ",(0,r.yg)("inlineCode",{parentName:"p"},"manager/src/main/java/org/apache/hertzbeat/manager/Manager.java")))),(0,r.yg)("h3",{id:"frontend-start"},"Frontend start"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Need ",(0,r.yg)("inlineCode",{parentName:"p"},"Node Yarn")," Environment, Make sure ",(0,r.yg)("inlineCode",{parentName:"p"},"Node.js >= 18"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Cd to the ",(0,r.yg)("inlineCode",{parentName:"p"},"web-app")," directory: ",(0,r.yg)("inlineCode",{parentName:"p"},"cd web-app"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Install yarn if not existed ",(0,r.yg)("inlineCode",{parentName:"p"},"npm install -g yarn"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Install Dependencies: ",(0,r.yg)("inlineCode",{parentName:"p"},"yarn install")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"yarn install --registry=https://registry.npmmirror.com")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"web-app"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Install angular-cli globally: ",(0,r.yg)("inlineCode",{parentName:"p"},"yarn global add @angular/cli@15")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"yarn global add @angular/cli@15 --registry=https://registry.npmmirror.com"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"After the local backend is started, start the local frontend in the web-app directory: ",(0,r.yg)("inlineCode",{parentName:"p"},"ng serve --open"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Browser access to localhost:4200 to start, default account/password is ",(0,r.yg)("em",{parentName:"p"},"admin/hertzbeat")))),(0,r.yg)("h2",{id:"build-hertzbeat-binary-package"},"Build HertzBeat binary package"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Requires ",(0,r.yg)("inlineCode",{parentName:"p"},"maven3+"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"java17"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"node")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"yarn")," environments. ")),(0,r.yg)("h3",{id:"frontend-build"},"Frontend build"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Need ",(0,r.yg)("inlineCode",{parentName:"p"},"Node Yarn")," Environment, Make sure ",(0,r.yg)("inlineCode",{parentName:"p"},"Node.js >= 18"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Cd to the ",(0,r.yg)("inlineCode",{parentName:"p"},"web-app")," directory: ",(0,r.yg)("inlineCode",{parentName:"p"},"cd web-app"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Install yarn if not existed ",(0,r.yg)("inlineCode",{parentName:"p"},"npm install -g yarn"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Install Dependencies: ",(0,r.yg)("inlineCode",{parentName:"p"},"yarn install")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"yarn install --registry=https://registry.npmmirror.com")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"web-app"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Build web-app: ",(0,r.yg)("inlineCode",{parentName:"p"},"yarn package")))),(0,r.yg)("h3",{id:"backend-build"},"Backend build"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Requires ",(0,r.yg)("inlineCode",{parentName:"p"},"maven3+"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"java17")," environments")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Execute under the project root directory: ",(0,r.yg)("inlineCode",{parentName:"p"},"mvn clean package -Prelease")))),(0,r.yg)("p",null,"The HertzBeat install package will at ",(0,r.yg)("inlineCode",{parentName:"p"},"dist/hertzbeat-{version}.tar.gz")),(0,r.yg)("h3",{id:"collector-build"},"Collector build"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Requires ",(0,r.yg)("inlineCode",{parentName:"p"},"maven3+"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"java17")," environments")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Execute under the project root directory: ",(0,r.yg)("inlineCode",{parentName:"p"},"mvn clean install"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Cd to the ",(0,r.yg)("inlineCode",{parentName:"p"},"collector")," directory: ",(0,r.yg)("inlineCode",{parentName:"p"},"cd collector"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Execute under ",(0,r.yg)("inlineCode",{parentName:"p"},"collector")," directory: ",(0,r.yg)("inlineCode",{parentName:"p"},"mvn clean package -Pcluster")))),(0,r.yg)("p",null,"The HertzBeat collector package will at ",(0,r.yg)("inlineCode",{parentName:"p"},"dist/hertzbeat-collector-{version}.tar.gz")))}y.isMDXComponent=!0}}]);