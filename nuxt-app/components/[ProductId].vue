<template>
    <div>
        <p>product </p>
    </div>
</template>

<script setup>


const productsData = ref()
const {public:{apiBase}} = useRuntimeConfig();
const router = useRoute()
import axios from "axios";


function getProductData(){
console.log("get data");
console.log(router.params.product);
try {
    axios.post(`${apiBase}/products`,{
        categoryId:router.params.CategoryId
    }).then((res)=>{
        
        productsData.value = res.data
        
        toastr.success("  باموفقیت انجام شد");
    })

  
} catch (error) {
console.log('err');
    console.log(error);
    toastr.error(" با خطا مواجه انجام شد");
}
}


onBeforeMount(()=>{
    getProductData()
   
})

</script>

<style lang="scss" scoped>

</style>