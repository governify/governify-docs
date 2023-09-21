"use strict";(self.webpackChunkgovernify_docs=self.webpackChunkgovernify_docs||[]).push([[103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"Collector Events",description:"Event Collector",hide_table_of_contents:!1,sidebar_position:1},o="Collector Events",s={unversionedId:"development/services/collectors/collector-events",id:"development/services/collectors/collector-events",title:"Collector Events",description:"Event Collector",source:"@site/docs/development/services/collectors/collector-events.md",sourceDirName:"development/services/collectors",slug:"/development/services/collectors/collector-events",permalink:"/development/services/collectors/collector-events",draft:!1,editUrl:"https://github.com/governify/governify-docs/edit/main/docs/development/services/collectors/collector-events.md",tags:[],version:"current",lastUpdatedBy:"Manuel Otero Barbas\xe1n",lastUpdatedAt:1695296677,formattedLastUpdatedAt:"Sep 21, 2023",sidebarPosition:1,frontMatter:{title:"Collector Events",description:"Event Collector",hide_table_of_contents:!1,sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Collectors",permalink:"/development/services/collectors/intro"},next:{title:"Computer PPINOT",permalink:"/development/services/collectors/computer-PPINOT"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Available sources",id:"available-sources",level:3},{value:"Metrics Library",id:"metrics-library",level:3},{value:"API",id:"api",level:2},{value:"POST-GET Asyncronous API",id:"post-get-asyncronous-api",level:3},{value:"Endpoints",id:"endpoints",level:3},{value:"Advanced",id:"advanced",level:2},{value:"Collector Metric-Config Example",id:"collector-metric-config-example",level:3},{value:"GraphQL custom query",id:"graphql-custom-query",level:3},{value:"Steps",id:"steps",level:3},{value:"Step type: queryGetObject and queryGetObjects",id:"step-type-querygetobject-and-querygetobjects",level:4},{value:"Step type: objectGetSubObject and objectGetSubObjects",id:"step-type-objectgetsubobject-and-objectgetsubobjects",level:4},{value:"Step type: objectsFilterObject and objectsFilterObjects",id:"step-type-objectsfilterobject-and-objectsfilterobjects",level:4},{value:"Step type: runScript",id:"step-type-runscript",level:4}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"collector-events"},"Collector Events"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"As mentioned in previous section, the Collector Events, like any other collector service, is in charge of gathering the required data to compute the metrics and guarantees defined in the SLAs. The Collector Events service is the one who actually compute the values and evidences for the guarantees, and then send them to the Registry service to be stored."),(0,a.kt)("mermaid",{value:"flowchart\n    subgraph Governify Platform\n        CollectorEvents(Collector Events)\n        Registry(Registry)\n        Registry --\x3e CollectorEvents\n    end\n\n\n    subgraph External Sources\n        direction RL\n        CodeClimate(CodeClimate)\n        GitHub(GitHub)\n        GitLab(GitLab)\n        Heroku(Heroku)\n        PivotalTracker(PivotalTracker)\n        Jira(Jira)\n        Redmine(Redmine)\n        TravisCI(TravisCI)\n    end\n\n    CollectorEvents --\x3e CodeClimate\n    CollectorEvents --\x3e GitHub\n    CollectorEvents --\x3e GitLab\n    CollectorEvents --\x3e Heroku\n    CollectorEvents --\x3e PivotalTracker\n    CollectorEvents --\x3e Jira\n    CollectorEvents --\x3e Redmine\n    CollectorEvents --\x3e TravisCI"}),(0,a.kt)("h3",{id:"available-sources"},"Available sources"),(0,a.kt)("p",null,"The Events Collector can fetch data from multiple sources' REST and GraphQL APIs. Currently, the available sources are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CodeClimate:")," Get the code review metrics for a repository from CodeClimate API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GitHub REST API:")," Collect events from GitHub (issues, pull requests, comments...) from GitHub REST API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GitHub GraphQL API:")," Collect GitHub events through its GraphQL API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GitLab:")," Gather GitLab events (issues, merge requests, comments...) from GitLab API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Heroku:")," Get information about Heroku releases and builds from Heroku API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pivotal Tracker:")," Collect Pivotal Tracker events (stories, comments...) from Pivotal Tracker API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Jira:")," Gather Jira events (issues, comments...) from Jira API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Redmine:")," Get Redmine events (issues, comments...) from Redmine API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Travis CI:")," Collect Travis CI workflow events from Travis CI API.")),(0,a.kt)("h3",{id:"metrics-library"},"Metrics Library"),(0,a.kt)("p",null,"You can check the available metrics in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/governify/governify-examples/tree/master/metrics/event-collector"},"Metrics Library")," under the examples repository."),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,"As of any service within the Governify environment, the Events Collector service exposes an API to interact with it. This API is used by the Registry service to request the data needed to compute the metrics and guarantees."),(0,a.kt)("h3",{id:"post-get-asyncronous-api"},"POST-GET Asyncronous API"),(0,a.kt)("p",null,"Due to computations taking long time, the Events Collector API is asyncronous. This API uses a POST-GET policy. This policy implies that a POST request is made in the first place to start a computation, the API will respond with a computation Id which is then used to retrieve the results with a GET request. The following state diagram illustrates this behaviour:"),(0,a.kt)("mermaid",{value:"---\ntitle: POST-GETv1 Policy\n---\nstateDiagram-v2\n    direction LR\n    [*] --\x3e IN_PROGRESS : POST\n    state if_state <<choice>>\n    IN_PROGRESS --\x3e if_state: GET\n    if_state --\x3e IN_PROGRESS : [running]\n    if_state --\x3e COMPLETED : [success]\n    if_state --\x3e FAILED : [error]\n    FAILED --\x3e [*]\n    COMPLETED --\x3e [*]"}),(0,a.kt)("h3",{id:"endpoints"},"Endpoints"),(0,a.kt)("p",null,"According to the POST-GET policy, the Events Collector API exposes two endpoints:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"POST"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/api/v2/computations")),(0,a.kt)("td",{parentName:"tr",align:null},"Starts a computation and returns a computation Id.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GET"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/api/v2/computations/{computationId}")),(0,a.kt)("td",{parentName:"tr",align:null},"Retrieves the results of a computation.")))),(0,a.kt)("h2",{id:"advanced"},"Advanced"),(0,a.kt)("p",null,"The file ",(0,a.kt)("inlineCode",{parentName:"p"},"./configurations/sourcesManager.json")," cointains information about needed parameters for the collector needs for fetching API data. The structure is fairly simple:"),(0,a.kt)("p",null,"The file is a JSON containing 3 objects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"endpoints")),(0,a.kt)("p",{parentName:"li"},"It stores the relation between and actual metric input and the endpoint of the API it connects to.\nThis object contains as many objects inside as APIs the collector has integrated into it. Each object contains the relation between the data the metric needs to compute and the endpoint where the collector can find that data."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'./configurations/sourcesManager.json\n\n"endpoints": {\n  "github": {\n    "events": "/repos/{github.repoOwner}/{github.repository}/events"\n  },\n  "pivotal": {\n    "activity": "/projects/{pivotal.project}/activity"\n  },\n  "heroku": {\n    "releases": "/apps/{heroku.project}/releases"\n  }\n}\n')),(0,a.kt)("p",{parentName:"li"},"The endpoints can have integrations indicated between {}. Theese will be replaced with the actual project information to fetch the data.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"substitutions")),(0,a.kt)("p",{parentName:"li"},"Some metrics, when looking for the match with the payload the APIs return, might need to look for the user of a repo for example. In this array it is possible to indicate the relation between an %STRING% string on a metric with an actual integration"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'./configurations/sourcesManager.json\n\n"substitutions": [\n  "GITHUB.REPO_OWNER->github.repoOwner"\n]\n')),(0,a.kt)("p",{parentName:"li"},"In this substitution any %GITHUB.REPO_OWNER% string inside a metric will be replaced with the github.repoOwner integration of the  project.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"payloadDates")),(0,a.kt)("p",{parentName:"li"},"This configuration is changed whenever a new API is integrated in the system. Metrics have nothing to do with this as long as it is configured correctly on integration. It tells each API fetcher where can it find the timestamp of the event. For example:"),(0,a.kt)("p",{parentName:"li"},"For this shortened pivotal activity payload:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'./configurations/sourcesManager.json\n\n{\n  "kind": "story_update_activity",\n  "guid": "2242320_415",\n  "project_version": 415,\n  "message": "C\xe9sar Garc\xeda Pascual started this feature",\n  ...\n\n  ...\n  "performed_by": {\n    "kind": "person",\n    "id": 3296464,\n    "name": "C\xe9sar Garc\xeda Pascual",\n    "initials": "cgp"\n  },\n  "occurred_at": "2020-01-27T12:43:51Z"\n}\n')),(0,a.kt)("p",{parentName:"li"},"The timestamp of this event is ",(0,a.kt)("inlineCode",{parentName:"p"},"2020-01-27T12:43:51Z")," indicated on the field ",(0,a.kt)("inlineCode",{parentName:"p"},"occurred_at")," at the end of the payload. So the sources manager configuration will look like this:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'./configurations/sourcesManager.json\n\n"payloadDates": {\n  "pivotal": "occurred_at"\n}\n')))),(0,a.kt)("h3",{id:"collector-metric-config-example"},"Collector Metric-Config Example"),(0,a.kt)("p",null,"Having this simplified metric concerning the APIs sources:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'METRIC\n\n"element": {\n  "percentage": {\n    "related": {\n      "github": {\n        "events": {\n          "type": "PullRequestEvent",\n          "payload": {\n            "action": "closed",\n            "pull_request": {\n              "base": {\n                "label": "%GITHUB.REPO_OWNER%:master"\n              }\n            }\n          }\n        }\n      },\n      "window": 86400\n    }\n  }\n},\n"event": {\n  "pivotal": {\n    "activity": {\n      "highlight": "accepted"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"The collector will fetch information from 2 sources. Looking at the GitHub request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'METRIC\n\n"github": {\n  "events": {\n    "type": "PullRequestEvent",\n    "payload": {\n      "action": "closed",\n      "pull_request": {\n        "base": {\n          "label": "%GITHUB.REPO_OWNER%:master"\n        }\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"The system will fetch the events information. Going to the endpoints configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'ENDPOINTS\n\n"github": {\n  "events": "/repos/{github.repoOwner}/{github.repository}/events"\n}\n')),(0,a.kt)("p",null,"The events information corresponds to the endpoint ",(0,a.kt)("inlineCode",{parentName:"p"},"/repos/{github.repoOwner}/{github.repository}/events"),". The system will substitute ",(0,a.kt)("inlineCode",{parentName:"p"},"{github.repoOwner}")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"{github.repository}")," with the information extracted from the Scope Manager for the project."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Looking at the most nested part of the metric we can see a % item:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'METRIC\n\n"label": "%GITHUB.REPO_OWNER%:master"\n')),(0,a.kt)("p",null,"Going to the substitutions configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'SUBSTITUTIONS\n\n"GITHUB.REPO_OWNER->github.repoOwner"\n')),(0,a.kt)("p",null,"The system will replace %GITHUB.REPO_OWNER% with the information extracted from the Scope Manager for the project."),(0,a.kt)("h3",{id:"graphql-custom-query"},"GraphQL custom query"),(0,a.kt)("p",null,"This method was created due to complexity of GraphQL nested objects. It is a custom method in which different steps are sequentially executed to fetch, transform and return data."),(0,a.kt)("p",null,'This is a metric for obtaining the number of assigned issues, in a column called "Doing" inside a GitHub project, for each member:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "metric": {\n        "computing": "string",\n        "element": "number",\n        "event": {\n            "githubGQL": {\n                "custom": {\n                    "type": "graphQL",\n                    "steps": {\n                        "0": {\n                            "type": "queryGetObject",\n                            "query":  "{repository(name: \\"%PROJECT.github.repository%\\", owner: \\"%PROJECT.github.repoOwner%\\") {projects(first: 1) {nodes {name,columns(first: 10) {nodes {name,cards(first: 100) {totalCount,nodes {column {name},content {... on Issue {url,number,title,createdAt,updatedAt,assignees(first: 10) {nodes {login}}}}}}}}}}}}"                            \n                        },\n                        "1": {\n                            "type": "objectGetSubObjects",\n                            "location": "data.repository.projects.nodes.0.columns.nodes"\n                        },\n                        "2": {\n                            "type": "objectsFilterObject",\n                            "filters": [\n                                "name == \'Doing\'"\n                            ],\n                            "keep": "first"\n                        },\n                        "3": {\n                            "type": "objectGetSubObjects",\n                            "location": "cards.nodes"\n                        },\n                        "4": {\n                            "type": "objectsFilterObjects",\n                            "filters": [\n                                "content.assignees.nodes.*any*.login == \'%MEMBER.github.username%\'"\n                            ]\n                        }\n                    }\n                }\n            }\n        },\n        "scope": {\n            "project": "testing-GH-governifyauditor_testing-goldenflow",\n            "class": "testing",\n            "member": "*"\n        },\n        "window": {\n            "initial": "2021-01-20T00:00:00Z",\n            "period": "annually",\n            "type": "static",\n            "end": "2021-02-19T00:00:00Z"\n        }\n    },\n    "config": {\n        "scopeManager": "SCOPEURL"\n    }\n}\n')),(0,a.kt)("p",null,"As it can be seen, it is composed of 5 different steps. These steps are highly configurable and easy to add new steps."),(0,a.kt)("h3",{id:"steps"},"Steps"),(0,a.kt)("p",null,"The different are given inside the steps key inside the custom object. Each step has to be inside a numbered object as they will be performed in an increasing order."),(0,a.kt)("p",null,"The steps are differenciated by its type. These steps types follow a simple pattern for better steps concatenation. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Their types can start with "object", "objects" or nothing refering if they expect a single object, an array of objects or nothing at the execution. '),(0,a.kt)("li",{parentName:"ul"},'Their types have to end with "object" or "objects", refering if after the execution, a single object or an array of objects is left.')),(0,a.kt)("h4",{id:"step-type-querygetobject-and-querygetobjects"},"Step type: queryGetObject and queryGetObjects"),(0,a.kt)("p",null,"This steps expect nothing and returns or an object or an array of objects. They do the same but both types are correct for better reading of the DSL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "type": "queryGetObject",\n  "query":  "{repository(name: \\"%PROJECT.github.repository%\\", owner: \\"%PROJECT.github.repoOwner%\\") {projects(first: 1) {nodes {name,columns(first: 10) {nodes {name,cards(first: 100) {totalCount,nodes {column {name},content {... on Issue {url,number,title,createdAt,updatedAt,assignees(first: 10) {nodes {login}}}}}}}}}}}}"                            \n}\n')),(0,a.kt)("p",null,'It needs a "query" parametter to be passed containing the graphQL query stringified and using comas between keys at the same level. There is a simple .js to transform graphQL queries into the string format in utils/queryToString.js to simplify the process.\n%PROJECT.github.repository% and %PROJECT.github.repoOwner% are used to insert the scopes identities inside the query and make it generic for all the different teams.'),(0,a.kt)("h4",{id:"step-type-objectgetsubobject-and-objectgetsubobjects"},"Step type: objectGetSubObject and objectGetSubObjects"),(0,a.kt)("p",null,"This steps expect a single object and return an object or an array of objects. They do the same but both types are correct for better reading of the DSL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "type": "objectGetSubObjects",\n  "location": "data.repository.projects.nodes.0.columns.nodes"\n}\n')),(0,a.kt)("p",null,"It obtains the object/s inside an object. The object/s location is specified as if it was navegated through javascript."),(0,a.kt)("h4",{id:"step-type-objectsfilterobject-and-objectsfilterobjects"},"Step type: objectsFilterObject and objectsFilterObjects"),(0,a.kt)("p",null,"This steps expect an array of zero or more objects and return an object or an array of objects."),(0,a.kt)("p",null,"A filters array with one or more strings is requried. These strings are equations. The left part contains the attribute location on the different objects to compare and the right part the value the obtained attribute is expected to be."),(0,a.kt)("p",null,"If the filter is ",(0,a.kt)("em",{parentName:"p"},"objectsFilterObject"),', a parameter "keep" is expected as many objects can be retrieved from the filter and only one can remain. ',(0,a.kt)("em",{parentName:"p"},"first, last, min, max, sum, avg")," are the valid options."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "type": "objectsFilterObject",\n  "filters": [\n    "name == \'Doing\'"\n  ],\n  "keep": "first"\n}\n')),(0,a.kt)("p",null,"If the filter is ",(0,a.kt)("em",{parentName:"p"},"objectsFilterObjects"),", the keep parameter is no longer needed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "type": "objectsFilterObjects",\n  "filters": [\n    "content.assignees.nodes.*any*.login == \'%MEMBER.github.username%\'"\n  ]\n}\n')),(0,a.kt)("p",null,"Here, information about the members can be included to compare for example, the content of an object key to be the username of a github username, as it can be seen in the example."),(0,a.kt)("h4",{id:"step-type-runscript"},"Step type: runScript"),(0,a.kt)("p",null,"This step expects anything and is passed in to a function exported as generic. It's expected to return a response in the form of an object/array or another kind in case it is compatible with the metric."),(0,a.kt)("p",null,"To this date it can receive two parametters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"script"),": It is a function exported as generic and receives two inputs: the data being filtered/obtained from the steps executed before it and an object containing variables to generalize the script and modify different filters/conditions inside the script. It must return the processed data in order to move to the next pipeline or to be returned. This script has to be ",(0,a.kt)("a",{parentName:"li",href:"https://www.freeformatter.com/json-escape.html#ad-output"},"scaped")," in order to fit in the TPA as a JSON."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"variables"),": This is the object passed to the script containing the variabilization. The collector will also add to the object two keys (from, to) containing the window for filtering the information.")),(0,a.kt)("p",null,"This is an example of a script without being scaped:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports.generic = function generic(inputData, variables) {\n    function transitionAndDateFilter(timelineItem) {\n        return timelineItem.projectColumnName &&\n            timelineItem.projectColumnName === variables.actualProjectColumnName &&\n            timelineItem.previousProjectColumnName === variables.previousProjectColumnName &&\n            new Date(timelineItem.createdAt) > new Date(variables.from) &&\n            new Date(timelineItem.createdAt) < new Date(variables.to);\n    }\n    function hasTimelineItems(issue) {\n        return issue.timelineItems.length !== 0;\n    }\n    return inputData.map(issue => {\n        return { ...issue, timelineItems: issue.timelineItems.nodes.filter(transitionAndDateFilter) }\n    }).filter(hasTimelineItems);\n}\n")),(0,a.kt)("p",null,"It takes data from GitHub GQL API containing information about the cards (project card moves - old columnd and new column) and applies filters based on the variables it is passed to. The step would look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "runScript",\n    "variables": {\n        "previousProjectColumnName": "In progress",\n        "actualProjectColumnName": "In review"\n    },\n    "script": "module.exports.generic = function filterIssuesByTimelineItems(inputData, variables) {\\r\\n    function transitionAndDateFilter(timelineItem) {\\r\\n        return timelineItem.projectColumnName &&\\r\\n            timelineItem.projectColumnName === variables.actualProjectColumnName &&\\r\\n            timelineItem.previousProjectColumnName === variables.previousProjectColumnName &&\\r\\n            new Date(timelineItem.createdAt) > new Date(variables.from) &&\\r\\n            new Date(timelineItem.createdAt) < new Date(variables.to);\\r\\n    }\\r\\n    function hasTimelineItems(issue) {\\r\\n        return issue.timelineItems.length !== 0;\\r\\n    }\\r\\n    return inputData.map(issue => {\\r\\n        return { ...issue, timelineItems: issue.timelineItems.nodes.filter(transitionAndDateFilter) }\\r\\n    }).filter(hasTimelineItems);\\r\\n}"\n}\n')),(0,a.kt)("p",null,'As it can be seen it will filter and keep issues whose cards have been moved from a column called "In progress" to a column called "In review". It will also use the from and to  filter the data.'))}m.isMDXComponent=!0}}]);