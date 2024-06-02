import{R as Z,n as x,Q as H,i as ee,u as oe}from"./index.js";import{d as G,E as te,o as _,f as k,g as u,a1 as ne,e as C,a as U,O as Q,_ as j,r as p,j as l,I as r,t as D,H as S,W as P,a8 as z,k as g,l as M,bk as se,bl as le,bm as J,b as ae,c as V,aa as B,P as R,a2 as de,a5 as re,J as ue,K as ie,F as ce}from"./75bbe58a.js";import{E as pe,a as _e,b as ve,c as fe}from"./adcee456.js";import"./04ee1aa4.js";import{f as W,m as me,u as he}from"./ac86e61a.js";import{A as ke}from"./bafbb655.js";import"./9699d909.js";const Fe=G({name:"CaretBottom"}),we={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Ce=u("path",{fill:"currentColor",d:"m192 384 320 384 320-384z"},null,-1),Ee=[Ce];function ye(e,a,d,v,t,f){return _(),k("svg",we,Ee)}var K=te(Fe,[["render",ye]]);const $e=e=>{const a=[],d=v=>{v.forEach(t=>{const f=Z(t.dateAdded,"MM-DD HH:mm");t.children||a.push({logo:t.url,dateAdded:f,dateGroupModified:t.dateGroupModified,url:t.url,id:t.id,index:t.index,parentId:t.parentId,title:t.title}),t.children&&d(t.children||[])})};return d(e),a},be=e=>{const a=[];return e.forEach(d=>{const v={dateAdded:d.dateAdded,dateGroupModified:d.dateGroupModified,id:d.id,index:d.index,parentId:d.parentId,title:d.title,children:[]};d.children&&d.children.forEach(t=>{t.children&&v.children.push({dateAdded:t.dateAdded,dateGroupModified:t.dateGroupModified,id:t.id,index:t.index,parentId:t.parentId,title:t.title})}),a.push(v)}),a.filter(d=>d.title!=="Favorite Clip Is Deleted")};const ge=G({name:"ESelect",props:{id:null,list:{type:Object,default:()=>[]}},components:{Folder:W,ArrowDown:ne,CaretBottom:K},setup(e,a){const d=C(!1),v=C(null),t=C({}),f=U(()=>{let s=null;return e.list.find(y=>{const F=y.children.find(o=>o.id===e.id);return F?(s=F,!0):y.id===e.id?(s=y,!0):!1}),s?s.title:"Please Choose"}),m=s=>{t.value[s]?t.value[s]=!1:t.value[s]=!0,a.emit("onChange",{parentId:s})};return Q(()=>{v.value.parentNode.parentNode.parentNode.parentNode.addEventListener("click",s=>{v.value.contains(s.target)||(d.value=!1)})}),{text:f,show:d,onOpen:m,openIds:t,dom:v}}}),Be={class:"select-warp",ref:"dom"},Ie={class:"ml-10"},Ae={key:0,class:"select mt-10 pd"},De=["onClick"],Se={key:0,class:"options"},Me=["onClick"],Oe={class:"ml-10 title row-1"};function Ne(e,a,d,v,t,f){const m=p("Folder"),s=p("el-icon"),y=p("ArrowDown"),F=p("CaretBottom");return _(),k("div",Be,[u("div",{class:"select-input pd flex-c br1",onClick:a[0]||(a[0]=o=>e.show=!e.show)},[l(s,{size:24},{default:r(()=>[l(m)]),_:1}),u("span",Ie,D(e.text),1),u("span",{class:S(["action",{"action-show":e.show}])},[l(s,{size:14},{default:r(()=>[l(y)]),_:1})],2)]),e.show?(_(),k("div",Ae,[(_(!0),k(P,null,z(e.list,(o,w)=>(_(),k("div",{class:"select-input",key:w},[u("span",{class:"pl-10",onClick:g(h=>e.onOpen(o.id),["stop"])},[l(s,{class:S({"select-open":e.openIds[o.id],"select-hide":!e.openIds[o.id],hidden:o.children.length<1})},{default:r(()=>[l(F)]),_:2},1032,["class"]),u("span",{class:S(["title name",{active:e.id===o.id}])},D(o.title),3)],8,De),e.openIds[o.id]?(_(),k("ul",Se,[(_(!0),k(P,null,z(o.children,h=>(_(),k("li",{class:S(["option row-1 flex-c",{active:e.id===h.id}]),key:h.id,onClick:g(I=>e.onOpen(h.id),["stop"])},[l(s,{size:24},{default:r(()=>[l(m)]),_:1}),u("span",Oe,D(h.title),1)],10,Me))),128))])):M("",!0)]))),128))])):M("",!0)],512)}var Le=j(ge,[["render",Ne],["__scopeId","data-v-406204a0"]]);const Ue=G({name:"BooksUpdate",props:{info:{type:Object,default:()=>({})},list:{type:Array,default:()=>[]}},components:{ESelect:Le,ElForm:se,ElFormItem:le,ElInput:J},setup(e,a){const d=C(!0),v=C(null),t=C({children:"children",label:"title"}),f=$=>["updateFolder","newFolder","move"].includes($),m=U(()=>f(o.value.action)),s=U(()=>o.value.action!=="move"),y=U(()=>o.value.action==="newFolder"?e.list.map($=>({...$,children:[]})):e.list),F=U(()=>({newFolder:"New Directory",updateFolder:"Edit Directory",update:"Editor",move:"Mobile Bookmark"})[o.value.action]),o=C({title:null,id:null,action:null,parentId:null}),w=ae({title:[{required:!0,message:"Please Enter The Name",trigger:"blur"},{validator:($,O,b)=>{const N=f(o.value.action)?10:30;o.value.title?o.value.title>N?b(`Support${N}Character`):b():b("Please Enter The Name")},trigger:"blur"}],parentId:[{required:!0,validator:($,O,b)=>{o.value.action!="updateFolder"||!o.value.id?o.value.parentId?b():b("Please Choose书签Table Of Contents"):b()}}]}),h=()=>{a.emit("onClose")},I=()=>{v.value.validate($=>{$&&a.emit("onSave",{...e.info,...o.value})})},A=$=>{o.value.parentId=$.parentId};return Q(()=>{o.value.title=e.info.title,o.value.id=e.info.id,o.value.parentId=e.info.parentId,o.value.action=e.info.action}),{visible:d,onClose:h,onChange:A,qfrom:o,title:F,defaultProps:t,rules:w,tabs:y,ruleFormRef:v,onSave:I,isShow:m,isShowTitle:s}}}),Ve={class:"book-warp"},qe={class:"bts flex"},Pe=B("Cancel"),ze=B("Sure");function Ge(e,a,d,v,t,f){const m=p("el-input"),s=p("el-form-item"),y=p("ESelect"),F=p("el-form"),o=p("EtabBt"),w=p("EtabModel");return _(),V(w,{title:e.title,customClass:"book-update",modelValue:e.visible,"onUpdate:modelValue":a[1]||(a[1]=h=>e.visible=h),destroyOnClose:"",width:"400px",onClosed:e.onClose},{default:r(()=>[u("section",Ve,[l(F,{ref:"ruleFormRef",rules:e.rules,labelPosition:"top",labelWidth:"100px",model:e.qfrom},{default:r(()=>[e.isShowTitle?(_(),V(s,{key:0,label:"Name",prop:"title"},{default:r(()=>[l(m,{autofocus:"",modelValue:e.qfrom.title,"onUpdate:modelValue":a[0]||(a[0]=h=>e.qfrom.title=h),placeholder:"Please Enter The Name"},null,8,["modelValue"])]),_:1})):M("",!0),e.isShow?(_(),V(s,{key:1,label:"Table Of Contents",prop:"parentId"},{default:r(()=>[l(y,{list:e.tabs,id:e.qfrom.parentId,props:e.defaultProps,onOnChange:e.onChange},null,8,["list","id","props","onOnChange"])]),_:1})):M("",!0)]),_:1},8,["rules","model"]),u("div",qe,[l(o,{class:"mr-10",onOnClick:e.onClose},{default:r(()=>[Pe]),_:1},8,["onOnClick"]),l(o,{class:"ml-10",type:"primary",onOnClick:e.onSave},{default:r(()=>[ze]),_:1},8,["onOnClick"])])])]),_:1},8,["title","modelValue","onClosed"])}var Te=j(Ue,[["render",Ge],["__scopeId","data-v-b7b96564"]]);const Re=G({name:"BooksList",components:{MoreFilled:me,BooksUpdate:Te,ElDropdown:pe,ElDropdownMenu:_e,ElDropdownItem:ve,ElInput:J,Folder:W,CaretBottom:K,CirclePlus:fe},setup(){const e=C("/static/images/app/default.png"),a=C([]),d=C([]),v=C(!1),t=C(!1),f=C(""),m=C({}),s=he(),y=x(),F=C({keyName:null}),o=C({}),w=async()=>{v.value=!0;const i=(await s.onQuery())[0].children||[],L=be(i);a.value=L,!f.value&&L.length>0&&(f.value=L[0].id),A()},h=U(()=>F.value.keyName?d.value.filter(n=>{const{keyName:i}=F.value;return i?H(n.title).indexOf(H(F.value.keyName))!==-1:!0}).sort((n,i)=>n.dateAdded-i.dateAdded):d.value),I=async n=>{const i=await s.onQuery({id:n,query:F.value.keyName});return $e(i)},A=async()=>{v.value=!0,d.value=[],d.value=await I(f.value),v.value=!1},$=()=>{t.value=!0,o.value={parentId:void 0,index:void 0,action:"newFolder"}},O=async n=>{try{await s.onRemove(n),R.success("Successfully Deleted")}catch{R.error("Failed To Delete")}},b=async n=>{const i=await ee.getAppIcons();ke(i,n,y.$state.appGroupId,"new")},N=async n=>{const i=await I(n.id);if(i&&i.length>0){R.error("Failed To Delete,当前Table Of Contents存在书签");return}await O(n.id),f.value==n.id&&(f.value=""),w()},c=async(n,i)=>{switch(n){case"move":o.value={...i,action:n},t.value=!0;break;case"remove":const L=h.value.findIndex(Y=>Y.id===i.id);await O(i.id),d.value.splice(L,1);break;case"update":o.value={...i,action:n},t.value=!0;break;case"updateFolder":o.value={...i,action:n},t.value=!0;break;case"removeFolder":N(i);break;case"add":b(i);break}},q=n=>{try{const i={title:n.title};n.action==="newFolder"?(i.parentId=n.parentId,s.onAdd(i)):n.action==="updateFolder"?s.onUpdate(n.id,i):n.action==="update"?s.onUpdate(n.id,{url:n.url,title:n.title}):n.action==="move"&&s.onMove(n.id,n.parentId),t.value=!1,w()}catch{t.value=!1,R.error("Failed")}},E=n=>{f.value=n,A()},T=n=>{m.value[n]?m.value[n]=!1:m.value[n]=!0,f.value=n};return Q(()=>{w()}),{onFolder:E,onNewFolder:$,onQuery:A,onAction:c,onSave:q,onOpenFolder:T,isUpdate:t,folders:a,tableList:d,loading:v,openIds:m,tabId:f,qform:F,marksList:h,updateInfo:o,defaPic:e}}}),X=e=>(ue("data-v-0924e06b"),e=e(),ie(),e),je={class:"etab-books-list"},Qe=X(()=>u("div",{class:"header flex-c"},[u("div",{class:"app-name"},"Bookmark Management")],-1)),He={class:"flex"},Je={class:"left"},We=X(()=>u("span",{class:"flex1"},"New Directory",-1)),Ke={class:"folders"},Xe=["onClick"],Ye={key:0,class:"folder_list"},Ze=["onClick"],xe={class:"ml-10 title row-1"},eo={class:"dropdown"},oo=B(" Edit "),to=B(" Delete "),no={class:"right"},so={class:"query"},lo={class:"marks"},ao={class:"mark-warp flex-c"},ro={class:"mark_name"},uo=["href"],io={class:"mark_time"},co={class:"dropdown"},po=B(" Add To Homepage "),_o=B(" Move "),vo=B(" Edit "),fo=B(" Delete ");function mo(e,a,d,v,t,f){const m=p("CirclePlus"),s=p("el-icon"),y=p("CaretBottom"),F=p("Folder"),o=p("MoreFilled"),w=p("el-dropdown-item"),h=p("el-dropdown-menu"),I=p("el-dropdown"),A=p("el-input"),$=p("EtabImg"),O=p("EtabEmpty"),b=p("BooksUpdate"),N=de("loading");return _(),k("section",je,[Qe,u("div",He,[u("div",Je,[u("div",{class:"new-folder folder mb-10 flex-c",onClick:a[0]||(a[0]=(...c)=>e.onNewFolder&&e.onNewFolder(...c))},[We,l(s,{class:"ml-10",size:20},{default:r(()=>[l(m)]),_:1})]),u("div",Ke,[(_(!0),k(P,null,z(e.folders,(c,q)=>(_(),k("div",{key:q,class:"folder"},[u("span",{class:S(["folder_title",{active:e.tabId===c.id}])},[l(s,{onClick:g(E=>e.onOpenFolder(c.id),["stop"]),class:S({open:e.openIds[c.id],hidden:c.children.length<1})},{default:r(()=>[l(y)]),_:2},1032,["onClick","class"]),u("span",{class:"title",onClick:g(E=>e.onFolder(c.id),["stop"])},D(c.title),9,Xe)],2),e.openIds[c.id]?(_(),k("ul",Ye,[(_(!0),k(P,null,z(c.children,E=>(_(),k("li",{class:S(["li row-1 flex-c",{active:e.tabId===E.id}]),key:E.id,onClick:g(T=>e.onFolder(E.id),["stop"])},[l(s,null,{default:r(()=>[l(F)]),_:1}),u("span",xe,D(E.title),1),l(I,{effect:"dark",trigger:"click"},{dropdown:r(()=>[l(h,null,{default:r(()=>[l(w,{onClick:g(T=>e.onAction("updateFolder",E),["stop"])},{default:r(()=>[oo]),_:2},1032,["onClick"]),l(w,{onClick:g(T=>e.onAction("removeFolder",E),["stop"])},{default:r(()=>[to]),_:2},1032,["onClick"])]),_:2},1024)]),default:r(()=>[u("span",eo,[l(s,null,{default:r(()=>[l(o)]),_:1})])]),_:2},1024)],10,Ze))),128))])):M("",!0)]))),128))])]),u("div",no,[u("div",so,[l(A,{class:"w-50 m-2",size:"large",placeholder:"Enter Keyword Search",modelValue:e.qform.keyName,"onUpdate:modelValue":a[1]||(a[1]=c=>e.qform.keyName=c),clearable:""},null,8,["modelValue"])]),re((_(),k("div",lo,[e.marksList.length>0?(_(!0),k(P,{key:0},z(e.marksList,(c,q)=>(_(),k("div",{key:q,class:"mark"},[u("div",ao,[l($,{default:e.defaPic,src:c.logo,class:"mark_icon",isIcon:!0},null,8,["default","src"]),u("p",ro,[u("a",{href:c.url,target:"_blank"},D(c.title),9,uo)]),u("p",io,D(c.dateAdded),1),l(I,{effect:"dark",trigger:"click"},{dropdown:r(()=>[l(h,null,{default:r(()=>[l(w,{onClick:g(E=>e.onAction("add",c),["stop"])},{default:r(()=>[po]),_:2},1032,["onClick"]),l(w,{onClick:g(E=>e.onAction("move",c),["stop"])},{default:r(()=>[_o]),_:2},1032,["onClick"]),l(w,{onClick:g(E=>e.onAction("update",c),["stop"])},{default:r(()=>[vo]),_:2},1032,["onClick"]),l(w,{onClick:g(E=>e.onAction("remove",c),["stop"])},{default:r(()=>[fo]),_:2},1032,["onClick"])]),_:2},1024)]),default:r(()=>[u("span",co,[l(s,null,{default:r(()=>[l(o)]),_:1})])]),_:2},1024)])]))),128)):e.loading?M("",!0):(_(),V(O,{key:1,description:"No Data"}))])),[[N,e.loading]])])]),e.isUpdate?(_(),V(b,{key:0,list:e.folders,info:e.updateInfo,onOnSave:e.onSave,onOnClose:a[2]||(a[2]=c=>e.isUpdate=!1)},null,8,["list","info","onOnSave"])):M("",!0)])}var ho=j(Re,[["render",mo],["__scopeId","data-v-0924e06b"]]);const ko=G({name:"Modal",props:{app:{type:Object,default:()=>({icon:null,name:null,appName:null,url:null})}},components:{BooksList:ho},setup(){const{align:e}=oe();return{onClose:()=>{window.appStorage.emit(ce.onClose)},align:e}}}),Fo=B("> ");function wo(e,a,d,v,t,f){const m=p("BooksList"),s=p("el-drawer");return _(),V(s,{"destroy-on-close":"",modelValue:!0,size:500,direction:e.align==="right"?"ltr":"rtl",showClose:!1,appendToBody:"",customClass:"etab-public-modal etab-books-modal",onClosed:e.onClose},{default:r(()=>[l(m),Fo]),_:1},8,["direction","onClosed"])}var Io=j(ko,[["render",wo]]);export{Io as default};
