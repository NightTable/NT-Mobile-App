import { loginReducer } from "../reducer/loginReducer";
import { getCountries } from "../../Services/country";
import { loginApi, otpVerify } from "../../Services/auths";

const {
  logout,
  checkUserLoggedIn,
  updateUserToken,
  isProfileSetup,
  updateCountryData,
  otpGeneratedData,
  verifyGeneratedData,
  userAddress
} = loginReducer.actions;

export const loginUser = (number) => {
  return async (dispatch) => {
    let obj = {
      phoneNumberParam: number,
    };
    const apiCall = await loginApi(obj);
    dispatch(otpGeneratedData(apiCall.data));
  };
};

export const getAllCountriesData = () => {
  return async (dispatch) => {
    let tempArr = [];
    const apiData = await getCountries();
    apiData.map((item) => {
      tempArr.push({
        label:
          item.phoneNumberCode.slice(0, 1) == "+"
            ? `${item.phoneNumberCode}`
            : `+${item.phoneNumberCode}`,
        value:
          item.phoneNumberCode.slice(0, 1) == "+"
            ? `${item.phoneNumberCode}`
            : `+${item.phoneNumberCode}`,
            name:item.name
      });
    });
    dispatch(updateCountryData(tempArr));
  };
};

export const verifyOtp = (otp) => {
  return async (dispatch, getState) => {
    const loginData = getState().login.otpNumberData;
    let obj = {
      isrepresentative: false,
      reqPhoneNumber: loginData.data.phoneNumber,
      reqOtp: otp,
    };
    const otpVerifyData = await otpVerify(obj);
    if (
      otpVerifyData?.toString() ==
      `AxiosError: Request failed with status code 403`
    ) {
      dispatch(
        verifyGeneratedData({
          messasge: "Verification failed! Please try again.",
        })
      );
    } else {
      dispatch(verifyGeneratedData(otpVerifyData.data));
    }
    // dispatch(verifyGeneratedData(otpVerifyData));
  };
};

export const updateToken = (data) => {
  return async (dispatch) => {
    console.log("data===>", data);
    dispatch(updateUserToken(data?.token));
    dispatch(isProfileSetup(data?.data?.isProfileSetup));
    dispatch(checkUserLoggedIn(true));

    //GET CLUBS
  };
};

export const logoutFromApp = () =>{
  return async (dispatch) =>{
    dispatch(logout())
  }
}

export const userProfileAddress  = (data) =>{
  return async (dispatch) =>{
    dispatch(userAddress(data))
  }
}

export function loginStore() {
  // const username = useSelector((state) => state.login.username);
  // const password = useSelector((state) => state.login.password);
  // const token = useSelector((state) => state.login.token);
  // const dispatch = useDispatch();
  // return {
  //     username,
  //     password,
  //     token,
  //     onInputChange: ({ name, value }) => dispatch(onInputChange({ name, value })),
  //     login: (credentials) => dispatch(loginUser(credentials)),
  //     clearLogin: () => dispatch(clearLogin()),
  //     logout: () => dispatch(logout()),
  //     setLoading: (val) => dispatch(setLoading(val)),
  // };
  // console.log("LOGIN STORE===::>>");
}
