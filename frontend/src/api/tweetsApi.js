import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api'

const tweetsApi = {
  getTweets: async () => {
    const response = await axios.get(`${BASE_URL}/tweets/`)
    return response.data.results
  },
  createTweet: async (text) => {
    const response = await axios.post(`${BASE_URL}/tweets/`, {
      text: text,
    })
    return response.data
  },
  updateTweet: async (id, text) => {
    const response = await axios.put(`${BASE_URL}/tweets/${id}/`, {
      text: text,
    })
    return response.data
  },
  deleteTweet: async (id) => {
    const response = await axios.delete(`${BASE_URL}/tweets/${id}/`)
    return response.data
  },
}

export default tweetsApi
