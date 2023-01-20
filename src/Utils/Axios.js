import axios from "axios";

export const GetRequest = async (session_url, body) => {
  return new Promise(async (resolve, reject) => {
    try {
      var config;
      var data = "";

      if (body === "") {
        config = {
          method: "get",
          url: session_url,
          // headers: { },
          // data : data
        };
      } else {
        config = {
          method: "get",
          url: session_url,
          body: body,
          headers: {},
          data: data,
        };
      }

      await axios(config).then((response) => {
        {
          resolve(response.data);
        }
      });
    } catch (error) {}
  });
};

export const PostRequest = async (session_url, body, token = null) => {
  if (token) {
    var config = {
      headers: {
        token: token,
      },
    };
  }

  try {
    return await axios.post(session_url, body, config);
  } catch (error) {
    if (error.response) {
      return error.response.data.errors?.message;
    }
  }
};
