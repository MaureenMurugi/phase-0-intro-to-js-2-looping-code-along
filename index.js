// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me! `);
    
}
*/
const names = ["Guadalupe","Ollie", "Aki"];
const event = "surprise";
let thankYouCard = [];
function writeCards(names, event) {
    
    for (let i=0; i < names.length; i++) {
        thankYouCard.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    
    }
    return thankYouCard;
}
console.log(writeCards(thankYouCard));

function countDown(startingNumber) {
    while (startingNumber > 0) {
        console.log(startingNumber);
        startingNumber -=1;
    }
    console.log(startingNumber);
}