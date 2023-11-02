/*calculates a person's age or age-related information based on their current age and a specified year. Here is a breakdown of what the code does:

const howOld = (age, year) => { ... }: This is a function declaration named howOld that takes two parameters: age (current age) and year (the specified year).

const currentYear = new Date().getFullYear();: This line uses the Date() object in JavaScript to get the current year. It assigns the value of the current year to the variable currentYear.

let born = currentYear - age;: This line subtracts the age parameter from the currentYear to calculate the birth year. It stores the result in the variable born.

The code then checks several conditions using if and else if statements:

if (born >= year) { ... }: This condition checks if the birth year is greater than or equal to the specified year. If true, it calculates the difference between the specified year and the birth year, negates it (-m), and returns a string stating how many years before the person was born the specified year was.

else if (born <= year && year < currentYear) { ... }: This condition checks if the birth year is less than or equal to the specified year, and if the specified year is less than the current year. If true, it calculates the difference between the specified year and the birth year and returns a string stating how old the person will be in that year.

else if (year >= currentYear) { ... }: This condition checks if the specified year is greater than or equal to the current year. If true, it calculates the difference between the specified year and the birth year and returns a string stating how old the person will be in that year.

The function ends with closing braces }.

Lastly, console.log(howOld(27, 1941)); calls the howOld function with 27 as the age parameter and 1941 as the year parameter. It logs the return value to the console.*/


const howOld = (age, year) => {
  /*current year*/
  const currentYear = new Date().getFullYear();
  /*find birth*/
  let born = currentYear - age;
  if (born >= year) {let m = year - born;return `The year ${year} was ${-m} years before you were born`;
  } else if (born <= year && year < currentYear) {let youWere = year - born;return `You will be ${youWere} in the year ${year}`;
  } else if (year >= currentYear) {let youWill = year - born; return `You will be ${youWill} in the ${year} year`;
  }
};

console.log(howOld(27, 1941));
