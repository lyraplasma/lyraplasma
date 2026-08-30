/*
"use strict";
let firstName = "User";
let lastName = "Resu";
console.log(`${firstName} ${lastName}`);
let age_u8 = 1;
console.log(age_u8);
age_u8 = 2;
console.log(age_u8);

let pi_f64 = 3.14;
console.log(pi_f64);

console.log(23 + 97);
console.log(23 + 97 + 6);
console.log((4 + 6 + 9) / 77);
let _a = 10;
console.log(_a);
let _b = 7 * _a;
const _max = 57;
const _actual = _max - 13;
const _percentage = _actual / _max;
console.log(_percentage);

const p1_btn = document.getElementById("btn_pl1");
p1_btn.addEventListener("click", (event) => {
    event.target.textContent = `Player 1: ${prompt("hewooo")}`;
});

/*
function update_name_with_feelings(e) {
    e.textContent = `Player 2: ${prompt("Enter a new name")}`;
}
*/
/*
const btn_pl2 = document.getElementById("btn_pl2");
btn_pl2.addEventListener("click", function() {
    this.textContent = `Player 2: ${prompt("Enter a new name")}`;
});


// innerText for p tag?
// js have too many apis? like browser's 3rdp's and other?

const gen_p = document.getElementById("gen_p");
gen_p.addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = "You've clicked the button!";
    document.body.appendChild(
	p
    );
});

const bloattons = document.querySelectorAll(".bloattons");
for (const bloat of bloattons) {
    bloat.addEventListener("click", () => {
	const p = document.createElement("p");
	p.textContent = "You pressed this button!!";
	document.body.appendChild(p)
    });
}

let x = 1, y = 2, z = 3;alert(`${x + y + z}`);
let a = 2, b = a*2, c = b*a;alert(`${(a+b+c)*2/(a*b*c)}`);
// abcxyz has been used
let $ = 1, _ = 2;alert($+_);
let _let = "let"; let $return = "return";alert(`${_let}${$return}`);
const _myBirthday = "00.00.0000";

const _COLOR_RED = "#F00";

const ___myInt = 5, ___myFloat = 5;alert(`${___myInt}${___myFloat}`);
alert(typeof ___myInt);alert(typeof ___myFloat);
const ___lotsOfDecimal = 1.43434434; const ___twoDecPlaces = ___lostsOfDecimal.toFixed(2);

function ___financial(x){return Number.parseFloat(x).toFixed(2);}
console.log(___financial(233.234));
console.log(___financial(0.0004));
console.log(___financial("1.23e+5"));

const ___numObj = 345345.3433;
alert(___numObj);

function _favorite_animal(animal){
    return animal + " is my favorite animal"
}
const __m = _favorite_animal("cat");
console.log(__m);
*/
/*
let x = console.log(1);
const z = () => console.log(x);
console.log(z);

let sq = x => x * x;
console.log(sq(2));

const fizzbuzz = (end) => {
    for(let i = 1; i <= end; i++) {
	if (i % 3 == 0 && i % 5 == 0) console.log(`${i} FizzBuzz`);
	else if (i % 3 == 0) console.log("Fizz");
	else if (i % 5 == 0) console.log("Buzz");
	else console.log(i);
    }
}
//fizzbuzz(42);
*/
/*
try {
    let a = undefinedvalue;
} catch (e) {
    console.log(e instanceof ReferenceError);
    console.log(e.message);
    console.log(e.name);
    console.log(e.name);
    console.log(e.stack);
}

try {
    eval("hoo bar");
} catch (e) {
    console.log(e instanceof SyntaxError);
    console.log(e.message);
    console.log(e.name);
    console.log(e.stack);
}

try {
    null.f();
} catch (e) {
    console.log(e instanceof TypeError);
    console.log(e.message);
    console.log(e.name);
    console.log(e.stack);
}

try { throw new TypeError("Hellope"); }
catch (e) {
    console.log(e instanceof TypeError);
    console.log(e.message);
    console.log(e.name);
    console.log(e.stack);
}
*/
/*
function upcase(str) { return str.toUpperCase(); }
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
//for (const cat of cats) { console.log(cat); }
for (const cat of cats.map(upcase)) { console.log(cat); }
console.log(
    cats.filter(s => s.startsWith("L")));
//	s.startsWith("L")
//    }));
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
*/
//for (const cat of cats) { console.log(cat); }
//for (const item of ["ribbon", "ribbon2", "ribbon3", "chocolate1", "chocolate2"]) {
//    console.log(item); }
//console.log(
//    cats.map((s) => s.toUpperCase()));
//for (const cat of cats.map((s) => s.toUpperCase())) { console.log(cat); }
/*
const filtered = cats.filter((c) => c.startsWith("L"));
console.log(filtered);
const items = ["ribbon", "ribbon2", "ribbon3", "chocolate1", "chocolate2"];
console.log(items.filter((i) => i.startsWith("r")));
const square = () => {
    for (let i = 1; i < 10; i++) {
	console.log(`${i} x ${i} = ${i * i}`);
    }
};
//square();
let myFavoriteCats = "My cats are called ";
for (let i = 0; i < cats.length; i++) {
    if (i === cats.length - 1) {
	myFavoriteCats += `and ${cats[i]}.`;
    } else {
	myFavoriteCats += `${cats[i]}, `;
    }
}
console.log(myFavoriteCats);
let __str = "This string";
console.log(__str.replace("This", "That"));
function hello(name = "User") {
    console.log(`Hello ${name}`)}
hello();
(function () { console.log("hello"); });

const originals = [1,2,3,4,5];
console.log(originals.map(x => x * 2));
*/
//Array.from({length: 50}, (_,i) => i + 1);
//Array.from({length: 100}, (_,i) => i + 1);
/*
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result);

console.log(
    Array.from({length: 50},
	       (_,i) => i + 1)
	.filter(n => n % 2 == 0)
	.reduce((a,c) => a + c, 0)
);

const names = ["JC63", "Bob123", "Ursula38", "Ben96"];
const greatIDs = names
      .map((name) => parseInt(name.match(/\d+/)[0], 10))
      .filter((id, idx, arr) => {
	  if (idx > 0 && id <= arr[idx - 1]) return false; 
      });
*/
const cats = ["Pete", "Biggles", "Jasmine"];
let myFavoriteCats = "My cats are called ";
let i = 0;

while (i < cats.length) {
    if (i === cats.length - 1) {
	myFavoriteCats += `and ${cats[i]}.`;
    } else {
	myFavoriteCats += `${cats[i]}, `;
    }
    i++;
}

console.log(myFavoriteCats);
