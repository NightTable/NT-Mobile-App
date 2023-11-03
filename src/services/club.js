import { GetRequest } from '../utils/axios/Axios';

export const getClubs = async () => {
  try {
    const response = await GetRequest(`${process.env.REACT_APP_BASE_URL}clubs/clubs`, '', '');
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getClubDetails = async (clubId) => {
  try {
    const response = await GetRequest(`${process.env.REACT_APP_BASE_URL}clubs/clubs/${clubId}`, '', '');
    return response.data;
  } catch (error) {
    return error;
  }
};
