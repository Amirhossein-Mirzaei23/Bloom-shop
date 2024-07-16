<template>
    <div @click="$emit('closeReesponsiveMenu')" class="w-screen min-h-fit static bg-gray-500 bg-opacity-50" >
    <div class="w-72 github-backgound  bg-opacity-100 min-h-screen flex flex-col py-3 " >
        
        <div class=" w-full" > 
          
            <div class=" w-full text-sm   mx-auto ">
              <q-btn-group class=" w-full flex flex-col mx-auto  transition-all duration-500 mt-4 shadow-none " >
             <NuxtLink  to="/"   >
                <button  class="text-white text-sm font-sans py-2 w-full border-t border-b border-white hover:w-10/12  hover:border-opacity-10 hover:scale-105 transition-all duration-300"   >
                <span>صفحه اصلی</span>
                </button>
              </NuxtLink>
              <NuxtLink   :to="`/productList/${category.categoryId}`"  v-for="category in props.categories" :key="category" class=" w-full"  >
           <button  class="text-white h-16 text-sm font-sans py-2 w-full  border-b border-white hover:w-10/12  hover:border-opacity-10 hover:scale-105 transition-all  duration-300"  >
           
            <span class="h-full w-full" >{{category.title}}</span>
      
           </button>
          </NuxtLink>
           <NuxtLink to="/admin/create" >
           <button v-if="props.isAdmin" class="text-white text-sm font-sans py-2 w-full border-t border-b border-white hover:w-10/12  hover:border-opacity-10 hover:scale-105 transition-all duration-300"  >
            <span>پنل ادمین</span>
           </button>
        </NuxtLink>
          </q-btn-group>
            </div>
</div>
    </div>
</div>
</template>

<script setup>
const props = defineProps(['categories'],['isAdmin'])
const emit = defineEmits(['closeReesponsiveMenu'])


</script>

<style lang="scss" scoped>

</style>