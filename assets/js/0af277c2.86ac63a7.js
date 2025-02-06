"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1275],{8720:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(4848),r=t(8453);const o={},c="Experience selection",a={permalink:"/TaskWeaver/blog/experience",editUrl:"https://github.com/microsoft/TaskWeaver/tree/main/website/blog/experience.md",source:"@site/blog/experience.md",title:"Experience selection",description:"We have introduced the motivation of the experience module in Experience",date:"2025-01-26T03:04:51.000Z",tags:[],readingTime:3.87,hasTruncateMarker:!0,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"How to evaluate a LLM agent?",permalink:"/TaskWeaver/blog/evaluation"},nextItem:{title:"Run TaskWeaver with Locally Deployed Not-that-Large Language Models",permalink:"/TaskWeaver/blog/local_llm"}},s={authorsImageUrls:[]},l=[{value:"Static experience selection",id:"static-experience-selection",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["We have introduced the motivation of the ",(0,i.jsx)(n.code,{children:"experience"})," module in ",(0,i.jsx)(n.a,{href:"/docs/customization/experience",children:"Experience"}),"\nand how to create a handcrafted experience in ",(0,i.jsx)(n.a,{href:"/docs/customization/experience/handcrafted_experience",children:"Handcrafted Experience"}),".\nIn this blog post, we discuss more advanced topics about the experience module on experience selection."]}),"\n",(0,i.jsx)(n.h2,{id:"static-experience-selection",children:"Static experience selection"}),"\n",(0,i.jsxs)(n.p,{children:["Every role in TaskWeaver can configure its own experience directory, which can be configured\nby setting the ",(0,i.jsx)(n.code,{children:"role_name.experience_dir"})," field in the project configuration file.\nFor the ",(0,i.jsx)(n.code,{children:"Planner"})," and ",(0,i.jsx)(n.code,{children:"CodeInterpreter"})," roles, you can configure the experience directory\nby setting the ",(0,i.jsx)(n.code,{children:"planner.experience_dir"})," and ",(0,i.jsx)(n.code,{children:"code_generator.experience_dir"})," fields respectively.\nThe default experience directory is ",(0,i.jsx)(n.code,{children:"experience"})," in the project directory."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The role name is by default the name of the implementation file (without the extension) of the role unless\nyou have specified the role name by calling ",(0,i.jsx)(n.code,{children:"_set_name"})," in the implementation file."]})}),"\n",(0,i.jsxs)(n.p,{children:["By configuring different experience directories for different roles,\nyou can have different experiences for different roles in a static way.\nUse the ",(0,i.jsx)(n.code,{children:"Planner"})," role as an example, you can have the following project configuration file\nto enable the experience selection for the ",(0,i.jsx)(n.code,{children:"Planner"})," role."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "planner.use_experience": true,\n  "planner.experience_dir": "planner_exp_dir"\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var i=t(6540);const r={},o=i.createContext(r);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);