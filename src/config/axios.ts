import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '9034b8fb424d4049a180d3803e15a0d5'
  }
})

export default apiClient
