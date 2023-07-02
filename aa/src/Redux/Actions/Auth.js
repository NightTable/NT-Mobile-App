//LIBRARIES IMPORT 
// import AsyncStorage from "@react-native-async-storage/async-storage";




//ACTION TYPE 
export const AuthActionType = {
LOGIN_OTP_TRIGGERED: "LOGIN_OTP_TRIGGERED",
  USER_LOGGED_IN: "USER_LOGGED_IN",
  USER_PROFILE_SAVED: "USER_PROFILE_SAVED",
  USER_PROFILE_DATA: "USER_PROFILE_DATA",
  USER_LOGOUT: "USER_LOGOUT",
};





//USERLOGIN
export const loginOtp = (number) => {
  return async (dispatch) => {

    //API FOR OTP TRIGGERING 

    console.log("User Entered Number : ",number);
    //DISPATCHING THE LOADER VALUE TO HANDLE BUTTON LOADER 
    dispatch({
      type: AuthActionType.LOGIN_OTP_TRIGGERED,
      user: '',
    });
  };
};


//USERLOGIN
export const loginOtpVerifcation = () => {
    return async (dispatch) => {
  
      //A
      dispatch({
        type: UserActionType.USER_LOGIN,
        user: userData,
      });
      dispatch(userLoggedInCheck(true));
    };
  };

  
//LOGIN_CHECK
export const userLoggedInCheck = (check) => {
  return async (dispatch) => {
    dispatch({
      type: UserActionType.USER_LOGGED_IN,
      userLoggedIn: check,
    });
  };
};


//LOGOUT
export function userLogout() {
  return async (dispatch) => {
    dispatch({
      type: UserActionType.USER_DATA_UPDATED_LOADER,
      loader: false,
    });
  };
}
