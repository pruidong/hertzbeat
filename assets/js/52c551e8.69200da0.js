"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[56367],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),g=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=g(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=g(r),y=a,d=m["".concat(p,".").concat(y)]||m[y]||c[y]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var g=2;g<o;g++)i[g]=r[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40135:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var n=r(58168),a=(r(96540),r(15680));const o={id:"springboot3",Title:"Monitoring SpringBoot 3.0",sidebar_label:"SpringBoot 3.0",keywords:["open source monitoring tool","open source monitoring tool","monitoring springboot3 metrics"]},i=void 0,l={unversionedId:"help/springboot3",id:"version-v1.5.x/help/springboot3",title:"springboot3",description:"Collect and monitor the general performance metrics exposed by the SpringBoot 3.0 actuator.",source:"@site/versioned_docs/version-v1.5.x/help/springboot3.md",sourceDirName:"help",slug:"/help/springboot3",permalink:"/docs/v1.5.x/help/springboot3",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.5.x/help/springboot3.md",tags:[],version:"v1.5.x",frontMatter:{id:"springboot3",Title:"Monitoring SpringBoot 3.0",sidebar_label:"SpringBoot 3.0",keywords:["open source monitoring tool","open source monitoring tool","monitoring springboot3 metrics"]},sidebar:"docs",previous:{title:"SpringBoot 2.0",permalink:"/docs/v1.5.x/help/springboot2"},next:{title:"DynamicTp Monitor",permalink:"/docs/v1.5.x/help/dynamic_tp"}},p={},g=[{value:"Pre-monitoring operations",id:"pre-monitoring-operations",level:2},{value:"Configuration Parameters",id:"configuration-parameters",level:3},{value:"Collection Metrics",id:"collection-metrics",level:3},{value:"Metric Set: Availability",id:"metric-set-availability",level:4},{value:"Metric Set: Threads",id:"metric-set-threads",level:4},{value:"Metric Set: Memory Usage",id:"metric-set-memory-usage",level:4},{value:"Metric Set: Health Status",id:"metric-set-health-status",level:4}],s={toc:g};function c(e){let{components:t,...r}=e;return(0,a.yg)("wrapper",(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Collect and monitor the general performance metrics exposed by the SpringBoot 3.0 actuator.")),(0,a.yg)("h2",{id:"pre-monitoring-operations"},"Pre-monitoring operations"),(0,a.yg)("p",null,"If you want to monitor information in 'SpringBoot' with this monitoring type, you need to integrate your SpringBoot application and enable the SpringBoot Actuator."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"1\u3001Add POM .XML dependencies:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"2. Modify the YML configuration exposure metric interface:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"management:\n  endpoints:\n    web:\n      exposure:\n        include: '*'\n    enabled-by-default: on\n")),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Note: If your project also introduces authentication related dependencies, such as springboot security, the interfaces exposed by SpringBoot Actor may be intercepted. In this case, you need to manually release these interfaces. Taking springboot security as an example, you should add the following code to the Security Configuration class:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'public class SecurityConfig extends WebSecurityConfigurerAdapter{\n    @Override\n    protected void configure(HttpSecurity httpSecurity) throws Exception{\n        httpSecurity\n                // Configure the interfaces to be released -----------------------------------\n                .antMatchers("/actuator/**").permitAll()\n                .antMatchers("/metrics/**").permitAll()\n                .antMatchers("/trace").permitAll()\n                .antMatchers("/heapdump").permitAll()\n                // ...\n                // For other interfaces, please refer to: https://blog.csdn.net/JHIII/article/details/126601858 -----------------------------------\n    }\n}\n')),(0,a.yg)("h3",{id:"configuration-parameters"},"Configuration Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Parameter Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Monitor Host"),(0,a.yg)("td",{parentName:"tr",align:null},"The monitored peer's IPV4, IPV6, or domain name. Note\u26a0\ufe0f: Do not include protocol headers (eg: https://, http://).")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Task Name"),(0,a.yg)("td",{parentName:"tr",align:null},"Identifies the name of this monitor, ensuring uniqueness is necessary.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Port"),(0,a.yg)("td",{parentName:"tr",align:null},"The port provided by the application service, default is 8080.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Enable SSL"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether to access the website via HTTPS. Note\u26a0\ufe0f: Enabling HTTPS generally requires changing the default port to 443.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Collector"),(0,a.yg)("td",{parentName:"tr",align:null},"Specifies which collector to use for scheduling data collection for this monitor.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Monitoring Period"),(0,a.yg)("td",{parentName:"tr",align:null},"Interval for periodically collecting data, in seconds, with a minimum interval of 30 seconds.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Bind Tags"),(0,a.yg)("td",{parentName:"tr",align:null},"Tags for categorizing and managing monitored resources.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Description"),(0,a.yg)("td",{parentName:"tr",align:null},"Additional identification and description for this monitor, where users can add remarks.")))),(0,a.yg)("h3",{id:"collection-metrics"},"Collection Metrics"),(0,a.yg)("h4",{id:"metric-set-availability"},"Metric Set: Availability"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Unit"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"responseTime"),(0,a.yg)("td",{parentName:"tr",align:null},"ms"),(0,a.yg)("td",{parentName:"tr",align:null},"Response time")))),(0,a.yg)("h4",{id:"metric-set-threads"},"Metric Set: Threads"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Unit"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"state"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"Thread state")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"size"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"Number of threads for this state")))),(0,a.yg)("h4",{id:"metric-set-memory-usage"},"Metric Set: Memory Usage"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Unit"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"space"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"Memory space name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"mem_used"),(0,a.yg)("td",{parentName:"tr",align:null},"MB"),(0,a.yg)("td",{parentName:"tr",align:null},"Memory usage for this space")))),(0,a.yg)("h4",{id:"metric-set-health-status"},"Metric Set: Health Status"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Unit"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"status"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"Service health status: UP, Down")))))}c.isMDXComponent=!0}}]);