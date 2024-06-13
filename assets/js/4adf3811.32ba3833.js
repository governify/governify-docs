"use strict";(self.webpackChunkgovernify_docs=self.webpackChunkgovernify_docs||[]).push([[753],{3905:(e,r,t)=>{t.d(r,{Zo:()=>h,kt:()=>m});var n=t(7294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},h=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=l(t),p=s,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||i;return t?n.createElement(m,a(a({ref:r},h),{},{components:t})):n.createElement(m,a({ref:r},h))}));function m(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var i=t.length,a=new Array(i);a[0]=p;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[u]="string"==typeof e?e:s,a[1]=o;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6033:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(7462),s=(t(7294),t(3905));const i={title:"Architecture",description:"Architecture",hide_table_of_contents:!0},a="Architecture",o={unversionedId:"architecture/intro",id:"architecture/intro",title:"Architecture",description:"Architecture",source:"@site/docs/architecture/intro.md",sourceDirName:"architecture",slug:"/architecture/intro",permalink:"/architecture/intro",draft:!1,editUrl:"https://github.com/governify/governify-docs/edit/main/docs/architecture/intro.md",tags:[],version:"current",lastUpdatedBy:"JaviFdez7",lastUpdatedAt:1718272831,formattedLastUpdatedAt:"Jun 13, 2024",frontMatter:{title:"Architecture",description:"Architecture",hide_table_of_contents:!0},sidebar:"defaultSidebar",previous:{title:"Auditing/Support Teams",permalink:"/use-cases/auditing-support-teams"},next:{title:"Cache memory",permalink:"/architecture/cache-memory"}},c={},l=[{value:"General architecture",id:"general-architecture",level:2},{value:"Services",id:"services",level:2},{value:"Service Discovery &amp; Registry",id:"service-discovery--registry",level:3}],h={toc:l},u="wrapper";function d(e){let{components:r,...t}=e;return(0,s.kt)(u,(0,n.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"architecture"},"Architecture"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"As explained in previous sections, Governify could be understood as a platform that provides a set of services to manage the governance in different scenarios. In this section, the general architecture is presented, along with the main components and their interactions."),(0,s.kt)("h2",{id:"general-architecture"},"General architecture"),(0,s.kt)("p",null,"In general terms, Governify at its core is composed of three main components: Registry, Reporter and Collectors. These three components interact with each other to calculate the agreement metrics and guarantees based on the data provided by the Collectors. The Reporter is also in charge of generating the dashboards that are used to visualize the agreement metrics and guarantees. The following diagram summarizes these interactions."),(0,s.kt)("mermaid",{value:"---\ntitle: Governify General Architecture\n---\nflowchart LR\n    subgraph Governify\n        registry(Registry)\n        reporter(Reporter)\n        collectors(Collectors)\n        dashboard(Dashboards)\n    end\n    sources[External Sources]\n    client[Client]\n\n\n    reporter<--\x3eregistry\n    registry<--\x3ecollectors\n    reporter-.generate.->dashboard\n    collectors-. fetch .->sources\n    client-.view.->dashboard\n    client-.calculate agreement.->reporter\n    "}),(0,s.kt)("h2",{id:"services"},"Services"),(0,s.kt)("p",null,"Appart from the main components, Governify needs some additional services that endow the system with a high configurability and scalability. This way, Governify is able to be adapted to multiple scenarios as stated in the use cases. To do so, the infrastructures under Governify environment rely on static assets (agreement templates, interface views, dashboard templates...) that are injected in the system at runtime. "),(0,s.kt)("p",null,"To manage this configurability, Governify provides a set of services that are in charge of managing these assets and correctly register them in the system. The following diagram shows the main services that Governify provides."),(0,s.kt)("mermaid",{value:'---\ntitle: Governify Functional Architecture\n---\nflowchart LR\n    subgraph Governify\n        registry(Registry)\n        reporter(Reporter)\n        collectors(Collectors)\n        dashboard(Dashboards)\n        assets(Assets Manager)\n        render("Render (UI)")\n        director(Director)\n\n        subgraph Assets\n            direction RL\n            HTML[HTML views]\n            scripts[Director Scripts]\n            agreement[Agreement Templates]\n            dashboards[Dashboard Templates]\n        end\n    end\n    sources[External Sources]\n    client[User]\n\n\n    reporter<--\x3eregistry\n    registry<--\x3ecollectors\n    render-.GET HTML views.->assets\n    reporter-.GET dashboard templates.->assets\n    registry-.GET agreement templates.->assets\n    reporter-.generate.->dashboard\n    collectors-. fetch .->sources\n    assets-.manage.->Assets\n\n    client-.access.->render\n    client-.view.->dashboard\n    render-.calculate agreement.->reporter\n    director-.calculate agreement.->reporter\n    director--\x3edirector'}),(0,s.kt)("p",null,"Depending on the specific infrastructure, new services may be included to manage scopes, like the ",(0,s.kt)("a",{parentName:"p",href:"/development/services/scopes-manager"},"Scope Manager")," for ",(0,s.kt)("a",{parentName:"p",href:"https://docs.bluejay.governify.io"},"Bluejay Infrastructure"),", or to gather data from different sources such as other systems, which is the case of Prometheus in ",(0,s.kt)("a",{parentName:"p",href:"https://docs.falcon.governify.io"},"Falcon Infrastructure"),"."),(0,s.kt)("h3",{id:"service-discovery--registry"},"Service Discovery & Registry"),(0,s.kt)("p",null,"By design, Governify relies on a ",(0,s.kt)("a",{parentName:"p",href:"/development/tooling/commons-library"},"Common Library")," which has its particular implementation of the ",(0,s.kt)("a",{parentName:"p",href:"https://microservices.io/patterns/service-registry.html"},"Service Registry Pattern")," to provide a ",(0,s.kt)("a",{parentName:"p",href:"https://microservices.io/patterns/server-side-discovery.html"},"server-side service discovery mechanism"),". This way, Governify services are able to register themselves in the system and be discovered by other services. To do so, every Service integrate the commons library which will request the ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:3000/development/services/assets-manager#infrastructureyaml"},"infrastructure file")," upon startup, so each service knows where the rest of services within the infrastructure are located."),(0,s.kt)("mermaid",{value:"---\ntitle: Governify Services Startup Procedure\n---\nflowchart RL\n    subgraph Service1[Governify Service A]\n        commons1(Commons Library)\n    end\n\n    subgraph Service2[Governify Service B]\n        commons2(Commons Library)\n    end\n\n    commons1-.request infrastructure file.->assets(Assets Manager)\n    commons2-.request infrastructure file.->assets(Assets Manager)\n\n    Service1-.discover infrastructure.Service2.->Service2"}),(0,s.kt)("p",null,"Note that this service resgitry pattern is not a ",(0,s.kt)("a",{parentName:"p",href:"https://microservices.io/patterns/self-registration.html"},"self-registration")," nor ",(0,s.kt)("a",{parentName:"p",href:"https://microservices.io/patterns/3rd-party-registration.html"},"third-party")," mechanism since the infrastructure file must be preconfigured by an administrator, meaning all services must be known beforehand. The ",(0,s.kt)("a",{parentName:"p",href:"/development/services/assets-manager"},"Assets Manager")," service could be considered the service registry in this context, since is the one in charge of managing and serving the infrastructure file, with the difference that the rest of services do not register themselves in the system, but they request the already preconfigured infrastructure file for service discovery."))}d.isMDXComponent=!0}}]);