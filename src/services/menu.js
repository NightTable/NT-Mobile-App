import axios, * as others from 'axios';

// CREATE MENU
export const createMenuforClub = async (obj) =>
  new Promise(async (resolve, reject) => {
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}menu/createMenu`,

      headers: {
        'Content-Type': 'application/json'
      },
      data: obj
    };

    axios(config)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });

// GET MENU OF CLUB
export const getMenuforClub = async (club_id) =>
  new Promise(async (resolve, reject) => {
    const config = {
      method: 'get',
      url: `${process.env.REACT_APP_BASE_URL}menu/club/${club_id}`,

      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios(config)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });

// GET MENU OF CLUB
export const deleteMenuforClub = async (menu_id) =>
  new Promise(async (resolve, reject) => {
    const config = {
      method: 'delete',
      url: `${process.env.REACT_APP_BASE_URL}menu/${menu_id}`,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios(config)
      .then((response) => {
        resolve(response.data);
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log('error in catch', error);
        reject(error);
      });
  });

// GET MENU OF CLUB
export const updateMenuforClub = async (obj, menu_id) =>
  new Promise(async (resolve, reject) => {
    console.log(obj, menu_id);
    const config = {
      method: 'put',
      url: `${process.env.REACT_APP_BASE_URL}menu/${menu_id}`,
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
        console.log('error in catch', error);
        reject(error);
      });
  });
