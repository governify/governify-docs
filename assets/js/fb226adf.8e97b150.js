"use strict";(self.webpackChunkgovernify_docs=self.webpackChunkgovernify_docs||[]).push([[100],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),h=a,u=c["".concat(l,".").concat(h)]||c[h]||m[h]||o;return r?n.createElement(u,i(i({ref:t},d),{},{components:r})):n.createElement(u,i({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8945:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Reporter",description:"Reporter",hide_table_of_contents:!1,sidebar_position:2},i="Reporter",s={unversionedId:"development/services/reporter",id:"development/services/reporter",title:"Reporter",description:"Reporter",source:"@site/docs/development/services/reporter.md",sourceDirName:"development/services",slug:"/development/services/reporter",permalink:"/development/services/reporter",draft:!1,editUrl:"https://github.com/governify/governify-docs/edit/main/docs/development/services/reporter.md",tags:[],version:"current",lastUpdatedBy:"alesancor1",lastUpdatedAt:1691448121,formattedLastUpdatedAt:"Aug 7, 2023",sidebarPosition:2,frontMatter:{title:"Reporter",description:"Reporter",hide_table_of_contents:!1,sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Registry",permalink:"/development/services/registry"},next:{title:"Collectors",permalink:"/development/services/collectors/intro"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"API",id:"api",level:2},{value:"Contracts Reporter",id:"contracts-reporter",level:3},{value:"Dashboard Reporter",id:"dashboard-reporter",level:3},{value:"Data Layer",id:"data-layer",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reporter"},"Reporter"),(0,a.kt)("hr",null),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The code for this service is publicly available at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/governify/reporter"},"GitHub"))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"As it name suggests, the reporter service is the one in charge of reporting the results (states) to the dashboards for visualization. To do that, it receives the states from the registry service and stores them in a time series database (InfluxDB), which is used by the dashboard service as a data source (see ",(0,a.kt)("a",{parentName:"p",href:"/development/services/dashboard"},"Dashboard")," for more information). The panels in the dashboards are generated by the reporter in JSON format, and rendered by the dashboard services afterwards. The sequence diagram below shows the interaction between the reporter and its surrounding services."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The interaction between Reporter and Dashboard is detailed in the ",(0,a.kt)("a",{parentName:"p",href:"/development/services/dashboard"},"Dashboard")," section.")),(0,a.kt)("mermaid",{value:"---\ntitle: Reporter Sequence Diagram\n---\nsequenceDiagram\n    actor Client\n    participant Reporter\n    participant Registry\n    participant InfluxDB\n\n    note over Client: Could be the Director service,<br/> UI (Render) or any REST client\n\n    Client ->> Reporter: Calculate agreement [periods]\n    Reporter --\x3e> Client: 202 Accepted\n    \n    Reporter ->> Registry: Get Agreement\n    Registry --\x3e> Reporter: Agreement\n\n    loop For each period in periods\n        loop For each guarantee in agreement\n        Reporter ->> Reporter: Split period based on guarantee window\n            loop For each guarantee window period\n                Reporter ->> Registry: Calculate guarantee state\n                note right of Registry: See Registry docs\n\n                Registry --\x3e> Reporter: Guarantee value and evidences\n            end     \n            Reporter ->> InfluxDB: Batch store result\n            InfluxDB --\x3e> Reporter: Success\n        end\n    end"}),(0,a.kt)("p",null,"As shown in the diagram, before requesting the states to Registry, the periods sent for camputation are splitted based on the window specified in each of the guarantees of the agreement. Once obtained the states for a guarantee in a certain time window, the results are batch stored in influxDB following the model specified under the ",(0,a.kt)("a",{parentName:"p",href:"#data-layer"},"Data Layer")," section."),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,"The Reporter service counts with a REST API to interact with the service. The API is documented using OpenAPI 3.0 and the documentation is exposed through the SwaggerUI at ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v4/docs")," once deployed. As with the registry, the API is divided in two main sections, the Dashboard Reporter and the Contracts Reporter."),(0,a.kt)("h3",{id:"contracts-reporter"},"Contracts Reporter"),(0,a.kt)("p",null,"The contracts reporter is the part of the API in charge of managing the agreement computation and storing the results in the time series database. The following table shows the relevant endpoints available for this section."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"POST"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/api/v4/contracts/{contractId}/createHistory")),(0,a.kt)("td",{parentName:"tr",align:null},"Calculate the full agreement from the initial time")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"POST"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/api/v4/contracts/{contractId}/createPointFromPeriods")),(0,a.kt)("td",{parentName:"tr",align:null},"Calculate the agreement for a given list of periods")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},'In the table above, the agreements are referred to as "contracts" as it is the name used in the code.')),(0,a.kt)("h3",{id:"dashboard-reporter"},"Dashboard Reporter"),(0,a.kt)("p",null,"The dashboard reporter is in charge of generating the JSON panels for the dashboard service, which will make use of the endpoints in the table below to retrieve the data to be displayed."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GET"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/api/v4/dashboards/{agreementId}/{dashboardId}")),(0,a.kt)("td",{parentName:"tr",align:null},"Get the dashboard for a specific agreement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GET"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/api/v4/dashboards/evolution/{agreementId}")),(0,a.kt)("td",{parentName:"tr",align:null},"Get the evolution dashboard for a specific agreement")))),(0,a.kt)("h2",{id:"data-layer"},"Data Layer"),(0,a.kt)("p",null,"The reporter service stores the states in a time series database (",(0,a.kt)("a",{parentName:"p",href:"https://www.influxdata.com/"},"InfluxDB"),"). Influx points depends on a value and a timestamp so it can be placed in a time series chart. However, other attributes may be added to the point, providing it with additional information. The following class diagram shows the conceptual model of one influx point stored by the reporter service:"),(0,a.kt)("mermaid",{value:'---\ntitle: States Registry Class Diagram\n---\nclassDiagram\n    direction RL\n\n    %% Relations\n    Tags *-- "0..n" Scope : scope_\n    Fields *-- "0..n" Metric : metric_\n    InfluxPoint *-- "1" Tags\n    InfluxPoint *-- "1" Fields\n\n    %% Classes\n    class InfluxPoint {\n        +String: measurement\n        +DateTime timestamp\n    }\n\n    class Tags {\n        +String id\n        +String agreement\n    }\n\n    class Fields {\n        +Float guaranteeValue\n        +Boolean guaranteeResult\n    }\n\n    class Metric {\n        +Float metricValue\n    }\n\n    class Scope {\n        +Float scopeValue\n    }\n\n    note for Tags "The id matches the name of the guarantee"\n    note for InfluxPoint "The measurement is the equivalent\\nof the table name in SQL"'}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The Metric and Scope classes are actually inserted as keys inside Fields and Tags, using the prefixes ",(0,a.kt)("inlineCode",{parentName:"p"},"metric_")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"scope_")," respectively, so the keys are formatted as ",(0,a.kt)("inlineCode",{parentName:"p"},"metric_<METRIC>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"scope_<SCOPE>"),". They are shown as separate classes for clarity purposes.")))}m.isMDXComponent=!0}}]);