import axios from 'axios';

const instance = axios.create({
  baseURL:
    import.meta.env.VITE_BACKEND_URL ||
    'http://localhost:8000',
});

instance.interceptors.request.use(
  (res) => res,
  (error) => {
    const isInternalServerError =
      error.response.status === 500;
    if (isInternalServerError)
      return Promise.resolve(
        error.response,
      );

    const isBadRequest =
      error.response.status === 400;
    if (isBadRequest)
      return Promise.resolve(
        error.response,
      );

    const isUnlicenseSite =
      error.response.status === 403;
    if (isUnlicenseSite)
      return Promise.resolve(
        error.response,
      );

    const isUnauthorized =
      error.response.status === 401;
    if (isUnauthorized)
      return Promise.resolve(
        error.response,
      );

    return Promise.reject(error);
  },
);

export default instance;
