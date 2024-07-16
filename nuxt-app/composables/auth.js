import { ref } from 'vue';
import axios from 'axios';


export  function userAuth() {
    const {public:{apiBase}} = useRuntimeConfig();
    
    function checkUser(username) {
        // Simulate API call to fetch user data
        console.log('if');
        axios.post(`${apiBase}/users/userData`,{
          username:username
      })
      .then((res)=>{
        console.log( res.data.data[0].role);
       
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


