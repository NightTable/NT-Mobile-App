import {
  SESSION_VERIFICATION,
  LOGIN_OTP,
  OTP_VERIFY,
  LOCAL_URL,
  LOCAL_URL_HOME_VG,
} from "@env";

//FOR TIGGERING THE OTP
export const loginorSignUp = async (phoneNumber) => {
  return new Promise((resolve, reject) => {
    try {


      console.log("phoneNumber==>",phoneNumber);
      var axios = require("axios");
      var data = JSON.stringify({
        phoneNumberParam: `${phoneNumber}`,
      });

      var config = {
        method: "post",
        url: `${LOCAL_URL}${LOGIN_OTP}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
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

//FOR VERIFYING THE TRIGGERED OTP
export const otpVerify = async (phoneNumber, otp) => {
  return new Promise((resolve, reject) => {
    try {
      var axios = require("axios");
      var data = JSON.stringify({
        reqPhoneNumber: `${phoneNumber}`,
        reqOtp: `${otp}`,
      });

      var config = {
        method: "post",
        url: `${LOCAL_URL}${OTP_VERIFY}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
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

//FOR VERIFYING THE SESSION TOKEN
export const sessionTokenVerify = async () => {
  return new Promise((resolve, reject) => {
    try {
      var axios = require("axios");

      var config = {
        method: "get",
        url: `${LOCAL_URL}${SESSION_VERIFICATION}`,
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
