import{r,ay as f,O as y,v as u,x as e,y as h,S as d,a1 as x,a2 as v,a3 as m,Y as g,t as n,$ as B,q as I}from"./CdehjIcY.js";import{_ as C}from"./CK_XYWk8.js";const D={class:"container mt-5 mx-auto"},k={class:"mx-auto mb-5"},$={class:"mx-auto text-center font-bold text-2xl"},b=e("hr",null,null,-1),j={class:"flex gap-5 items-center justify-center justify-items-center mt-5"},q={__name:"[CategoryId]",setup(R){r(!1);const a=r(),{public:{apiBase:c}}=I(),o=f();function p(){console.log("get data"),console.log(o.params.CategoryId);try{m.post(`${c}/products`,{categoryId:o.params.CategoryId}).then(t=>{a.value=t.data,console.log(a.value),g.success("  باموفقیت انجام شد")})}catch(t){console.log("err"),console.log(t),g.error(" با خطا مواجه انجام شد")}}let l=r("");function _(){m.get(`${c}/categories`).then(t=>{console.log(t.data),t.data.map(s=>{s.categoryId==o.params.CategoryId&&(l.value=s.title)})})}return y(()=>{p(),_()}),(t,s)=>(n(),u("div",D,[e("div",k,[e("h1",$,h(d(l)),1)]),b,e("div",j,[(n(!0),u(x,null,v(d(a),i=>(n(),B(C,{key:i,productsData:i},null,8,["productsData"]))),128))])]))}};export{q as default};
