"use strict";(self.webpackChunkgovernify_docs=self.webpackChunkgovernify_docs||[]).push([[261],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),l=c(r),p=i,g=l["".concat(u,".").concat(p)]||l[p]||f[p]||s;return r?n.createElement(g,a(a({ref:t},d),{},{components:r})):n.createElement(g,a({ref:t},d))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[l]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9302:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const s={title:"Auditing Infrastructures",description:"Auditing Infrastructures",hide_table_of_contents:!0,sidebar_position:2},a="Auditing Infrastructures",o={unversionedId:"use-cases/auditing-infrastructures",id:"use-cases/auditing-infrastructures",title:"Auditing Infrastructures",description:"Auditing Infrastructures",source:"@site/docs/use-cases/auditing-infrastructures.md",sourceDirName:"use-cases",slug:"/use-cases/auditing-infrastructures",permalink:"/use-cases/auditing-infrastructures",draft:!1,editUrl:"https://github.com/governify/governify-docs/edit/main/docs/use-cases/auditing-infrastructures.md",tags:[],version:"current",lastUpdatedBy:"JaviFdez7",lastUpdatedAt:1721899056,formattedLastUpdatedAt:"Jul 25, 2024",sidebarPosition:2,frontMatter:{title:"Auditing Infrastructures",description:"Auditing Infrastructures",hide_table_of_contents:!0,sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Auditing Agile Development",permalink:"/use-cases/auditing-agile"},next:{title:"Auditing APIs",permalink:"/use-cases/auditing-APIs"}},u={},c=[],d={toc:c},l="wrapper";function f(e){let{components:t,...s}=e;return(0,i.kt)(l,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"auditing-infrastructures"},"Auditing Infrastructures"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Infrastructure monitoring is essential when it comes to cloud based software, platforms and infrastructures. Any software providing service to end users should be regulated by an SLA that defines the metrics and guarantees the service is committed to meet, and here is where Governify takes action."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Governify usage for auditing infrastructures",src:r(2090).Z,width:"990",height:"653"})),(0,i.kt)("p",null,"As shown in the figure, Governify provides support to distributed & non-distributed cloud-based applications through Prometheus. It collects the exporter metrics through Prometheus scraping and then process them to calculate guarantees.  Based on those elements it provide strategic dashboards to assess if the SLAs are meet for each of the different Infrastructures."))}f.isMDXComponent=!0},2090:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gov-auditing-infrastructure-overview-0e86fe1aa59f8b24b9dacdd496ec202d.png"}}]);