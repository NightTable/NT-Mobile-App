import { GetRequest } from '../utils/axios/Axios';
// GET INDIVDUAL EVENT TABLE CONFIG

export const getEventTableConfigData = async (clubId, eventId) => {
  try {
    const response = await GetRequest(
      `${process.env.AMIYA_HOME_SSBOSNET}tableconfigurations/tableConfigurations/${eventId}`,
      '',
      ''
    );
    return response.data.data;
  } catch (error) {
    return error;
  }
};
