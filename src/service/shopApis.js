import backendApi from '../utils/backendApi'

const api = '/api/v1'
const shopPath = '/store'
const shopAPIs = {
  getAll: (param) => {
    const { page, limit, name, date, rating, credibility } = param
    return backendApi.get(
      `${api}${shopPath}?page=${page}&limit=${limit}&name=${name}&date=${date}&rating=${rating}&credibility=${credibility}`,
    )
  },
  getStoreDetail: (param) => {
    const { storeId } = param
    return backendApi.get(
      `${api}${shopPath}/${storeId}`,
    )
  },
}
export default shopAPIs
