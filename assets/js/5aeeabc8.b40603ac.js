"use strict";(self.webpackChunkgovernify_docs=self.webpackChunkgovernify_docs||[]).push([[491],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},v=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=l(n),v=o,f=u["".concat(c,".").concat(v)]||u[v]||p[v]||r;return n?i.createElement(f,s(s({ref:t},d),{},{components:n})):i.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=v;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<r;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}v.displayName="MDXCreateElement"},987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(7462),o=(n(7294),n(3905));const r={title:"Overview",description:"Development Section Overview",hide_table_of_contents:!1,sidebar_position:1},s="Overview",a={unversionedId:"development/overview",id:"development/overview",title:"Overview",description:"Development Section Overview",source:"@site/docs/development/overview.md",sourceDirName:"development",slug:"/development/overview",permalink:"/development/overview",draft:!1,editUrl:"https://github.com/governify/governify-docs/edit/main/docs/development/overview.md",tags:[],version:"current",lastUpdatedBy:"JaviFdez7",lastUpdatedAt:1721001957,formattedLastUpdatedAt:"Jul 15, 2024",sidebarPosition:1,frontMatter:{title:"Overview",description:"Development Section Overview",hide_table_of_contents:!1,sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"System performance",permalink:"/architecture/system-performance"},next:{title:"Registry",permalink:"/development/services/registry"}},c={},l=[{value:"Services",id:"services",level:2},{value:"Tooling",id:"tooling",level:2},{value:"Extending Governify",id:"extending-governify",level:2},{value:"Contributing",id:"contributing",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The development section of Governify focuses on providing detailed information about the various services and tools that make up the platform, extending its functionalities, and contributing to the project."),(0,o.kt)("p",null,'To develop effectively, it is recommended to do so in the context of a specific use case, such as "Bluejay", which has specific development ',(0,o.kt)("a",{parentName:"p",href:"https://docs.bluejay.governify.io"},"documentation"),"."),(0,o.kt)("h2",{id:"services"},"Services"),(0,o.kt)("p",null,"Governify comprises various microservices, each responsible for specific tasks within the system. These microservices work together to ensure the platform functions smoothly and efficiently. This section contains detailed information about each microservice, including its purpose, architecture, endpoints, and configuration."),(0,o.kt)("h2",{id:"tooling"},"Tooling"),(0,o.kt)("p",null,"The tooling section covers essential tools and libraries used in the development and maintenance of Governify's microservices. One of the key components is the Governify Commons Library, which provides common functionalities like infrastructure URL management, an HTTP client, a configurable logger, and utility functions used across multiple microservices. Additionally, this section explains how to modify logging levels for better debugging and monitoring of the infrastructure."),(0,o.kt)("h2",{id:"extending-governify"},"Extending Governify"),(0,o.kt)("p",null,"You can extend Governify by implementing new metrics, sources, and custom tasks. Custom task allows the user to define a new task that can be executed by Governify, modifying the platform's behavior to suit specific requirements. This section provides detailed information on how to create and integrate custom tasks into Governify."),(0,o.kt)("h2",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"The contributing section details the CI/CD workflow using GitHub Actions, which includes pipelines for testing, linting, building Docker images, and running end-to-end tests. Additionally, it covers the process for contributing to documentation, from accessing and editing online docs to submitting pull requests. Governify employs an adapted GitFlow branching model and Conventional Commits to ensure organized and efficient development."))}p.isMDXComponent=!0}}]);