import{r as n,l as O,b as x,a as s,j as t}from"./index.f58de973.js";import"./react-confirm-alert.a960cfb7.js";import{S}from"./SearchInput.fbf5bece.js";import{A as p}from"./AdminSidebar.2d80ad59.js";import{T as I,a as R,b as r,c as y,d as c}from"./Thead.153a86c7.js";import{I as C}from"./IndexNo.9a14fcf3.js";import{T as j}from"./TotalNo.b321ab04.js";import{R as v}from"./ReactPagination.cf11bdc7.js";import"./index.esm.21d46d26.js";import"./index.esm.9dc20768.js";import"./index.esm.3440d2e7.js";import"./index.esm.21c75374.js";import"./Forbidden.62eadd33.js";function H(){n.exports.useContext(O);const[l,i]=n.exports.useState([]),[m,h]=n.exports.useState(1);n.exports.useEffect(()=>{x.get("/report?type=operation").then(e=>{i(e.data)})},[]);const o=e=>{x.get(`/report?type=operation&q=${e}`).then(a=>{i(a.data),h(1)})},d=10,f=m*d,P=f-d,b=l.slice(P,f),T=Math.ceil(l.length/d),N=e=>{h(e.selected+1)};return s(p,{children:[" ",s("div",{className:"bg-gray-100 p-8",children:[t("h1",{className:"font-bold mb-4 text-indigo-900 text-lg lg:text-xl",children:"OPERATION REPORT"}),s("div",{className:"flex justify-between items-center",children:[t(S,{onSearch:o}),s("div",{className:"items-center flex flex-col lg:flex-row",children:[t(j,{totalnumber:l==null?void 0:l.length}),t(v,{pageCount:T,handlePageClick:N})]})]}),s(I,{children:[s(R,{children:[t(C,{children:"#"}),t(r,{children:"Reg. Id"}),t(r,{children:"Patient"}),t(r,{children:"Operation Name"}),t(r,{children:"Surgeon"}),t(r,{children:"Date"}),t(r,{children:"Outcome Status"})]}),b.map((e,a)=>{var g,u;return s(y,{children:[t(c,{children:a+1*(m*d-9)}),t(c,{className:"font-bold",children:(g=e==null?void 0:e.patients[0])==null?void 0:g.registrationId}),t(c,{children:(u=e==null?void 0:e.patients[0])==null?void 0:u.name}),t(c,{children:e==null?void 0:e.description}),t(c,{children:e==null?void 0:e.staffname}),t(c,{children:e==null?void 0:e.date}),t(c,{children:e==null?void 0:e.outcomestatus})]},a)})]})]})]})}export{H as default};
