/**
 * Created by jessdesuka on 1/21/15.
 */

/*
Full Sail Grade Scale:
A+: 95-100
A: 90-94
B+: 85-89
B: 80-84
C+: 76-79
C: 73-75
D: 70-72
F: 0-69
    */

//Prompt the user for his or her grade percent value
var grade = prompt ("Please enter your grade percent for this class:");

//Use the following conditionals to determine the letter grade equivalent
if (grade>=95){
    alert ("You have a " +grade+ "%, which means you have earned a(n) A+ in the class!")

} else if (grade>=90) {
    alert ("You have a " +grade+ "%, which means you have earned a(n) A in the class!")
}
else if (grade>=85) {
    alert ("You have a " +grade+ "%, which means you have earned a(n) B+ in the class!")
}
else if (grade>=80) {
    alert ("You have a " +grade+ "%, which means you have earned a(n) B in the class!")
}
else if (grade>=76) {
    alert ("You have a " +grade+ "%, which means you have earned a(n) C+ in the class!")
}
else if (grade>=73) {
    alert ("You have a " +grade+ "%, which means you have earned a(n) C in the class!")
}
else if (grade>=70) {
    alert ("You have a " +grade+ "%, which means you have earned a(n) D in the class!")
}
else {
    alert ("You have a " +grade+ "%, which means you have earned a(n) F in the class!")
}

console.log ("You have a " +grade+ "% in this class.")