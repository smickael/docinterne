"use strict";(self.webpackChunkdocinterne=self.webpackChunkdocinterne||[]).push([[461],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return n?o.createElement(m,s(s({ref:t},u),{},{components:n})):o.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5433:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return d},default:function(){return h}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],i={slug:"long-blog-post",title:"Long Blog Post",authors:"smickael",tags:["hello","docusaurus"]},l=void 0,c={permalink:"/docinterne/blog/long-blog-post",editUrl:"https://github.com/smickael/docinterne/edit/main/blog/2021-09-17-long-blog-post/index.md",source:"@site/blog/2021-09-17-long-blog-post/index.md",title:"Long Blog Post",description:"This is the summary of a very long blog post,",date:"2021-09-17T00:00:00.000Z",formattedDate:"September 17, 2021",tags:[{label:"hello",permalink:"/docinterne/blog/tags/hello"},{label:"docusaurus",permalink:"/docinterne/blog/tags/docusaurus"}],readingTime:6.615,truncated:!0,authors:[{name:"Micka\xebl S",title:"Intern Front-End",url:"https://github.com/smickael",imageURL:"https://github.com/smickael.png",key:"smickael"}],prevItem:{title:"MDX Blog Post",permalink:"/docinterne/blog/mdx-blog-post"},nextItem:{title:"First Blog Post",permalink:"/docinterne/blog/first-blog-post"}},u={authorsImageUrls:[void 0]},d=[{value:"What is Canary Release?",id:"what-is-canary-release",children:[]},{value:"What is <strong>Blue-Green Deployment?</strong>",id:"what-is-blue-green-deployment",children:[]},{value:"Differences between Cary Release and Blue-Green Deployment",id:"differences-between-cary-release-and-blue-green-deployment",children:[]},{value:"<strong>Blue-Green Deployment Pros and Cons</strong>",id:"blue-green-deployment-pros-and-cons",children:[{value:"<strong>Pros of blue-green deployment</strong>",id:"pros-of-blue-green-deployment",children:[]},{value:"<strong>Cons of blue-green deployment</strong>",id:"cons-of-blue-green-deployment",children:[]}]},{value:"<strong>Canary Release</strong>",id:"canary-release",children:[{value:"<strong>Pros of canary release</strong>",id:"pros-of-canary-release",children:[]},{value:"<strong>Cons of canary release</strong>",id:"cons-of-canary-release",children:[]}]},{value:"Best Use Cases",id:"best-use-cases",children:[]},{value:"Summary",id:"summary",children:[]},{value:"Start deploying your cloud-native apps today",id:"start-deploying-your-cloud-native-apps-today",children:[]}],p={toc:d};function h(e){var t=e.components,i=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is the summary of a very long blog post,"),(0,a.kt)("p",null,"Use a ",(0,a.kt)("inlineCode",{parentName:"p"},"\x3c!--")," ",(0,a.kt)("inlineCode",{parentName:"p"},"truncate")," ",(0,a.kt)("inlineCode",{parentName:"p"},"--\x3e")," comment to limit blog post size in the list view."),(0,a.kt)("p",null,"Choosing the right deployment strategy is crucial to the availability and quality of your services.  Two of the most known deployment strategies are blue/green deployment and canary release. "),(0,a.kt)("p",null,"This article discusses both deployment strategies. It explores the differences between the two, the pros and cons of each one, and finally the best use case for each of them."),(0,a.kt)("p",null,"Downtimes when updating applications have now become a concept of the past. Users expect the introduction of new application versions to be a seamless process that doesn\u2019t interrupt their experience. Canary release and blue-green deployment strategies both overcome the possibility of updates\u2019 related downtime problems. "),(0,a.kt)("p",null,"In this article, we\u2019ll discuss each strategy\u2019s approach to the upgrade process, its strengths,  shortcomings, and best use cases."),(0,a.kt)("h2",{id:"what-is-canary-release"},"What is Canary Release?"),(0,a.kt)("p",null,"Canary release is a deployment rollout strategy that aims at minimizing new software risks by directing a small percentage of users to the new version of the application. After verifying that the new application works as intended, the traffic directed to it is gradually increased and eventually, all traffic is directed to it. "),(0,a.kt)("p",null,"In case an issue is detected at any point throughout the deployment, a rollback is performed with ease because both the current and the new versions are in the production environment. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"How canary release works",src:n(6868).Z})),(0,a.kt)("p",null,"How canary release works"),(0,a.kt)("h2",{id:"what-is-blue-green-deployment"},"What is ",(0,a.kt)("strong",{parentName:"h2"},"Blue-Green Deployment?")),(0,a.kt)("p",null,"Blue-Green Deployment is a deployment strategy aimed at minimizing the chance for lags or downtime. It does this by creating a production environment, that is identical to the environment that the live version is running on. The new version of the application is then deployed in the newly created environment. Blue environment refers to the environment of the old version, and green environment refers to the new version\u2019s environment."),(0,a.kt)("p",null,"This strategy allows developers to thoroughly test the new version in a production environment before gradually directing user traffic to it. After the migration of user traffic is complete, the old version is kept intact in case there is a need for rollback or disaster recovery."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"How blue-green deployment works",src:n(5085).Z})),(0,a.kt)("p",null,"How blue-green deployment works"),(0,a.kt)("h2",{id:"differences-between-cary-release-and-blue-green-deployment"},"Differences between Cary Release and Blue-Green Deployment"),(0,a.kt)("p",null,"There are several differences between these two strategies in how they approach the deployment process. These are the most important ones:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In blue-green deployment, a second identical production environment needs to be created but the canary release works on the existing one."),(0,a.kt)("li",{parentName:"ul"},"Secondly, unlike the canary release blue-green deployment allows for unlimited testing in the production environment."),(0,a.kt)("li",{parentName:"ul"},"With the canary release, you can target a specific subset of users randomly or using a set criterion. This is not possible with a blue-green deployment strategy.")),(0,a.kt)("h2",{id:"blue-green-deployment-pros-and-cons"},(0,a.kt)("strong",{parentName:"h2"},"Blue-Green Deployment Pros and Cons")),(0,a.kt)("p",null,"This type of deployment is more efficient in some cases but falls short in others. Below are some of this strategy\u2019s pros and cons."),(0,a.kt)("h3",{id:"pros-of-blue-green-deployment"},(0,a.kt)("strong",{parentName:"h3"},"Pros of blue-green deployment")),(0,a.kt)("p",null,"First, it allows testing the new version in a production environment without impacting the live one. This is important when you have major updates that take a lot of time to test thoroughly. Secondly, instant cutover switching ensures that traffic is moved to the new version instantly and everyone sees the new release without any lag. Finally, it lessens the chances of downtime or lags during deployment because the old version is available in case a rollback is needed."),(0,a.kt)("h3",{id:"cons-of-blue-green-deployment"},(0,a.kt)("strong",{parentName:"h3"},"Cons of blue-green deployment")),(0,a.kt)("p",null,"First, during the cutover, users\u2019 requests can be dropped. This can be a problem, especially if the request was a transaction because the request might have already been recorded in the database before being dropped. The other shortcoming of this strategy is that, unlike the canary release, this method gives the developer minimal traffic scaling control during the deployment process. Thirdly, it is expensive and claims some time from the DevOps team to set up. This is because a new environment that takes a lot of resources like the first environment has to be set up. Finally, the process of managing the database during the cutover is very difficult and requires complex schemas adjustments."),(0,a.kt)("h2",{id:"canary-release"},(0,a.kt)("strong",{parentName:"h2"},"Canary Release")),(0,a.kt)("p",null,"This strategy is widely used due to the benefits that it offers to developers in many use cases. Below are the benefits it offers and its shortcomings."),(0,a.kt)("h3",{id:"pros-of-canary-release"},(0,a.kt)("strong",{parentName:"h3"},"Pros of canary release")),(0,a.kt)("p",null,"First, it gives a lot of control in the distribution of traffic between the new and the old deployment. For instance, you can choose the percentage, and also create a subset of users based on factors such as location or account types. Secondly, it reduces the chances of a system failure by providing a rollback option in case the new version has issues. Thirdly, it gives a chance to learn how a small group of users is reacting to the new version of the application. The data from that small group can be used to understand how the users will react after the full rollout. Another advantage of this strategy is that it is not limited in terms of platform compatibility. You can use it to deploy applications on mobile, website, or desktop platforms. Finally, it can be deployed on hybrid software solutions that combine native and web applications."),(0,a.kt)("h3",{id:"cons-of-canary-release"},(0,a.kt)("strong",{parentName:"h3"},"Cons of canary release")),(0,a.kt)("p",null,"The first shortcoming is that, unlike the blue-green deployment, you don\u2019t get a chance to test the new version in an identical production environment. The other one is that, managing a database and its operations during canary deployment is very difficult and when not well handled can lead to data loss or duplication. To be able to run the two versions of releases, the database will need to be adjusted to handle two instances of the same application. Unless you implement this successfully, requests from one of the versions may be dropped because the database denies it access."),(0,a.kt)("h2",{id:"best-use-cases"},"Best Use Cases"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Blue-green deployment")," is most effective when you have an application that will receive major updates with the new version. This is because the method requires a higher budget to implement due to the creation of an identical deployment environment."),(0,a.kt)("p",null,"When a company has a policy of releasing major updates at specified intervals, it is important to have a testing platform capable of handling all types of tests in the production environment. This will allow them to fix the bugs that would be a nuisance to the users before they are introduced to the new version."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Canary deployment")," is most effective in cases where there are regular rollouts due to the high frequency of updates. This is because it doesn\u2019t require expensive infrastructure to implement smoothly. It is also effective in testing out a new feature that has been developed before making the decision on whether to fully deploy it to all users. The flexibility in targeting a subset of users based on a set criterion provides an opportunity for the collection of more meaningful data leading to better insight."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"In sum, when rolling out a new version of your software, it is important to make sure that there is minimal chance of downtimes or lags. This can be achieved by using rollout methods that allow for instant rollbacks in case there is an issue with the new version. Canary release and blue-green deployment enable developers to achieve this by allowing for gradual rollout with the backup option ready to be fully engaged. However, the two methods approach the rollout process differently, and each method has its best use scenarios. Canary release is best for undertaking frequent updates while the blue-green method is best for rolling out significant upgrades."),(0,a.kt)("h2",{id:"start-deploying-your-cloud-native-apps-today"},"Start deploying your cloud-native apps today"),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://www.w6d.io/"},"Wildcard")," to implement a zero-downtime strategy with ease. With our hassle-free platform, you don\u2019t have to be a DevOps engineer to continuously test and deliver your cloud-native apps. ",(0,a.kt)("a",{parentName:"p",href:"https://www.w6d.io/"},"Try it now, it's free!")))}h.isMDXComponent=!0},5085:function(e,t,n){t.Z=n.p+"assets/images/bluegreen-c199fd304797014224ff2946c2af0c6e.png"},6868:function(e,t,n){t.Z=n.p+"assets/images/canary-68999317b2d19c7452eabfd9a91678e9.png"}}]);