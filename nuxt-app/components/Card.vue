<template>
    <div class="container  mt-5 mx-auto " >
        <div class="mx-auto mb-5" ><h1 class="mx-auto text-center font-bold text-2xl" >ارسالی ها امروز </h1></div>
        <hr/>
   <div class="flex gap-5 items-center justify-center justify-items-center mt-5 " >
        <div    v-for="product in  productsData"  :key="product" class="group  hover:scale-110 transition-all duration-500 w-3/12 p-2 bg-gray-200 rounded-xl  flex flex-col items-center justify-items-center" >


            
            <div class="rounded-lg overflow-hidden flex items-center justify-items-center max-h-72" >
    <img class="" src='~/assets/image/cardImage.jpeg' >
</div>
<div class="flex flex-col items-center" >
    <h3>{{ product.title }}</h3>
   
</div>
<div class="grid grid-cols-3 " >
<div class="text-rose-500  col-span-2 text-xl font-bold" >{{ product.salePrice }}<span  class="text-gray-500 ml-5 text-sm font-extralight mr-1" >تومان</span></div>
<div class="text-rose-500 border-r-2 border-red-600 text-xl font-bold " >{{ product.dollerPrice }}<span class="text-gray-500 ml-1 text-sm font-extralight mr-5" >$</span></div>
</div>


<div class="mx-auto mt-5" ><button @dblclick="createdata"  @click="getData" class="font-extralight text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce bg-rose-700 rounded-2xl  mx-auto text-nowrap px-2 py-1" >سفارش این محصول</button></div>       
    </div>
</div>
</div>
</template>

<script setup>

let isAccess = ref(false)
const productsData = ref()
const {public:{apiBase}} = useRuntimeConfig();

import axios from "axios";

///

  function getData(){
console.log("get data");
try {
    axios.post(`${apiBase}/products`,{
   
        categoryId:5
   
    }).then((res)=>{
        
        productsData.value = res.data
        console.log(productsData.value);
        toastr.success("  باموفقیت انجام شد");
    })

  
} catch (error) {
console.log('err');
    console.log(error);
    toastr.error(" با خطا مواجه انجام شد");
}
}


onBeforeMount(()=>{
    getData()
})

</script>

<style lang="scss" scoped>

</style>