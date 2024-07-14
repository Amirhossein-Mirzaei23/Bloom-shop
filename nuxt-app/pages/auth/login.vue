<template>

    <div class="w-screen h-screen github-backgound font-sans ">
        <!-- a component to handel and show error massage to the user   bg-gradient-to-tr from-palte-two-2 to-palte-one-2     --->
        <div v-if="errors.length > 0" class="alert alert-danger">
            <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
        </div>
        
            
          

        <div class="w-11/12  sm:w-600  m-auto  flex flex-col" >
            <div class="cicleAnimation-top animate-pulse  bg-gradient-to-t from-palte-two-4 to-palte-one-0 bg-opacity-25 -mb-5 w-24 h-24  rounded-full self-start mt-20 ">
        <el-tooltip
        class="box-item"
              effect="white"
              content="ویرایش"
              placement="top"
        >
       <button type="button" class="mt-7 mr-6 cicleAnimation-top scale-75 rounded-full  bg-blue-200 bg-opacity-10 h-10 w-10 " >
        <img class="m-auto" src="/assets/Svgs/pencil-square.svg" alt="">
</button>
</el-tooltip>
            </div>
            
            <div class=" bg-palte-two-white bg-opacity-15  hover:bg-opacity-30 hover:bg-teal-600 duration-700 transition-all bg-blend-multiply m-auto w-9/12 flex justify-items-center items-center gap-10 p-3 rounded-3xl flex-col  " >
                <div class="w-11/12 h-10 mt-5 grid grid-cols-2" >
                    <button @click="changeForm(true)" class="border-2 hover:bg-palte-two-3 hover:rounded-s-xl hover:bg-opacity-50 duration-300 transition-all text-gray-300 font-bold font-serif text-sm lg:text-lg" :class="{'scale-95 bg-palte-two-3 rounded-s-xl hover:bg-opacity-50 text-white':singUpPanel}" >ثبت نام</button>
                    <button @click="changeForm(false)" class="border-2 hover:bg-palte-two-3 hover:bg-opacity-50 duration-300 text-gray-300 font-bold font-serif text-sm lg:text-lg transition-all  hover:rounded-e-xl" :class="{'scale-95  bg-palte-two-3 rounded-e-xl hover:bg-opacity-50 text-white ':!singUpPanel}" >ورود</button>
                </div>
                <FormKit v-if="!singUpPanel" type="form"  @submit="submitLogin" id="loginForm" :incomplete-message="true" :actions="false">
                <div class=" sm:w-96 m-auto" >
                <FormKit type="text" v-model="cellphone"  name="userName" id="userName" label="نام کاربری" label-class="font-serif font-semibold text-palte-two-white"
                input-class=" px-2 py-2 w-11/12 rounded-lg bg-transparent border-t-0 border-r-0 border-b-3 border focus:border-t-0 hover:shadow-xl hover:shadow-teal-500  focus:-translate-x-2 focus:scale-105 focus:mb-3 focus:mt-2 focus:translate-y-1 transition-all duration-500 text-zinc-100" validation="required"
                :validation-messages="{ required: 'این فیلد الزامیست' }"
                messages-class="font-sans text-xs text-gray-300 mt-2" />
            </div>
            <div class="w-full  sm:w-96 mb-6" >
                <FormKit type="password" v-model="password"  name="password" id="password" label="رمز عبور" label-class="font-serif font-semibold text-palte-two-white"
                input-class=" px-2 py-2 w-11/12 rounded-lg bg-transparent border-t-0 border-r-0 border-b-3 border focus:border-t-0 hover:shadow-xl hover:shadow-teal-500  focus:-translate-x-2 focus:scale-105 focus:mb-3 focus:mt-2 focus:translate-y-1 transition-all duration-500 text-zinc-100" validation="required"
                :validation-messages="{ required: 'این فیلد الزامیست'  }"
                messages-class="font-sans text-xs text-gray-300 mt-2" />

            </div>
            <div class="w-full " >
                <div class="flex justify-around align-items-center " >
           
              

                <FormKit
                  type="submit"
                  help=""

                input-class="bg-cyan-500 w-72 px-4 transition-all w-40 hover:w-32  duration-500  h-10  rounded-lg hover:shadow-xl hover:bg-zinc-200  hover:border-b-4 hover:border hover:border-sky-500  transition-all duration-200"
                >
                 <span v-if="!btnLoader" >ورود</span>
                  <span v-else class="flex flex-row-reverse gap-4  " >

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
        <FormKit v-else type="form"  @submit="submitSingUp" id="singUpForm" :incomplete-message="true" :actions="false">
            <div class=" w-full sm:w-80 m-auto" >
                <FormKit type="text" v-model="name"  name="name" id="name" label="نام و نام خانوادگی" label-class="font-serif font-semibold text-palte-two-white"
                input-class=" px-2 py-2 w-11/12 rounded-lg bg-transparent border-t-0 border-r-0 border-b-3 border focus:border-t-0 hover:shadow-xl hover:shadow-teal-500  focus:-translate-x-2 focus:scale-105 focus:mb-3 focus:mt-2 focus:translate-y-1 transition-all duration-500 text-zinc-100" validation="required"
                :validation-messages="{ required: 'این فیلد الزامیست' }"
                messages-class="font-sans text-xs text-gray-300 mt-2" />
            </div>
            <div class=" w-full m-auto" >
                <FormKit type="text" v-model="cellphone"  name="userName" id="userName" label="شماره همراه" label-class="font-serif font-semibold text-palte-two-white"
                input-class=" px-2 py-2 w-11/12 rounded-lg bg-transparent border-t-0 border-r-0 border-b-3 border focus:border-t-0 hover:shadow-xl hover:shadow-teal-500  focus:-translate-x-2 focus:scale-105 focus:mb-3 focus:mt-2 focus:translate-y-1 transition-all duration-500 text-zinc-100" validation="required"
                :validation-messages="{ required: 'این فیلد الزامیست' }"
                messages-class="font-sans text-xs text-gray-300 mt-2" />
            </div>
            <div class="w-full m-auto" >
                <FormKit type="text" v-model="password"  name="password" id="password" label="رمز عبور" label-class="font-serif font-semibold text-palte-two-white"
                input-class=" px-2 py-2 w-11/12 rounded-lg bg-transparent border-t-0 border-r-0 border-b-3 border focus:border-t-0 hover:shadow-xl hover:shadow-teal-500  focus:-translate-x-2 focus:scale-105 focus:mb-3 focus:mt-2 focus:translate-y-1 transition-all duration-500 text-zinc-100" validation="required"
                :validation-messages="{ required: 'این فیلد الزامیست' }"
                messages-class="font-sans text-xs text-gray-300 mt-2" />

            </div>
            <div class="w-full mb-10 m-auto" >
                <FormKit type="text" v-model="passwordRepaet"  name="password" id="password" label="تکرار رمز عبور" label-class="font-serif font-semibold text-palte-two-white"
                input-class=" px-2 py-2 w-11/12 rounded-lg bg-transparent border-t-0 border-r-0 border-b-3 border focus:border-t-0 hover:shadow-xl hover:shadow-teal-500  focus:-translate-x-2 focus:scale-105 focus:mb-3 focus:mt-2 focus:translate-y-1 transition-all duration-500 text-zinc-100" validation="required"
                :validation-messages="{ required: 'این فیلد الزامیست' }"
                messages-class="font-sans text-xs text-gray-300 mt-2" />

            </div>
            <div class="w-full m-auto" >
                <div class="flex justify-around align-items-center " >
           
              

                <FormKit
                  type="submit"
                  help=""

                input-class="bg-cyan-500 w-72 mauto  px-4 transition-all w-40 hover:w-32  duration-500  h-10  rounded-lg hover:shadow-xl hover:bg-zinc-200  hover:border-b-4 hover:border hover:border-sky-500  transition-all duration-200"
                >
                 <span v-if="!btnLoader" >ثبت نام</span>
                  <span v-else class="flex flex-row-reverse gap-4  " >

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

        <div class="bg-gradient-to-t from-teal-300 to-palte-one-0 cicleAnimation-buttom -mt-5  w-24 h-24  rounded-full self-end" >

        <el-tooltip
        class="box-item"
        effect="white"
        content="ویرایش"
        placement="top"
        >
       <button @click="submitLogin" type="button" class="mt-7 mr-6 cicleAnimation-top scale-75 rounded-full bg-blue-200 bg-opacity-10 h-10 w-10 " >
        <img class="m-auto" src="/assets/Svgs/arrow-return-left.svg" alt="ورود">
