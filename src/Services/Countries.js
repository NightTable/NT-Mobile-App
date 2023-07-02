import axios, * as others from 'axios';
// import {COUNTRY_CODE, LOCAL_URL, LOCAL_URL_HOME_VG} from '@env';

//axios
import {GetRequest} from '../Utils/Axios';

//get countries code

export const getCountries = async () => {
  // console.log (`${LOCAL_URL_HOME_VG}${COUNTRY_CODE}`);
  const data = await GetRequest (
    `http://localhost:3000/api/auth/getCountryCodes`,
    ''
  );
  console.log ('data into api ===>', data);
  return data;
};

// export const getCountries = async () => {
//   return new Promise ((resolve, reject) => {
//     var config = {
//       method: 'get',
//       url: `${process.env.REACT_APP_BASE_URL}auth/getCountryCodes`,
//       headers: {},
//     };

//     axios (config)
//       .then (function (response) {
//         resolve (response.data.data);
//       })
//       .catch (function (error) {
//         console.log (error);
//         reject (error);
//       });
//   });
// };

export const getStatesOfCountry = async data => {
  return new Promise ((resolve, reject) => {
    var config = {
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}auth/getStatesOfCountry`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    axios (config)
      .then (function (response) {
        resolve (response.data.data);
      })
      .catch (function (error) {
        console.log (error);
        reject (error);
      });
  });
};

export const citiesOfStates = async data => {
  return new Promise ((resolve, reject) => {
    var config = {
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}auth/citiesOfStates`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios (config)
      .then (function (response) {
        resolve (response.data.data);
      })
      .catch (function (error) {
        console.log (error);
        reject (error);
      });
  });
};
