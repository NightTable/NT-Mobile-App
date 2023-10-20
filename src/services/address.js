import { GetRequest, PostRequest } from "../utils/axios/Axios";


const myIP = '192.168.1.77'
//const myIP = '10.0.0.146'

export const getAddressfromLatlong = async (obj) => {
//   console.log("obj=====>", obj);
  const data = await PostRequest(
    `http://${myIP}:3000/api/auth/getAddress`,
    obj
  );
  return data;
};
