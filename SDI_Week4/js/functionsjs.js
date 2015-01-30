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

//get the user's gender
var gender = prompt("Please enter your gender:");
gender=gender.toLowerCase();

//validate the prompt using a while loop
while(gender !="male" && gender !="female") {
    gender = prompt ('Please enter "Male" or "Female" only.');
}

//Declare two functions: if user is a male, run the first function. if the user is a female, run the second function.
if (gender ==="male") {
    function getMaleRate (mWeight, mHeight, mAge){

    //The following equation will calculate the BMR for male users.
        var maleBMR = (66 + (6.23*weight)+(12.7*height)-(6.8*age));
        return maleBMR;
    }
var mResults = getMaleRate(weight, height, age);
    console.log (mResults);
}
else {
 function getFemaleRate (fWeight, fHeight, fAge){

        //The following equation will calculate the BMR for female users.
        var femaleBMR = (655 + (4.35*weight)+(4.7*height)-(4.7*age));
        return femaleBMR;
    }
    var fResults = getFemaleRate (weight, height, age);
    console.log (fResults);

}
