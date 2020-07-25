/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge=35;
const minVoteAge=18;
if (votingAge > minVoteAge){
 console.log('true');
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let checkDrive;
let inputAge=8
if (inputAge >= 16){
    checkdrive="yes, you can drive";
}else{
  checkdrive="No, you can't drive";
}
console.log(checkdrive);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

const stringToConvert='1999'
console.log(newNum=Number(stringToConvert));
console.log(typeof(newNum));
console.log(typeof(stringToConvert));

//Task d: Write a function to multiply a*b 

function mul(a,b){
    return(a*b);
}
console.log(mul(50,50));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(yourAge){
    let dogY=yourAge*7;
    return dogY;
}
console.log("Here is your Dog Years " + dogYears(30));
/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
 
function dogFeeder(dogWeight,dogAge){
    let feed=0;
    puppyAgeinMonths = (dogAge*12)
  /* Dog Age less than 1year is a Puppy */
  if (dogAge <1) {
      if ((puppyAgeinMonths > 2) && (puppyAgeinMonths <=4)){
          feed= dogWeight *(10/100);
      } else if ((puppyAgeinMonths > 4) && (puppyAgeinMonths <= 7)){
          feed= dogWeight *(5/100);    
      } else if ((puppyAgeinMonths > 7) && (puppyAgeinMonths <= 12)){
          feed = dogWeight *(4/100);
      }
  } else if (dogAge >=1){ /* Dog Age more than 1year is Adult Dog*/
    console.log('im here');
      if (dogWeight <=5){
       feed = dogWeight * (5/100);
      } else if (dogWeight <=10){
          feed = dogWeight * (4/100);
      }else if (dogWeight <=15){
          feed = dogWeight * (3/100);
      }else if (dogWeight >15){
          feed = dogWeight * (2/100);
      }
  }  
  return feed;
  }
  
  console.log('Feed value:' + dogFeeder(15,1) + 'lbs');
    



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 


function games(userChoice){
    let computerChoice=Math.floor(Math.random()*3); //returns 0 for rock, 1paper, 2scissors //
    console.log(computerChoice);
  if (((userChoice==='rock') && (computerChoice === 0))     ||
      ((userChoice==='paper') && (computerChoice === 1))    ||
      ((userChoice==='scissors') && (computerChoice === 2))){
      result="It's a Tie";  
  }else if (((userChoice==='rock') && (computerChoice === 1)) ||
            ((userChoice==='paper') && (computerChoice === 2))  ||
            ((userChoice==='scissors') && (computerChoice === 0))){
      result="You Win!";
  }else if (((userChoice==='rock') && (computerChoice === 2)) ||
            ((userChoice==='paper') && (computerChoice === 0))  ||
            ((userChoice==='scissors') && (computerChoice === 1))){
      result="Sorry,You Lose";
  }
  return result;
  }
  
  console.log(games('rock'));
  console.log(games('scissors'));
  console.log(games('paper'));
  
  /************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function convertToMiles(valueInKM){
    valueInMiles=valueInKM * 0.621371;
    console.log(`${valueInKM} KM is ${valueInMiles} Miles`);
    return(valueInMiles);
  }
  
  convertToMiles(100);

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function convertToCM(valueInFeet){
    valueInCM = valueInFeet / 30.48;
    return(valueInCM);
  }
  
  console.log('Value in CM:' + convertToCM(100));  

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(StartNum){
    for(let i = StartNum; i > 0; i--){
      console.log(` ${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${i - 1} bottles of soda on the wall`);
    }
  }
  annoyingSong(10);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function getGrade(marks){
    if(marks >= 90){
      outGrade="A";
    }else if(marks < 90 && marks >=80){
      outGrade="B";
    }else if(marks < 80 && marks >= 70){
      outGrade="C";
    }else if(marks < 70 && marks >= 60){
      outGrade="D";
    }else{
      outGrade="F";
    }
    return outGrade;
  }
  console.log(`Here is your Grade: ${getGrade(89)}`);
  console.log(`Here is your Grade: ${getGrade(50)}`);
  console.log(`Here is your Grade: ${getGrade(69)}`);
  console.log(`Here is your Grade: ${getGrade(60)}`);
  console.log(`Here is your Grade: ${getGrade(70)}`);
  console.log(`Here is your Grade: ${getGrade(80)}`);
  console.log(`Here is your Grade: ${getGrade(100)}`);
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

const vowels=['a','e','i','o','u'];

function countVowels(yourText){
 // let stringLength=yourString.length -1;
 // for(i=0; i<stringLength; i++){
 //   if (stringLength[i].includes('a','e','i','o','u')){
 //     count=count+1;  
    let vcount=0;  
    for (let letter of yourText.toLowerCase()) {
      if(vowels.includes(letter)){
        vcount=vcount+1;
      }
  }
  return vcount;
}

let userText = prompt('Enter your text to count vowels')

console.log('Number of vowels in "' + userText + '" is ' + countVowels(userText));

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
let promptuser = prompt('Lets play- rock scissors paper, what do you choose');
if(promptuser === "rock" || "scissors" || "paper"){
 console.log(games(promptuser));  
}else{
   alert("Please enter valid choice - rock or scissors or paper");
}
                  
function games(userChoice){
    let computerChoice=Math.floor(Math.random()*3); //returns 0 for rock, 1paper, 2scissors //
    console.log(computerChoice);
  if (((userChoice==='rock') && (computerChoice === 0))     ||
      ((userChoice==='paper') && (computerChoice === 1))    ||
      ((userChoice==='scissors') && (computerChoice === 2))){
      result="It's a Tie";  
  }else if (((userChoice==='rock') && (computerChoice === 1)) ||
            ((userChoice==='paper') && (computerChoice === 2))  ||
            ((userChoice==='scissors') && (computerChoice === 0))){
      result="You Win!";
  }else if (((userChoice==='rock') && (computerChoice === 2)) ||
            ((userChoice==='paper') && (computerChoice === 0))  ||
            ((userChoice==='scissors') && (computerChoice === 1))){
      result="Sorry,You Lose";
  }
  return result;
  }





