import{r as i,a as d,j as e}from"./index.f58de973.js";function m({label1:l,content1:o,label2:r,content2:s}){const n=[{label:l,content:o},{label:r,content:s}],[a,c]=i.exports.useState(0);return d("div",{children:[e("div",{className:"flex3 space-x-2 border-b-2 border-gray-200",children:n.map((b,t)=>e("button",{className:`py-2 px-4 transition-colors duration-300 text-base font-semibold ${t===a?"bg-white":"bg-gray-200 hover:border-gray-200"}`,onClick:()=>c(t),children:b.label},t))}),e("div",{className:"p-8 bg-gray-100",children:e("div",{children:n[a].content})})]})}export{m as T};
