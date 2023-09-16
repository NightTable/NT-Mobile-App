import axios from "axios";
import { GetRequest, PostRequest, PutRequest } from "../utils/axios/Axios";

export const getProfileData = async (obj) => {
    return new Promise((resolve, reject) => {
        try {
          var config = {
            method: "put",
            url: `${process.env.REACT_APP_BASE_URL}clubs/club/${clubId}`,
            headers: {
              "Content-Type": "application/json",
            },
            data: obj,
          };
          axios(config)
            .then(function (response) {
              resolve(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        } catch (error) {
          reject(error);
        }
      });
};
export const updateProfileData = async (obj) => {
  //   console.log("obj=====>", obj);
  const data = await PutRequest(`http://localhost:3000/api/users/user`, obj);
  return data;
};
