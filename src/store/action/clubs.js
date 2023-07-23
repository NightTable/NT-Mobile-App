// import axios from "axios";
import { clubReducer } from "../reducer/clubReducer";
import { getClubs } from "../../services/club";

const {
  getAllClubs,
  getClubDetails,
  addClub,
  updateClub,
  editClub,
  deleteClub,
} = clubReducer.actions;

export const getAllClubfromdb = () => {
  return async (dispatch) => {
    const apiCall = await getClubs();
    dispatch(getAllClubs(apiCall.data));
  };
};

export const getClubDetailbyId = (id) => {
  return (dispatch) => {};
};
