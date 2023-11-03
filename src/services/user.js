import { GetRequest, PostRequest, PutRequest } from '../utils/axios/Axios';

export const getProfileData = async (obj) => await PostRequest(`${process.env.REACT_APP_BASE_URL}/api/users/user`, obj, '');
console.log(getProfileData, "profile data");
export const updateProfileData = async (obj) => await PutRequest(`${process.env.REACT_APP_BASE_URL}/api/users/user`, obj);
