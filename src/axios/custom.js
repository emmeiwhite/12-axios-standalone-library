import axios from 'axios'

// custom instance

const fetchCustom = axios.create({
  baseURL: 'https://www.course-api.com',
  headers: {
    Accept: 'application/json'
  }
})

export default fetchCustom

// so this fetchCustom can be used when we are using the same baseURL for different resources with the above headers, which means we'll save a lot of time while development!
