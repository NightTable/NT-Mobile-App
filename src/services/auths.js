import { PostRequest } from '../utils/axios/Axios';

export const loginApi = async (obj) => await PostRequest(`${process.env.AMIYA_HOME_SSBOSNET}auth/generateOTP`, obj);
console.log(`${process.env.REACT_APP_BASE_URL}auth/generateOTP`, "my url");

export const otpVerify = async (obj) => await PostRequest(`${process.env.AMIYA_HOME_SSBOSNET}auth/verifyOTP`, obj);
