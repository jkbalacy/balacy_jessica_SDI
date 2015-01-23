/* Jessica Balacy
 January 21, 2015
 SDI Week #3: Conditionals
 */

//ask the user for the mileage of his/her car at the time of his/her last oil change.
var milesBefore = prompt ("Please enter the mileage of your car when your oil was last changed.");
//check to see if the user left the field blank or entered a text string.
if (isNaN(milesBefore) || milesBefore ==="") {
 prompt ("Please input a numerical value.");

}

//ask the uer for his/her current gas mileage.
var currentMiles = prompt ("Please enter the current mileage of your car.");
//check to see if the user left the field blank or entered a text string.
if (isNaN(currentMiles) || currentMiles ==="") {
 prompt ("Please input a numerical value.");

}

//ask the user for the number of months since the last oil change.
var monthsSince = prompt ("How many months has it been since your last oil change?");
//check to see if the user left the field blank or entered a text string.
monthsSince = (isNaN(monthsSince) || monthsSince==="") ? prompt ("Please input a numerical value."): Number(monthsSince);

//calculate the number of miles used since last oil change by subtracting milesBefore from currentMiles.
var milesUsed = (currentMiles-milesBefore);
console.log ("The user has driven " +milesUsed+ " miles since the last oil change.");

//calculate the average amount of miles the user drives each month by dividing milesUsed by monthsSince
var mileageRate = (milesUsed/monthsSince);
console.log ("The user drove an average of " +Math.round(mileageRate)+ " miles per month since last oil change.");

//estimate how many months the user can drive his/her vehicle until an oil change is required.
var monthsUntil = ((3000-(milesUsed))/mileageRate);
console.log ("The user has about " +monthsUntil+ " months left until an oil change is required.");

//given the variables, determine if and when an oil change is required.
if (milesUsed<1500) {
 alert ("You've driven " +milesUsed+ " miles and have about " +monthsUntil+ " months until your next oil change.");
 console.log ("The user has " +(3000-milesUsed)+ " miles left.  An oil change is not required at this time.");

} else if (milesUsed<3000){
 alert ("You may want to change your oil soon.  \nYou've driven " +milesUsed+ " miles and have about " +monthsUntil+ " month(s) until an oil change is required.");
 console.log ("The user has " +(3000-milesUsed)+ " mile(s) left.  An oil change will be required soon.");
} else {
 alert ("You have driven " +milesUsed+ " miles.  \nPlease change your oil as soon as possible.");
 console.log ("The user has driven " +(milesUsed-3000)+ " mile(s) over the limit.  An oil change is required.");
}
