import{d as k,s as w,u as I,c as x,a as l,F as N,r as B,b as V,e as i,o,f,t as v,g as $,h as g,_ as j,i as A,j as h,k as y,l as F}from"./index-CLwnw2Y-.js";import{_ as E}from"./BackLink.vue_vue_type_style_index_0_lang-BBciAuXu.js";const G={class:"document-props"},O={class:"document-props__attr"},R={class:"document-props__value"},S=k({__name:"DocumentProps",props:{documentId:{}},emits:["getName","error"],setup(D,{emit:d}){const r=D,_=d,{attrDescription:a}=w(I()),p=()=>{const{getDocument:m}=V(),t=i(!1),s=i(),c=i({});return{fetchDoc:async()=>{try{t.value=!0;const u=await m(r.documentId);u&&(c.value=u.data,_("getName",c.value.ssa_name)),t.value=!1}catch(u){_("error",u),s.value=u}},doc:c,loading:t,error:s}},{fetchDoc:e,doc:n}=p();e();const b=x(()=>{const m=Object.keys(a.value);return Object.entries(n.value).filter(([t,s])=>m.includes(t)).map(([t,s])=>[a.value[t],$(t,s)])});return(m,t)=>(o(),l("table",G,[(o(!0),l(N,null,B(b.value,([s,c])=>(o(),l("tr",{key:s,class:"document-props__row"},[f("td",O,v(s),1),f("td",R,v(c),1)]))),128))]))}}),T={key:1,class:"document-view__error"},q=k({__name:"DocumentView",setup(D){const d=i(""),r=i(),a=(()=>{const e=F().params.id;return Array.isArray(e)?e[0]:e})();return(p,e)=>(o(),l(N,null,[g(E,{title:r.value?"На главную":void 0},null,8,["title"]),g(j,{title:d.value},null,8,["title"]),r.value?(o(),l("p",T,[y(" Документ с ID "),f("strong",null,'"'+v(h(a))+'"',1),y(" не найден ")])):(o(),A(S,{key:0,"document-id":h(a),onError:e[0]||(e[0]=n=>r.value=n),onGetName:e[1]||(e[1]=n=>d.value=n)},null,8,["document-id"]))],64))}});export{q as default};
