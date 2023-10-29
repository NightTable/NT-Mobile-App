import { PostRequest } from '../utils/axios/Axios';

export const getAddressfromLatlong = async (obj) => {
  const data = await PostRequest(`${process.env.REACT_APP_BASE_URL}auth/getAddress`, obj);
  return data;
};
