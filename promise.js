import fetch from 'node-fetch';

const getGitUsername = () => {
  return new Promise((resolve, reject) => {
    const url = 'https://api.github.com/users/mi-os';

    fetch(url)
      // Response.json() ... Web API
      .then((res) => res.json())
      .then((json) => {
        console.log('Successed asynchronous processing!');
        return resolve(json.login);
      })
      .catch((error) => {
        console.error('Asynchronous processing failed.');
        return reject(null);
      });
  });
};

const message = 'GitHub User ID: ';

getGitUsername().then((username) => {
  console.log(message + username);
});
