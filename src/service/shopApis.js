import backendApi from '../utils/backendApi';

const api = '/api/v1';
const shopPath = '/store';
const shopAPIs = {
  getAll: (param) => {
    const {
      page,
      limit,
      search,
      ratingAz,
      ratingZa,
      credibilityAz,
      credibilityZa,
    } = param;
    return backendApi.get(
      `${api}${shopPath}?page=${page}&limit=${limit}&search=${search}&ratingAz=${ratingAz}&ratingZa=${ratingZa}&credibilityAz=${credibilityAz}&credibilityZa=${credibilityZa} `,
    );
  },
  getStoreDetail: (param) => {
    const { storeId } = param;
    return backendApi.get(
      `${api}${shopPath}/${storeId}`,
    );
  },
  getReviewsByStoreId: (param) => {
    const { storeId } = param;
    return backendApi.get(
      `${api}${shopPath}/${storeId}/comment`,
    );
  },
  createReview: (param) => {
    const { storeId, comment } = param;
    return backendApi.post(
      `${api}${shopPath}/${storeId}/comment`,
      comment,
    );
  },
  createReaction: (param) => {
    const {
      storeId,
      commentId,
      reaction,
    } = param;
    return backendApi.post(
      `${api}${shopPath}/${storeId}/comment/${commentId}/reaction`,
      reaction,
    );
  },
};
export default shopAPIs;
