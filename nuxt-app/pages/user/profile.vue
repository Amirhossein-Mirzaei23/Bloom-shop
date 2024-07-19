<template>
    <div class="container min-h-screen w-11/12 flex flex-col sm:flex-row mx-auto bg-palte-one-white" >
        <div class="max-md:min-w-80  md:w-4/12  p-3 px-4 mx-auto" >


        <div>
            <div class="flex justify-center mt-1 mb-6" >
                <q-avatar class="border-2 bg-gray-400  " size="100px" font-size="52px" color="" text-color="white" icon="person" />
            </div>
            <div class="flex flex-col justify-center text-center gap-5 mb-6" >
                <p class="text-lg" >amirhmirzaei@47@gmail.com</p>
                <p class="text-gray-400 hover:text-gray-700 hover:tracking-wider transition-all duration-300" >09338262657</p>
            </div>
        </div>


            <div class="grid grid-cols-2 " >
                <NuxtLink to="/" >
                <button class="w-full border hover:-translate-y-1 hover:bg-gray-100 hover:translate-x-1 transition-all duration-500 rounded-s-lg border-gray-300 py-3 h-16 group hover:h-24 mb-10 hover:mb-2" >
                    <img class="h-10 scale-125 mx-auto"  src="~/assets/icons/profile/flowerShop.png" alt="">
                    <p class="mx-auto hover:visible opacity-0 duration-500 transition-all group-hover:opacity-100  text-sm font-serif bg-transparent text-gray-500 rounded-tl-md w-9 h-4 mt-2 rounded-br-md hover:text-gray-200" >فروشگاه</p>

                </button>
             </NuxtLink>
                <NuxtLink to="/" >
                <button @click="purgeAuth" class="w-full border hover:-translate-y-1 hover:bg-gray-100 hover:-translate-x-1 transition-all duration-500 rounded-e-lg border-gray-300 py-3 group h-16 hover:h-24 mb-10 hover:mb-2 " >
                    <img class="h-10 scale-125 mx-auto rotate-180"  src="../../assets/Svgs/logout.png" alt="">
                    <p class="mx-auto hover:visible opacity-0 duration-500 transition-all group-hover:opacity-100  text-sm font-serif bg-transparent text-gray-500 rounded-tl-md w-9 h-4 mt-2 rounded-br-md hover:text-gray-200" >خروج</p>
                </button>
                </NuxtLink>
            </div>

            <div class="grid grid-rows-2  rounded-xl border" >
                <div @click="changeComponent('userData')" class="h-16 border-b flex justify-center items-center group  hover:bg-gray-200 transition-all  duration-300" >
                    <div class="tracking-wider" >اطلاعات شخصی</div>
                </div>
                <div @click="changeComponent('userCart')" class="h-16 border-b flex justify-center items-center hover:bg-gray-200 transition-all duration-300"  >
                    <div class="tracking-wider  transition-all duration-300" >
                        سبد خرید
                    </div>
                
                </div>
                <div @click="changeComponent('userOrder')" class="h-16 border-b flex justify-center items-center hover:bg-gray-200 transition-all duration-300"  >
                    <div class="tracking-wider  transition-all duration-300" >
                        سفارشات
                    </div>
                
                </div>
            </div>
        </div>
        
        <ProfileUserInfo :user="user" v-if="userData" class="min-w-80 sm:min-w-96 md:w-6/12  lg:w-8/12  animate__animated animate__fadeInLeft"  />
        <ProfileUserOrder v-if="userOrder" class="min-w-80 md:w-6/12  lg:w-8/12 animate__animated animate__fadeInDown " />
      <ProfileUserCart  :user="user" v-if="userCart" :user-cart-data="userCartData"  class="min-w-80  sm:min-w-96 md:w-6/12  lg:w-8/12 animate__animated animate__fadeInDown "  />
    </div>
</template>

<script setup>

import axios from 'axios'
import { useUserStore } from '~/store/userStore';
const store = useUserStore()


const userData = ref(false)
const userOrder = ref(false)
const userCart = ref(true)


const userCartData = ref()
const userAddres = ref(false)
const userTransactions = ref(false)
const {public:{apiBase}} = useRuntimeConfig();

// create this variable to store user data
const user = ref()

function cartProductList() {
   user.value = store.user
    console.log('user store prof',store.userId);
    axios.post(`${apiBase}/userCart/list`,{
        userId:JSON.parse(localStorage.getItem('user')).userId
    }).then((res)=>{
        console.log(res);
        userCartData.value = res.data.data
    }).catch((err)=>{
        console.log(err);
    })
}
onMounted(()=>{
    cartProductList()
  user.value =  JSON.parse(localStorage.getItem('user'))
})

function changeComponent(name) {
    switch (name) {
        case 'userData':
        userData.value = true;
        userOrder.value = false;
        userCart.value = false
            break;
            case 'userOrder': 
        userData.value = false;
        userOrder.value = true;
        userCart.value = false
            break;
            case 'userCart':
        userData.value = false;
        userOrder.value = false;
        userCart.value = true
            break;
        default:
            break;
    }
}


</script>

<style lang="scss" scoped>

</style>