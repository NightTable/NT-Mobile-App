import { GetRequest } from "../utils/axios/Axios";
//GET INDIVDUAL EVENT TABLE CONFIG
export const getEventTableConfigData = async (clubId, eventId) => {
  try {
    const response = await GetRequest(
      `http://localhost:3000/api/events/club/${clubId}/${eventId}`,
      "",
      ""
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
