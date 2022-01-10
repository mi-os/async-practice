import fetch from 'node-fetch';

const getGitUsername = () => {
  const url = 'https://api.github.com/users/mi-os';

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      console.log('Successed asynchronous processing!');
      return json.login;
    })
    .catch((error) => {
      console.error('Asynchronous processing failed.', error);
      return null;
    });
};

const message = 'GitHub User ID: ';
const username = getGitUsername();
console.log(message + username);
