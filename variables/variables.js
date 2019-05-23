let favouriteDrink = "coffee";
console.log(favouriteDrink);
console.log("My favourite drink is " + favouriteDrink);
console.log(`My favourite drink is ${favouriteDrink}`);


let space1 = "x";
let space2 = "x";
let space3 = "x";

let space4 = "o";
let space5 = "x";
let space6 = "o";

let space7 = "x";
let space8 = "o";
let space9 = "x";


console.log("   |   |   ");
console.log(` ${space1} | ${space2} | ${space3} `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space4} | ${space5} | ${space6}  `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space7} | ${space8} | ${space9}  `);
console.log("   |   |   ");


if(space1 == space2 && space2 ==space3){
    console.log("Winning")
}
if(space4 == space5 && space5 == space6){
    console.log("sorry try again")
}
if(space7==space8&&space8==space9){
    console.log("sorry try again")
}
