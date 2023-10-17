import { PostRequest } from "../utils/axios/Axios";
const BASE_URL = 'http://10.0.0.146:3000/';

export const loginApi = async (obj) => {
  return await PostRequest(`${BASE_URL}api/auth/generateOTP`, obj);
};

export const otpVerify = async (obj) => {
  return await PostRequest(`${BASE_URL}api/auth/verifyOTP`, obj);
};
