<template>

    <div class="github-backgound bg-opacity-60 w-screen " dir="rtl" > 
     <div class="w-11/12 m-auto py-10 max-lg:px-10 bg-zinc-50 rounded-2xl grid grid-cols-2 lg:grid-cols-3 bg-opacity-10" >
    
        <div  dir="ltr" class=" flex-col w-11/12 mx-auto max-lg:hidden lg:flex" >
           <div  > <h6 class="font-serif text-lg font-semibold text-pretty text-white" >BloomShop</h6></div>
          <div >
            <p class="text-white text-sm w-12/12" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
                nam dignissimos? Ut eos ipsam molestias, numquam quisquam quod architecto 
                hic reiciendis dignissimos accusamus, ipsa sunt. Tempore ducimus reiciendis officia ad.</p>
          </div>
        </div>

        <div class="w-full max-w-96 mx-auto"  >
            <MapLeafLetMap class="" />
        </div>

       
            <FormKit type="form"  @submit="sendComment" id="createCommentForm" :incomplete-message="true" :actions="false">
                <div class=" flex flex-col max-w-80 mx-auto" >
                <div class="flex flex-col gap-5 p-5 hover:shadow-lg hover:shadow-teal-500" >
                <div class="" >
                    <FormKit type="text"  name="title" id="title" label="ایمیل" label-class="text-white text-xs"
                    input-class="w-full form-control px-2 py-2 rounded-sm md:rounded-md hover:shadow-xl hover:shadow-teal-500  focus:scale-105 transition-all duration-500" validation="required"
                    :validation-messages="{ required: 'ایمیل خود را وارد کنید' }"
                    messages-class="font-mono text-xs text-zinc-100" />
                </div>
                <div class="">
                    <FormKit type="textarea" name="comment" id="comment" label="" label-class="text-white text-xs"
                    input-class="w-full form-control px-2 py-2 rounded-sm md:rounded-md  hover:shadow-xl hover:shadow-teal-500  focus:scale-105 transition-all duration-500" validation="required"
                    :validation-messages="{ required: 'این فیلد نباید خالی باشد' }"
                    messages-class="font-mono text-xs text-zinc-100" />
                </div>
                
             
              
             
                <div class="flex justify-end" >
                    <FormKit
                      type="submit"
                    input-class="bg-cyan-500 px-4 h-10  rounded-lg hover:shadow-xl hover:bg-zinc-200  hover:border-b-4 hover:border-sky-500  transition-all duration-100"
                    >
                     <span v-if="!btnLoader" >ثبت</span>
                      <span v-else class="flex flex-row-reverse gap-4" >
                        <svg aria-hidden="true" class="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span>چند لحظه</span>
                      </span>
                    </FormKit>
                </div>
            </div>
        </div>
            </FormKit>
        

     </div>


    </div>
</template>

<script setup>
import {ref} from 'vue';
import { reset } from "@formkit/core";

const {public:{apiBase}} = useRuntimeConfig();

const btnLoader = ref(false)

function sendComment(e) {
    console.log(e);
}


</script>

<style lang="scss" scoped>

</style>