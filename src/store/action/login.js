// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { loginReducer } from "../reducer/loginReducer";
import { getCountries } from "../../services/country";
import { loginApi } from "../../services/auths";

const { otpGeneratedData, loginSucess, logout, setLoading, updateCountryData } =
  loginReducer.actions;

export const loginUser = (number) => {
  return async (dispatch) => {
    let obj = {
      phoneNumberParam: number,
    };
    const apiCall = await loginApi(obj);

    console.log("apiCall.data====>", apiCall.data);
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
      });
    });
    dispatch(updateCountryData(tempArr));
  };
};

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
