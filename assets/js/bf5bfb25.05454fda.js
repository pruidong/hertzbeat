"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[48613],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const i={id:"extend-http-default",title:"HTTP Protocol System Default Parsing Method",sidebar_label:"Default Parsing Method"},o=void 0,l={unversionedId:"advanced/extend-http-default",id:"version-v1.5.x/advanced/extend-http-default",title:"HTTP Protocol System Default Parsing Method",description:"After calling the HTTP api to obtain the response data, use the default parsing method of hertzbeat to parse the response data.",source:"@site/versioned_docs/version-v1.5.x/advanced/extend-http-default.md",sourceDirName:"advanced",slug:"/advanced/extend-http-default",permalink:"/docs/v1.5.x/advanced/extend-http-default",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.5.x/advanced/extend-http-default.md",tags:[],version:"v1.5.x",frontMatter:{id:"extend-http-default",title:"HTTP Protocol System Default Parsing Method",sidebar_label:"Default Parsing Method"},sidebar:"docs",previous:{title:"HTTP Protocol Custom Monitoring",permalink:"/docs/v1.5.x/advanced/extend-http"},next:{title:"JsonPath Parsing Method",permalink:"/docs/v1.5.x/advanced/extend-http-jsonpath"}},s={},c=[{value:"HertzBeat data format specification",id:"hertzbeat-data-format-specification",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.yg)("wrapper",(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"After calling the HTTP api to obtain the response data, use the default parsing method of hertzbeat to parse the response data.    ")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"The interface response data structure must be consistent with the data structure rules specified by hertzbeat"),"   "),(0,a.yg)("h3",{id:"hertzbeat-data-format-specification"},"HertzBeat data format specification"),(0,a.yg)("p",null,"Note\u26a0\ufe0f The response data is JSON format.  "),(0,a.yg)("p",null,"Single layer format \uff1akey-value"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "metricName1": "metricValue",\n  "metricName2": "metricValue",\n  "metricName3": "metricValue",\n  "metricName4": "metricValue"\n}\n')),(0,a.yg)("p",null,"Multilayer format\uff1aSet key value in the array"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "metricName1": "metricValue",\n    "metricName2": "metricValue",\n    "metricName3": "metricValue",\n    "metricName4": "metricValue"\n  },\n  {\n    "metricName1": "metricValue",\n    "metricName2": "metricValue",\n    "metricName3": "metricValue",\n    "metricName4": "metricValue"\n  }\n]\n')),(0,a.yg)("p",null,"eg\uff1a\nQuery the CPU information of the custom system. The exposed interface is ",(0,a.yg)("inlineCode",{parentName:"p"},"/metrics/cpu"),". We need ",(0,a.yg)("inlineCode",{parentName:"p"},"hostname,core,useage")," Metric.\nIf there is only one virtual machine, its single-layer format is : "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "hostname": "linux-1",\n  "core": 1,\n  "usage": 78.0,\n  "allTime": 200,\n  "runningTime": 100\n}\n')),(0,a.yg)("p",null,"If there are multiple virtual machines, the multilayer format is: : "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "hostname": "linux-1",\n    "core": 1,\n    "usage": 78.0,\n    "allTime": 200,\n    "runningTime": 100\n  },\n  {\n    "hostname": "linux-2",\n    "core": 3,\n    "usage": 78.0,\n    "allTime": 566,\n    "runningTime": 34\n  },\n  {\n    "hostname": "linux-3",\n    "core": 4,\n    "usage": 38.0,\n    "allTime": 500,\n    "runningTime": 20\n  }\n]\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"The corresponding monitoring template yml can be configured as follows"),"  "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"# The monitoring type category\uff1aservice-application service monitoring db-database monitoring custom-custom monitoring os-operating system monitoring\ncategory: custom\n# Monitoring application type(consistent with the file name) eg: linux windows tomcat mysql aws...\napp: example\nname:\n  zh-CN: \u6a21\u62df\u5e94\u7528\u7c7b\u578b\n  en-US: EXAMPLE APP\nparams:\n  # field-field name identifier\n  - field: host\n    # name-parameter field display name\n    name:\n      zh-CN: \u4e3b\u673aHost\n      en-US: Host\n    # type-field type, style(most mappings are input label type attribute)\n    type: host\n    # required or not  true-required  false-optional\n    required: true\n  - field: port\n    name:\n      zh-CN: \u7aef\u53e3\n      en-US: Port\n    type: number\n    # When type is number, range is used to represent the range.\n    range: '[0,65535]'\n    required: true\n    # port default\n    defaultValue: 80\n    # Prompt information of parameter input box\n    placeholder: 'Please enter the port'\n# Metric group list\nmetrics:\n# The first monitoring Metric group cpu\n# Note\uff1athe built-in monitoring Metrics have (responseTime - response time)\n  - name: cpu\n    # The smaller Metric group scheduling priority(0-127), the higher the priority. After completion of the high priority Metric group collection,the low priority Metric group will then be scheduled. Metric groups with the same priority  will be scheduled in parallel.\n    # Metric group with a priority of 0 is an availability group which will be scheduled first. If the collection succeeds, the  scheduling will continue otherwise interrupt scheduling.\n    priority: 0\n    # metrics fields list\n    fields:\n      # Metric information include   field: name   type: field type(0-number: number, 1-string: string)   label-if is metrics label   unit: Metric unit\n      - field: hostname\n        type: 1\n        label: true\n      - field: usage\n        type: 0\n        unit: '%'\n      - field: core\n        type: 0\n# protocol for monitoring and collection eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: http\n# Specific collection configuration when the protocol is HTTP protocol\n    http:\n      # host: ipv4 ipv6 domain name\n      host: ^_^host^_^\n      # port\n      port: ^_^port^_^\n      # url request interface path\n      url: /metrics/cpu\n      # request mode: GET POST PUT DELETE PATCH\n      method: GET\n      # enable ssl/tls or not, that is to say, HTTP or HTTPS. The default is false\n      ssl: false\n      # parsing method for reponse data: default-system rules, jsonPath-jsonPath script, website-website availability Metric monitoring\n      # Hertzbeat default parsing is used here\n      parseType: default\n")))}u.isMDXComponent=!0}}]);