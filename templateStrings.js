//Template Strings known as Template Literals

function getMessage() {
    const year = new Date().getFullYear();
    return `The year is ${year}`;
}

console.log(getMessage());

function getMessage2() {
    return `The year is ${new Date().getFullYear()}`
}
console.log(getMessage2());

//When to use Template Strings

//Exercise - Refactors
// function doubleMessage(number) {
//     return "Your number doubled is " + (2 * number);
//   };

  function doubleMessage(number) {
    return `Your number doubled is ${2 * number}`;
  };

  console.log(doubleMessage(22))

// function fullName(firstName, lastName) {
// return firstName + lastName;
// }

function fullName(firstName, lastName) {
    return `${firstName + " " + lastName}`;
  }

  console.log(fullName('peace', 'love'))

  //2nd Refactor
  const fullName2 = (firstName, lastName) => `${firstName} ${lastName}`;
  console.log(fullName2('tribal', 'uplift'))
