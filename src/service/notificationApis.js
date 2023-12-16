import backendApi from '../utils/backendApi'

const api = '/api/v1'
const notificationPath = '/notification'
const notificationAPIs = {
  getAll: (param) => {
    const { page, limit, user } = param
    return backendApi.get(
      `${api}${notificationPath}?page=${page}&limit=${limit}&user=${user}`,
    )
  }
}
export default notificationAPIs
