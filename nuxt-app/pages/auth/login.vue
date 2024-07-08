<template>
    <div class="w-screen h-screen bg-gradient-to-tr from-palte-two-2 to-palte-one-2 ">
        <!-- a component to handel and show error massage to the user--->
        <div v-if="errors.length > 0" class="alert alert-danger">
            <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
        </div>
        
            
            <FormKit type="form"  @submit="submitLogin" id="createProductForm" :incomplete-message="true" :actions="false">
        <div class="w-4/12 m-auto  flex flex-col" >
            <div class="animationScale animate-pulse  bg-gradient-to-t from-palte-two-white to-palte-one-1 -mb-5 w-24 h-24  rounded-full self-start mt-20 ">
                
        
            </div>
            <div class="bg-gradient-to-l from-white to-black bg-blend-multiply m-auto w-9/12 flex items-center gap-10 p-3 rounded-lg flex-col " >
            <div>
                <FormKit type="text" v-model="cellphone"  name="userName" id="userName" label="نام کاربری" label-class="form-label"
                input-class="form-control px-2  rounded-lg hover:shadow-xl hover:shadow-teal-500  focus:scale-105 transition-all duration-500" validation="required"
                :validation-messages="{ required: 'فیلد نام کاربری الزامیست' }"
                messages-class="form-text text-danger" />
            </div>
            <div>
                <FormKit type="text"  name="password" id="password" label="رمز عبور" label-class="form-label py-5"
                input-class="form-control px-2  rounded-lg hover:shadow-xl hover:shadow-teal-500  focus:scale-105 transition-all duration-500" validation="required"
                :validation-messages="{ required: 'فیلد رمز عبور الزامیست' }"
                messages-class="form-text text-danger" />
            </div>
            <div class="w-full " >
                <div>
                    <button class="flex justify-between items-center w-full mb-2" >
                        <span class="text-slate-600" >حساب کاربری ندارید؟</span>
                        <span class="badg-link border border-blue-400 " >ثبت نام کنید</span>
                    </button>
                </div>

                <FormKit
                  type="submit"
                  help=""
                input-class="bg-cyan-500 px-4 h-10  rounded-lg hover:shadow-xl hover:bg-zinc-200  hover:border-b-4 hover:border-sky-500  transition-all duration-100"
                >
                 <span v-if="!btnLoader" >ورود</span>
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
        <div class="bg-gradient-to-t from-palte-two-2 to-yellow-200 animationScale -mt-5  w-24 h-24  rounded-full self-end"
       
        >
       
        </div>
        </div>
            </FormKit>
        
       
    </div>
  
</template>

<script setup>
import { reset } from "@formkit/core"

const emit = defineEmits(['showCheckOtpForm'])
const btnLoader = ref(false)

const cellphone = ref(null)

const errors = ref([]);
const loading = ref(false);
const {public:{apiBase}} = useRuntimeConfig();


async function submitLogin(formData) {
    if (cellphone.value == null) {
        toastr.warning(' ورود شماره موبایل الزامی است ')
    return
       
    }

    const pattern = /^(\+98|0)?9\d{9}$/;
    if (!pattern.test(cellphone.value)) {
        console.log(cellphone.value);
        toastr.error(' شماره موبایل صحیح نمیباشد')
    return
    }
console.log(formData);
    try {
        btnLoader.value = true;
      //  errors.value = [];
/// send new data to create a new product in the server side
console.log(formData);
 await useFetch(`${apiBase}/users/login`,{
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
.animationScale{
    
    animation: around 4s 800ms ease-in-out infinite;
    
}

.bg-gradiant-top{
   
    background: linear-gradient(#133863,#609CE1);
   
}
.bg-gradiant-bottom{

    background: linear-gradient(#FE9772,#A22C02);

}


@keyframes themoon {
    0%{
        transform: rotateY(0deg);
        transform: translate3d(10px);

    }
    25%{
        transform: rotateY(45deg);

    }
    50%{
        transform: rotateY(70deg);

    }
    75%{
        transform: rotateY(180deg);
    }
    100%{
        transform: rotateY(0deg);

    }
}


#h1{
    margin:30px 80px 0px;
    white-space: nowrap;
    
}
#username{
    width: 230px;
    height: 35px;
}
.username{
display: inline-block;
margin-left: 22px;
}
#password{
    width: 230px;
    height: 35px;
}
.password{
    display: inline-block;
    margin-left: 22px;
}
.button{
    width: 220px;
    height: 40px;
    display: block;
    margin: 20px auto;
    border-radius: 5px;
}
.button:hover{
    background-color: rgba(26, 96, 33, 0.391);
    animation: hover 4s ease-in-out 200ms infinite;}
@keyframes around {
    0%{
        transform: scale(1);
      

    }
    25%{
        transform: scale(1.2);
       
    }
    50%{
        transform: scale(1.5);
       
    }
    75%{
        transform: scale(1.2);
      
    }
    100%{
        transform: scale(1);
        
    }
}
@keyframes hover {
    0%{
        transform: rotateY(0deg);
        transform: translate3d(10px);

    }
    25%{
        transform: rotateY(30deg);

    }
    50%{
        transform:rotateY(-30deg);

    }
    75%{
        transform: rotateY(10deg);

    }
    100%{
        transform: rotateY(0deg);

    }   
}
</style>