import { PostRequest } from "../Utils/axios/Axios";
const BASE_URL = 'http://localhost:3000/';

export const loginApi = async (obj) => {
  return await PostRequest(`${BASE_URL}api/auth/generateOTP`, obj);
};

export const otpVerify = async (obj) => {
  return await PostRequest(`${BASE_URL}api/auth/verifyOTP`, obj);
};
