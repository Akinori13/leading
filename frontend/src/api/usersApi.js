import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api'

const usersApi = {
  signup: async (username, email, password) => {
    const response = await axios.post(`${BASE_URL}/accounts/`, {
      username,
      email,
      password,
    })
    return response.data
  },
  login: async (email, password) => {
    const response = await axios.post(`${BASE_URL}/accounts/token/`, {
      email,
      password,
    })
    return response.data
  },
  getUserProfile: async (token, id) => {
    const response = await axios.get(`${BASE_URL}/accounts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  },
}

export default usersApi
