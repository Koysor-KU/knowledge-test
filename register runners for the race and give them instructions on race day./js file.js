let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistered = true;
let age = 19;

if (earlyRegistered && age > 18) {
  raceNumber += 1000;
}

if (earlyRegistered && age > 18) {
  console.log(`Race start at 9:30 
  and ${raceNumber}`);
} else if (!earlyRegistered && age > 18) {
  console.log(`Late adult run at 11:00 am ${raceNumber}`);
} else if (age < 18) {
  console.log(`Race start at 12:30 
  and ${raceNumber}`);
} else {
  console.log("see the registration desk");
}
