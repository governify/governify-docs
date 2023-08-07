"use strict";(self.webpackChunkgovernify_docs=self.webpackChunkgovernify_docs||[]).push([[327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=u(n),f=r,g=l["".concat(c,".").concat(f)]||l[f]||d[f]||a;return n?i.createElement(g,s(s({ref:t},p),{},{components:n})):i.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[l]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const a={title:"Auditing APIs",description:"Auditing APIs",hide_table_of_contents:!0,sidebar_position:3},s="Auditing APIs",o={unversionedId:"use-cases/auditing-APIs",id:"use-cases/auditing-APIs",title:"Auditing APIs",description:"Auditing APIs",source:"@site/docs/use-cases/auditing-APIs.md",sourceDirName:"use-cases",slug:"/use-cases/auditing-APIs",permalink:"/use-cases/auditing-APIs",draft:!1,editUrl:"https://github.com/governify/governify-docs/edit/main/docs/use-cases/auditing-APIs.md",tags:[],version:"current",lastUpdatedBy:"alesancor1",lastUpdatedAt:1691448121,formattedLastUpdatedAt:"Aug 7, 2023",sidebarPosition:3,frontMatter:{title:"Auditing APIs",description:"Auditing APIs",hide_table_of_contents:!0,sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Auditing Infrastructures",permalink:"/use-cases/auditing-infrastructures"},next:{title:"Auditing/Support Teams",permalink:"/use-cases/auditing-support-teams"}},c={},u=[],p={toc:u},l="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(l,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"auditing-apis"},"Auditing APIs"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Nowadays, APIs are considered new business products and an increasing number of organizations are publicly exposing their APIs as a way to create new business opportunities in this so-called API Economy. In such a context, defining business models and pricing plans with API limitations, such as quotas or rates, are becoming crucial activities that typically conform a Customer Agreement that include specific expectation over the Service Level that will be provided. "),(0,r.kt)("p",null,"In this context, organizations face the challenge to assess whether a given API is behaving as expected in order avoid a potential violation of the Service Level stablished with their users. "),(0,r.kt)("p",null,"From an implementation standpoint, in the current technological landscape, RESTFul pradaigm has become the norm to design the APIs and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification"},"Open API Specification")," (OAS), the ",(0,r.kt)("em",{parentName:"p"},"de facto")," standard in order to describe them. "),(0,r.kt)("p",null,"Governify allows the creation of governace platforms to monitor and audit SLAs for APIs by means of different components that can be integrated in multiple scenarios."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Governify for Support teams Overview",src:n(9359).Z,width:"1050",height:"748"})," "),(0,r.kt)("p",null,"As shown in the figure, Governify provides support to API governance in two different directions: (i) to integrate ",(0,r.kt)("a",{parentName:"p",href:"https://sla4oai.specs.governify.io/"},"SLA4OAI"),", an extension for OAS to design SLAs allowing the definition of quotas or rates; and (ii) to integrate with custom tests or existing monitoring infrastructures based on ElasticSearch to gather the real-time metrics on the usage of the APIs. Based on those elements it provide strategic dashboards to assess if the SLAs are meet for each of the different APIs."))}d.isMDXComponent=!0},9359:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/gov-apis-overview-f88597d66e0d0af46c5458665c9ffff9.png"}}]);