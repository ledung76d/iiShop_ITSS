import backendApi from '../utils/backendApi'

const api = '/api/v1'
const shopPath = '/store'
const shopAPIs = {
  getAll: (param) => {
    const { page, limit } = param
    return backendApi.get(
      `${api}${shopPath}?page=${page}&limit=${limit}`,
    )
  },
}
export default shopAPIs
