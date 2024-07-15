<template>
    <div class="container w-11/12 flex mx-auto bg-palte-one-white" >
        <div class=" w-4/12 p-3 px-4" >
            <div class="flex justify-center mt-1 mb-6" >
                <q-avatar class="border-2 bg-gray-400  " size="100px" font-size="52px" color="" text-color="white" icon="person" />
            </div>
            <div class="flex flex-col justify-center text-center gap-5 mb-6" >
                <p class="text-lg" >amirhmirzaei@47@gmail.com</p>
                <p class="text-gray-400" >09338262657</p>
            </div>
            <div class="grid grid-cols-2" >
                <NuxtLink to="/" >
                <button class="w-full border hover:-translate-y-1 hover:bg-gray-100 hover:translate-x-1 transition-all duration-500 rounded-s-lg border-gray-300 py-3 " >
                    <img class="h-10 scale-125 mx-auto"  src="~/assets/icons/profile/flowerShop.png" alt="">
                  <span class="hidden" >فروشگاه</span>

                </button>
             </NuxtLink>
                <NuxtLink to="/" >
                <button @click="purgeAuth" class="w-full border hover:-translate-y-1 hover:bg-gray-100 hover:-translate-x-1 transition-all duration-500 rounded-e-lg border-gray-300 py-3 " >
                    <img class="h-10 scale-125 mx-auto"  src="~/assets/icons/profile/Logout.png" alt="">
                   
                </button>
                </NuxtLink>
            </div>
        </div>
        <div class=" w-8/12 flex flex-col gap-5" >
            <div class="px-5 text-xl font-bold " ><h1>اطلاعات شخصی</h1></div>
            <div class="flex gap-3" >
                <div class="w-40 px-3 text-nowrap" >
                    <span class="font-sans font-bold" >نام </span>
                </div>
                <div class="w-80 border py-2 border-gray-300 rounded-md px-2 " >
<p >متن تست</p>

                </div>
            </div>
            <div class="flex gap-3" >
                <div  class="w-40 px-3 text-nowrap" >
                    <span>نام و نام خانوادگی </span>
                </div>
                <div class="w-80 border py-2 border-gray-300 rounded-md px-2 " >
<p >متن تست</p>

                </div>
            </div>
            <div class="flex gap-2" >
                <div  class="w-40 px-3 text-nowrap" >
                    <span>تلفن همراه </span>
                </div>
                <div class="w-80 border py-2 border-gray-300 rounded-md px-2 " >
<p >متن تست</p>

                </div>
            </div>
            <div class="flex gap-2" >
                <div  class="w-40 px-3 text-nowrap" >
                    <span>نام کاربری</span>
                </div>
                <div class="w-80 border py-2 border-gray-300 rounded-md px-2 " >
<p >متن تست</p>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>



function purgeAuth(){
    localStorage.clear('user')
    console.log('purge auth');
    
  location.reload()

  }
</script>

<style lang="scss" scoped>

</style>