import axios from "axios";

export default defineNuxtRouteMiddleware((to, from,context) => {
   // if (to.params.id === '1') {
   //   return abortNavigation()
   // }
    // In a real app you would probably not redirect every route to `/`
    // however it is important to check `to.path` before redirecting or you
    // might get an infinite redirect loop
    if (process.browser) {
      

    const {public:{apiBase}} = useRuntimeConfig();
    const user = window.localStorage.getItem('user')
   
   if (user) {
    axios.get(`${apiBase}/users/userData`,{
      id:user?.userId
  })
  .then((res)=>{
    console.log(res.data[0]);
    context.store.userStore.setUserData(res.data[0]);
  }).catch((error)=>{
      toastr.error(error)
     
  })
   }else{
  if ( to.path == '/auth/login' || to.path == '/' ) {
    
  } else {
    return navigateTo('/auth/login')
  }
    
   }

  }


  })