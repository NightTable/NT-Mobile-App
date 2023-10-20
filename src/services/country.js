import axios, * as others from "axios";

const myIP = '192.168.1.77'
//const myIP = '10.0.0.146'

export const getCountries = async () => {
  return new Promise((resolve, reject) => {
    var config = {
      method: "get",
      url: `http://${myIP}:3000/api/auth/getCountryCodes`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        resolve(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });
};

export const getStatesOfCountry = async (data) => {
  return new Promise((resolve, reject) => {
    var config = {
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}auth/getStatesOfCountry`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        resolve(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });
};

export const citiesOfStates = async (data) => {
  return new Promise((resolve, reject) => {
    var config = {
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}auth/citiesOfStates`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
        };

    axios(config)
      .then(function (response) {
        resolve(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });
};
