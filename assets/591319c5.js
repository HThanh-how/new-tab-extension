import{_ as d,d as r,r as l,a2 as c,a5 as m,o as _,f as g,g as a,j as u,k as v,t as f,F as n}from"./75bbe58a.js";import{A as E}from"./index.js";const b=r({name:"ChatgptMed",props:{appEdit:{type:Boolean,default:!1},app:{type:Object,default:()=>({icon:null,appName:null})}},setup(){return{onOpen:()=>{window.appStorage.emit(n.onOpen,{keyName:E.Chatgpt,data:{}})},onAppEdit:o=>{window.appStorage.emit(n.onAppEdit,o)}}}}),A={class:"img flex-cc"},C={class:"etab-app-box_name"};function O(e,p,o,w,y,h){const s=l("EtabImg"),i=c("edit");return m((_(),g("div",{class:"etab-app-box",onOnAppEdit:p[1]||(p[1]=(...t)=>e.onAppEdit&&e.onAppEdit(...t))},[a("div",{class:"etab-app-box_icon gpt",onClick:p[0]||(p[0]=v((...t)=>e.onOpen&&e.onOpen(...t),["stop"]))},[a("div",A,[u(s,{src:e.app.icon,class:"etab-app-box_img"},null,8,["src"])])]),a("div",C,f(e.app.appName),1)],32)),[[i,e.appEdit]])}var B=d(b,[["render",O],["__scopeId","data-v-3e6eae83"]]);export{B as default};