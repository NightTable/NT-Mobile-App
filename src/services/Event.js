import { GetRequest } from "../utils/axios/Axios";

//GET ALL THE CLUBS EVENT
const myIP = '192.168.1.77'
//const myIP = '10.0.0.146'

export const getEventofClub = async (clubId, obj) => {
  try {
    const response = await GetRequest(
      `http://${myIP}:3000/api/events/club/${clubId}`,
      "",
      ""
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

//----SHOWING PARTICULAR EVENT ---//

//expect params  let obj ={ clubId:'',EventId:''}
export const ViewEvent = async (obj) => {
  return new Promise((resolve, reject) => {
    var config = {
      method: "get",
      url: `${process.env.REACT_APP_BASE_URL}events/club/${obj.clubId}/${obj.EventId}`,
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

