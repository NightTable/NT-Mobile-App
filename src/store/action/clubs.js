// import axios from "axios";
import { clubReducer } from "../reducer/clubReducer";
import { getClubs } from "../../services/club";
import { getEventofClub } from "../../services/Event";

const { getAllClubs, getClubDetails, getClubEventsData } = clubReducer.actions;

export const getAllClubfromdb = () => {
  return async (dispatch) => {
    const apiCall = await getClubs();
    dispatch(getAllClubs(apiCall.data));
  };
};

export const getClubDetailbyId = (id) => {
  return (dispatch) => {};
};

export const getEventOfClub = (id) => {
  return async (dispatch) => {
    // console.log("event of club", id);
    const apiCall = await getEventofClub(id);
    dispatch(getClubEventsData(apiCall.data))
  };
};
