import axios, * as others from 'axios';
import { GetRequest } from '../utils/axios/Axios';

export const getProfileData = async (id) =>
  new Promise((resolve, reject) => {
    const config = {
      method: 'get',
      url: `${process.env.REACT_APP_BASE_URL}representatives/representative/${id}`,
      headers: {}
    };

    axios(config)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });

export const addRepresentativetoClub = async (obj) =>
  new Promise((resolve, reject) => {
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}representatives/createRepresentative`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: obj
    };

    axios(config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });

export const editRepresentativetoClub = async (obj) =>
  new Promise((resolve, reject) => {
    const config = {
      method: 'put',
      url: `${process.env.REACT_APP_BASE_URL}representatives/updateRepresentative`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: obj
    };

    axios(config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
// sample club id 63ec556200046de1daa3eee9

export const getRepresentativebyClub = async (club_id) => {
  try {
    const response = await GetRequest(`${process.env.REACT_APP_BASE_URL}representatives/club/${club_id}`, '', '');

    return response.data;
  } catch (error) {
    return error;
  }
};

// sample club id 63ec556200046de1daa3eee9
export const deleteRepresentativebyClub = async (representative_id) =>
  new Promise((resolve, reject) => {
    const config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}representatives/representative/${representative_id}`,
      headers: {},
      data: ''
    };

    console.log('config', config);
    axios(config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
