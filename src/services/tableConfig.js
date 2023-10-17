import { GetRequest } from '../utils/axios/Axios';
//GET INDIVDUAL EVENT TABLE CONFIG
export const getEventTableConfigData = async (clubId, eventId) => {
  try {
    console.log('====================================');
    console.log(
      'http://10.0.0.146:3000/api/tableconfigurations/tableConfigurations/${eventId}',
      `http://10.0.0.146:3000/api/tableconfigurations/tableConfigurations/${eventId}`,
    );
    console.log('====================================');
    const response = await GetRequest(
      // `http://10.0.0.146:3000/api/events/club/${clubId}/${eventId}`,
      `http://10.0.0.146:3000/api/tableconfigurations/tableConfigurations/${eventId}`,
      '',
      '',
    );

    //console.log('response===>', response);
    console.log("response data", response.data.data);
    return response.data.data;
  } catch (error) {
    return error;
  }
};
