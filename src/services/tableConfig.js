import { GetRequest } from '../utils/axios/Axios';
// GET INDIVDUAL EVENT TABLE CONFIG

export const getEventTableConfigData = async (clubId, eventId) => {
  try {
    const response = await GetRequest(
      `${process.env.REACT_APP_BASE_URL}tableconfigurations/tableConfigurations/${eventId}`,
      '',
      ''
    );
    return response.data.data;
  } catch (error) {
    return error;
  }
};
