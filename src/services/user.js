import { GetRequest, PostRequest, PutRequest } from '../utils/axios/Axios';

export const getProfileData = async (obj) => await PostRequest(`${AMIYA_HOME_SSBOSNET}/api/users/user`, obj, '');
console.log(getProfileData, "profile data");
export const updateProfileData = async (obj) => await PutRequest(`${AMIYA_HOME_SSBOSNET}/api/users/user`, obj);
