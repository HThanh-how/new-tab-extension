import{e as d,O as i,_ as u,r as _,o as r,f as t,W as p,a8 as g,H as C,ad as f,j as b}from"./75bbe58a.js";import{E as h}from"./3f4c5204.js";import"./04ee1aa4.js";import"./index.js";import"./ceaf704c.js";import"./8e76c846.js";const E=["#EE0FEA","rgb(46, 204, 113)","rgb(51, 197, 197)","rgb(155, 89, 182)","rgb(241, 196, 15)","rgb(230, 126, 34)","rgb(231, 76, 60)"],k={name:"EtabColor",props:{modelValue:{type:String,default:null}},components:{ElColorPicker:h},emits:["update:modelValue","onChange"],setup(s,a){const e=d([]),o=n=>{a.emit("update:modelValue",n),a.emit("onChange",n)};return i(()=>{e.value=[s.modelValue,...E].splice(0,7)}),{onChange:o,colors:e}}},v={class:"colors"},V=["onClick"];function y(s,a,e,o,n,x){const c=_("ElColorPicker");return r(),t("div",v,[(r(!0),t(p,null,g(o.colors,(l,m)=>(r(),t("span",{key:m,class:C(["color-item",{"color-item-select":l===e.modelValue}]),style:f({"background-color":l}),onClick:P=>o.onChange(l)},null,14,V))),128)),b(c,{modelValue:e.modelValue,onChange:o.onChange},null,8,["modelValue","onChange"])])}var H=u(k,[["render",y],["__scopeId","data-v-6b31afe7"]]);export{H as default};