</button>
</el-tooltip>


        </div>
        </div>
         
        
       
    </div>
  
</template>

<script setup>
import { reset } from "@formkit/core"

import axios from "axios";





const emit = defineEmits(['showCheckOtpForm'])
const btnLoader = ref(false)



const router = useRouter()
//login variable
const cellphone = ref(null)
const password = ref()


//
const singUpPanel = ref(false)
// sing up variable
const name = ref()
const passwordRepaet= ref()



const errors = ref([]);

const {public:{apiBase}} = useRuntimeConfig();

////////////// on submit
function changeForm(value){
    singUpPanel.value = value
    console.log(singUpPanel.value);
}
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
   
        btnLoader.value = true;

   /////     axios.post(`${apiBase}/users/auth/login`,{
   /////     phoneNumber:formData
   ///// }).then((res)=>{
   /////     
   /////     productsData.value = res.data
   /////     console.log(productsData.value);
   /////     toastr.success("  باموفقیت انجام شد");
   ///// })

      //  errors.value = [];
/// send new data to create a new product in the server side
console.log(cellphone.value  );
 await  axios.post(`${apiBase}/users/auth-login`,{
            phoneNumber:cellphone.value,
            password:password.value
    })
    
    .then((res)=>{
        console.log('dataaaaaaaaaaaaaa:',res.data.data[0].userId);
        console.log(res.data.data[0].userId);
     
       
        toastr.success(res.data.state.msg)
        localStorage.setItem('user',JSON.stringify(res.data.data[0]))

            const local = JSON.parse(localStorage.getItem('user'))
            if (local.userId) {
                console.log('success');
                router.push('/')
            }
      
       
        
      //  router.hasRoute('/')
   
        
    }).catch((err)=>{
        console.log(err);
        toastr.error(err.response.data.state.msg)
    }).finally(()=>{
        btnLoader.value = false;
        reset('createProductForm')
    })

/// use reset method to clear all input value of FormKit
   
/// create a tostr to show success massage 
       
    } 
//    errors.value = Object.values(error.data.data.message).flat();
async function submitSingUp(formData){
    
    try {
        btnLoader.value = true;
    

console.log(formData);
 await axios.post(`${apiBase}/users/add`,{
        body:formData  
    }).then((res)=>{
        console.log(res.data);
    })

     //   reset('singUpForm')

/// create a tostr to show success massage 
        toastr.success("ایجاد کاربر باموفقیت انجام شد");
    } catch (error) {
//    errors.value = Object.values(error.data.data.message).flat();
    console.log(error);
    } finally {
  btnLoader.value = false;
    }
}




</script>

<style scoped>

.cicleAnimation-top{

    animation: around 4s 800ms ease-in-out infinite;
    
}

.cicleAnimation-buttom{
    
    animation: around 4s 800ms ease-in-out infinite ;
    animation-delay: 1800ms;
    
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