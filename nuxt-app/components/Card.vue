<template>
    <div class="container  mt-5 mx-auto " >
        <div class="mx-auto mb-5" ><h1 class="mx-auto text-center font-bold text-2xl" >ارسالی ها امروز </h1></div>
        <hr/>
   
   <div class="flex gap-5 items-center justify-center justify-items-center mt-5 " >
        <div   v-for="product in products"  :key="product" class="group  hover:scale-110 transition-all duration-500 w-3/12 p-2 bg-gray-200 rounded-xl  flex flex-col items-center justify-items-center" >
<div class="rounded-lg overflow-hidden flex items-center justify-items-center max-h-72" >
    <img class="" src='~/assets/image/cardImage.jpeg' :alt="product.orginalName">
</div>
<div class="flex flex-col items-center" >
    <h3>{{ product.name }}</h3>
    <h6>{{ product.orginalName }}</h6>
</div>
<div class="grid grid-cols-3 " >
<div class="text-rose-500  col-span-2 text-xl font-bold" >{{ product.price }}<span  class="text-gray-500 ml-5 text-sm font-extralight mr-1" >تومان</span></div>
<div class="text-rose-500 border-r-2 border-red-600 text-xl font-bold " >{{ product.dollerPrice }}<span class="text-gray-500 ml-1 text-sm font-extralight mr-5" >$</span></div>
</div>


<div class="mx-auto mt-5" ><button @dblclick="createdata"  @click="getData" class="font-extralight text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce bg-rose-700 rounded-2xl  mx-auto text-nowrap px-2 py-1" >سفارش این محصول</button></div>       
    </div>
</div>
</div>
</template>

<script setup>
let isAccess = ref(false)
const {public:{apiBase}} = useRuntimeConfig();

async function getData(){
console.log("get data");
try {

    const {data,err} = await useFetch(`${apiBase}/users`,{
        method:'GET',
        headers:{'content-type':'application/json'},
        Origin: 'http://localhost:3000',
        
    })

    const products = await useFetch(`${apiBase}/products`,{
        method:'GET'  
    }).then((res)=>{
        console.log(res.data);
    })

console.log(data);
console.log(err);

} catch (error) {
console.log('err');
    console.log(error);

}
}

async function createdata(){

console.log("create");

try {
    const {create,error} = await useFetch(`${apiBase}/createUser`,{
    query:{
        id:1,
        name:'گل نازنین',
        price:1000,
        englishName:"naziFlower",
        dollerPrice:5
    }
})

console.log(create);
console.log(error);
} catch (error) {
    console.log(error);
}

}

let products = [
    {id:4,name:"گل امیر",price:15000,orginalName:'Yas Flower Envelope',dollerPrice:5,image:'~/assets/image/cardImage.jpeg'},
    {id:4,name:"گل امیر",price:15000,orginalName:'Yas Flower Envelope',dollerPrice:5,image:'~/assets/image/cardImage.jpeg'},
    {id:4,name:"گل امیر",price:15000,orginalName:'Yas Flower Envelope',dollerPrice:5,image:'~/assets/image/cardImage.jpeg'},
    {id:4,name:"گل امیر",price:15000,orginalName:'Yas Flower Envelope',dollerPrice:5,image:'~/assets/image/cardImage.jpeg'},
    {id:4,name:"گل امیر",price:15000,orginalName:'Yas Flower Envelope',dollerPrice:5,image:'~/assets/image/cardImage.jpeg'},
    {id:4,name:"گل امیر",price:15000,orginalName:'Yas Flower Envelope',dollerPrice:5,image:'~/assets/image/cardImage.jpeg'},
    {id:4,name:"گل امیر",price:15000,orginalName:'Yas Flower Envelope',dollerPrice:5,image:'~/assets/image/cardImage.jpeg'},
    {id:4,name:"گل امیر",price:15000,orginalName:'Yas Flower Envelope',dollerPrice:5,image:'~/assets/image/cardImage.jpeg'},
    {id:4,name:"گل امیر",price:15000,orginalName:'Yas Flower Envelope',dollerPrice:5,image:'~/assets/image/cardImage.jpeg'},
    {id:4,name:"گل امیر",price:15000,orginalName:'Yas Flower Envelope',dollerPrice:5,image:'~/assets/image/cardImage.jpeg'},
     {id:4,name:"گل امیر",price:15000,orginalName:'Yas Flower Envelope',dollerPrice:5,image:'~/assets/image/cardImage.jpeg'},
]



</script>

<style lang="scss" scoped>

</style>