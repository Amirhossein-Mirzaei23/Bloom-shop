<template>
    <div class="w-full flex flex-col  gap-5 mx-auto" >
        <div class="px-5 text-xl font-bold max-md:mx-auto" ><h1>اطلاعات شخصی</h1></div>

        <div class="flex gap-3 items-center max-md:mx-auto max-md:justify-center " >
            <div  class="w-40 px-3 text-nowrap max-md:w-80" >
                <span  class=" font-semibold" >نام و نام خانوادگی </span>
            </div>
            <div class="w-80 border py-2 border-gray-300 rounded-md px-2 " >
                <p v-if="userData?.name" > {{ userData?.name }}</p>
<p v-else >{{ userData?.first_name }} {{ userData?.last_name }}</p>

            </div>
        </div>
        <div class="flex gap-2  items-center  max-md:mx-auto max-md:justify-center " >
            <div  class="w-40 px-3 text-nowrap max-md:w-80" >
                <span  class=" font-semibold" >تلفن همراه </span>
            </div>
            <div class="w-80 border py-2 border-gray-300 rounded-md px-2 " >
<p >{{userData?.phoneNumber}}</p>

            </div>
        </div>
        <div class="flex gap-2  items-center  max-md:mx-auto max-md:justify-center " >
            <div  class="w-40 px-3 text-nowrap max-md:w-80" >
                <span  class=" font-semibold" >نام کاربری</span>
            </div>
            <div class="w-80 border py-2 border-gray-300 rounded-md px-2 " >
                <p >{{userData?.username}}</p>

            </div>
        </div>
        <div class="flex gap-3  items-center  max-md:mx-auto max-md:justify-center " >
            <div class="w-40 px-3 text-nowrap max-md:w-80" >
                <span class=" font-semibold" >ادرس</span>
            </div>
            <div class="w-80 border py-2 border-gray-300 rounded-md px-2 " >
<p >{{userData?.address}}</p>

            </div>
        </div>
    </div>
</template>

<script setup>
const userData = ref()
function purgeAuth(){
    localStorage.clear('user')
    console.log('purge auth');
    
  location.reload()

  }

  onMounted(()=>{
   userData.value = JSON.parse(localStorage.getItem('user'))
  })

</script>

<style lang="scss" scoped>

</style>