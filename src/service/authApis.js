import backendApi from '../utils/backendApi'

const api = '/api/v1'
const shopPath = '/login'

const authAPIs = {
  login: (body) => {
    return backendApi.post(
      `${api}${shopPath}`,
      body
    )
  },
}
export default authAPIs