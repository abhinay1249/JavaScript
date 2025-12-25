import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

// 1st Task

const today = dayjs();
const next5days = today.add(5,'days');
const date = next5days.format('MMMM D');

// 2nd task

const next1month = today.add(1,'month');
const date_1 = next1month.format('MMMM D');




console.log(date);
console.log(date_1);