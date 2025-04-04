import{r as o,l as O,b as v,j as a,a as t,F as T}from"./index.f58de973.js";import{D as S}from"./DeleteButton.4f77d945.js";import{E as y}from"./EditButton.73344e14.js";import{S as A}from"./SearchInput.fbf5bece.js";import{h as C}from"./react-confirm-alert.a960cfb7.js";import{O as E,a as M}from"./OptionsTh.c75c39d4.js";import{T as N,a as j,b as h,c as R,d as l}from"./Thead.153a86c7.js";import{I as $}from"./IndexNo.9a14fcf3.js";import{V as i}from"./ViewButton.a73d82a6.js";import{T as B}from"./TotalNo.b321ab04.js";import{R as I}from"./ReactPagination.cf11bdc7.js";import{R as u}from"./index.esm.9fff59ce.js";import{P as V}from"./PharmacistSidebar.50536cc2.js";import"./ButtonPreloader.94c40e61.js";import"./index.esm.21d46d26.js";import"./Forbidden.62eadd33.js";function ae(){const[d,g]=o.exports.useState([]),[f,c]=o.exports.useState(1),{user:s}=o.exports.useContext(O);o.exports.useEffect(()=>{v.get("/prescription").then(e=>{g(e.data)})},[]);const D=e=>{v.get(`/prescription?q=${e}`).then(m=>{g(m.data),c(1)})},n=10,x=f*n,F=x-n,_=d.slice(F,x),r=Math.ceil(d.length/n),w=e=>{c(e.selected+1)};return a(V,{children:t("div",{className:"p-8 bg-gray-100",children:[t("div",{className:"flex justify-between items-center",children:[a(A,{onSearch:D}),t("div",{className:"items-center flex flex-col lg:flex-row",children:[a(B,{totalnumber:d==null?void 0:d.length}),a(I,{pageCount:r,handlePageClick:w})]})]}),t(N,{children:[t(j,{children:[a($,{children:"#"}),a(h,{children:"Patient"}),a(h,{children:"Date"}),a(h,{children:"Drugs Amount"}),a(h,{children:"Doctor"}),a(E,{children:"Options"})]}),_.map((e,m)=>{var P,b;return t(R,{children:[a(l,{children:m+1*(f*n-9)}),a(l,{children:(P=e==null?void 0:e.patients[0])==null?void 0:P.name}),a(l,{children:e==null?void 0:e.date}),t(l,{children:["\u20A6",e==null?void 0:e.drugamount]}),a(l,{children:(b=e==null?void 0:e.doctor[0])==null?void 0:b.name}),t(M,{children:[a(i,{style:"bg-green-600 hover:bg-green-900",viewFunction:`/pharmacist/add_amount?edit=${e==null?void 0:e._id}`,children:e!=null&&e.drugamount?"Update Amount":t(T,{children:[a(u,{}),"Add Amount"]})}),t(i,{style:"bg-indigo-800 hover:bg-indigo-400",viewFunction:`/pharmacist/view_medications?edit=${e==null?void 0:e._id}`,children:[a(u,{}),"View Medication"]}),(s==null?void 0:s._id)===(e==null?void 0:e.doctorid)&&t(T,{children:[t(y,{editFunction:`/doctor/edit_prescription?edit=${e==null?void 0:e._id}`,children:["Edit",a(u,{})]}),t(S,{deleteFunction:()=>{handleDelete(e==null?void 0:e._id)},children:["Delete",a(C,{})]})]})]})]},m)})]})]})})}export{ae as default};
