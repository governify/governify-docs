"use strict";(self.webpackChunkgovernify_docs=self.webpackChunkgovernify_docs||[]).push([[216],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const i={title:"GitFlow",sidebar_position:1,description:"CI/CD Workflow",hide_table_of_contents:!0},a="GitFlow",c={unversionedId:"development/contributing/gitflow",id:"development/contributing/gitflow",title:"GitFlow",description:"CI/CD Workflow",source:"@site/docs/development/contributing/gitflow.md",sourceDirName:"development/contributing",slug:"/development/contributing/gitflow",permalink:"/development/contributing/gitflow",draft:!1,editUrl:"https://github.com/governify/governify-docs/edit/main/docs/development/contributing/gitflow.md",tags:[],version:"current",lastUpdatedBy:"JaviFdez7",lastUpdatedAt:1721001957,formattedLastUpdatedAt:"Jul 15, 2024",sidebarPosition:1,frontMatter:{title:"GitFlow",sidebar_position:1,description:"CI/CD Workflow",hide_table_of_contents:!0},sidebar:"defaultSidebar",previous:{title:"Contributing to Documentation",permalink:"/development/contributing/contributing-to-docs"},next:{title:"CI/CD Workflow",permalink:"/development/contributing/ci-cd"}},l={},s=[{value:"Commit Convention",id:"commit-convention",level:2}],p={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gitflow"},"GitFlow"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"When developing Governify services, we use an adapted version of the ",(0,r.kt)("a",{parentName:"p",href:"https://nvie.com/posts/a-successful-git-branching-model/"},"GitFlow")," branching model. This model is based on the use of two main branches: ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"develop"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch is used to store the stable versions of the service, while the ",(0,r.kt)("inlineCode",{parentName:"p"},"develop")," branch is used to store the latest version of the service, which is not necessarily stable."),(0,r.kt)("mermaid",{value:'gitGraph\n   commit tag: "v1.0.0"\n   branch develop\n   checkout develop\n   commit\n   commit\n   checkout main\n   merge develop tag: "v1.0.1"\n   checkout develop\n   commit\n   commit'}),(0,r.kt)("p",null,"Other branches may be created to develop new features or fix bugs. These branches are created from the ",(0,r.kt)("inlineCode",{parentName:"p"},"develop")," branch and are merged back into it once the feature or bug fix is completed. There is not a convention of names for these branches, but it is recommended to use ",(0,r.kt)("inlineCode",{parentName:"p"},"feature/<feature-name>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"bugfix/<bug-name>"),"."),(0,r.kt)("h2",{id:"commit-convention"},"Commit Convention"),(0,r.kt)("p",null,"When committing changes to the repository, it is recommended to follow the ",(0,r.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits")," convention. This convention allows to generate changelogs automatically and to determine the version of the service based on the changes introduced in the commit."))}d.isMDXComponent=!0}}]);