<template>
    <div class=" max-w-screen  mt-5 mx-auto " >



<div class="w-11/12 mx-auto" >
    <div class="mx-auto mb-5 max-w-80 " ><h1 class="mx-auto text-center font-bold text-2xl" >ارسالی ها امروز </h1></div>
        <hr/> 
   <div class=" grid grid-cols-2 md:grid-cols-3 gap-5 items-center justify-center  mx-auto mt-5 " >
    <ProductCard  v-for="product in  productsData"  :key="product" :productsData="product" ></ProductCard>
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