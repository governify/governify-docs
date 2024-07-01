"use strict";(self.webpackChunkgovernify_docs=self.webpackChunkgovernify_docs||[]).push([[389],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"Collectors",description:"Collectors",hide_table_of_contents:!0},l="Collectors",c={unversionedId:"development/services/collectors/intro",id:"development/services/collectors/intro",title:"Collectors",description:"Collectors",source:"@site/docs/development/services/collectors/intro.md",sourceDirName:"development/services/collectors",slug:"/development/services/collectors/intro",permalink:"/development/services/collectors/intro",draft:!1,editUrl:"https://github.com/governify/governify-docs/edit/main/docs/development/services/collectors/intro.md",tags:[],version:"current",lastUpdatedBy:"Manuel Otero Barbas\xe1n",lastUpdatedAt:1719834027,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{title:"Collectors",description:"Collectors",hide_table_of_contents:!0},sidebar:"defaultSidebar",previous:{title:"Reporter",permalink:"/development/services/reporter"},next:{title:"Collector Events",permalink:"/development/services/collectors/collector-events"}},i={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"collectors"},"Collectors"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The Collector services are in charge of gathering the required data to compute the metrics and guarantees defined in the SLAs. The collectors are the ones who actually compute the values and evidences for the guarantees, and then send them to the Registry service to be stored. In general terms, this process can be summarized in the following diagram:"),(0,o.kt)("mermaid",{value:"---\ntitle: Collectors Sequence Diagram\n---\nsequenceDiagram\n    participant Registry\n    participant Collector\n    participant External Service\n\n    Registry ->> Collector: Calculate guarantee state\n    loop For each metric in guarantee\n        Collector ->> External Service: Fetch data\n        External Service --\x3e> Collector: Data\n    end\n\n    Collector ->> Collector: Calculate Guarantee\n    Collector --\x3e> Registry: Guarantee value and evidences"}),(0,o.kt)("p",null,"Depending on the use case, the required data may be fetched from different type of sources (REST APIs, GraphQL, SOAP...). In this context, Governify provide different types of collectors to fetch data from different sources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/development/services/collectors/collector-events"},"Collector Events"),":")," Gather data from REST and GraphQL APIs of different platforms such as GitHub, Pivotal Tracker, Heroku, Travis CI, etc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/development/services/collectors/computer-ppinot"},"Computer PPINOT"),":")," Gather data from PPINOT models."))))}d.isMDXComponent=!0}}]);