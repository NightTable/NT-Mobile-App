import { GetRequest, PostRequest } from "../utils/axios/Axios";

export const getAddressfromLatlong = async (obj) => {
//   console.log("obj=====>", obj);
  const data = await PostRequest(
    `http://10.0.0.146:3000/api/auth/getAddress`,
    obj
  );
  return data;
};
