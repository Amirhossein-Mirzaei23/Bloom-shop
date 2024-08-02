<template>
    <div class="w-full flex flex-col  gap-5 mx-auto " >
       
        <div v-if="!props.userCartData" >
            <h1 class="badge-blue font-bold tracking-wider" >هنوز سبد خرید شما خالی است</h1>
        </div>
        <div v-else class="bg-palte-two-white bg-opacity-20 rounded-xl shadow-lg mt-10 py-10 shadow-black" >
            <div class="px-5 text-xl font-bold max-md:mx-auto" ><h1>سبد خرید شما</h1></div>
            <table class="mx-auto text-center overflow-hidden w-10/12 rounded-lg" >
                <tr class="bg-slate-500 bg-opacity-25 rounded-t-lg" >
                    <td>
                        شناسه
                    </td>
                    <td>
                        نام کالا
                    </td>
                    <td>
                        تعداد کالا 
                    </td>
                    <td>
                        قیمت تمام شده
                    </td>
                </tr>
                <tr class="border rounded-b-lg bg-slate-100 group hover:bg-gray-300 " v-for="product in props.userCartData.products" :key="product" >
                    <td 
                    
                    class="cursor-pointer  group-hover:tracking-wide group-hover:text-blue-500" >
                    <NuxtLink
                     :to="`/produtcs/test`"
                    >
                     
                   
                        {{ product.productId }}
                    </NuxtLink>
                    </td>
                    <td>
                        {{ product.name }}
                    </td>
                    <td class="flex gap-1" >
                        <button @click="increaseQuantity(product)" class=" rounded-md w-4 h-4 text-center hover:scale-105 duration-300 hover:text-blue-700 transition-all align-middle shadow-black font-semibold" >+</button>
                       <span> {{ product.quantity }}</span>
                       <button  @click="decreaseQuantity(product)" class=" rounded-md w-4 h-4 text-center align-middle shadow-black hover:text-rose-700 duration-200 transition-all font-semibold" >-</button>
                    </td>
                    <td>
                        {{ product.price* product.quantity }}
                    </td>
                </tr>
            </table>
          </div>
    </div>
</template>

<script setup>
 import axios from 'axios'
 const props = defineProps(['userCartData','user'])


const {public:{apiBase}} = useRuntimeConfig();

 function increaseQuantity(product) {
    console.log(product);


console.log(props);
    axios.post(`${apiBase}/userCart/addToCart`,{
        userId:props.user.userId,
        products:[{
            productId:product.productId,
            name:product.name,
            price:product.price,
            quantity:1
        }]
    }).then((res)=>{
        product.quantity++
toastr.success(res.data.state.msg)
return product
    }).catch((err)=>{
        toastr.error(err.response.state.msg)
    })

 }

 function decreaseQuantity(product) {
    console.log(props.user);
    axios.post(`${apiBase}/userCart/removeProductCart`,{
      
        userId:props.user.userId,
        products:[{
            productId:product.productId,
            name:product.name,
            price:product.price,
            quantity:1
        }]
    }).then((res)=>{
       
            product.quantity--
       
          
        
toastr.success(res.data.state.msg)
return product
    }).catch((err)=>{
        toastr.error(err.response.state.msg)
    })
 }
</script>

<style lang="scss" scoped>

</style>