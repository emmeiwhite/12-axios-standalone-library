import { useEffect } from 'react'
import fetchCustom from '../axios/custom'
import axios from 'axios'

const randomUserUrl = 'https://randomuser.me/api'

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      // Since we are using the custom instance, we have already set the baseURL, so we only need to provide the resource /react-store-products
      const resp1 = await fetchCustom('/react-store-products')

      // this one is simple fetch without the baseURL and headers used above
      const resp2 = await axios(randomUserUrl)
    } catch (error) {}
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className="text-center">custom instance</h2>
}
export default CustomInstance
