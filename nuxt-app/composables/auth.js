import { ref } from 'vue';
import axios from 'axios';
import { useUserStore } from "~/store/userStore";

export  function userAuth() {
    const {public:{apiBase}} = useRuntimeConfig();
    const userStore =useUserStore()
    function checkUser(username) {
        // Simulate API call to fetch user data
        console.log('if');
        axios.post(`${apiBase}/users/userData`,{
          username:username
      })
      .then((res)=>{
        
        userStore.setUserData(res.data.data[0])
        
        if (res.data.data) {
          console.log('if compos if true');
            return true
        }else{
            return false
        }
      }).catch((error)=>{
        console.log(error);
         
      })
    
      };
  
    return { checkUser };
  };


