const synchronousFunc = () => {
  console.log('This is a log about synchronousFunc.');
  return ' finish!';
};

const message = 'Synchronous processing';
const result = synchronousFunc();
console.log(message + result);
