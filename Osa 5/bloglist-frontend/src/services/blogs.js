import axios from 'axios'
const baseUrl = '/api/blogs'


const setToken = newToken => {
  let token = null
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getAll, setToken }