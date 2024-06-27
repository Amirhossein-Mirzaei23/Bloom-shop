<template>
    <div class="text-black">
    <div class="flex justify-between flex-nowrap flex-row h-16  mx-auto text-sm text-nowrap font-extralight " >
     
        <div class="col-span-2  max-md:hidden" > 
                    <div class=" w-full text-xs   mx-auto ">
                      <q-btn-group class="xl:mr-5 lg:mr-1 mr-0 rounded-lg  hover:shadow-xl  hover:shadow-teal-400 transition-all duration-500 mt-4" >
                        <q-btn  class="text-black text-xs lg:text-sm w-16 lg:w-20 max-lg:hidden"  to="/"  color="bg-gray-400" label="صفحه اصلی" />
                        <q-btn-dropdown auto-close class="text-black text-xs lg:text-sm  md:w-28 lg:w-auto "  color="primary" label="فروشگاه" split>
                            <!-- dropdown content goes here -->
                            <q-list class="bg-gradient-to-r from-gray-400 via-white to-gray-200  " padding style="width: 250px">
                             
                              <q-item clickable  v-for="category in categoriesTilte" :key="category"  :to="`/productList/${category.categoryId}`" >
                                <q-item-section avatar>
                                  <q-avatar color="green" text-color="white" >
                                    <img src="../../assets/icons/bi/flower3.svg" alt="">
                                  </q-avatar>
                                </q-item-section>
                                <q-item-section>
                                  <q-item-label>{{category.title}}</q-item-label>
                                  <q-item-label caption><span class="text-xs" >{{ category.description }}</span>
                                  </q-item-label>
                                </q-item-section>
                              <!-----  <q-item-section side>
                                  <q-icon name="info" color="info" /> 
                                 
                                </q-item-section> ---->
                              </q-item>
                    
                              
                    
                              <q-separator inset />
                              <q-item-label header>by happiness</q-item-label>
                    
                         
                    
                            
                            </q-list>
                          </q-btn-dropdown>
   
                   <q-btn  v-for="category in categoriesTilte" :key="category"  :to="`/productList/${category.categoryId}`"  class="text-black  text-xs lg:text-sm md:w-20 lg:w-auto "  color="bg-gray-400" :label="category.title" />
                   <q-btn  class="text-black  text-xs lg:text-sm " to="/admin/create"  color="bg-gray-400" label="ایجاد محصول" />
                  </q-btn-group>
                    </div>
        </div>
        <div>
          <button class="md:hidden " ><img class="w-16" src="../../assets/menu.gif" alt=""></button>
        </div>
        <div class="flex flex-row xl:ml-5 lg:ml-3 ml-1" >
           <div>
           <!----- <q-avatar>
              <img src="../../assets/icons/social/soc003.svg" alt="">
            </q-avatar> --->
           </div>
               <div class="bg-red-300 m-auto rounded-lg overflow-hidden" >
                <img class="m-auto max-w-32" src="../../assets/image/logo.png" alt="">
               </div>
          
 
        </div>
    </div>
</div>
</template>

<script setup>
const {public:{apiBase}} = useRuntimeConfig();

import axios from "axios";


const categoriesTilte = ref()


function getCategoryTitle() {
    axios.get(`${apiBase}/categories`).then((res)=>{
        console.log(res.data);
        categoriesTilte.value = res.data
        
    })}

onBeforeMount(()=>{
  getCategoryTitle()
})
</script>

<style lang="scss" scoped>

</style>