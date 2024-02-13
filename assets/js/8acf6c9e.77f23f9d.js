"use strict";(self.webpackChunkgovernify_docs=self.webpackChunkgovernify_docs||[]).push([[574],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=d(a),c=r,u=p["".concat(s,".").concat(c)]||p[c]||g[c]||i;return a?n.createElement(u,l(l({ref:t},m),{},{components:a})):n.createElement(u,l({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5333:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={title:"Registry",description:"Registry",hide_table_of_contents:!1,sidebar_position:1},l="Registry",o={unversionedId:"development/services/registry",id:"development/services/registry",title:"Registry",description:"Registry",source:"@site/docs/development/services/registry.md",sourceDirName:"development/services",slug:"/development/services/registry",permalink:"/development/services/registry",draft:!1,editUrl:"https://github.com/governify/governify-docs/edit/main/docs/development/services/registry.md",tags:[],version:"current",lastUpdatedBy:"Governify Auditor",lastUpdatedAt:1707789312,formattedLastUpdatedAt:"Feb 13, 2024",sidebarPosition:1,frontMatter:{title:"Registry",description:"Registry",hide_table_of_contents:!1,sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"System performance",permalink:"/architecture/system-performance"},next:{title:"Reporter",permalink:"/development/services/reporter"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"API",id:"api",level:2},{value:"Agreement Registry",id:"agreement-registry",level:3},{value:"State Registry",id:"state-registry",level:3},{value:"Data Layer",id:"data-layer",level:2}],m={toc:d},p="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"registry"},"Registry"),(0,r.kt)("hr",null),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The code for this service is publicly available at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/governify/registry"},"GitHub"))),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Governify Registry is the service in charge of storing and managing the information related to the Service Level Agreements (SLAs) registered in the platform. The information is stored in two collections in a MongoDB database, as explained in the ",(0,r.kt)("a",{parentName:"p",href:"#data-layer"},"Data Layer")," section. The registry service manage the states which come as a result of the metric and guarantee computation, and the agreements themselves."),(0,r.kt)("mermaid",{value:"---\ntitle: Registry Sequence Diagram\n---\nsequenceDiagram\n    participant Reporter\n    participant Registry\n    participant MongoDB\n    participant Collector\n\n    Reporter ->> Registry: Get Agreement\n    Registry ->> MongoDB: Get Agreement from DB\n    MongoDB --\x3e> Registry: Agreement\n    Registry --\x3e> Reporter: Agreement\n\n    loop For each guarantee\n        Reporter ->> Registry: Calculate guarantee state\n        Registry ->> Collector: Calculate guarantee state\n        loop For each metric in guarantee\n            Collector ->> Collector: Fetch data and Calculate Guarantee\n            Note right of Collector: See Collectors docs\n        end\n\n        Collector --\x3e> Registry: Guarantee value and evidences\n        Registry ->> MongoDB: Store state\n        MongoDB --\x3e> Registry: State\n\n        Registry --\x3e> Reporter: Guarantee value and evidences\n    end"}),(0,r.kt)("p",null,"The above diagram shows a typical interactions between the services surrounding registry. As explained before, registry manages not only the agreements but also the states, result of metric and guarantee computations. The reporter service is the one who requests registry to calculate the states, then this call is directy passed to the collector service, which gathers the data and computes the guarantee value. Once the value is obtained, the state is stored in the database and returned to the reporter to build the dashboards afterwards."),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"The Registry service counts with a REST API to interact with the service. The API is documented using OpenAPI and the documentation is exposed through the SwaggerUI at ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v6/docs")," once deployed. The API is divided in two main sections, the Agreement Registry and the State Registry."),(0,r.kt)("h3",{id:"agreement-registry"},"Agreement Registry"),(0,r.kt)("p",null,"The agreement registry is the part of the API in charge of managing the agreements. The following table shows the endpoints available for this section."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v6/agreements")),(0,r.kt)("td",{parentName:"tr",align:null},"Get all agreements")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v6/agreements/{agreementId}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get agreement by id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v6/agreements")),(0,r.kt)("td",{parentName:"tr",align:null},"Create agreement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v6/agreements")),(0,r.kt)("td",{parentName:"tr",align:null},"Delete all agreements")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v6/agreements/{agreementId}")),(0,r.kt)("td",{parentName:"tr",align:null},"Delete agreement")))),(0,r.kt)("h3",{id:"state-registry"},"State Registry"),(0,r.kt)("p",null,"The state registry is the part of the API in charge of managing the states generated by the metric and guarantee computation. The following table shows the most relevant endpoints available for this section."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v6/states")),(0,r.kt)("td",{parentName:"tr",align:null},"Get all states")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v6/states")),(0,r.kt)("td",{parentName:"tr",align:null},"Delete all states")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v6/states/{agreementId}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get all states for an agreement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v6/states/{agreementId}/guarantees")),(0,r.kt)("td",{parentName:"tr",align:null},"Get all guarantee states for an agreement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v6/states/{agreementId}/guarantees/{guaranteeId}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get guarantee state for an agreement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v6/states/{agreementId}/guarantees/{guaranteeId}/overrides")),(0,r.kt)("td",{parentName:"tr",align:null},"Create guarantee state for an agreement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v6/states/{agreementId}/guarantees/{guaranteeId}/overrides")),(0,r.kt)("td",{parentName:"tr",align:null},"Delete guarantee state for an agreement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v6/states/{agreementId}/netrics")),(0,r.kt)("td",{parentName:"tr",align:null},"Get all metric states for an agreement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v6/states/{agreementId}/metrics/{metricId}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get metric state for an agreement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v6/states/{agreementId}/metrics/{metricId}")),(0,r.kt)("td",{parentName:"tr",align:null},"Create metric state for an agreement")))),(0,r.kt)("h2",{id:"data-layer"},"Data Layer"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The Registry data layer is implemented using MongoDB, which is a NoSQL database. The class diagram(s) below show the structure of the data on a conceptual basis, the actual data is stored in JSON format, and thus, its structure is not fixed.")),(0,r.kt)("p",null,"The data layer is composed by two collections in a MongoDB database. The first one is the ",(0,r.kt)("inlineCode",{parentName:"p"},"agreements")," collection, which stores the agreements themselves according to ",(0,r.kt)("a",{parentName:"p",href:"/about/iAgree"},"iAgree 5.2 model"),". The second one is the ",(0,r.kt)("inlineCode",{parentName:"p"},"states")," collection, which stores the states generated by the metric and guarantee computation. The following diagram shows the structure of the states collection."),(0,r.kt)("mermaid",{value:'---\ntitle: States Registry Class Diagram\n---\nclassDiagram\n    direction LR\n\n    %% Relations\n    Records <|-- MetricRecords\n    Records <|-- GuaranteeRecords\n    Records "1" -- "0..n" Records : evidence\n    GuaranteeRecords "1..n" ..> MetricRecords : metrics\n    State *-- "0..n" Records : records\n    State *-- "0..1" Window\n    State *-- "1" Period\n\n    %% Classes\n    class State{\n        -ObjectId _id\n        +String id\n        +String agreementId\n        +StateType stateType\n    }\n\n    class StateType{\n        <<enumeration>>\n        METRICS\n        GUARANTEES\n    }\n\n    class Records {\n        <<interface>>\n        +DateTime time\n    }\n\n    class MetricRecords {\n        +float value\n    }\n\n    class GuaranteeRecords {\n        +boolean value\n    }\n\n    class Period {\n        +DateTime from\n        +DateTime to\n    }\n\n    class Window {\n        +String type\n        +String period\n        +DateTime initial\n        +DateTime from\n        +DateTime end\n        +String timeZone\n    }\n\n    note for State "Window is only available\\nwhen StateType is METRICS"\n    note for State "the id property matches\\nthe name ofthe metric or guarantee\\nin the agreement"'}))}g.isMDXComponent=!0}}]);