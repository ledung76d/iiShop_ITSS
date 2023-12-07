import backendApi from '../utils/backendApi'

const api = '/api/v1'
const shopPath = '/shop'
const shopAPIs = {
  test: () => {
    return backendApi.get(
      `${api}${shopPath}`,
    )
  },
}
export default shopAPIs
