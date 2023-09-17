import axios, * as others from 'axios';

export const GetRequest = async (session_url, body, params, header = null) => {
  var startTime = performance.now();
  console.log('====================================');
  console.log('session_url, body, params,', session_url, body, params);
  console.log('====================================');
  try {
    var config = '';
    if (body) {
      config = {
        method: 'get',
        url: session_url,
        data: body,
      };
    } else if (params) {
      config = {
        method: 'get',
        url: session_url,
        params: params,
      };
    } else if (header) {
      config = {
        method: 'get',
        url: session_url,
        headers: header,
      };
    } else {
      config = {
        method: 'get',
        url: session_url,
      };
    }

    // console.log('====================================');
    console.log('config', config);
    console.log('====================================');
    var resultAxios = await axios(config);
    var endTime = performance.now();
    console.log(`Call ${session_url} ${endTime - startTime} milliseconds.`);

    return resultAxios;
  } catch (error) {
    return error;
  }
};

export const PostRequest = async (session_url, body, token = null) => {
  console.log('session_url, body, params, header = null', session_url, body);
  var config;
  if (token) {
    config = {
      headers: {
        token: token,
      },
    };
  } else {
    config = '';
  }
  try {
    const data = await axios.post(session_url, body, config);

    return data;
  } catch (error) {
    return error;
  }
};

export const PatchRequest = async (session_url, body, token = null) => {
  if (token) {
    var config = {
      headers: {
        token: token,
      },
    };
  }
  try {
    return await axios.patch(session_url, body, config);
  } catch (error) {
    return error;
  }
};
export const DeleteRequest = async (session_url, body, token = null) => {
  if (token) {
    var config = {
      headers: {
        token: token,
      },
    };
  }
  try {
    return await axios.delete(session_url, body, config);
  } catch (error) {
    return error;
  }
};

export const PutRequest = async (session_url, body, token = null) => {
  console.log('====================================');
  console.log('session_url, body', session_url, body);
  console.log('====================================');
  if (token) {
    var config = {
      headers: {
        token: token,
      },
    };
  }
  try {
    console.log('session_url, body', session_url, body, config);
    return await axios.put(session_url, body, config);
  } catch (error) {
    console.log('====================================');
    console.log('error', error);
    console.log('====================================');
    return error;
  }
};
