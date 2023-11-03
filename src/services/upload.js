import axios, * as others from 'axios';

// IMAGE UPLOAD
export const AddImage = (obj) =>
  new Promise((resolve, reject) => {
    try {
      const config = {
        method: 'post',
        url: `${process.env.REACT_APP_BASE_URL}fileUpload/file`,

        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: obj
      };

      axios(config)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          console.log(error);
          resolve(error);
        });
    } catch (error) {
      return error;
    }
  });
