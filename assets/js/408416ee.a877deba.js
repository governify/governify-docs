"use strict";(self.webpackChunkgovernify_docs=self.webpackChunkgovernify_docs||[]).push([[593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(n),p=o,f=g["".concat(s,".").concat(p)]||g[p]||m[p]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Governify Commons Library",description:"Governify Commons Library",hide_table_of_contents:!1},i="Governify Commons Library",l={unversionedId:"development/tooling/commons-library",id:"development/tooling/commons-library",title:"Governify Commons Library",description:"Governify Commons Library",source:"@site/docs/development/tooling/commons-library.md",sourceDirName:"development/tooling",slug:"/development/tooling/commons-library",permalink:"/development/tooling/commons-library",draft:!1,editUrl:"https://github.com/governify/governify-docs/edit/main/docs/development/tooling/commons-library.md",tags:[],version:"current",lastUpdatedBy:"Manuel Otero Barbas\xe1n",lastUpdatedAt:1719834027,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{title:"Governify Commons Library",description:"Governify Commons Library",hide_table_of_contents:!1},sidebar:"defaultSidebar",previous:{title:"ZH2GH",permalink:"/development/services/zh2gh"},next:{title:"Logging Levels",permalink:"/development/tooling/log-levels"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Infrastructure",id:"infrastructure",level:3},{value:"HttpClient",id:"httpclient",level:3},{value:"Logger",id:"logger",level:3},{value:"Configurator",id:"configurator",level:3},{value:"Utils",id:"utils",level:3},{value:"Middleware",id:"middleware",level:2}],u={toc:c},g="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"governify-commons-library"},"Governify Commons Library"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This module is intended for use in all microservices of Governify infrastructure.\nIt allows for abstract the functions that are mostly used in the code, to have a better control and parametrize the functions call."),(0,o.kt)("p",null,"Currently Governify-Commons implements the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Governify infrastructure urls management"),(0,o.kt)("li",{parentName:"ul"},"A httpClient that should be used for all the calls (This httpClient is an Axios wrapper)"),(0,o.kt)("li",{parentName:"ul"},"A logger able to rotate files and change logging levels in execution time"),(0,o.kt)("li",{parentName:"ul"},"A configuration manager compatible with local or external files"),(0,o.kt)("li",{parentName:"ul"},"Utils functions commonly used in all the microservices")),(0,o.kt)("p",null,"It also features a middleware in /commons to modify configuration parameters and show microservice information."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"The module should be initiated at the entrypoint of the service as soon as possible in the code with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const governify = require('governify-commons')\n")),(0,o.kt)("p",null,"After that, you must call the module init function that will load the infrastructure and all the configurations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"governify.init().then(function(commonsMiddleware) {\n    //All the code for initializing the microservice\n    }\n);\n")),(0,o.kt)("p",null,"This example is for running without any configuration in it. Also the commons Middleware will be resolved for it to be instantiated in the server. This is explained in the last part of this article."),(0,o.kt)("p",null,"Once you have called the init function, you can require governify in other classes of your microservice without having to initialize it again."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you require governify-commons before the init function being completed, the infrastructure urls or the configuration can have null values.")),(0,o.kt)("h3",{id:"infrastructure"},"Infrastructure"),(0,o.kt)("p",null,"   In order to call another service in the infrastructure you must implement the code as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const governify = require('governify-commons');\ngovernify.infrastructure.getService('internal.registry').get('/echo/');\ngovernify.infrastructure.getService('internal.registry').post('/echo/', {body}, {config});\n")),(0,o.kt)("p",null,"You can also get only the service url with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const governify = require('governify-commons');\ngovernify.infrastructure.getServiceURL('external.registry')\n//This returns the service url that is stored in the loaded infrastructure file as (external.registry)\n")),(0,o.kt)("h3",{id:"httpclient"},"HttpClient"),(0,o.kt)("p",null,"If you want to call a service that is not specified in the infrastructure file, you should use the httpClient as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const governify = require('governify-commons');\ngovernify.httpClient.get('http://api-echo.herokuapp.com/echo/');\n")),(0,o.kt)("p",null," The syntax is the same as axios, the code above is the equivalent of:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const axios = require('axios');\naxios.get('http://api-echo.herokuapp.com/echo/');\n")),(0,o.kt)("p",null,"You can read axios documentation to see all the posible functions:\n",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/axios"},"Axios NPM documentation")),(0,o.kt)("h3",{id:"logger"},"Logger"),(0,o.kt)("p",null,"Governify Commons integrates a logger consisting in 5 different logging levels and integrating automatic file rotation. The logger is obtained by executing the getLogger() function from the commons instantiation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const logger = require(\'governify-commons\').getLogger();\n\nlogger.debug("Debug message");\nlogger.info("Info message");\nlogger.warn("Warn message");\nlogger.error("Error message");\nlogger.fatal("Fatal error message");\n')),(0,o.kt)("p",null,"Messages can be tagged by marking the logger object with .tag(tagName) function and store this configuration in the variable or in the actual logging call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const logger = require(\'governify-commons\').getLogger().tag("tag1");\n\n// Will log a message tagged with "tag1"\nlogger.info("Info message");\n\n// Will log a message tagged with both "tag1" and "tag2" tags\nlogger.tag("tag2").warn("Warn message");\n\n// Will log a message only tagged with "tag1" because the logger also tagged with tag2 wasn\'t stored in the logger variable\nlogger.error("Error message");\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"OUTPUT\n\n[2021-07-06T09:06:17.395Z] [info ] [NOTRA] [tag1] Info message\n[2021-07-06T09:06:17.397Z] [warn ] [NOTRA] [tag1, tag2] Warn message\n[2021-07-06T09:06:17.398Z] [error] [NOTRA] [tag1] Error message\n")),(0,o.kt)("h3",{id:"configurator"},"Configurator"),(0,o.kt)("p",null,"In order to load a configuration to the module, you have to specify it in the init function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"governify.init({\n    configurations: [\n        {\n            name: 'configName',\n            location: './configurations/configName.' + (process.env.NODE_ENV || 'development') + '.yaml',\n            default: true\n        }\n    ]\n}).then(function (commonsMiddleware) {\n    //All the code for initializing the microservice\n}\n);\n")),(0,o.kt)("p",null,"After that you can load the configuration as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let config = governify.configurator.getConfig('configName');\n")),(0,o.kt)("p",null," All the values of the configurations can be replace with Environment variables.\nFor example:\nWith a config named 'exampleConfig' and the following value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"test:\n    childrenTest: originalValue\nserverPort: 8080\n")),(0,o.kt)("p",null,"In order to replace a value of this config, you can specify the following env vars:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GOV_CONFIG_exampleConfig_test_childrenTest=replacedValue\nGOV_CONFIG_exampleConfig_serverPort=9000\n")),(0,o.kt)("p",null,"The result config when you execute the code will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"governify.configurator.getConfig('configName');\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"test:\n    childrenTest: replacedValue\nserverPort: 9000\n")),(0,o.kt)("h3",{id:"utils"},"Utils"),(0,o.kt)("p",null,"The most used functions of the utils are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const governify = require('governify-commons');\n//This function read the content of a file in a local storage path or from a external url\nlet object = governify.utils.loadObjectFromFileOrURL(url or fileLocation);\n")),(0,o.kt)("p",null,"You can check utils.js file to see all posible functions."),(0,o.kt)("h2",{id:"middleware"},"Middleware"),(0,o.kt)("p",null,"By calling the init function, it resolves a middleware. It will serve a set of functions in the /commons endpoint. Make sure it is used after required middlewares for the correct functioning of the server are already instantiated like the body parser and cors if needed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"app.use(\n    bodyParser.urlencoded({\n        limit: '50mb',\n        extended: 'true'\n    })\n);\n\napp.use(\n    bodyParser.json({\n        limit: '50mb',\n        type: 'application/json'\n    })\n);\n\napp.use(cors());\napp.use(commonsMiddleware);\n")),(0,o.kt)("p",null,"These are the available endpoints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[GET] /commons")," - Returns information about the microservice commons is running on, such as the name and version of the microservice, the version of the commons installed and if the requests are being logged."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[GET] /commons/infrastructure")," - Returns the services infrastructure in a JSON format."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[POST] /commons/infrastructure/update")," - Updates the microservice infrastructure by requesting the infrastructure.yaml file again."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[GET] /commons/requestlogging"),' - Answers with an "Enabled" or "Disabled" message indicating if commons is loggin the requests information.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[POST] /commons/requestlogging/enable")," - Enables the request logging."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[POST] /commons/requestlogging/disable")," - Disables the request logging."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[POST] /commons/requestlogging/swap")," - Inverts the status of the request logging."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[GET] /commons/logger")," - Returns the actual logger configuration (levels, file rotation, etc)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[POST] /commons/logger")," - Receives a JSON (with the same structure as the GET) to substitute the logger configuration.")))}m.isMDXComponent=!0}}]);