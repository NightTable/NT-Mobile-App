// import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';

import {loginReducer} from '../reducer/loginReducer';
import {getCountries} from '../../services/Countries';

const {loginSucess, logout, setLoading,updateCountryData} = loginReducer.actions;

export const loginUser = credentials => {
  return dispatch => {
    console.log ('credentials====>', credentials);
    // API request to authenticate user
    //dispatch (setLoading (true));
    // axios.post('https://dummyjson.com/auth/login', credentials)
    //     .then((response) => {
    //         const { token } = response.data;

    //         // Dispatch login success action with the JWT
    dispatch (loginSucess (credentials));
    //         dispatch(clearLogin());
    // dispatch(setLoading (true));

    //console.log('username',username);

    //         // Save token to local storage for persistent login
    //       //  localStorage.setItem('token', token);
    //     })
    //     .catch((error) => {
    //         // Handle login error
    //     });
  };
};

export const getAllCountriesData = params => {
  return async dispatch => {
    const apiData = await getCountries ();
    console.log ('Api - Data======>', apiData);
    dispatch (updateCountryData (apiData));
  };
};

export function loginStore () {
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

  console.log ('LOGIN STORE===::>>');
}
