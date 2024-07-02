"use strict";(self.webpackChunkgovernify_docs=self.webpackChunkgovernify_docs||[]).push([[244],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Scopes Manager",description:"Scopes Manager",hide_table_of_contents:!1,sidebar_position:5},s="Scopes Manager",o={unversionedId:"development/services/scopes-manager",id:"development/services/scopes-manager",title:"Scopes Manager",description:"Scopes Manager",source:"@site/docs/development/services/scopes-manager.md",sourceDirName:"development/services",slug:"/development/services/scopes-manager",permalink:"/development/services/scopes-manager",draft:!1,editUrl:"https://github.com/governify/governify-docs/edit/main/docs/development/services/scopes-manager.md",tags:[],version:"current",lastUpdatedBy:"Rafael Fresno",lastUpdatedAt:1719909603,formattedLastUpdatedAt:"Jul 2, 2024",sidebarPosition:5,frontMatter:{title:"Scopes Manager",description:"Scopes Manager",hide_table_of_contents:!1,sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"Assets Manager",permalink:"/development/services/assets-manager"},next:{title:"Director",permalink:"/development/services/director"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Info.yml",id:"infoyml",level:3},{value:"Scopes File",id:"scopes-file",level:3},{value:"Class",id:"class",level:4},{value:"Identities",id:"identities",level:4},{value:"Credentials",id:"credentials",level:4},{value:"Projects",id:"projects",level:4},{value:"API",id:"api",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scopes-manager"},"Scopes Manager"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The scope manager is a service that allows to manage different scopes when auditing Agile teams. It is mainly used in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bluejay.governify.io"},"Bluejay Infrastructure")," due to the necessity of managing agreements for different teams within a same class or organization. "),(0,r.kt)("p",null,"When using the scopes manager, an agreement template is created for one class or organization. Then, different teams within that class or organization register towards the scopes manager to get their own agreement based on the template. This interaction is shown in the following diagram:"),(0,r.kt)("mermaid",{value:"---\ntitle: Scopes Manager Sequence\n---\nsequenceDiagram\n    actor T1 as Team 1\n    participant join as Join Service\n    participant scopes as Scopes Manager\n    participant registry as Registry\n    participant assets as Assets Manager\n\n    T1->>join: Join Class\n    join->>scopes: Add Team\n    scopes--\x3e>join: Scope added\n    join->>registry: Create Agreement\n    registry->>assets: Get Agreement Template\n    assets--\x3e>registry: Agreement Template\n    registry--\x3e>join: Agreement Created\n    join--\x3e>T1: Register Successful"}),(0,r.kt)("p",null,"The join service is a component that helps registering the team and creating the agreement. All requests could be made manually using a REST client. Agreements are not automatically created upon registration since some team may want to be registered but do not be audited until a certain moment, thus, the agreement is created when the team is ready to be audited."),(0,r.kt)("h3",{id:"infoyml"},"Info.yml"),(0,r.kt)("p",null,"Scopes are typically generated based on a GitHub project. To do that, there must exist an ",(0,r.kt)("inlineCode",{parentName:"p"},"info.yml")," file in the root of the GitHub repository. This file contains the information needed to generate the scopes, so the scopes manager can validate it and generate the scopes through its API. The file is structured as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"project:\n  name: 'string'\n  owner: 'string'\n  teamId: 'string'\n  identities:\n    heroku: 'url'\n    pivotal: 'url'\n  members:\n    member:\n      name: 'string'\n      surname: 'string' \n      githubUsername: 'string'\n")),(0,r.kt)("h3",{id:"scopes-file"},"Scopes File"),(0,r.kt)("p",null,"The scopes file is stored in the private directory of the ",(0,r.kt)("a",{parentName:"p",href:"/development/services/assets-manager"},"Assets Manager service"),". It is a JSON file that contains the different scopes that can be used in the agreements. The file is structured as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "<scope-name>": [{\n        "classId": "class01",\n        "identities": [],\n        "credentials": [],\n        "projects": [{\n            "name": "projectName01",\n            "projectId": "project01",\n            "owner": "owner01",\n            "identities": [{\n                "source": "github",\n                "repository": "repo01",\n                "repoOwner": "owner01"\n            }],\n            "credentials": [{\n                "source": "github",\n                "apiKey": "githubToken"\n            }],\n            "members": [{\n                "memberId": 1,\n                "identities": [{\n                    "source": "github",\n                    "username": "githubName01"\n                }],\n                "credentials": []\n            }]\n        }]\n    }]\n}\n')),(0,r.kt)("h4",{id:"class"},"Class"),(0,r.kt)("p",null,"A class is a group of teams that share the same agreement template. The class is identified by its ",(0,r.kt)("inlineCode",{parentName:"p"},"classId"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"identities"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"credentials")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"projects")," fields are used to define the scopes for the class."),(0,r.kt)("h4",{id:"identities"},"Identities"),(0,r.kt)("p",null,"The identities define the scope of each project or the class. Thus, Identities can be defined at class level or project level. The concrete definition of an identity depends on its ",(0,r.kt)("inlineCode",{parentName:"p"},"source"),", since it may require more fields. The following table shows the different sources and the fields required:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Source"),(0,r.kt)("th",{parentName:"tr",align:null},"Fields"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"github"),(0,r.kt)("td",{parentName:"tr",align:null},"repository, repoOwner"),(0,r.kt)("td",{parentName:"tr",align:null},"The repository of the project and the owner of the repository.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pivotal"),(0,r.kt)("td",{parentName:"tr",align:null},"projectId"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the project.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"heroku"),(0,r.kt)("td",{parentName:"tr",align:null},"projectId"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"travis"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"No fields required.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"codeclimate"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"No fields required.")))),(0,r.kt)("h4",{id:"credentials"},"Credentials"),(0,r.kt)("p",null,"The credentials are needed in case the identity requires authentication. The credentials are defined in the same way as the identities, the required fields to define credentials are ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"apikey.")),(0,r.kt)("h4",{id:"projects"},"Projects"),(0,r.kt)("p",null,"Projects are a lower level scope. They are identified through a ",(0,r.kt)("inlineCode",{parentName:"p"},"projectId")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"owner")," field is used to define the owner of the project. The ",(0,r.kt)("inlineCode",{parentName:"p"},"identities")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"credentials")," fields are used to define the scope of the project. The ",(0,r.kt)("inlineCode",{parentName:"p"},"members")," field is used to define the members of the project. The members are defined in the same way as the projects, but they are identified by a ",(0,r.kt)("inlineCode",{parentName:"p"},"memberId")," instead of a ",(0,r.kt)("inlineCode",{parentName:"p"},"projectId"),"."),(0,r.kt)("p",null,"Members also contain identities which identify their username or account in the different sources. Credentials may be defined at member level, but since they all belong to the same team, they are usually defined at project level."),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"The Scopes Manager service exposes a REST API that allows to manage the scopes file. The following table shows the different endpoints:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v1/scopes/<scope-name>/courses")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets all the classes or organizations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v1/scopes/<scope-name>/{courseId}")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the class or organization with the given id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v1/scopes/<scope-name>/{courseId}/projects")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets all the projects of the class or organization with the given id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v1/scopes/<scope-name>/{courseId}/{projectId}")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the project with the given id of the class or organization with the given id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v1/scopes/<scope-name>/{courseId}/{projectId}/members")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets all the members of the project with the given id of the class or organization with the given id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v1/scopes/<scope-name>/{courseId}/{projectId}/{memberId}")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the member with the given id of the project with the given id of the class or organization with the given id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v1/scopes/<scope-name>/generate")),(0,r.kt)("td",{parentName:"tr",align:null},"Generate scopes from a given GitHub list of projects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/v1/scopes/<scope-name>/check")),(0,r.kt)("td",{parentName:"tr",align:null},"Check the info.yaml from a given GitHub list of projects")))))}m.isMDXComponent=!0}}]);