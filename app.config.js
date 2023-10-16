require('dotenv').config();


module.exports = {
    name: 'NT-App',
    version: '1.0.0',
    extra: {
      apiUrl: process.env.API_URL,
      abstractApiPartialUrl: process.env.ABSTRACTAPI_PARTIAL_URL,
    },
  };
  