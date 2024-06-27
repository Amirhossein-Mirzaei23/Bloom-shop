<template>
    <div   class="group  hover:scale-110 transition-all duration-500 w-5/12 md:w-3/12 p-2 bg-gray-200 rounded-xl  flex flex-col items-center justify-items-center" >
            
        <div class="rounded-lg overflow-hidden flex items-center justify-items-center max-h-72" >
<img class="" src='~/assets/image/cardImage.jpeg' >
</div>
<div class="flex flex-col items-center" >
<h3>{{ product.productsData.title }}</h3>

</div>
<div class="sm:grid grid-cols-3 text-xs  mx-auto" >
<div class="text-rose-500  text-xs col-span-2 xl:text-xl font-bold  md:text-sm lg:text-lg  text-center" >{{ product.productsData.salePrice }}
    <span  class="text-gray-500 ml-5 text-sm font-extralight mr-1" >تومان</span>
</div>
<div class="text-rose-500 text-xs border-t-2 rounded-lg sm:border-r-2 border-red-600 md:text-sm lg:text-lg xl:text-xl font-bold  text-end " >{{ product.productsData.dollerPrice }}<span class="text-gray-500 ml-1 text-sm font-extralight mr-5" >$</span></div>
</div>


<div class="mx-auto mt-5" ><button  @click="getData" class="font-extralight text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce bg-rose-700 rounded-2xl  mx-auto text-nowrap px-2 py-1" >سفارش این محصول</button></div>       
</div>
</template>

<script setup>

const product = defineProps(['productsData'])

</script>

<style lang="scss" scoped>

</style>