import{_ as r,r as n,c as S,w as s,o as V,a as c,b as o,t as h,d as i}from"./index.3f1aaf68.js";const b={name:"switchPage",data(){return{selectedSwitch_base:[],selectedSwitch_size:"",selectedSwitch_style:[],selectedSwitch_animate:[],code:`
         #--code{
              margin: 10px 0px;
              padding: 10px;
              border-radius: var(--BORDER-RADIUS);
              border: 1px solid -color('LEVEL-0');
              background-color: -color('LEVEL-1',1,0,0,-1);

              width: 100%;
              min-height: 400px;
          }
        `}},mounted(){},methods:{}},p={class:"grid g-10"},g=c("div",{class:"row"},[c("h2",{class:"header-anchor col-12 flex"},[c("a",{href:"/Switch"},"#"),i(" Base ")])],-1),f={class:"row"},k=c("h4",{class:"anker"}," Switch ",-1),x={class:"flex flex-wrap g-20"},z=c("span",{class:"material-symbols-rounded"}," done ",-1),U=c("span",{class:"material-symbols-rounded"}," close ",-1),y=i(" Switch "),v=i(" Switch "),B=i(" Switch "),E=i(" Switch "),C=i(" Switch "),L=i(" Switch "),P={class:"full-width flex-centered p-10"},D={class:"row"},N=c("h4",{class:"anker"}," Size ",-1),R={class:"flex flex-wrap g-20"},A=i(" Switch "),H=i(" Switch "),j=i(" Switch "),q=i(" Switch "),I=i(" Switch "),O=i(" Switch "),T={class:"full-width flex-centered p-10"},F={class:"row"},G=c("h4",{class:"anker"}," Style ",-1),J={class:"flex flex-wrap col-12 g-20"},K=i(" Switch "),M=i(" Switch "),Q=i(" Switch "),W=i(" Switch "),X=i(" Switch "),Y=i(" Switch "),Z=i(" this is the footer "),$={class:"row"},ee=c("h4",{class:"anker"}," Animate ",-1),le={class:"flex flex-wrap col-12 g-20"},te=i(" Switch "),se=i(" Switch "),oe=i(" 5 "),ie=i(" Switch "),de=i(" this is the footer "),ce={class:"row"};function ne(_e,l,ae,he,e,ue){const d=n("gnk-switch"),_=n("gnkCard"),a=n("gnkButton"),u=n("gnk-badge"),m=n("gnkSyntaxHighlight"),w=n("gnk-Page");return V(),S(w,null,{default:s(()=>[c("div",p,[g,c("div",f,[o(_,{class:"col-12"},{title:s(()=>[k]),default:s(()=>[c("div",x,[o(d,{modelValue:e.selectedSwitch_base,"onUpdate:modelValue":l[0]||(l[0]=t=>e.selectedSwitch_base=t),value:{teste:"5",ola:5},size:"xl","hex-color":"dcd043"},{on:s(()=>[z]),off:s(()=>[U]),label:s(()=>[y]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_base,"onUpdate:modelValue":l[1]||(l[1]=t=>e.selectedSwitch_base=t),size:"l",checked:!0,"line-through":"",align:"left"},{label:s(()=>[v]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_base,"onUpdate:modelValue":l[2]||(l[2]=t=>e.selectedSwitch_base=t),size:"small",indeterminate:"",warning:""},{label:s(()=>[B]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_base,"onUpdate:modelValue":l[3]||(l[3]=t=>e.selectedSwitch_base=t),size:"mini"},{label:s(()=>[E]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_base,"onUpdate:modelValue":l[4]||(l[4]=t=>e.selectedSwitch_base=t),disabled:"",success:""},{label:s(()=>[C]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_base,"onUpdate:modelValue":l[5]||(l[5]=t=>e.selectedSwitch_base=t),busy:""},{label:s(()=>[L]),_:1},8,["modelValue"])])]),footer:s(()=>[c("div",P,h(e.selectedSwitch_base),1)]),_:1})]),c("div",D,[o(_,{class:"col-12"},{title:s(()=>[N]),default:s(()=>[c("div",R,[o(d,{size:"xl",modelValue:e.selectedSwitch_size,"onUpdate:modelValue":l[6]||(l[6]=t=>e.selectedSwitch_size=t),gradient:"",border:"",shadow:"",animate:"flip"},{label:s(()=>[A]),_:1},8,["modelValue"]),o(d,{size:"l",modelValue:e.selectedSwitch_size,"onUpdate:modelValue":l[7]||(l[7]=t=>e.selectedSwitch_size=t),checked:!0,"line-through":""},{label:s(()=>[H]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_size,"onUpdate:modelValue":l[8]||(l[8]=t=>e.selectedSwitch_size=t),indeterminate:"",warning:""},{label:s(()=>[j]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_size,"onUpdate:modelValue":l[9]||(l[9]=t=>e.selectedSwitch_size=t),size:"small"},{label:s(()=>[q]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_size,"onUpdate:modelValue":l[10]||(l[10]=t=>e.selectedSwitch_size=t),size:"mini",loading:"",success:""},{label:s(()=>[I]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_size,"onUpdate:modelValue":l[11]||(l[11]=t=>e.selectedSwitch_size=t),busy:""},{label:s(()=>[O]),_:1},8,["modelValue"])])]),footer:s(()=>[c("div",T,h(e.selectedSwitch_size),1)]),_:1})]),c("div",F,[o(_,{class:"col-12"},{title:s(()=>[G]),default:s(()=>[c("div",J,[o(d,{modelValue:e.selectedSwitch_style,"onUpdate:modelValue":l[12]||(l[12]=t=>e.selectedSwitch_style=t),circular:"",block:""},{label:s(()=>[K]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_style,"onUpdate:modelValue":l[13]||(l[13]=t=>e.selectedSwitch_style=t),square:"",block:"",checked:!0,"line-through":"",align:"left"},{label:s(()=>[M]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_style,"onUpdate:modelValue":l[14]||(l[14]=t=>e.selectedSwitch_style=t),border:"",block:"",warning:""},{label:s(()=>[Q]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_style,"onUpdate:modelValue":l[15]||(l[15]=t=>e.selectedSwitch_style=t),gradient:"",block:""},{label:s(()=>[W]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_style,"onUpdate:modelValue":l[16]||(l[16]=t=>e.selectedSwitch_style=t),shadow:"",block:"",success:""},{label:s(()=>[X]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_style,"onUpdate:modelValue":l[17]||(l[17]=t=>e.selectedSwitch_style=t),block:""},{label:s(()=>[Y]),_:1},8,["modelValue"])])]),footer:s(()=>[o(a,{transparent:"",block:""},{default:s(()=>[Z]),_:1})]),_:1})]),c("div",$,[o(_,{class:"col-12"},{title:s(()=>[ee]),default:s(()=>[c("div",le,[o(d,{modelValue:e.selectedSwitch_animate,"onUpdate:modelValue":l[18]||(l[18]=t=>e.selectedSwitch_animate=t),animate:"fade",block:""},{label:s(()=>[te]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_animate,"onUpdate:modelValue":l[19]||(l[19]=t=>e.selectedSwitch_animate=t),animate:"scale",block:"",checked:!0},{label:s(()=>[se]),badge:s(()=>[o(u,{success:"",position:"top-left"},{default:s(()=>[oe]),_:1})]),_:1},8,["modelValue"]),o(d,{modelValue:e.selectedSwitch_animate,"onUpdate:modelValue":l[20]||(l[20]=t=>e.selectedSwitch_animate=t),animate:"flip",block:"",warning:""},{label:s(()=>[ie]),_:1},8,["modelValue"])])]),footer:s(()=>[o(a,{transparent:"",block:""},{default:s(()=>[de]),_:1})]),_:1})]),c("div",ce,[o(m,{code:e.code,language:"js"},null,8,["code"])])])]),_:1})}var we=r(b,[["render",ne]]);export{we as default};