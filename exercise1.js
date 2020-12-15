// Part 1
new Promise((resolve, reject) => {
  const randomNum = Math.random();
  if (randomNum > 0.5) {
    resolve('Positive message!');
  } else {
    reject('Negative message');
  }
})
  .then((resolve_message) => console.log(resolve_message))
  .catch((reject_message) => console.log(reject_message));
