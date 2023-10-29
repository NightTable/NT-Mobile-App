import axios, * as others from 'axios';
// import { GetRequest } from '../utils/axios/Axios';
export const getCountries = async () =>
  new Promise((resolve, reject) => {
    console.log('====================================');
    console.log('process.env.REACT_APP_BASE_URL', process.env.REACT_APP_BASE_URL);
    console.log('====================================', `${process.env.REACT_APP_BASE_URL}auth/getCountryCodes`);
    const config = {
      method: 'get',
      url: `${process.env.REACT_APP_BASE_URL}auth/getCountryCodes`,
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

export const getStatesOfCountry = async (data) =>
  new Promise((resolve, reject) => {
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}auth/getStatesOfCountry`,
      headers: {
        'Content-Type': 'application/json'
      },
      data
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

export const citiesOfStates = async (data) =>
  new Promise((resolve, reject) => {
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}auth/citiesOfStates`,
      headers: {
        'Content-Type': 'application/json'
      },
      data
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
