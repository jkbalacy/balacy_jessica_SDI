/**
 * Created by jessdesuka on 1/15/15.
 */
/* Jessica Balacy
January 15, 2015
SDI Week #2: Expressions
 */

//Obtain the user's name
var userName = prompt ("Hello!  What is your name?");
console.log ("The user's name is " +userName+ "."); //Record the user's name into the console.

alert ("Welcome, " +userName+ "! \nLet's calculate how many miles you currently run each day.");

//Create an array for the days of the week
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log ("There are " +weekDays.length+ " days in a week."); //Record the number of days in the week.

//Obtain the number of miles the user runs per week
var weeklyMiles = prompt ("How many miles do you run each week?");
console.log (userName + " runs " +Math.round(weeklyMiles)+ " miles a week.");

//Calculate the average miles ran a day by dividing the weekly miles by the length of the weekDay array
var dailyMiles = parseInt(weeklyMiles); //Declare parseInt(dailyMiles) as a variable to perform an arithmetic operator
alert ("Excellent! \nYou currently run an average of " +Math.round(dailyMiles /= weekDays.length)+ " miles a day.");

console.log (userName + " currently runs an average of " +Math.round(weeklyMiles / weekDays.length)+ " miles a day.");

//Obtain the number of miles the user wants to increase by each week
var goalMiles = prompt ("Let's make a goal to increase the amount of miles you run. \nHow many more miles would you like to run each week?");
console.log (userName + " set a goal to run an additional " +parseInt(goalMiles)+ " miles each week.");


//Obtain the number of days the user would like to run each week
var runDays = prompt ("Great! How many days a week do you want to go running?");
console.log (userName + " will run " +parseInt(runDays)+ " days every week.");


//Calculate the amount of miles the user will need to run based on the goal miles and the amount of running days each week
var totalMiles = (parseInt(weeklyMiles) + parseInt(goalMiles)); //Calculates the goal miles
var newAverage = ((parseInt(weeklyMiles) + parseInt(goalMiles)) / parseInt(runDays)); //Averages the amount of miles to reach goal miles

alert ("In order to reach your goal of " +totalMiles+ " miles each week, you will need to run about " +Math.round(newAverage)+ " miles on your running days.");
console.log (userName + " will need to run " +newAverage+ " miles each day in order to reach " +totalMiles+ " miles a week.");


/* I typed in 28 for the amount of miles I currently run each week.
 I typed in 5 for the amount of additional miles I want to run each week,
 and typed 4 for the amount of days a week I would like to run.
 My calculator indicated that I would need to run an average of 8 miles per running day in order to reach
 my goal of 33 miles a week.
 */