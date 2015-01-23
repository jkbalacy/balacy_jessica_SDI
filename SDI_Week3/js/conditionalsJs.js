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
monthsSince = (isNaN(monthsSince) || monthsSince=="") ? prompt ("Please input a numerical value."): alert ("Thank you!");

//calculate the number of miles used since last oil change by subtracting milesBefore from currentMiles.
var milesUsed = (currentMiles-milesBefore);
console.log ("The user has driven " +milesUsed+ " miles since the last oil change.");


