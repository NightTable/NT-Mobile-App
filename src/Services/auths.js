import { PostRequest } from "../Utils/axios/Axios";

export const loginApi = async (obj) => {
  
  const data = await PostRequest(
    `http://localhost:3000/api/auth/generateOTP`,
    obj
  );
  return data;
};

export const otpVerify = async (obj) => {
  const data = await PostRequest(
    `http://localhost:3000/api/auth/verifyOTP`,
    obj
  );
  return data;
};
