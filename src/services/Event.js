import { GetRequest } from '../utils/axios/Axios';

export const getEventofClub = async (clubId, obj) => {
  try {
    const response = await GetRequest(`${process.env.REACT_APP_BASE_URL}events/club/${clubId}`, '', '');
    return response.data;
  } catch (error) {
    return error;
  }
};

// ----SHOWING PARTICULAR EVENT ---//

// expect params  let obj ={ clubId:'',EventId:''}
export const ViewEvent = async (obj) =>
  new Promise((resolve, reject) => {
    const config = {
      method: 'get',
      url: `${process.env.REACT_APP_BASE_URL}events/club/${obj.clubId}/${obj.EventId}`,
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
