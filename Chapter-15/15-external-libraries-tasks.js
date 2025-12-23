import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

const today = dayjs();
const next5days = today.add(5,'days');
const date = next5days.format('MMMM d');

console.log(date);