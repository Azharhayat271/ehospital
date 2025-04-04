import{r as l,l as x,j as o,N as f,F as u,a as t,d as N,R as r}from"./index.f58de973.js";import{M as v,f as k,g as w,H as y,G as B,c as C}from"./react-confirm-alert.a960cfb7.js";import{b as D,a as A}from"./index.esm.9dc20768.js";import{c as S,b as _}from"./index.esm.3440d2e7.js";import{C as j}from"./index.esm.21c75374.js";import F from"./Forbidden.62eadd33.js";function G({children:d}){const[i,c]=l.exports.useState(!0),{logout:g,loggedIn:h,user:a}=l.exports.useContext(x),p=(a==null?void 0:a.role)==="nurse";if(!h)return o(f,{to:"/"});const m=()=>{C({title:"Confirm Logout...",buttons:[{label:"Yes",onClick:g},{label:"No"}]})},n=[{name:"Dashboard",link:"/dashboard",icon:v},{name:"Vital Signs",link:"/nurse/vitalSigns",icon:k},{name:"Bed Allotment",link:"/nurse/bed_allotment",icon:D},{name:"Add Bed",link:"/nurse/add_bed",icon:S},{name:"Blood Bank",link:"/nurse/blood_bank",icon:AiOutlineBank},{name:"Blood Donor",link:"/nurse/blood_donor",icon:_},{name:"Dispatch Blood",link:"/nurse/dispatch_blood",icon:w},{name:"Birth",link:"/nurse/birth",icon:A},{name:"Death",link:"/nurse/death",icon:j},{name:"Profile",link:"/nurse/profile",icon:AiOutlineSetting}];return o(u,{children:p?t("section",{className:"flex",children:[t("div",{className:`bg-gray-200 min-h-screen ${i?"w-72":"w-16"} duration-500 text-gray-100 px-4`,children:[o("div",{className:"py-3 flex justify-end",children:o(y,{size:26,className:"cursor-pointer text-black",onClick:()=>c(!i)})}),o("div",{className:"mt-4 flex flex-col gap-4 relative",children:n==null?void 0:n.map((e,s)=>t(N,{to:e==null?void 0:e.link,className:({isActive:b})=>b?"group flex items-center text-sm gap-3.5 p-2 bg-indigo-700 hover:bg-indigo-600 text-white rounded-md shadow-lg shadow-gray-400":"group flex items-center text-sm gap-3.5 p-2 bg-white text-black hover:bg-gray-100 rounded-md shadow-lg shadow-gray-400",children:[o("div",{children:r.createElement(e==null?void 0:e.icon,{size:"20"})}),o("h2",{style:{transitionDelay:`${s+3}00ms`},className:`whitespace-pre duration-200 ${!i&&"opacity-0 translate-x-28 overflow-hidden"}`,children:e==null?void 0:e.name}),o("h2",{className:`${i&&"hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`,children:e==null?void 0:e.name})]},s))})]}),t("div",{className:"text-xl text-gray-900 w-full bg-gray-50",children:[t("div",{className:"bg-white h-16 p-4 flex items-center justify-between gap-3",children:[t("h1",{className:"text-indigo-900 text-lg lg:text-2xl font-bold flex items-center gap-2",children:[r.createElement(B,{size:"20"}),"NURSE"]}),t("div",{className:"flex items-center gap-2",children:[o("h1",{className:"d-inline font-semibold text-indigo-900",children:a==null?void 0:a.name}),o("button",{className:"bg-blue-200 p-2 rounded-xl text-sm",onClick:m,children:"Logout"})]})]}),o("div",{className:"bg-white m-4 p-4 min-h-screen",children:d})]})]}):o(F,{})})}export{G as N};
