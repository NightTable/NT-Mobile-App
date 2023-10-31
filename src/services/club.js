import { GetRequest } from '../utils/axios/Axios';

export const getClubs = async () => {
  try {
    const response = await GetRequest(`${process.env.AMIYA_HOME_SSBOSNET}clubs/clubs`, '', '');
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getClubDetails = async (clubId) => {
  try {
    const response = await GetRequest(`${process.env.AMIYA_HOME_SSBOSNET}clubs/clubs/${clubId}`, '', '');
    return response.data;
  } catch (error) {
    return error;
  }
};
