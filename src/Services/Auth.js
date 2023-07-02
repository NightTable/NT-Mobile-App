// import {
//   SESSION_VERIFICATION,
//   LOGIN_OTP,
//   OTP_VERIFY,
//   LOCAL_URL,
//   LOCAL_URL_HOME_VG,
// } from "@env";
const axios = require("axios");

console.log("LOCAL_URL_HOME_VG", LOCAL_URL_HOME_VG);

//FOR TIGGERING THE OTP
export const loginorSignUp = async (phoneNumber) => {
  try {
    const data = {
      phoneNumberParam: `${phoneNumber}`,
    };
    const response = await axios.post(`${LOCAL_URL_HOME_VG}${LOGIN_OTP}`, data);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

//FOR VERIFYING THE TRIGGERED OTP
export const otpVerify = async (phoneNumber, otp) => {
  try {
    const data = {
      reqPhoneNumber: `${phoneNumber}`,
      reqOtp: `${otp}`,
    };

    const config = {
      method: "post",
      url: `${LOCAL_URL_HOME_VG}${OTP_VERIFY}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios(config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("catch block for otp verify", error);
  }
};

//FOR VERIFYING THE SESSION TOKEN
export const sessionTokenVerify = async () => {
  return new Promise((resolve, reject) => {
    try {
      // var axios = require("axios");

      var config = {
        method: "get",
        url: `${LOCAL_URL_HOME_VG}${SESSION_VERIFICATION}`,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2M0ZDcyYjMwMjgwNTMyYTIzMzJmYWYiLCJpYXQiOjE2NzM5MjcyMTZ9.1Bw5J0puwxKj3OV-kYrkj5nxUlfQozFd8JbCjXC61fI",
        },
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      resolve(error);
    }
  });
};
