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

// 2. -> Doubt
const upCase = _.map(members, member => {
  const parts = _.split(member.name, ' ');

  if (parts.length > 1) {
    return {
      ...member,
      name: `${parts[0]} ${_.toUpper(parts[1])}`
    };
  }

  return member;
});

console.log("2.", upCase);


// 3.
const ages = _.filter(
  members,
  member => member.age >= 41 && member.age <= 60
);

console.log("3.", ages);


// 4.
const averageAge = _.meanBy(
  _.filter(members, member => member.age !== undefined),
  'age'
);

console.log("4.", averageAge);


// 5.
const oldestPerson = _.maxBy(
  _.filter(members, member => member.age !== undefined),
  'age'
);

console.log("5.", oldestPerson);


// 6.
const grouped = _.reduce(
  members,
  (result, member) => {

    if (_.isUndefined(member.age)) {
      result.noage.push(member);
    } else if (member.age < 35) {
      result.young.push(member);
    } else {
      result.old.push(member);
    }

    return result;
  },
  {
    young: [],
    old: [],
    noage: []
  }
);

console.log("6.", grouped);


// 7.
members.splice(2, 0, {
  name: 'Nikhil Jangid',
  age: 21
});

console.log("7.", members);


// 8.
const [first, second] = members;

console.log("8.", first, second);


// 9.
const newMembers = _.concat(
  [{ name: 'New User', age: 25 }],
  members
);

console.log("9.", newMembers);


// 10.
const { name, age } = members[0];

console.log("10.", name, age);


// 11.
const { name: fullName } = members[2];

console.log("11.", fullName);


// 12.
const { name: extractedName, ...rest } = members[0];

console.log("12.", extractedName);
console.log(rest);


// 13.
const updatedPerson = {
  ...members[0],
  age: 30
};

console.log("13.", updatedPerson);


// 14A.
const sumOfAges = _.reduce(
  members,
  (sum, member) => sum + (member.age || 0),
  0
);

console.log("14A.", sumOfAges);


// 14B.
const objectReduce = _.reduce(
  members,
  (acc, member) => {
    acc[member.name] = member.age || "No Age";
    return acc;
  },
  {}
);

console.log("14B.", objectReduce);
