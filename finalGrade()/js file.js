

/*take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
80-89 should return: 'B'
90-100 should return: 'A'*/


const finalGrade=(a,b,c)=>{
console.log(a,b,c);
if((a < 0 ||  a > 100) || (b < 0 ||  b > 100) ||(c < 0 ||  c > 100))
{return a,b,c, 'You have entered an invalid grade.';}
  let d =(a+b+c)/3;

console.log(d);
if(d <= 59){return 'F';} 
else if(d <= 69){ return 'D'; }
else if(d <= 79){ return 'C';}
else if(d <= 89){ return 'B';}
else if(d <= 100){ return 'A';}
}

console.log(finalGrade(99,92,95));

