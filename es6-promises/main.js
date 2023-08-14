import takeAChance from './take-a-chance.js';

const promise = takeAChance('Edward');
promise.then((success) => console.log(success));
promise.catch((Error) => console.log(Error.message));
