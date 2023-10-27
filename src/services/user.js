import axios from 'axios';
import { GetRequest, PostRequest, PutRequest } from '../utils/axios/Axios';

const myIP = '192.168.1.77'
//const myIP = '10.0.0.146'

export const getProfileData = async (obj) => {
  return await PostRequest(`http://${myIP}:3000/api/users/user`, obj, '');
};
export const updateProfileData = async (obj) => {

  console.log('====================================');
  console.log('obj', obj);
  console.log('====================================');
  return await PutRequest(`http://${myIP}:3000/api/users/user`, obj);
};
