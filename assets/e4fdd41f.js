import{b as _,a2 as v}from"./index.js";import{_ as p,e as m,O as g,r as f,o as h,f as F,g as a,H as c,j as u,J as B,K as x}from"./75bbe58a.js";const S={name:"AppAlign",setup(){const l=_(),{onSaveTheme:o,theme:d}=v(),e=m({...d.value}),i=()=>{o(e.value)},r=(n,s)=>{e.value[n]=s,i()};return g(()=>{e.value={...l.$state.appConfig.theme}}),{qfrom:e,onChange:i,onSelectValue:r}}},t=l=>(B("data-v-842905a0"),l=l(),x(),l),b={class:"app-bg"},q={class:"item etab-theme"},A=t(()=>a("p",null,"Navigation Alignment Method",-1)),C=t(()=>a("div",{class:"sidebar"},[a("span",{class:"span"})],-1)),V=t(()=>a("div",{class:"tx-c"},"Alignment On The Left",-1)),k={class:"tx-c"},I=t(()=>a("div",{class:"sidebar"},[a("span",{class:"span"})],-1)),z=t(()=>a("div",{class:"tx-c"},"Alignment On The Right",-1)),y={class:"tx-c"};function E(l,o,d,e,i,r){const n=f("el-radio");return h(),F("section",b,[a("div",q,[A,a("div",{class:c(["alig-left",{active:e.qfrom.align=="left"}]),onClick:o[1]||(o[1]=s=>e.onSelectValue("align","left"))},[C,V,a("div",k,[u(n,{"model-value":e.qfrom.align,"onUpdate:model-value":o[0]||(o[0]=s=>e.qfrom.align=s),label:"left",size:"large"},null,8,["model-value"])])],2),a("div",{class:c(["alig-right",{active:e.qfrom.align=="right"}]),onClick:o[3]||(o[3]=s=>e.onSelectValue("align","right"))},[I,z,a("div",y,[u(n,{"model-value":e.qfrom.align,"onUpdate:model-value":o[2]||(o[2]=s=>e.qfrom.align=s),label:"right",size:"large"},null,8,["model-value"])])],2)])])}var U=p(S,[["render",E],["__scopeId","data-v-842905a0"]]);export{U as default};
