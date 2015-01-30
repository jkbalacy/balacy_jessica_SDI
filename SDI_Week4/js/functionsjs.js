/**
 * Created by jessdesuka on 1/29/15.
 */
/* Jessica Balacy
 January 29, 2015
 SDI Week #4: Functions
 */

/*Calculate the user's Basal Metabolic Rate (BMR) by gathering his/her weight in pounds, height in inches, age, and gender.
The user's BMR determines the amount of calories he/she would burn when his/her body is at rest.
 */

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

alert ("Thank you!");

//validate the prompt using a while loop
while(gender !="male" && gender !="female") {
    gender = prompt ('Please enter "Male" or "Female" only.');
}

//Declare two functions: if user is a male, run the first function. if the user is a female, run the second function.
if (gender ==="male") {
    //Normal Function
    function getMaleRate (mWeight, mHeight, mAge){
        var maleBMR = (66 + (6.23*weight)+(12.7*height)-(6.8*age));  //BMR equation for female users.
        return maleBMR;
    }
var mResults = getMaleRate(weight, height, age); //
    console.log ("The user's estimated BMR is "+mResults+" per day.");
    alert ("Your estimated BMR is " +mResults+ " calories per day. \nThis is the estimated amount of calories you'd burn if you stayed in bed all day!");
}
else {
    //Anonymous Function
    var getFemaleRate = function (fWeight, fHeight, fAge) {
        return 655 + (4.35*weight)+(4.7*height)-(4.7*age); //BMR equation for female users.
    };

    var fResults = getFemaleRate (weight, height, age);
    console.log ("The user's estimated BMR is "+fResults+" per day.");
    alert ("Your estimated BMR is " +fResults+ " calories per day. \nThis is the estimated amount of calories you'd burn if you stayed in bed all day!");

}