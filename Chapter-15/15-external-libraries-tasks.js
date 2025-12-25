import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

// 1st Task

const today = dayjs();
const next5days = today.add(5,'days');
const date = next5days.format('MMMM D');

console.log(date);

// 2nd task

const next1month = today.add(1,'months');
const date_1 = next1month.format('MMMM D');

console.log(date_1);

// 3rd task

const back1month = today.subtract(1,'months');
const date_2 = back1month.format('MMMM D');

console.log(date_2);

// 4th task

const dayofweek = today.format('dddd');

console.log(dayofweek);

// 5th task

