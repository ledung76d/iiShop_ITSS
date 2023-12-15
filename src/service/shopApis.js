import backendApi from '../utils/backendApi'

const api = '/api/v1'
const shopPath = '/store'
const shopAPIs = {
  getAll: (param) => {
    const { page, limit, name, date, rating, credibility, search } = param
    return backendApi.get(
      `${api}${shopPath}?page=${page}&limit=${limit}&search=${search}&name=${name}&date=${date}&rating=${rating}&credibility=${credibility}`,
    )
  },
  getStoreDetail: (param) => {
    const { storeId } = param
    return backendApi.get(
      `${api}${shopPath}/${storeId}`,
    )
  },
  getReviewsByStoreId: (param) => {
    const { storeId } = param
    return backendApi.get(
      `${api}${shopPath}/${storeId}/comment`,
    )
  }
}
export default shopAPIs
