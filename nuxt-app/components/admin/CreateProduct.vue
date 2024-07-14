<template>
    <div class="bg-slate-100" >
        <div><h3>افزودن محصول</h3></div>
        <FormKit type="form"  @submit="create" id="createProductForm" :incomplete-message="true" :actions="false">
            <div class="grid grid-cols-3 gap-5 p-5 hover:shadow-lg hover:shadow-teal-500" >
            <div>
                <FormKit type="text"  name="title" id="title" label=" عنوان کالا" label-class="form-label"
                input-class="form-control px-2  rounded-lg hover:shadow-xl hover:shadow-teal-500  focus:scale-105 transition-all duration-500" validation="required"
                :validation-messages="{ required: 'فیلد عنوان الزامیست' }"
                messages-class="form-text text-danger" />
            </div>
            <div>
                <FormKit type="number" name="id" id="id" label="شناسه" label-class="form-label"
                input-class="form-control px-2  rounded-lg hover:shadow-xl hover:shadow-teal-500  focus:scale-105 transition-all duration-500" validation="required"
                :validation-messages="{ required: 'فیلد شناسه الزامیست' }"
                messages-class="form-text text-danger" />
            </div>
            <div>
                <FormKit type="select" name="type" id="type" label="نوع" label-class="form-label"
                input-class="form-select px-2  rounded-lg hover:shadow-xl hover:shadow-teal-500  focus:shadow-xl  focus:shadow-teal-500 transition-all duration-500" validation="required"
                :options="productsTypeArray"
                :validation-messages="{ required: 'فیلد ثایپ الزامیست' }"
                messages-class="form-text text-danger" />
            </div>
            <div>
                <FormKit type="text" name="description" id="description" label="توصیف" label-class="form-label"
                input-class="form-control px-2  rounded-lg hover:shadow-xl hover:shadow-teal-500  focus:scale-105 transition-all duration-500" validation="required"
                :validation-messages="{ required: 'فیلد توضیحات الزامیست' }"
                messages-class="form-text text-danger" />
            </div>
            <div>
                <FormKit type="text" name="flowerPot" id="flowerPot" label="گلدان" label-class="form-label"
                input-class="form-control px-2  rounded-lg hover:shadow-xl hover:shadow-teal-500  focus:scale-105 transition-all duration-500" validation="required"
                :validation-messages="{ required: 'فیلد گلدان الزامیست' }"
                messages-class="form-text text-danger" />
            </div>
            <div>
                <FormKit type="number" name="salePrice" id="salePrice" label="قیمت" label-class="form-label"
                input-class="form-control px-2  rounded-lg hover:shadow-xl hover:shadow-teal-500  focus:scale-105 transition-all duration-500" validation="required"
                :validation-messages="{ required: 'فیلد قیمت الزامیست' }"
                messages-class="form-text text-danger" />
            </div>
            <div>
                <FormKit type="number" name="offPrice" id="offPrice" label="با تخفیف قیمت " label-class="form-label"
                input-class="form-control px-2  rounded-lg hover:shadow-xl hover:shadow-teal-500  focus:scale-105 transition-all duration-500" 
                validation=""
                :validation-messages="{ required: 'فیلد قیمت الزامیست' }"
                messages-class="form-text text-danger" />
            </div>
            <div>
                <FormKit type="text" name="dollerPrice" id="dollerPrice" label="دلاری قیمت" label-class="form-label"
                input-class="form-control px-2  rounded-lg hover:shadow-xl hover:shadow-teal-500  focus:scale-105 transition-all duration-500"
                 validation=""
                :validation-messages="{ required: 'فیلد قیمت دلاری الزامیست' }"
                messages-class="form-text text-danger" />
            </div>
            <div>
                <FormKit type="file" name="image" id="image" label="تصویر" label-class="form-label"
                input-class="form-control" validation=""
                :validation-messages="{ required: 'فیلد تصویر الزامیست' }"
                messages-class="form-text text-danger" />
            </div>
            <div>
                <FormKit
                  type="submit"
                  help=""
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
        </FormKit>
        
    </div>
</template>

<script setup>
import { reset } from "@formkit/core"

const {public:{apiBase}} = useRuntimeConfig();
const productsTypeArray = [
                    'دسته گل',
                    'گیاهان آپارتمانی',
                    'باکس گل',
                    'رزجاویدان',
                    'ارسالی های امروز'    
                  ]
const productsTypeIdArray =[
                    {id:1,title:'دسته گل'},
                    {id:2,title: 'گیاهان آپارتمانی'},
                    {id:3,title:'باکس گل'},
                    {id:4,title:'رزجاویدان'},
                    {id:5,title:'ارسالی های امروز'}      
]

const btnLoader = ref(false)

async function create(formData){
    console.log('click');
    console.log(formData);

    productsTypeIdArray.map((typeInfo)=>{
        if(typeInfo.title == formData.type){
            formData.typeId =  typeInfo.id 
        }
       
    })


    try {
        btnLoader.value = true;
      //  errors.value = [];
/// send new data to create a new product in the server side
console.log(formData);
const products = await useFetch(`${apiBase}/products/create`,{
        method:'POST',
        body:formData  
    }).then((res)=>{
        console.log(res);
        toastr.success(res.data.value.state.msg);
    })
/// use reset method to clear all input value of FormKit
        reset('createProductForm')
/// create a tostr to show success massage 
       
    } catch (error) {
//    errors.value = Object.values(error.data.data.message).flat();
    console.log(error);
    } finally {
  btnLoader.value = false;
    }
}

</script>

<style scoped>
.form-control {
    width: 100%;
    border: none;
    height: 40px;
    margin-bottom: 25px;
    padding-left: 25px;
    border: 1px solid #999;
    outline: none;
    color: #000000;
    border-radius: 5px;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .form-control:focus {
    border-color: #222831;
    box-shadow: 0 0 0 0.25rem rgb(51 52 54 / 25%);
  }
  .form-select:focus {
    border-color: #222831;
    box-shadow: 0 0 0 0.25rem rgb(51 52 54 / 25%);
  }
</style>