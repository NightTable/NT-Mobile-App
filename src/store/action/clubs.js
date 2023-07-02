// import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';
import {clubReducer} from '../reducer/clubReducer';

const {
  getAllClubs,
  getClubDetails,
  addClub,
  updateClub,
  editClub,
  deleteClub,
} = clubReducer.actions;

export const getAllClubfromdb = data => {
  return dispatch => {

  };
};

export const getClubDetailbyId =  (id) => {
  return dispatch =>{

  }
}
