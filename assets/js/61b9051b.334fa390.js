"use strict";(self.webpackChunkgovernify_docs=self.webpackChunkgovernify_docs||[]).push([[410],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={title:"Director",description:"Director",hide_table_of_contents:!1,sidebar_position:6},s="Director",o={unversionedId:"development/services/director",id:"development/services/director",title:"Director",description:"Director",source:"@site/docs/development/services/director.md",sourceDirName:"development/services",slug:"/development/services/director",permalink:"/development/services/director",draft:!1,editUrl:"https://github.com/governify/governify-docs/edit/main/docs/development/services/director.md",tags:[],version:"current",lastUpdatedBy:"Rafael Fresno",lastUpdatedAt:1719909603,formattedLastUpdatedAt:"Jul 2, 2024",sidebarPosition:6,frontMatter:{title:"Director",description:"Director",hide_table_of_contents:!1,sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"Scopes Manager",permalink:"/development/services/scopes-manager"},next:{title:"Render",permalink:"/development/services/render"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Tasks",id:"tasks",level:3},{value:"Scripts",id:"scripts",level:3},{value:"API",id:"api",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"director"},"Director"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The director service is a simple standalone service that execute a set of tasks periodically based on configuration. The tasks are defined in a JS file and the interval configuration is defined in JSON, both files must have the same name and be stored under ",(0,r.kt)("inlineCode",{parentName:"p"},"/public/director")," folder of the assets manager."),(0,r.kt)("p",null,"Having created the JS and JSON files in assets manager, when the task is created in director it will request the the script to the assets manager for every execution. Once a task is created in director, it may be running or stopped, if it is running it will be executed periodically based on the interval configuration. The following state diagram shows the possible states of a task:"),(0,r.kt)("mermaid",{value:"---\ntitle: Director task state diagram\n---\n\nstateDiagram-v2\n    direction LR\n    [*] --\x3e Created: Task created\n    state if_state <<choice>>\n    Created --\x3e if_state: running?\n    if_state --\x3e Running: yes\n    if_state --\x3e Stopped: no\n\n    state Running {\n        direction LR\n        state if_state2 <<choice>>\n        Idle --\x3e if_state2: interval reached?\n        if_state2 --\x3e Idle: no\n        if_state2 --\x3e Executing: yes\n    }\n\n    state if_state3 <<choice>>\n    Running --\x3e if_state3: stop?\n    if_state3 --\x3e Stopped: yes\n    if_state3 --\x3e Running: no\n\n    state if_state4 <<choice>>\n    Stopped --\x3e if_state4: delete?\n    if_state4 --\x3e [*]: yes\n    if_state4 --\x3e Created: no"}),(0,r.kt)("h3",{id:"tasks"},"Tasks"),(0,r.kt)("p",null,"Director tasks are created based on the script stored in the assets manager. However, the tasks are actually JSON files with the following structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "taskId",\n  "script": "scriptURL",\n  "running": true,\n  "config": {\n    "agreementId": "agreementId",\n  },\n  "init": "UTC date",\n  "end": "UTC date",\n  "interval": 3600000\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field identifies the task, whereas the ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," determines which JS script from the assets manager will be executed when ",(0,r.kt)("inlineCode",{parentName:"p"},"interval")," is reached. The ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," field sets the initial date of the task and the ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," sets the date for its automatic deletion. The ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," field is an object that is passed to the API when creating the task, ",(0,r.kt)("strong",{parentName:"p"},"it must not be mistaken with the JSON configuration file stored in the assets manager along with the JS script"),". This JSON file determines the ",(0,r.kt)("inlineCode",{parentName:"p"},"init"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"interval")," fields of the task."),(0,r.kt)("h3",{id:"scripts"},"Scripts"),(0,r.kt)("p",null,"Scripts are Node.JS modules that export a function called ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),". The function takes the configuration object as parameter and return a string with the result of the execution. The following example shows a simple script that returns the content of some JSON API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'"use strict";\n\nconst axios = require("axios");\n\nmodule.exports.main = (config) => {\n    const requestURL = \'someURL\';\n    return JSON.stringify(await axios.get(requestURL));\n}\n')),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"The director service exposes the following API:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Path"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/tasks"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the list of tasks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/tasks/{id}"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the task")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/tasks"),(0,r.kt)("td",{parentName:"tr",align:null},"Creates a new task")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PUT"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/tasks/{id}"),(0,r.kt)("td",{parentName:"tr",align:null},"Updates the task")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/tasks/{id}"),(0,r.kt)("td",{parentName:"tr",align:null},"Deletes the task")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/tasks/{id}/status"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the task status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PUT"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/tasks/{id}/run"),(0,r.kt)("td",{parentName:"tr",align:null},"Runs the task")))))}u.isMDXComponent=!0}}]);