import{t as r,v as d,x as t,y as n,B as _,r as i,ax as y,O as v,S as x,au as b,av as D,aw as g,Z as $,l as B}from"./DrY8iZLW.js";import{t as f}from"./DEH0i9pV.js";import{_ as C}from"./VRDiWWpd.js";const I={class:"group hover:scale-110 transition-all duration-500 w-3/12 p-2 bg-gray-200 rounded-xl flex flex-col items-center justify-items-center"},k=t("div",{class:"rounded-lg overflow-hidden flex items-center justify-items-center max-h-72"},[t("img",{class:"",src:C})],-1),j={class:"flex flex-col items-center"},w={class:"grid grid-cols-3"},T={class:"text-rose-500 col-span-2 text-xl font-bold"},N=t("span",{class:"text-gray-500 ml-5 text-sm font-extralight mr-1"},"تومان",-1),P={class:"text-rose-500 border-r-2 border-red-600 text-xl font-bold"},R=t("span",{class:"text-gray-500 ml-1 text-sm font-extralight mr-5"},"$",-1),S={class:"mx-auto mt-5"},V={__name:"productCard",props:["productsData"],setup(u){const e=u;return(a,o)=>(r(),d("div",I,[k,t("div",j,[t("h3",null,n(e.productsData.title),1)]),t("div",w,[t("div",T,[_(n(e.productsData.salePrice),1),N]),t("div",P,[_(n(e.productsData.dollerPrice),1),R])]),t("div",S,[t("button",{onClick:o[0]||(o[0]=(...c)=>a.getData&&a.getData(...c)),class:"font-extralight text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce bg-rose-700 rounded-2xl mx-auto text-nowrap px-2 py-1"},"سفارش این محصول")])]))}},E={class:"container mt-5 mx-auto"},F={class:"mx-auto mb-5"},H={class:"mx-auto text-center font-bold text-2xl"},L=t("hr",null,null,-1),M={class:"flex gap-5 items-center justify-center justify-items-center mt-5"},z={__name:"[CategoryId]",setup(u){i(!1);const e=i(),{public:{apiBase:a}}=B(),o=y();function c(){console.log("get data"),console.log(o.params.CategoryId);try{g.post(`${a}/products`,{categoryId:o.params.CategoryId}).then(s=>{e.value=s.data,console.log(e.value),f.success("  باموفقیت انجام شد")})}catch(s){console.log("err"),console.log(s),f.error(" با خطا مواجه انجام شد")}}let m=i("");function h(){g.get(`${a}/categories`).then(s=>{console.log(s.data),s.data.map(l=>{l.categoryId==o.params.CategoryId&&(m.value=l.title)})})}return v(()=>{c(),h()}),(s,l)=>(r(),d("div",E,[t("div",F,[t("h1",H,n(x(m)),1)]),L,t("div",M,[(r(!0),d(b,null,D(x(e),p=>(r(),$(V,{key:p,productsData:p},null,8,["productsData"]))),128))])]))}};export{z as default};
