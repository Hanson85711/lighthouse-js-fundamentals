const raining = true;
const cold = false; 
const temperature = 12;
const isCitizen = true;
const age = 26;

if (raining) {
  console.log("Don't forget your umbrella!");
}
if (!raining){
  console.log("Leave your umbrella at home!");
}

if (temperature < - 40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea...");
}

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

const whichSchool  = function (age) {
  if (age < 13 ) {
    console.log("Elementary School");
  } else if (age >= 13 && age <= 18) {
    console.log("Secondary School");
  } else {
    console.log("Lighthouse Labs");
  }
}

console.log("I am 12. Which school?");
console.log(whichSchool(12));
console.log("I am 25. Which school?");
console.log(whichSchool(25));
console.log("I am 16. Which school?");
console.log(whichSchool(16));