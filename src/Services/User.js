//GET USER DATA 
export const getUserData = async () =>{
    return new Promise((resolve, reject) => { 
    try {
        var axios = require('axios');

var config = {
  method: 'get',
  url: 'localhost:3000/api/users/63c4d72b30280532a2332faf',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

    } catch (error) {
        resolve(error)
    }
     })
}
