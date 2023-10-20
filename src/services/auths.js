import { PostRequest } from "../utils/axios/Axios";
const BASE_URL = 'http://10.0.0.146:3000/';

const myIP = 'http://192.168.1.77'
//const myIP = 'http:/10.0.0.146'

export const loginApi = async (obj) => {
  return await PostRequest(`${myIP}:3000/api/auth/generateOTP`, obj);
};

export const otpVerify = async (obj) => {
  return await PostRequest(`${myIP}:3000/api/auth/verifyOTP`, obj);
};
