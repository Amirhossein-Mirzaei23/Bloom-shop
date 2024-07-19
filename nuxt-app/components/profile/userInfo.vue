<template>
    <div class="w-full flex flex-col  gap-5 mx-auto" >
        <div class="px-5 text-xl font-bold max-md:mx-auto" ><h1>اطلاعات شخصی</h1></div>

        <div class="flex gap-3 items-center max-md:mx-auto max-md:justify-center " >
            <div  class="w-40 px-3 text-nowrap max-md:w-80" >
                <span  class=" font-semibold" >نام و نام خانوادگی </span>
            </div>
            <div class="w-80 border py-2 border-gray-300 rounded-md px-2 " >
                <p v-if="props.user?.name" > {{ props.user?.name }}</p>
<p v-else >{{ props.user?.first_name }} {{ props.user?.last_name }}</p>

            </div>
        </div>
        <div class="flex gap-2  items-center  max-md:mx-auto max-md:justify-center " >
            <div  class="w-40 px-3 text-nowrap max-md:w-80" >
                <span  class=" font-semibold" >تلفن همراه </span>
            </div>
            <div class="w-80 border py-2 border-gray-300 rounded-md px-2 " >
<p >{{props.user?.phoneNumber}}</p>

            </div>
        </div>
        <div class="flex gap-2  items-center  max-md:mx-auto max-md:justify-center " >
            <div  class="w-40 px-3 text-nowrap max-md:w-80" >
                <span  class=" font-semibold" >نام کاربری</span>
            </div>
            <div class="w-80 border py-2 border-gray-300 rounded-md px-2 " >
                <p >{{props.user?.username}}</p>

            </div>
        </div>
        <div class="flex gap-3  items-center  max-md:mx-auto max-md:justify-center " >
            <div class="w-40 px-3 text-nowrap max-md:w-80" >
                <span class=" font-semibold" >ادرس</span>
            </div>
            <div class="w-80 border py-2 border-gray-300 rounded-md px-2 " >
<p v-if="props.user?.address"> {{props.user?.address}}</p>
<p v-else> هنوز ادرس شما ثبت نشده است</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const userData = ref()
const props = defineProps(['user'])

function purgeAuth(){
    localStorage.clear('user')
    console.log('purge auth');
    
  location.reload()

  }



</script>

<style lang="scss" scoped>

</style>