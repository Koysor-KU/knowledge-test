//ternary-operator

let userName = '';

userName ? console.log( `Hello ${userName}!`) : console.log( `Hello`);

let userQestion ='';

console.log(userQestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = randomNumber;
let no0 = 'It is not certain ';
let no1 = 'It is certain';
let no2 = 'It is decidedly so';
let no3 = 'Reply hazy try again';
let no4 = 'Cannot predict now';
let no5 = 'Do not count on it';
let no6 = 'My sources say no';
let no7 = 'Outlook not so good';
let no8 = 'Signs point to yes';
randomNumber === 0 ? console.log(`${no0}`) :
randomNumber === 1 ? console.log(`${no1}`) :
randomNumber === 2 ? console.log(`${no2}`) :
randomNumber === 3 ? console.log(`${no3}`) :
randomNumber === 4 ? console.log(`${no4}`) :
randomNumber === 5 ? console.log(`${no5}`) :
randomNumber === 6 ? console.log(`${no6}`) :
randomNumber === 7 ? console.log(`${no7}`) :
 console.log(randomNumber);
 console.log(randomNumber);






/* this with switch statement





let userName = '';

userName ? console.log(`Hello ${userName}!`) : console.log('Hello');

let userQuestion = '';

console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
let response = '';

switch (randomNumber) {
  case 0:
    response = 'It is certain';
    break;
  case 1:
    response = 'It is decidedly so';
    break;
  case 2:
    response = 'Without a doubt';
    break;
  case 3:
    response = 'Yes – definitely';
    break;
  case 4:
    response = 'You may rely on it';
    break;
  case 5:
    response = 'My sources say no';
    break;
  case 6:
    response = 'Outlook not so good';
    break;
  case 7:
    response = 'Signs point to yes';
    break;
}

console.log(response);


*/
