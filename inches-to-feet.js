/*let myInches = 12;
let myFeet = myInches / 12;

console.log("My feet ", myFeet);

let dadaInches = 144;
let dadaFeet = dadaInches / 12;

console.log("Dada Feet", dadaFeet);

let dadiInches = 60;
let dadiFeet = dadiInches / 12;
console.log("Dadi Feet", dadiFeet);

let kakaInches = 70;
let kakaFeet = kakaInches / 12;
console.log("Kaka Feet", kakaFeet);
*/
function inchesToFeet(inches) {
  const feet = inches / 12;
  return feet;
}
const dadaInches = 156;
const dadaFeet = inchesToFeet(dadaInches);
console.log("Dada Feet:", dadaFeet);

const dadiInches = 690;
const dadiFeet = inchesToFeet(dadiInches);
console.log("Dadi Feet:", dadiFeet);

const kakaInches = 564745;
const kakaFeet = inchesToFeet(kakaInches);
console.log("Kaka Feet:", kakaFeet);

const kakiInches = 3456;
const kakiFeet = inchesToFeet(kakiInches);
console.log("Kaki Feet", kakiFeet);

const mamaInches = 4568;
const mamaFeet = inchesToFeet(mamaInches);
console.log("Mama Feet", mamaFeet);

const mamiInches = 9876543;
const mamiFeet = inchesToFeet(mamiInches);
console.log("Mami Feet:", mamiFeet);
