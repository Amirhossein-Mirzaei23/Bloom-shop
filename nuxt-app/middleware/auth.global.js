import axios from "axios";
import { useUserStore } from "~/store/userStore";
import { userAuth } from "#imports";

export default defineNuxtRouteMiddleware((to, from,context) => {
  const {public:{apiBase}} = useRuntimeConfig();
  const {checkUser} = userAuth()
  const userStore =useUserStore()
  function checkUsee(user){
    axios.post(`${apiBase}/users/userData`,{
      username:user.username
  })
  .then((res)=>{
    console.log(res.data[0]);
    userStore.setUserData(res.data[0])
   console.log( 'sored role',userStore.role);
  }).catch((error)=>{
      toastr.error(error)
     
  })
}
    if (process.client) {
      const user = JSON.parse(window.localStorage.getItem('user'))
      if (user) {
        console.log(user.username);
        checkUser(user.username)
           }else{
          if ( to.path == '/auth/login' || to.path == '/' ) {
            
          } else {
            return navigateTo('/auth/login')
          }
        
            }
    }


  //  
   

  
  }





  
 )