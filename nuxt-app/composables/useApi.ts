import axios from 'axios'

export const useApi = () => {
  const baseURL = 'http://localhost:5000/api'
 // const storeUser = useStoreUser()

  return axios.create({
    baseURL,
    headers: {
  //    Authorization: `Bearer ${storeUser.token}`
    }
  })
}