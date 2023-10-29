import { GetRequest, PostRequest, PutRequest } from '../utils/axios/Axios';

export const getProfileData = async (obj) => await PostRequest(`http://${myIP}:3000/api/users/user`, obj, '');
export const updateProfileData = async (obj) => await PutRequest(`http://${myIP}:3000/api/users/user`, obj);
