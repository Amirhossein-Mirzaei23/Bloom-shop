<template>
    <div   class="flex flex-wrap max-w-44 md:max-w-52 lg:max-w-60 group transition-all duration-500 p-2 bg-gray-200 bg-opacity-70 rounded-xl   items-center justify-items-center" >
            
        <div class="w-40 md:w-48 lg:w-72 rounded-lg overflow-hidden flex items-center justify-items-center max-h-72" >
<img class="w-36 md:w-44 lg:w-52 scale-125 m-auto" src='~/assets/image/cardImage.jpeg' >
</div>

<div class="flex flex-col items-center" >
    <h3>{{ product.productsData.title }}</h3>
    <h6>{{product.productsData.id}}</h6>
</div>

<div class="flex flex-nowrap text-xs  mx-auto gap-1 px-2" >
    
<div class="text-rose-500 text-nowrap text-xs   font-bold  md:text-sm lg:text-lg  text-center" >{{ product.productsData.salePrice }}
    <span  class="text-gray-500  text-xs font-extralight mr-1" >تومان</span>
</div>

<div class="text-rose-500 text-xs border-t-2  rounded-lg sm:border-r-2 border-red-600 md:text-sm lg:text-lg font-bold  text-end " >{{ product.productsData.dollerPrice }}<span class="text-gray-500 ml-1 text-sm font-extralight mr-5" >$</span>
</div>

</div>


<div class="mx-auto mt-5" ><button  @click="addToCart" class="font-extralight text-sm opacity-0 group-hover:opacity-100  animate__animated animate__pulse animate__infinite	 bg-rose-700 rounded-lg  mx-auto text-nowrap px-2 py-1 hover:tracking-tight duration-300 transition-all"  >سفارش این محصول</button></div>       
</div>
</template>

<script setup>

import axios from 'axios'

const {public:{apiBase}} = useRuntimeConfig();


const product = defineProps(['productsData'])
const user = JSON.parse(localStorage.getItem('user'))
function addToCart(){
    axios.post(`${apiBase}/userCart/addToCart`,{
        userId:user.userId,

        
        products:[{
            productId:product.productsData.id,
            name:product.productsData.title,
            price:product.productsData.salePrice,
            quantity:1
        }]
    }).then((res)=>{
toastr.success(res.data.state.msg)
    }).catch((err)=>{
        toastr.error(err.response.state.msg)
    })
}

</script>

<style lang="scss" scoped>

</style>