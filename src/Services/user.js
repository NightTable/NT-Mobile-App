import axios from 'axios';
import { GetRequest, PostRequest, PutRequest } from '../Utils/axios/Axios';

export const getProfileData = async (obj) => {
  return await PostRequest(`http://localhost:3000/api/users/user`, obj, '');
};
export const updateProfileData = async (obj) => {

  console.log('====================================');
  console.log('obj', obj);
  console.log('====================================');
  return await PutRequest(`http://localhost:3000/api/users/user`, obj);
};
