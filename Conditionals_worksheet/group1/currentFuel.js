/**
 * Created by jessdesuka on 1/21/15.
 */

//Prompt user for the gas efficiency of his or her car
var gasEfficiency = prompt ("What is the gas efficiency of your car in mpg?");
console.log ("The user's car has a gas efficiency of " +gasEfficiency+ " mpg(s).");

//Prompt user for the gauge reading of the gas tank
var gaugeReading = prompt ("What is the current gauge reading of your gas tank (in %)?");
console.log ("The current gauge reading of the user's gas tank is at " +gaugeReading+ " %.");

//Prompt user for the tank capacity
var tankCapacity = prompt ("How many total gallons of gas can your car's tank hold?");
console.log ("The user's car can hold a total of " +tankCapacity+ " gallons of gas.");

var currentFuel = ((gaugeReading/100)*tankCapacity)*gasEfficiency;
console.log (currentFuel);

if (currentFuel>=200){
    alert ("Yes, you can make it without stopping for gas!")
    console.log ("Yes, you can make it without stopping for gas!")

}
    else {
    alert ("You only have " +currentFuel+ " gallons of gas in your tank, better get gas now while you can!")
    console.log ("You only have " +Math.round(currentFuel)+ " gallons of gas in your tank, better get gas now while you can!")
}