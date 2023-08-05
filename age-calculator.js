const ageCalculator = function (name, yOb, currentYear) {
  return `${name} is ${currentYear - yOb} years old.`;
};

console.log(ageCalculator("Suzie", 1984, 2016));
console.log(ageCalculator("Jack", 2004, 2016));
console.log(ageCalculator("Ali", 2016, 2016));