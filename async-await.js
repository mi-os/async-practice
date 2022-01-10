import fetch from 'node-fetch';

const getGitUsername = async () => {
  const message = 'GitHub User ID: ';
  const url = 'https://api.github.com/users/mi-os';

  const json = await fetch(url)
    .then((res) => {
      console.log('Successed asynchronous processing!');
      return res.json();
    })
    .catch((error) => {
      console.error('Asynchronous processing failed.');
      return ull;
    });

  console.log(message + json.login);
};

getGitUsername();
