import{_ as r,r as n,c as S,w as t,o as V,d as c,a as o,t as u,b as i}from"./index.d4a83916.js";const b={name:"switchPage",data(){return{selectedSwitch_base:[],selectedSwitch_size:"",selectedSwitch_style:[],selectedSwitch_animate:[],code:`
         #--code{
              margin: 10px 0px;
              padding: 10px;
              border-radius: var(--BORDER-RADIUS);
              border: 1px solid -color('LEVEL-0');
              background-color: -color('LEVEL-1',1,0,0,-1);

              width: 100%;
              min-height: 400px;
          }
        `}},mounted(){},methods:{}},p={class:"grid g-10"},g={class:"row"},f=c("h4",{class:"anker"}," Switch ",-1),k={class:"flex flex-wrap g-20"},x=c("span",{class:"material-symbols-rounded"}," done ",-1),z=c("span",{class:"material-symbols-rounded"}," close ",-1),U=i(" Switch "),y=i(" Switch "),v=i(" Switch "),B=i(" Switch "),E=i(" Switch "),C=i(" Switch "),L={class:"full-width flex-centered p-10"},P={class:"row"},D=c("h4",{class:"anker"}," Size ",-1),N={class:"flex flex-wrap g-20"},R=i(" Switch "),A=i(" Switch "),H=i(" Switch "),j=i(" Switch "),q=i(" Switch "),I=i(" Switch "),O={class:"full-width flex-centered p-10"},T={class:"row"},F=c("h4",{class:"anker"}," Style ",-1),G={class:"flex flex-wrap col-12 g-20"},J=i(" Switch "),K=i(" Switch "),M=i(" Switch "),Q=i(" Switch "),W=i(" Switch "),X=i(" Switch "),Y=i(" this is the footer "),Z={class:"row"},$=c("h4",{class:"anker"}," Animate ",-1),ee={class:"flex flex-wrap col-12 g-20"},le=i(" Switch "),te=i(" Switch "),se=i(" 5 "),oe=i(" Switch "),ie=i(" 5 "),de=i(" this is the footer "),ce={class:"row"};function ne(_e,l,ae,he,e,ue){const d=n("gnk-switch"),_=n("gnkCard"),a=n("gnkButton"),h=n("gnk-badge"),m=n("gnkSyntaxHighlight"),w=n("gnk-Page");return V(),S(w,null,{default:t(()=>[c("div",p,[c("div",g,[o(_,{class:"col-12"},{title:t(()=>[f]),default:t(()=>[c("div",k,[o(d,{modelValue:e.selectedSwitch_base,"onUpdate:modelValue":l[0]||(l[0]=s=>e.selectedSwitch_base=s),value:{teste:"5",ola:5},size:"xl","hex-color":"dcd043"},{on:t(()=>[x]),off:t(()=>[z]),label:t(()=>[U]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_base,"onUpdate:modelValue":l[1]||(l[1]=s=>e.selectedSwitch_base=s),size:"l",checked:!0,"line-through":"",align:"left"},{label:t(()=>[y]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_base,"onUpdate:modelValue":l[2]||(l[2]=s=>e.selectedSwitch_base=s),size:"small",indeterminate:"",warning:""},{label:t(()=>[v]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_base,"onUpdate:modelValue":l[3]||(l[3]=s=>e.selectedSwitch_base=s),size:"mini"},{label:t(()=>[B]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_base,"onUpdate:modelValue":l[4]||(l[4]=s=>e.selectedSwitch_base=s),disabled:"",success:""},{label:t(()=>[E]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_base,"onUpdate:modelValue":l[5]||(l[5]=s=>e.selectedSwitch_base=s),busy:""},{label:t(()=>[C]),_:1},8,["modelValue"])])]),footer:t(()=>[c("div",L,u(e.selectedSwitch_base),1)]),_:1})]),c("div",P,[o(_,{class:"col-12"},{title:t(()=>[D]),default:t(()=>[c("div",N,[o(d,{size:"xl",modelValue:e.selectedSwitch_size,"onUpdate:modelValue":l[6]||(l[6]=s=>e.selectedSwitch_size=s),gradient:"",border:"",shadow:"",animate:"flip"},{label:t(()=>[R]),_:1},8,["modelValue"]),o(d,{size:"l",modelValue:e.selectedSwitch_size,"onUpdate:modelValue":l[7]||(l[7]=s=>e.selectedSwitch_size=s),checked:!0,"line-through":""},{label:t(()=>[A]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_size,"onUpdate:modelValue":l[8]||(l[8]=s=>e.selectedSwitch_size=s),indeterminate:"",warning:""},{label:t(()=>[H]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_size,"onUpdate:modelValue":l[9]||(l[9]=s=>e.selectedSwitch_size=s),size:"small"},{label:t(()=>[j]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_size,"onUpdate:modelValue":l[10]||(l[10]=s=>e.selectedSwitch_size=s),size:"mini",loading:"",success:""},{label:t(()=>[q]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_size,"onUpdate:modelValue":l[11]||(l[11]=s=>e.selectedSwitch_size=s),busy:""},{label:t(()=>[I]),_:1},8,["modelValue"])])]),footer:t(()=>[c("div",O,u(e.selectedSwitch_size),1)]),_:1})]),c("div",T,[o(_,{class:"col-12"},{title:t(()=>[F]),default:t(()=>[c("div",G,[o(d,{modelValue:e.selectedSwitch_style,"onUpdate:modelValue":l[12]||(l[12]=s=>e.selectedSwitch_style=s),circular:"",block:""},{label:t(()=>[J]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_style,"onUpdate:modelValue":l[13]||(l[13]=s=>e.selectedSwitch_style=s),square:"",block:"",checked:!0,"line-through":"",align:"left"},{label:t(()=>[K]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_style,"onUpdate:modelValue":l[14]||(l[14]=s=>e.selectedSwitch_style=s),border:"",block:"",warning:""},{label:t(()=>[M]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_style,"onUpdate:modelValue":l[15]||(l[15]=s=>e.selectedSwitch_style=s),gradient:"",block:""},{label:t(()=>[Q]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_style,"onUpdate:modelValue":l[16]||(l[16]=s=>e.selectedSwitch_style=s),shadow:"",block:"",success:""},{label:t(()=>[W]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_style,"onUpdate:modelValue":l[17]||(l[17]=s=>e.selectedSwitch_style=s),block:""},{label:t(()=>[X]),_:1},8,["modelValue"])])]),footer:t(()=>[o(a,{transparent:"",block:""},{default:t(()=>[Y]),_:1})]),_:1})]),c("div",Z,[o(_,{class:"col-12"},{title:t(()=>[$]),default:t(()=>[c("div",ee,[o(d,{modelValue:e.selectedSwitch_animate,"onUpdate:modelValue":l[18]||(l[18]=s=>e.selectedSwitch_animate=s),animate:"fade",block:""},{label:t(()=>[le]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_animate,"onUpdate:modelValue":l[19]||(l[19]=s=>e.selectedSwitch_animate=s),animate:"scale",block:"",checked:!0},{label:t(()=>[te]),badge:t(()=>[o(h,{success:"",position:"top-left"},{default:t(()=>[se]),_:1})]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_animate,"onUpdate:modelValue":l[20]||(l[20]=s=>e.selectedSwitch_animate=s),animate:"flip",warning:""},{label:t(()=>[oe]),badge:t(()=>[o(h,{success:"",position:"top-right"},{default:t(()=>[ie]),_:1})]),_:1},8,["modelValue"])])]),footer:t(()=>[o(a,{transparent:"",block:""},{default:t(()=>[de]),_:1})]),_:1})]),c("div",ce,[o(m,{code:e.code,language:"js"},null,8,["code"])])])]),_:1})}var we=r(b,[["render",ne]]);export{we as default};
