import { clubReducer } from "../reducer/clubReducer";
import { getClubs } from "../../services/club";
import { getEventofClub } from "../../services/Event";
import { getEventTableConfigData } from "../../services/tableConfig";

const {
  getAllClubs,
  getClubEventsData,
  getIndividualClubTableConfig,
  isLoaderState,
} = clubReducer.actions;

//GET ALL THE CLUB
export const getAllClubfromdb = () => {
  return async (dispatch) => {
    const apiCall = await getClubs();
    dispatch(getAllClubs(apiCall.data));
  };
};

//GET THE EVENT OF CLUB
export const getEventOfClub = (id) => {
  return async (dispatch) => {
    const apiCall = await getEventofClub(id);
    dispatch(getClubEventsData(apiCall.data));
  };
};

// GET THE TABLE CONFIG OF EVENT OF CLUB :: (club_id, event_id)
export const getEventTableConfigOfClub = (club_id, event_id) => {
  return async (dispatch) => {
    const apiCall = await getEventTableConfigData(club_id, event_id);
    dispatch(getIndividualClubTableConfig(apiCall.tableConfigForEvent));
    dispatch(isLoaderState(false));
  };
};

export const updateClubReletatedLoaderData = (state) => {
  return async (dispatch) => {
    dispatch(isLoaderState(state));
  };
};
