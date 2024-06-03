<template>
    <div class="text-black">
    <div class="container  grid grid-cols-3 h-16 mx-auto text-sm text-nowrap font-extralight  " >
        <div class="col-span-2  flex flex-row items-center " >
         <!----  <ul class=" flex flex-row items-center gap-5 justify-items-center " >
                <li>صفحه اصلی</li>
                <li>دسته گل</li>
                <li>گیاه اپارتمانی</li>
                <li>ارسال هدیه به کل ایران</li>
                <li> رز جاویدان</li>
                <li>ارسال امروز</li>
                ---> 
             
                    <div class="q-pa-md">
                      <q-btn-group class="rounded-lg hover:shadow-xl hover:shadow-teal-400 transition-all duration-500" >
                        <q-btn  class="text-black"   color="bg-gray-400" label="صفحه اصلی" />
                        <q-btn-dropdown auto-close class="text-black "  color="primary" label="قروشگاه" split>
                            <!-- dropdown content goes here -->
                            <q-list class="bg-gradient-to-r from-gray-400 via-white to-gray-200 mt-3" padding style="width: 250px">
                              <q-item clickable>
                                <q-item-section avatar>
                                  <q-avatar color="green" text-color="white" >
                                    <img src="../../assets/icons/bi/flower3.svg" alt="">
                                  </q-avatar>
                                </q-item-section>
                                <q-item-section>
                                  <q-item-label>دسته گل</q-item-label>
                                  <q-item-label caption>Lorem, ipsum dolor.
                                  </q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                  <q-icon name="info" color="amber" />
                                </q-item-section>
                              </q-item>
                    
                              <q-item clickable>
                                <q-item-section avatar>
                                  <q-avatar color="green" text-color="white" >
                                    <img src="../../assets/icons/bi/tree.svg" alt="">
                                  </q-avatar>

                                </q-item-section>
                                <q-item-section>
                                  <q-item-label>گیاهان اپرتمانی</q-item-label>
                                  <q-item-label caption>Lorem, ipsum dolor.</q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                  <q-icon name="info" color="amber" />
                                </q-item-section>
                              </q-item>
                    
                              <q-separator inset />
                              <q-item-label header>Lorem, ipsum dolor.</q-item-label>
                    
                              <q-item clickable>
                                <q-item-section avatar>
                                  <q-avatar icon="assignment" color="teal" text-color="white" />
                                </q-item-section>
                                <q-item-section>
                                  <q-item-label>London</q-item-label>
                                  <q-item-label caption>March 1st, 2018</q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                  <q-icon name="info" color="amber" />
                                </q-item-section>
                              </q-item>
                    
                              <q-item clickable>
                                <q-item-section avatar>
                                  <q-avatar icon="assignment" color="teal" text-color="white" />
                                </q-item-section>
                                <q-item-section>
                                  <q-item-label>Paris</q-item-label>
                                  <q-item-label caption>January 22nd, 2017</q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                  <q-icon name="info" color="amber" />
                                </q-item-section>
                              </q-item>
                            </q-list>
                          </q-btn-dropdown>
                        <q-btn  class="text-black"  color="bg-gray-400" label="دسته گل" />
                        <q-btn  class="text-black"  color="bg-gray-400" label="گیاهان اپارتمانی" />
                        <q-btn  class="text-black"  color="bg-gray-400" label="رز جاویدان" />
                        <q-btn  class="text-black"  color="bg-gray-400" label="ارسالی های امروز" />
                   
                      </q-btn-group>
                    </div>
                 
            
        </div>
        <div class=" flex " >
           
               <div class="bg-red-300 m-auto rounded-lg overflow-hidden" >
                <img class="m-auto" src="../../assets/image/logo.png" alt="">
               </div>
          
 
        </div>
    </div>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>