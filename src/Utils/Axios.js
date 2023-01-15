import axios from 'axios';

export const GetRequest = async (session_url, body) => {
  try {
    var config = {
      method: 'get',
      url: session_url,

      body: body,
    };

    return await axios(config);
  } catch (error) {
    
  }
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
