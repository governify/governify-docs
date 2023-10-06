"use strict";(self.webpackChunkgovernify_docs=self.webpackChunkgovernify_docs||[]).push([[232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));const r={title:"CI/CD Workflow",sidebar_position:2,description:"CI/CD Workflow",hide_table_of_contents:!1},a="CI/CD Workflow",s={unversionedId:"development/contributing/ci-cd",id:"development/contributing/ci-cd",title:"CI/CD Workflow",description:"CI/CD Workflow",source:"@site/docs/development/contributing/ci-cd.md",sourceDirName:"development/contributing",slug:"/development/contributing/ci-cd",permalink:"/development/contributing/ci-cd",draft:!1,editUrl:"https://github.com/governify/governify-docs/edit/main/docs/development/contributing/ci-cd.md",tags:[],version:"current",lastUpdatedBy:"Manuel Otero Barbas\xe1n",lastUpdatedAt:1696594150,formattedLastUpdatedAt:"Oct 6, 2023",sidebarPosition:2,frontMatter:{title:"CI/CD Workflow",sidebar_position:2,description:"CI/CD Workflow",hide_table_of_contents:!1},sidebar:"defaultSidebar",previous:{title:"GitFlow",permalink:"/development/contributing/gitflow"},next:{title:"Examples",permalink:"/about/examples"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Microservices CI/CD",id:"microservices-cicd",level:2},{value:"Develop actions run",id:"develop-actions-run",level:3},{value:"1. Lint, test and coverage",id:"1-lint-test-and-coverage",level:4},{value:"2. Build and push to Dockerhub",id:"2-build-and-push-to-dockerhub",level:4},{value:"3. E2E tests",id:"3-e2e-tests",level:4},{value:"Main actions run",id:"main-actions-run",level:3},{value:"1. Lint, test and coverage",id:"1-lint-test-and-coverage-1",level:4},{value:"2. E2E tests",id:"2-e2e-tests",level:4},{value:"3. Release, build and push to Dockerhub",id:"3-release-build-and-push-to-dockerhub",level:4}],d={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cicd-workflow"},"CI/CD Workflow"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"CI/CD is a series of interconnected processes that empower developers to build quality software through well-aligned and automated development, testing, delivery, and deployment. Together, these practices ensure better collaboration and greater efficiency for DevOps teams throughout the software development life cycle. GitHub Actions, thanks to being built in to GitHub, has made integrating with different services much easier and helps to have all the things in one place."),(0,o.kt)("h2",{id:"microservices-cicd"},"Microservices CI/CD"),(0,o.kt)("p",null,"At this moment, the different component repositories are configured with the same pipeline to test, lint and build the different docker images used in the deployments. "),(0,o.kt)("p",null,"Depending if the push/merge PR is done to the repository's main branch or the develop branch, a set of CI/CD actions will be executed in the CI."),(0,o.kt)("h3",{id:"develop-actions-run"},"Develop actions run"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Actions Develop Pipeline",src:n(7670).Z,width:"995",height:"290"})),(0,o.kt)("p",null,"This are the actions executed when pushing to develop. As it is shown, the two top actions are not executed as they belong to the production actions run."),(0,o.kt)("h4",{id:"1-lint-test-and-coverage"},"1. Lint, test and coverage"),(0,o.kt)("p",null,"This node will execute 3 tasks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lint - It will check all the code is properly linted as specified in the package.json"),(0,o.kt)("li",{parentName:"ul"},"Test - It will run unitary tests to check no functionallity was broken in the commit"),(0,o.kt)("li",{parentName:"ul"},"Coverage - The coverage report obtained is sent to coveralls to update the badge")),(0,o.kt)("p",null,"If this step is successful, the pipeline will flow to the next step."),(0,o.kt)("h4",{id:"2-build-and-push-to-dockerhub"},"2. Build and push to Dockerhub"),(0,o.kt)("p",null,"If the push has been made to the develop branch, this node will execute. It will use DockerHub credentials (stored on GitHub secrets) to build the image based on the Dockerfile and push it to dockerhub. The new image's tag will be ",(0,o.kt)("inlineCode",{parentName:"p"},"develop"),'. If this step is successful, the "E2E tests" steps will be executed.'),(0,o.kt)("h4",{id:"3-e2e-tests"},"3. E2E tests"),(0,o.kt)("p",null,"On Bluejay's infrastructure, a set of tests have been made to ensure proper functioning of the system (To know more about this, check out the last section of this page). Using the new image built in the last step and the other develop images from the different microservices, the CI will check out the whole infrastructure repository, deploy all the containers and check nothing was broken by passing some tests."),(0,o.kt)("h3",{id:"main-actions-run"},"Main actions run"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Actions Main Pipeline",src:n(1582).Z,width:"995",height:"284"})),(0,o.kt)("p",null,"Now, the bottom part of the pipeline is not executed. Let's see the differences in the steps."),(0,o.kt)("h4",{id:"1-lint-test-and-coverage-1"},"1. Lint, test and coverage"),(0,o.kt)("p",null,"The same pipe will be executed like the develop run as this is a shared step."),(0,o.kt)("h4",{id:"2-e2e-tests"},"2. E2E tests"),(0,o.kt)("p",null,"When something is updated on the main branch, it must be due to a PR merge from the development branch. This step is the exact same as the last part of the develop pipeline but if it fails, the next node won't run. This is to ensure the infrastructure is properly working  with the latest image before doing the last step."),(0,o.kt)("h4",{id:"3-release-build-and-push-to-dockerhub"},"3. Release, build and push to Dockerhub"),(0,o.kt)("p",null,'This is similar to the "Build and push to Dockerhub" action in the develop pipeline but adds a task. At first, it will use all the commit messages (which should be written using ',(0,o.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits"),") to create a changelog and adds a new tag and Release of the code in the repository using this changes as the body. It also automatically increases the version number. Then, using this tag, it builds two exact same docker images but one tagged with it and the other with the ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," tag. Finally, it creates a PR to develop with the changelog and package.json version increase to be accepted and keep it up to date with the main branch."))}p.isMDXComponent=!0},7670:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/CI-DEV-c087818b0b13d2d36d0d74884ee95d78.png"},1582:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/CI-PRO-fd46594e1e3d232922dba1cde53a0de8.png"}}]);