var d=Object.defineProperty;var l=(e,o,a)=>o in e?d(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a;var s=(e,o,a)=>(l(e,typeof o!="symbol"?o+"":o,a),a);import{_ as c,d as m,r as b,a2 as u,a5 as E,o as f,f as g,g as p,j as v,ad as h,t as w,k as A,F as y}from"./75bbe58a.js";import{u as C}from"./acf2bb49.js";const _=new class{constructor(){s(this,"onTabByUrl",e=>chrome.tabs.query({url:e}))}},k=m({...C,name:"EtabChromeMin",setup(){return{onOpen:async a=>{if(!a.url)return;const t=await _.onTabByUrl(a.url);t.length<1?chrome.tabs.create({url:a.url}):chrome.tabs.highlight({windowId:t[0].windowId,tabs:t[0].index})},onAppEdit:a=>{window.appStorage.emit(y.onAppEdit,a)}}}}),B={class:"etab-app-box_name"};function $(e,o,a,t,I,O){const r=b("EtabImg"),i=u("edit");return E((f(),g("div",{class:"etab-app-box",onOnAppEdit:o[0]||(o[0]=(...n)=>e.onAppEdit&&e.onAppEdit(...n)),onClick:o[1]||(o[1]=A(n=>e.onOpen(e.app),["stop"]))},[p("div",{class:"etab-app-box_icon",style:h({"background-color":e.app.bg})},[v(r,{class:"etab-app-box_img",src:e.app.icon},null,8,["src"])],4),p("div",B,w(e.app.appName),1)],32)),[[i,e.appEdit]])}var S=c(k,[["render",$]]);export{S as default};
