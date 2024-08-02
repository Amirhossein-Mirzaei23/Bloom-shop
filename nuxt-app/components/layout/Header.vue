<template>
  <div>

    <div class="text-white github-backgound w-screen">

    <div class="flex justify-between flex-nowrap flex-row h-16  mx-auto text-sm text-nowrap font-extralight " >
     
        <div class="col-span-2  max-md:hidden" > 
                    <div class=" w-full text-xs   mx-auto ">
                      <q-btn-group class="xl:mr-5 lg:mr-1 mr-0 rounded-lg  hover:shadow-xl  hover:shadow-teal-400 transition-all duration-500 mt-4" >
                        <q-btn  class="text-white text-xs lg:text-sm w-16 lg:w-20 max-lg:hidden"  to="/"  color="bg-gray-400" label="صفحه اصلی" />
                        <v-menu
                        transition="slide-x-transition"
                      >
                        <template v-slot:activator="{ props }">
                          <v-btn
                            color="primary"
                            v-bind="props"
                          >
                           فروشگاه
                          </v-btn>
                        </template>
                  
                        <v-list>
                          <v-list-item
                          v-for="category in categoriesTilte" :key="category" 
                            :to="`/productList/${category.categoryId}`"
                          >
                            <v-list-item-title
                          
                            
                            >{{ category.title }}</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                      <!------
                        <q-btn-dropdown auto-close class="text-white text-xs lg:text-sm  md:w-28 lg:w-auto "  color="primary" label="فروشگاه" split>
                            <-- dropdown content goes here --
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
                              <-----  <q-item-section side>
                                  <q-icon name="info" color="info" /> 
                                 
                                </q-item-section> ----
                              </q-item>
                    
                              
                    
                              <q-separator inset />
                              <q-item-label header>by happiness</q-item-label>
                    
                         
                    
                            
                            </q-list>
                          </q-btn-dropdown> ---->
   
                   <q-btn  v-for="category in categoriesTilte" :key="category"  :to="`/productList/${category.categoryId}`"  class="text-white  text-xs lg:text-sm md:w-20 lg:w-auto "  color="bg-gray-400" :label="category.title" />
                   <q-btn v-if=" isAdmin" class="text-white  text-xs lg:text-sm " to="/admin/create"  color="bg-gray-400" label="پنل ادمین" />
                  </q-btn-group>
                    </div>
        </div>
        <div>
          <button @click="reponsiveMenuHandeler"  class="md:hidden px-2 h-full" >
            <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

            <!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools -->
<div v-if="!respnsiveMenu " >
  <!-- menu icon --->
  <svg  class="w-10 m-auto"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#2c7dc9">
            
    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    
    <g id="SVGRepo_iconCarrier"> <path fill="#2c7dc9" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"/> </g>
    
    </svg>
</div>
         <!---   <img class="w-10 m-auto" src="../../assets/gifs/menu.gif" alt="">---->
       <!--close menu btn -->
<div v-else >
  <svg  class="w-10 m-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.5" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#265773" stroke-width="1.5"/>
    <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#4491c1" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
</div>
          </button>
        </div>
        <div class="flex flex-row xl:ml-5 lg:ml-3 ml-1" >
        

          <div v-if="!isAuthenticated" class=" m-auto translate-x-3 duration-700 transition-all group translate-y-3 hover:translate-y-0 bg-transparent" >
            <NuxtLink to="/auth/login" >
            <button >
            <img class="w-7 h-7 rounded-full bg-transparent" src="/assets/Svgs/login.png" alt="">
          <p class="opacity-0 bg-transparent duration-500 transition-all group-hover:opacity-100  text-sm font-serif  text-gray-500 rounded-tl-md w-7 h-4 mt-2 rounded-br-md hover:text-gray-200" >ورود</p>
          </button>
        </NuxtLink>
        </div>
        <div v-else class="bg-transparent m-auto translate-x-3 duration-700 transition-all  group translate-y-3 hover:translate-y-0" >
          <button @click="purgeAuth" >
            
         <img class="w-7 h-7 rounded-full bg-transparent" src="/assets/Svgs/logout.png" alt="">
        <p class="opacity-0 duration-500 transition-all group-hover:opacity-100  text-sm font-serif bg-transparent text-gray-500 rounded-tl-md w-7 h-4 mt-2 rounded-br-md hover:text-gray-200" >خروج</p>
        </button>
      </div>
      <div  class=" m-auto translate-x-3 bg-transparent duration-700 transition-all  group translate-y-3 hover:translate-y-0" >
        <NuxtLink to="/user/profile" >
        <button >
        <img class="w-7 h-7 rounded-full bg-transparent" src="/assets/gifs/user-profile.gif" alt="">
      <p class="opacity-0 duration-500 transition-all bg-transparent group-hover:opacity-100  text-sm font-serif bg-transparent text-gray-500 rounded-tl-md w-9 h-4 mt-2 rounded-br-md hover:text-gray-200" >پروفایل</p>
      </button>
    </NuxtLink>
    </div>
           <div>
            
           <!----- <q-avatar>
              <img src="../../assets/icons/social/soc003.svg" alt="">
            </q-avatar> --->
           
           </div>
           
               <div class="bg-red-300 m-auto rounded-lg overflow-hidden ml-2" >
              
                <img class="m-auto max-w-32" src="../../assets/image/logo.png" alt="">
               </div>
          
 
        </div>
    </div>
</div>
<ResponsiveMenu @closeReesponsiveMenu="reponsiveMenuHandeler" :categories="categoriesTilte" :isAdmin="isAdmin" v-if="respnsiveMenu" class="sticky top-0 z-20 animate__animated animate__fadeInRight"  />
</div>
</template>

<script setup>
import { useUserStore } from '~/store/userStore';
import { userAuth } from '~/composables/auth'
import axios from "axios";


const {public:{apiBase}} = useRuntimeConfig();
const userStore = useUserStore();
const isAdmin = ref(false)
const isAuthenticated = ref(false)
const isUser = ref(true)
const router = useRouter()
const respnsiveMenu = ref(false)
///const { checkUser } = userAuth();

/// console.log('user store role:',userStore.role );

function reponsiveMenuHandeler(){
  respnsiveMenu.value = !respnsiveMenu.value
}


function checkUserRole(username) {
        // Simulate API call to fetch user data
        console.log('if');
        axios.post(`${apiBase}/users/userData`,{
          username:username
      })
      .then((res)=>{
        console.log( res.data.data[0].role);
        isAuthenticated.value = true
        if (res.data.data[0].role == 'admin') {
          console.log('if compos if true');
          isAdmin.value = true
        }else{
          isAdmin.value = false
        }
      }).catch((error)=>{
        console.log(error);
         
      })
    
      };


const categoriesTilte = ref()

function getCategoryTitle() {
    axios.get(`${apiBase}/categories`).then((res)=>{
       
        categoriesTilte.value = res.data
        
    }).catch((error)=>{
      toastr.error('خظا در دریافت دسته بندی ها')
    })
  }

  function purgeAuth(){
    localStorage.clear('user')
    console.log('purge auth');
    router.push('/')
  location.reload()

  }

onBeforeMount(()=>{
  getCategoryTitle()
  
})

onMounted(async()=>{
  let user =JSON.parse(localStorage.getItem('user'))
  checkUserRole(user?.username)
  }
)
</script>

<style lang="scss" scoped>

</style>