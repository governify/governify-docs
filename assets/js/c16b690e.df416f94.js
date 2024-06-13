"use strict";(self.webpackChunkgovernify_docs=self.webpackChunkgovernify_docs||[]).push([[968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={title:"Render",description:"Render",hide_table_of_contents:!1,sidebar_position:7},i="Render",o={unversionedId:"development/services/render",id:"development/services/render",title:"Render",description:"Render",source:"@site/docs/development/services/render.md",sourceDirName:"development/services",slug:"/development/services/render",permalink:"/development/services/render",draft:!1,editUrl:"https://github.com/governify/governify-docs/edit/main/docs/development/services/render.md",tags:[],version:"current",lastUpdatedBy:"Manuel Otero Barbas\xe1n",lastUpdatedAt:1718266043,formattedLastUpdatedAt:"Jun 13, 2024",sidebarPosition:7,frontMatter:{title:"Render",description:"Render",hide_table_of_contents:!1,sidebar_position:7},sidebar:"defaultSidebar",previous:{title:"Director",permalink:"/development/services/director"},next:{title:"Dashboard",permalink:"/development/services/dashboard"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Models",id:"models",level:3},{value:"Views",id:"views",level:3},{value:"Controllers",id:"controllers",level:3},{value:"Configuration",id:"configuration",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"render"},"Render"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Render, as its name suggests, is the service in charge of rendering the views that are displayed in the client browser. Thus, it is a generic service which unique task is to render HTML, CSS and JS files from external sources."),(0,a.kt)("p",null,"The render component follows the MVC design pattern and the model, views and controllers are retrieved from the assets manager. Currently, the service is able to render Angular.js Views and Controllers. To do so, it expects the URL to contain the path to the model, view and controller in the query, following this format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<host>:<port>/render?model=<model>&view=<view>&controller=<controller>\n")),(0,a.kt)("p",null,"The following diagram shows this behaviour:"),(0,a.kt)("mermaid",{value:"---\ntitle: Render Sequence Diagram\n---\nsequenceDiagram\n    actor Client\n    participant Render\n    participant AssetsManager\n\n    Client->>Render: GET /render?model=<model>&view=<view>&controller=<controller>\n    Render->>AssetsManager: GET /api/v1/public/<model>\n    AssetsManager->>Render: model\n    Render->>AssetsManager: GET /api/v1/public/<view>\n    AssetsManager->>Render: view\n    Render->>AssetsManager: GET /api/v1/public/<controller>\n    AssetsManager->>Render: controller\n    Render->>Client: Display in Browser"}),(0,a.kt)("h3",{id:"models"},"Models"),(0,a.kt)("p",null,"Models are simple JSON files that are stored in the Assets Manager along views and controllers. The fields defined in the JSON are automatically available in the views using the Angular.js directives inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"model")," object. The following example shows a simple model:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "version": "1.0.0"\n}\n')),(0,a.kt)("h3",{id:"views"},"Views"),(0,a.kt)("p",null,"Render Views are written in Angular.js and stored under the ",(0,a.kt)("inlineCode",{parentName:"p"},"/public/renders")," folder in the Assets Manager. The Render service integrates Bootstrap v3 or v5 (See ",(0,a.kt)("a",{parentName:"p",href:"#configuration"},"Configuration")," below) to provide a responsive, modern layout for the views. The views are common HTML files that allow the directives provided by Angular.js to be used. The following example shows a simple view:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<html xmlns="http://www.w3.org/1999/xhtml">\n    <head>\n        <title>Example View</title>\n    </head>\n    <body>\n        <div ng-controller="ExampleController">\n            <h1>{{title}}</h1>\n            <p>{{message}}</p>\n            <p>{{model.version}}</p>\n        </div>\n    </body>\n</html>\n')),(0,a.kt)("h3",{id:"controllers"},"Controllers"),(0,a.kt)("p",null,"Controllers contain the business logic of the views. They are written in Javascript and stored under the ",(0,a.kt)("inlineCode",{parentName:"p"},"/public/renders")," folder in the Assets Manager along models and views. The controllers are common JS files that allow the directives provided by Angular.js to be used. The fields defined under the ",(0,a.kt)("inlineCode",{parentName:"p"},"scope")," object in the controller are automatically available in the views using the Angular.js directives. The following example shows a simple controller:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"$http({ // makes an HTTP request\n    method: 'GET',\n    url: 'someurl'\n}).then(res => {\n    $scope.title = res.data.title;\n    $scope.message = res.data.message;\n}).catch(err => {\n    $scope.title = \"Error!\";\n    $scope.message = \"An error has occurred!\";\n    console.log(err);\n});\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The Render is configured through environment variables. The following table shows the available variables:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Variable"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PORT"),(0,a.kt)("td",{parentName:"tr",align:null},"Port where the service will be listening"),(0,a.kt)("td",{parentName:"tr",align:null},"80")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LAYOUT"),(0,a.kt)("td",{parentName:"tr",align:null},"Layout to be used when rendering the view"),(0,a.kt)("td",{parentName:"tr",align:null},"bootstrap5.html")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LOGIN_USER"),(0,a.kt)("td",{parentName:"tr",align:null},"User to be used when logging in"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LOGIN_PASSWORD"),(0,a.kt)("td",{parentName:"tr",align:null},"Password to be used when logging in"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DEFAULT_VIEW"),(0,a.kt)("td",{parentName:"tr",align:null},"Default view to be rendered when no view is specified in the URL"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DEFAULT_CONTROLLER"),(0,a.kt)("td",{parentName:"tr",align:null},"Default controller to be rendered when no controller is specified in the URL"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DEFAULT_MODEL"),(0,a.kt)("td",{parentName:"tr",align:null},"Default model to be rendered when no model is specified in the URL"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GOV_INFRASTRUCTURE"),(0,a.kt)("td",{parentName:"tr",align:null},"URL of the Governify Infrastructure File for Service registry"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))))}u.isMDXComponent=!0}}]);