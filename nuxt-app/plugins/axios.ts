import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const defaultUrl = "https://localhost:500/api";

  let api = axios.create({
    baseURL: defaultUrl,
    headers: {
      common: {},
    },
    params:{
       
    },
    
  });
return {
    provide: {
      api: api,
    },
  };
});
