const _ = require('lodash');

const members = [
  { name: 'Rakesh Gupta', age: 20 },
  { name: 'Yash Jangid', age: 40 },
  { name: 'Firoz Khan', age: 41 },
  { name: 'Amrit Srivastava', age: 17 },
  { name: 'Chandraprakash Sharma' },
  { name: 'Swpril Ahuja', age: 45 },
  { name: 'Yogesh Khatri', age: 51 }
];

// 1
const firstNames = _.map(
  members,
  member => _.split(member.name, ' ')[0]
);

console.log("1.", firstNames);