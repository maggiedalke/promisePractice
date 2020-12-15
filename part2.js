// Part 2

const checkRandomNum = (randomNum) => {
  return new Promise((resolve, reject) => {
    if (randomNum > 10) {
      resolve('Positive message');
    } else {
      reject('Negative message.');
    }
  });
};

checkRandomNum(Math.random() * 20)
  .then((resolve_message) => console.log(resolve_message))
  .catch((reject_message) => console.log(reject_message));
