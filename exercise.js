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
const upCase = members.map(member => {
  const nameParts = member.name.split(' ');

  if (nameParts.length > 1) {
    const firstName = nameParts[0];
    const lastName = nameParts[1].toUpperCase();

    return {
      ...member,
      name: `${firstName} ${lastName}`
    };
  }

  return member;
});

console.log("2.", upCase);


// 3
const ages = members.filter(
  member => member.age >= 41 && member.age <= 60
);

console.log("3.", ages);


// 4.
const validAgeMembers = members.filter(
  member => member.age !== undefined
);

const totalAge = validAgeMembers.reduce(
  (sum, member) => sum + member.age,
  0
);

const averageAge = totalAge / validAgeMembers.length;

console.log("4.", averageAge);

// 5.
const oldest = members.reduce((max, member) => {
  if (!member.age) return max;

  return member.age > max.age ? member : max;
}, members[0]);

console.log("5.", oldest);

// 6.
const grouped = members.reduce(
  (groups, member) => {

    if (member.age === undefined) {
      groups.noage.push(member);
    } else if (member.age < 35) {
      groups.young.push(member);
    } else {
      groups.old.push(member);
    }

    return groups;
  },
  {
    young: [],
    old: [],
    noage: []
  }
);

// 7.
console.log("6.", grouped);

members.splice(2, 0, {
  name: 'Nikhil Jangid',
  age: 21
});

console.log("7.", members);


// 8.
const [firstElement, secondElement] = members;

console.log("8.", firstElement);
console.log(secondElement);

// 9.
const newMembArray = [
  {
    name: 'New User',
    age: 25
  },
  ...members
];

console.log("9.", newMembArray);


// 10.
const person = members[0];

const { name, age } = person;

console.log("10.", name, age);


// 11.
const { name: fullName } = person;

console.log("11.", fullName);


// 12.
const { name: personName, ...remainingProperties } = person;

console.log("12.", personName);
console.log(remainingProperties);


// 13.
const updatedPerson = {
  ...person,
  age: 30
};

console.log("13.", updatedPerson);


// 14A.
const sumOfAges = members.reduce(
  (sum, member) => sum + (member.age || 0),
  0
);

console.log("14A.", sumOfAges);


// 14B.
const memberAgeObject = members.reduce(
  (acc, member) => {
    acc[member.name] = member.age || "No Age";
    return acc;
  },
  {}
);

console.log("14B.", memberAgeObject);
