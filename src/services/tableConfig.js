import { GetRequest } from '../utils/axios/Axios';
//GET INDIVDUAL EVENT TABLE CONFIG
export const getEventTableConfigData = async (clubId, eventId) => {
  try {
    console.log('====================================');
    console.log(
      'http://localhost:3000/api/tableconfigurations/tableConfigurations/${eventId}',
      `http://localhost:3000/api/tableconfigurations/tableConfigurations/${eventId}`,
    );
    console.log('====================================');
    const response = await GetRequest(
      // `http://localhost:3000/api/events/club/${clubId}/${eventId}`,
      `http://localhost:3000/api/tableconfigurations/tableConfigurations/${eventId}`,
      '',
      '',
    );

    console.log('response===>', response);
    return response.data;
  } catch (error) {
    return error;
  }
};
