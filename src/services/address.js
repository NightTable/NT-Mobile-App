import { PostRequest } from '../utils/axios/Axios';

export const getAddressfromLatlong = async (obj) => {
  const data = await PostRequest(`${process.env.AMIYA_HOME_SSBOSNET}auth/getAddress`, obj);
  console.log(process.env.AMIYA_HOME_SSBOSNET, 'process.env.AMIYA_HOME_SSBOSNET, auth/getAddress', obj);
  return data;
};
