import{r as o,ap as f,x as h,c as u,a as e,t as x,B as d,N as y,O as B,P as m,J as p,o as r,Q as I,L as v}from"./BVe1ZgQm.js";import{_ as C}from"./DTkepNGw.js";const D={class:"container mt-5 mx-auto"},k={class:"mx-auto mb-5"},b={class:"mx-auto text-center font-bold text-2xl"},$=e("hr",null,null,-1),j={class:"flex gap-5 items-center justify-center justify-items-center mt-5"},T={__name:"[CategoryId]",setup(L){o(!1);const n=o(),{public:{apiBase:c}}=v(),a=f();function _(){console.log("get data"),console.log(a.params.CategoryId);try{m.post(`${c}/products`,{categoryId:a.params.CategoryId}).then(t=>{n.value=t.data,p.success("  باموفقیت انجام شد")})}catch(t){console.log("err"),console.log(t),p.error(" با خطا مواجه انجام شد")}}let l=o("");function g(){m.get(`${c}/categories`).then(t=>{t.data.map(s=>{s.categoryId==a.params.CategoryId&&(l.value=s.title)})})}return h(()=>{_(),g()}),(t,s)=>(r(),u("div",D,[e("div",k,[e("h1",b,x(d(l)),1)]),$,e("div",j,[(r(!0),u(y,null,B(d(n),i=>(r(),I(C,{key:i,productsData:i},null,8,["productsData"]))),128))])]))}};export{T as default};
