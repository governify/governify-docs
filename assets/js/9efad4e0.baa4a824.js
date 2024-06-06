"use strict";(self.webpackChunkgovernify_docs=self.webpackChunkgovernify_docs||[]).push([[176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,g=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?i.createElement(g,a(a({ref:t},p),{},{components:n})):i.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},28:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const o={title:"Auditing Agile Development",description:"Auditing Agile Development",hide_table_of_contents:!0,sidebar_position:1},a="Auditing Agile Development",s={unversionedId:"use-cases/auditing-agile",id:"use-cases/auditing-agile",title:"Auditing Agile Development",description:"Auditing Agile Development",source:"@site/docs/use-cases/auditing-agile.md",sourceDirName:"use-cases",slug:"/use-cases/auditing-agile",permalink:"/use-cases/auditing-agile",draft:!1,editUrl:"https://github.com/governify/governify-docs/edit/main/docs/use-cases/auditing-agile.md",tags:[],version:"current",lastUpdatedBy:"JaviFdez7",lastUpdatedAt:1717658745,formattedLastUpdatedAt:"Jun 6, 2024",sidebarPosition:1,frontMatter:{title:"Auditing Agile Development",description:"Auditing Agile Development",hide_table_of_contents:!0,sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/"},next:{title:"Auditing Infrastructures",permalink:"/use-cases/auditing-infrastructures"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"auditing-agile-development"},"Auditing Agile Development"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Agile software development is becoming a prominent philosophy amongst the software industry. This philosophy involves the coordination of a team to follow a given workflow that is usually supported by multiple tools and grounded on specific good practices. "),(0,r.kt)("p",null,"A typical workflow is shown in the following figure where different teams contribute individually to a big repository, containing the actual product with the integrated features."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Governify for Support teams Overview",src:n(2565).Z,width:"1050",height:"719"})," "),(0,r.kt)("p",null,"In this particular set of tools, Pivotal Tracker allows users to manage tasks and GitHub can be used to manage the code using git control version system; Travis CI helps running the tests or lint tools to check that everything is correct before accepting any PR; and Heroku can also be used to automatically deploy when pushing to certain branches."),(0,r.kt)("p",null,"In spite there exists multiple tools to gather metrics from specific tools, it could be a challenge to analyze if a given teams is fwollowing the given process approprietly since it involve the correlation of actions in multiple tools. As an example, in our scenario the ",(0,r.kt)("em",{parentName:"p"},"Branch creation")," action in Github should be correlated with the ",(0,r.kt)("em",{parentName:"p"},"Start story")," action in pivotal. "),(0,r.kt)("p",null,"In this context, Governify can help to build audit platforms for these agile teams by defining the Team Practice Agreement that will define in an explicit way a set of goals that assess if the workflow is being follwod properly."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Governify for Support teams Overview",src:n(4646).Z,width:"1050",height:"735"})," "),(0,r.kt)("p",null,"As shown in the figure, Governify gather metrics from the different tools involved in the development process in order to create customized visual dashboards that help the team to  audit the goals defined in the Team Practice Agreement. This capabilities ",(0,r.kt)("a",{parentName:"p",href:"http://doi.org/10.1145/3338906.3341181"},"has been studied in an academic environment")," showing a possitive outcome in the team performance thanks to a specific infrastructure formed by different services within the Governify ecosystem, which has now evolved into ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bluejay.governify.io/"},"Bluejay Infrastructure"),"."))}d.isMDXComponent=!0},2565:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/goldenflow-e073d78fbc41a7d66c1ec69bb5a67b68.png"},4646:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/gov-agileteams-overview-58cfb86228f25234be967b3e9f0f8339.png"}}]);