import { PostRequest } from '../utils/axios/Axios';

export const getAddressfromLatlong = async (obj) => {
  const data = await PostRequest(`${process.env.AMIYA_HOME_SSBOSNET}auth/getAddress`, obj);
  return data;
};
