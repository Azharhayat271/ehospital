import{r as n,l as L,b as m,j as r,a as t,f as x}from"./index.f58de973.js";import{D as j}from"./DeleteButton.4f77d945.js";import{E as A}from"./EditButton.73344e14.js";import{B as M}from"./Button.401e0b30.js";import{I as h}from"./Input.2b19439f.js";import{S as W}from"./SearchInput.fbf5bece.js";import{S as $}from"./Select.20c0844e.js";import{h as k}from"./react-confirm-alert.a960cfb7.js";import{O as q,a as G}from"./OptionsTh.c75c39d4.js";import{T as H,a as z,b as p,c as J,d as c}from"./Thead.153a86c7.js";import{F as K}from"./FormLayout.d72bc2a5.js";import{T as Q}from"./Tabs.d7c11583.js";import{I as U}from"./IndexNo.9a14fcf3.js";import{T as X}from"./TotalNo.b321ab04.js";import{R as Y}from"./index.esm.9fff59ce.js";import{N as Z}from"./NurseSidebar.9d01e4f2.js";import{R as D}from"./ReactPagination.cf11bdc7.js";import{B as g}from"./ButtonPreloader.94c40e61.js";import"./index.esm.9dc20768.js";import"./index.esm.3440d2e7.js";import"./index.esm.21c75374.js";import"./Forbidden.62eadd33.js";function ie(){n.exports.useContext(L);const[N,I]=n.exports.useState([]),[a,f]=n.exports.useState([]),[P,T]=n.exports.useState(1),[w,l]=n.exports.useState(!1),[s,B]=n.exports.useState({patientid:"",bloodpressure:"",temperature:"",pulse:"",spo:"",weight:"",respirationrate:"",height:""});function d(e){B(o=>({...o,[e.target.name]:e.target.value}))}function b(){m.get("/vital_signs").then(e=>{f(e.data)}).catch(e=>{x.error(e.data)})}const O=e=>{e.preventDefault(),l(!0),m.post("/vital_signs",{patientid:s==null?void 0:s.patientid,bloodpressure:s==null?void 0:s.bloodpressure,temperature:s==null?void 0:s.temperature,pulse:s==null?void 0:s.pulse,spo:s==null?void 0:s.spo,weight:s==null?void 0:s.weight,respirationrate:s==null?void 0:s.respirationrate,height:s==null?void 0:s.height}).then(o=>{l(!1),b(),x.success(o.data)}).catch(o=>{l(!1),x.error(o.response.data)})};n.exports.useEffect(()=>{m.get("/patient").then(e=>{I(e.data)}),b()},[]);const _=e=>{m.get(`/vital_signs?q=${e}`).then(o=>{f(o.data),T(1)})},u=10,C=P*u,R=C-u,V=a.slice(R,C),F=Math.ceil(a.length/u),E=e=>{T(e.selected+1)};return r(Z,{children:r(Q,{label1:"Vital Signs",label2:"Add Vital Signs",content1:t("div",{children:[t("div",{className:"flex justify-between items-center",children:[r(W,{onSearch:_}),t("div",{className:"items-center flex flex-col lg:flex-row",children:[r(X,{totalnumber:a==null?void 0:a.length}),r(D,{pageCount:F,handlePageClick:E})]})]}),t(H,{children:[t(z,{children:[r(U,{children:"#"}),r(p,{children:"Reg. Id"}),r(p,{children:"Patient Name"}),r(p,{children:"Blood Pressure"}),r(p,{children:"Temperature"}),r(p,{children:"Pulse"}),t(p,{children:["SPO",r("sub",{children:"2"})]}),r(p,{children:"Weight"}),r(q,{children:"Options"})]}),V.map((e,o)=>{var i,y;return t(J,{children:[r(c,{children:o+1*(P*u-9)}),r(c,{className:"font-bold",children:(i=e==null?void 0:e.patients[0])==null?void 0:i.registrationId}),r(c,{children:(y=e==null?void 0:e.patients[0])==null?void 0:y.name}),r(c,{children:e!=null&&e.bloodpressure?e==null?void 0:e.bloodpressure:"---"}),r(c,{children:e!=null&&e.temperature?e==null?void 0:e.temperature:"---"}),r(c,{children:e!=null&&e.pulse?e==null?void 0:e.pulse:"---"}),r(c,{children:e!=null&&e.spo?e==null?void 0:e.spo:"---"}),r(c,{children:e!=null&&e.weight?e==null?void 0:e.weight:"---"}),t(G,{children:[t(A,{editFunction:`/nurse/edit_vitalSigns?edit=${e==null?void 0:e._id}`,children:["Edit",r(Y,{})]}),t(j,{path:"vital_signs",id:e==null?void 0:e._id,record:b,children:["Delete",r(k,{})]})]})]},o)})]})]}),content2:r(K,{formName:"ADD VITAL SIGNS",children:t("form",{onSubmit:O,children:[t($,{label:"Patient",name:"patientid",type:"number",onChange:d,children:[r("option",{value:"",children:"Select Patient"}),N.map((e,o)=>t("option",{value:e==null?void 0:e._id,children:[e==null?void 0:e.registrationId," - ",e==null?void 0:e.name]},o))]}),t("div",{className:"grid lg:grid-cols-2 gap-2",children:[r(h,{label:"Blood Pressure",type:"text",name:"bloodpressure",onChange:d}),r(h,{label:"Temperature",type:"text",name:"temperature",onChange:d}),r(h,{label:"Pulse",type:"text",name:"pulse",onChange:d}),r(h,{label:"SPO 2",type:"text",name:"spo",onChange:d}),r(h,{label:"Respiration Rate",type:"text",name:"respirationrate",onChange:d}),r(h,{label:"Weight",type:"text",name:"weight",onChange:d}),r(h,{label:"Height",type:"text",name:"height",onChange:d})]}),r(M,{children:w?r(g,{}):"Add Vital Signs"})]})})})})}export{ie as default};
