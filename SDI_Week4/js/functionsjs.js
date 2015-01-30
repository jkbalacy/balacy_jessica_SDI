/**
 * Created by jessdesuka on 1/29/15.
 */
/* Jessica Balacy
 January 29, 2015
 SDI Week #4: Functions
 */

//Calculate the user's Basal Metabolic Rate (BMR) by gathering his/her weight in pounds, height in inches, age, and gender.

//get the user's current weight
var weight = prompt("What is your current weight in pounds? \nPlease round to the nearest pound.");

//validate the prompt using a while loop
while(weight==="" || isNaN(weight)) {
    weight = prompt ("Please enter a numerical value only.");
}

//get the user's current height
var height = prompt("What is your current height in inches? \nPlease round to the nearest inch.");

//validate the prompt using a while loop
while(height==="" || isNaN(height)) {
    height = prompt ("Please enter a numerical value only.");
}

//get the user's current age
var age = prompt("What is your age?");

//validate the prompt using a while loop
while(age==="" || isNaN(age)) {
    age = prompt ("Please enter a numerical value only.");
}