const members = [
  {name: 'Rakesh Gupta', age: 20},
  {name: 'Yash Jangid', age: 40},
  {name: 'Firoz Khan', age: 41},
  {name: 'Amrit Srivastava', age: 17},
  {name: 'Chandraprakash Sharma'},
  {name: 'Swpril Ahuja', age: 45},
  {name: 'Yogesh Khatri', age: 51}
];

// 1
const firstNames = members.map(member => member.name.split(' ')[0]);
console.log('1. First Names ->', firstNames);


// 2
members.forEach(member => {
  const parts = member.name.split(' ');
  parts[parts.length - 1] = parts[parts.length - 1].toUpperCase();
  member.name = parts.join(' ');
});
console.log('2. Last names uppercase ->', members);


// 3
const ages = members.filter(
  member => member.age >= 41 && member.age <= 60
);
console.log('3. Age 41–60 ->', ages);


// 4.
const mb = members.filter(m => m.age !== undefined);
const avg = mb.reduce((sum, m) => sum + m.age, 0) / mb.length;
console.log('4. Average Age ->', avg.toFixed(2));

// 5.
const oldest = members.reduce((max, member) => {
  if (!member.age) return max;

  return member.age > max.age ? member : max;
}, members[0]);

console.log("5.", oldest);