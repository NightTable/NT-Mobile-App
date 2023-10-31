import { clubReducer } from '../reducer/clubReducer';
import { getClubs } from '../../services/club';
import { getEventofClub } from '../../services/Event';
import { getEventTableConfigData } from '../../services/tableConfig';

const { getAllClubs, getClubEventsData, getIndividualClubTableConfig, isLoaderState } = clubReducer.actions;

// GET ALL THE CLUB
export const getAllClubfromdb = () => async (dispatch) => {
    const apiCall = await getClubs();
    dispatch(getAllClubs(apiCall.data));
  };

// GET THE EVENT OF CLUB
export const getEventOfClub = (id) => async (dispatch) => {
    const apiCall = await getEventofClub(id);
    dispatch(getClubEventsData(apiCall.data));
  };

// GET THE TABLE CONFIG OF EVENT OF CLUB :: (club_id, event_id)
export const getEventTableConfigOfClub = (clubId, eventId) => async (dispatch) => {
    const apiCall = await getEventTableConfigData(clubId, eventId);
    console.log(apiCall, 'api call');
    dispatch(getIndividualClubTableConfig(apiCall));
    dispatch(isLoaderState(false));
  };

export const updateClubReletatedLoaderData = (state) => async (dispatch) => {
    dispatch(isLoaderState(state));
  };
