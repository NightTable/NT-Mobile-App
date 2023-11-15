import { GetRequest, PostRequest, PutRequest } from '../utils/axios/Axios';

export const getProfileData = async (obj) => await PostRequest(`${process.env.AMIYA_HOME_SSBOSNET}users/user`, obj, '');
console.log(getProfileData, "profile data");
console.log("url", `${process.env.REACT_APP_BASE_URL}users/user`);
export const updateProfileData = async (obj) => await PutRequest(`${process.env.AMIYA_HOME_SSBOSNET}users/user`, obj);
