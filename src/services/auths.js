import { PostRequest } from '../utils/axios/Axios';

export const loginApi = async (obj) => await PostRequest(`${process.env.REACT_APP_BASE_URL}auth/generateOTP`, obj);

export const otpVerify = async (obj) => await PostRequest(`${process.env.REACT_APP_BASE_URL}auth/verifyOTP`, obj);
