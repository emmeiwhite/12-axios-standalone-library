import { useEffect } from 'react'
import axios from 'axios'
// limit, if 429 wait for 15 min and try again
const url = 'https://www.course-api.com/react-store-products'

const FirstRequest = () => {
  async function fetchData() {
    console.log('I fetch data for you')
    try {
      const response = await axios.get(url)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className="text-center">first request</h2>
}
export default FirstRequest
