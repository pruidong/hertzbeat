"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[36108],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,d=m["".concat(c,".").concat(g)]||m[g]||y[g]||l;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const l={id:"mysql-change",title:"\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4f7f\u7528 Mysql \u66ff\u6362\u4f9d\u8d56\u7684 H2 \u5b58\u50a8\u7cfb\u7edf\u5143\u6570\u636e",sidebar_label:"\u5143\u6570\u636e\u4f7f\u7528Mysql\u5b58\u50a8(\u53ef\u9009)"},i=void 0,o={unversionedId:"start/mysql-change",id:"version-v1.3.x/start/mysql-change",title:"\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4f7f\u7528 Mysql \u66ff\u6362\u4f9d\u8d56\u7684 H2 \u5b58\u50a8\u7cfb\u7edf\u5143\u6570\u636e",description:"MYSQL\u662f\u4e00\u6b3e\u503c\u5f97\u4fe1\u8d56\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0cHertzBeat\u9664\u4e86\u652f\u6301\u4f7f\u7528\u9ed8\u8ba4\u5185\u7f6e\u7684H2\u6570\u636e\u5e93\u5916\uff0c\u8fd8\u53ef\u4ee5\u5207\u6362\u4e3a\u4f7f\u7528MYSQL\u5b58\u50a8\u76d1\u63a7\u4fe1\u606f\uff0c\u544a\u8b66\u4fe1\u606f\uff0c\u914d\u7f6e\u4fe1\u606f\u7b49\u7ed3\u6784\u5316\u5173\u7cfb\u6570\u636e\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.3.x/start/mysql-change.md",sourceDirName:"start",slug:"/start/mysql-change",permalink:"/zh-cn/docs/v1.3.x/start/mysql-change",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.3.x/start/mysql-change.md",tags:[],version:"v1.3.x",frontMatter:{id:"mysql-change",title:"\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4f7f\u7528 Mysql \u66ff\u6362\u4f9d\u8d56\u7684 H2 \u5b58\u50a8\u7cfb\u7edf\u5143\u6570\u636e",sidebar_label:"\u5143\u6570\u636e\u4f7f\u7528Mysql\u5b58\u50a8(\u53ef\u9009)"},sidebar:"docs",previous:{title:"\u4f7f\u7528InfluxDB\u5b58\u50a8\u6307\u6807\u6570\u636e(\u53ef\u9009)",permalink:"/zh-cn/docs/v1.3.x/start/influxdb-init"},next:{title:"\u5143\u6570\u636e\u4f7f\u7528PostgreSQL\u5b58\u50a8(\u53ef\u9009)",permalink:"/zh-cn/docs/v1.3.x/start/postgresql-change"}},c={},p=[{value:"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5MYSQL",id:"\u901a\u8fc7docker\u65b9\u5f0f\u5b89\u88c5mysql",level:3},{value:"\u6570\u636e\u5e93\u521b\u5efa",id:"\u6570\u636e\u5e93\u521b\u5efa",level:3},{value:"\u4fee\u6539hertzbeat\u7684\u914d\u7f6e\u6587\u4ef6application.yml\u5207\u6362\u6570\u636e\u6e90",id:"\u4fee\u6539hertzbeat\u7684\u914d\u7f6e\u6587\u4ef6applicationyml\u5207\u6362\u6570\u636e\u6e90",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:3}],s={toc:p};function y(e){let{components:t,...n}=e;return(0,a.yg)("wrapper",(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"MYSQL\u662f\u4e00\u6b3e\u503c\u5f97\u4fe1\u8d56\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0cHertzBeat\u9664\u4e86\u652f\u6301\u4f7f\u7528\u9ed8\u8ba4\u5185\u7f6e\u7684H2\u6570\u636e\u5e93\u5916\uff0c\u8fd8\u53ef\u4ee5\u5207\u6362\u4e3a\u4f7f\u7528MYSQL\u5b58\u50a8\u76d1\u63a7\u4fe1\u606f\uff0c\u544a\u8b66\u4fe1\u606f\uff0c\u914d\u7f6e\u4fe1\u606f\u7b49\u7ed3\u6784\u5316\u5173\u7cfb\u6570\u636e\u3002  "),(0,a.yg)("p",null,"\u6ce8\u610f\u26a0\ufe0f \u4f7f\u7528\u5916\u7f6eMysql\u6570\u636e\u5e93\u66ff\u6362\u5185\u7f6eH2\u6570\u636e\u5e93\u4e3a\u53ef\u9009\u9879\uff0c\u4f46\u5efa\u8bae\u751f\u4ea7\u73af\u5883\u914d\u7f6e\uff0c\u4ee5\u63d0\u4f9b\u66f4\u597d\u7684\u6027\u80fd"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u5982\u679c\u60a8\u5df2\u6709MYSQL\u73af\u5883\uff0c\u53ef\u76f4\u63a5\u8df3\u5230\u6570\u636e\u5e93\u521b\u5efa\u90a3\u4e00\u6b65\u3002  ")),(0,a.yg)("h3",{id:"\u901a\u8fc7docker\u65b9\u5f0f\u5b89\u88c5mysql"},"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5MYSQL"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u4e0b\u8f7d\u5b89\u88c5Docker\u73af\u5883",(0,a.yg)("br",{parentName:"li"}),"Docker \u5de5\u5177\u81ea\u8eab\u7684\u4e0b\u8f7d\u8bf7\u53c2\u8003 ",(0,a.yg)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker\u5b98\u7f51\u6587\u6863"),"\u3002\n\u5b89\u88c5\u5b8c\u6bd5\u540e\u7ec8\u7aef\u67e5\u770bDocker\u7248\u672c\u662f\u5426\u6b63\u5e38\u8f93\u51fa\u3002  ",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"$ docker -v\nDocker version 20.10.12, build e91ed57\n"))),(0,a.yg)("li",{parentName:"ol"},"Docker\u5b89\u88c5MYSQl  ",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"$ docker run -d --name mysql \\\n-p 3306:3306 \\\n-v /opt/data:/var/lib/mysql \\\n-e MYSQL_ROOT_PASSWORD=123456 \\\n--restart=always \\\nmysql:5.7\n")),(0,a.yg)("inlineCode",{parentName:"li"},"-v /opt/data:/var/lib/mysql")," \u4e3amysql\u6570\u636e\u76ee\u5f55\u672c\u5730\u6301\u4e45\u5316\u6302\u8f7d\uff0c\u9700\u5c06",(0,a.yg)("inlineCode",{parentName:"li"},"/opt/data"),"\u66ff\u6362\u4e3a\u5b9e\u9645\u672c\u5730\u5b58\u5728\u7684\u76ee\u5f55",(0,a.yg)("br",{parentName:"li"}),"\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"li"},"$ docker ps"),"\u67e5\u770b\u6570\u636e\u5e93\u662f\u5426\u542f\u52a8\u6210\u529f")),(0,a.yg)("h3",{id:"\u6570\u636e\u5e93\u521b\u5efa"},"\u6570\u636e\u5e93\u521b\u5efa"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u8fdb\u5165MYSQL\u6216\u4f7f\u7528\u5ba2\u6237\u7aef\u8fde\u63a5MYSQL\u670d\u52a1",(0,a.yg)("br",{parentName:"li"}),(0,a.yg)("inlineCode",{parentName:"li"},"mysql -uroot -p123456"),"  "),(0,a.yg)("li",{parentName:"ol"},"\u521b\u5efa\u540d\u79f0\u4e3ahertzbeat\u7684\u6570\u636e\u5e93",(0,a.yg)("br",{parentName:"li"}),(0,a.yg)("inlineCode",{parentName:"li"},"create database hertzbeat default charset utf8mb4 collate utf8mb4_general_ci;")),(0,a.yg)("li",{parentName:"ol"},"\u67e5\u770bhertzbeat\u6570\u636e\u5e93\u662f\u5426\u521b\u5efa\u6210\u529f\n",(0,a.yg)("inlineCode",{parentName:"li"},"show databases;"))),(0,a.yg)("h3",{id:"\u4fee\u6539hertzbeat\u7684\u914d\u7f6e\u6587\u4ef6applicationyml\u5207\u6362\u6570\u636e\u6e90"},"\u4fee\u6539hertzbeat\u7684\u914d\u7f6e\u6587\u4ef6application.yml\u5207\u6362\u6570\u636e\u6e90"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u914d\u7f6eHertzBeat\u7684\u914d\u7f6e\u6587\u4ef6\n\u4fee\u6539\u4f4d\u4e8e ",(0,a.yg)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml")," \u7684\u914d\u7f6e\u6587\u4ef6",(0,a.yg)("br",{parentName:"li"}),"\u6ce8\u610f\u26a0\ufe0fdocker\u5bb9\u5668\u65b9\u5f0f\u9700\u8981\u5c06application.yml\u6587\u4ef6\u6302\u8f7d\u5230\u4e3b\u673a\u672c\u5730,\u5b89\u88c5\u5305\u65b9\u5f0f\u89e3\u538b\u4fee\u6539\u4f4d\u4e8e ",(0,a.yg)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml")," \u5373\u53ef\n\u66ff\u6362\u91cc\u9762\u7684",(0,a.yg)("inlineCode",{parentName:"li"},"spring.database"),"\u6570\u636e\u6e90\u53c2\u6570\uff0cIP\u7aef\u53e3\u8d26\u6237\u5bc6\u7801\u9a71\u52a8",(0,a.yg)("br",{parentName:"li"}),"\u26a0\ufe0f\u6ce8\u610f",(0,a.yg)("inlineCode",{parentName:"li"},"application.yml"),"\u6587\u4ef6\u5185\u5bb9\u9700\u5b8c\u6574\uff0c\u9664\u4e0b\u65b9\u4fee\u6539\u5185\u5bb9\u5916\u5176\u4ed6\u53c2\u6570\u9700\u4fdd\u7559\uff0c\u5b8c\u6574\u5185\u5bb9\u89c1",(0,a.yg)("a",{parentName:"li",href:"https://gitee.com/hertzbeat/hertzbeat/raw/master/script/application.yml"},"/script/application.yml"),"  ")),(0,a.yg)("p",null,"\u9700\u4fee\u6539\u90e8\u5206\u539f\u53c2\u6570: "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  datasource:\n    driver-class-name: org.h2.Driver\n    username: sa\n    password: 123456\n    url: jdbc:h2:./data/hertzbeat;MODE=MYSQL\n")),(0,a.yg)("p",null,"\u5177\u4f53\u66ff\u6362\u53c2\u6570\u5982\u4e0b,\u9700\u6839\u636emysql\u73af\u5883\u914d\u7f6e\u8d26\u6237\u5bc6\u7801IP:   "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  datasource:\n    driver-class-name: com.mysql.cj.jdbc.Driver\n    username: root\n    password: 123456\n    url: jdbc:mysql://localhost:3306/hertzbeat?useUnicode=true&characterEncoding=utf-8&useSSL=false\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u901a\u8fc7docker\u542f\u52a8\u65f6\uff0c\u9700\u8981\u4fee\u6539host\u4e3a\u5bbf\u4e3b\u673a\u7684\u5916\u7f51Ip\uff0c\u5305\u62ecmysql\u8fde\u63a5\u5b57\u7b26\u4e32\u548credis\u3002")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u542f\u52a8 HertzBeat \u6d4f\u89c8\u5668\u8bbf\u95ee http://ip:1157/ \u5f00\u59cb\u4f7f\u7528HertzBeat\u8fdb\u884c\u76d1\u63a7\u544a\u8b66\uff0c\u9ed8\u8ba4\u8d26\u6237\u5bc6\u7801 admin/hertzbeat"),"  "),(0,a.yg)("h3",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u7f3a\u5c11hibernate\u7684mysql\u65b9\u8a00\uff0c\u5bfc\u81f4\u542f\u52a8\u5f02\u5e38 Caused by: org.hibernate.HibernateException: Access to DialectResolutionInfo cannot be null when 'hibernate.dialect' not set")),(0,a.yg)("p",null,"\u5982\u679c\u4e0a\u8ff0\u914d\u7f6e\u542f\u52a8\u7cfb\u7edf\uff0c\u51fa\u73b0",(0,a.yg)("inlineCode",{parentName:"p"}," Caused by: org.hibernate.HibernateException: Access to DialectResolutionInfo cannot be null when 'hibernate.dialect' not set"),"\u5f02\u5e38\uff0c",(0,a.yg)("br",{parentName:"p"}),"\n","\u9700\u8981\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"application.yml"),"\u6587\u4ef6\u4e2d\u589e\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  jpa:\n    hibernate:\n      ddl-auto: update \n    properties:\n      hibernate:\n        dialect: org.hibernate.dialect.MySQL5InnoDBDialect\n")))}y.isMDXComponent=!0}}]);