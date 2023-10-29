import axios, * as others from 'axios';

export const GetRequest = async (sessionUrl, body, params, header = null) => {
  const startTime = performance.now();
  console.log('============GetRequest========================');
  console.log('sessionUrl, body, params,', sessionUrl, body, params);
  console.log('');
  try {
    let config = '';
    if (body) {
      config = {
        method: 'get',
        url: sessionUrl,
        data: body
      };
    } else if (params) {
      config = {
        method: 'get',
        url: sessionUrl,
        params
      };
    } else if (header) {
      config = {
        method: 'get',
        url: sessionUrl,
        headers: header
      };
    } else {
      config = {
        method: 'get',
        url: sessionUrl
      };
    }

    // console.log('');
    console.log('config', config);
    console.log('');
    const resultAxios = await axios(config);
    const endTime = performance.now();
    console.log(`Call ${sessionUrl} ${endTime - startTime} milliseconds.`);

    return resultAxios;
  } catch (error) {
    return error;
  }
};

export const PostRequest = async (sessionUrl, body, token = null) => {
  console.log('================PostRequest====================');
  console.log('sessionUrl, body, params, header = null', sessionUrl, body);

  let config;
  if (token) {
    config = {
      headers: {
        token
      }
    };
  } else {
    config = '';
  }

  try {
    const data = await axios.post(sessionUrl, body, config);
    return data;
  } catch (error) {
    console.log('====================================');
    console.log('error', error);
    console.log('====================================');
    return error;
  }
};

export const PatchRequest = async (sessionUrl, body, token = null) => {
  let config;

  if (token) {
    config = {
      headers: {
        token
      }
    };
  }
  try {
    return await axios.patch(sessionUrl, body, config);
  } catch (error) {
    return error;
  }
};
export const DeleteRequest = async (sessionUrl, body, token = null) => {
  let config;

  if (token) {
    config = {
      headers: {
        token
      }
    };
  }
  try {
    return await axios.delete(sessionUrl, body, config);
  } catch (error) {
    return error;
  }
};

export const PutRequest = async (sessionUrl, body, token = null) => {
  console.log('');
  console.log('body', body);
  console.log('');
  const data = JSON.stringify(body);

  const config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: sessionUrl,
    headers: {
      'Content-Type': 'application/json'
    },
    data
  };

  try {
    console.log('');
    console.log('config---->', config);
    console.log('');
    return await axios.request(config);
  } catch (error) {
    console.log('');
    console.log('error', error);
    console.log('');
    return error;
  }
};
