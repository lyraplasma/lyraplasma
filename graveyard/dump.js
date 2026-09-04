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
/*
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
    const results = document.getElementById("results"),
	  calculate_btn = document.getElementById("calculate_btn"),
	  clear_btn = document.getElementById("clear_btn");
    
    const gen_blobs = document.getElementById("gen_blobs"),
	  canvas_blobs = document.getElementById("canvas_blobs");
    const ctx_2d = canvas_blobs.getContext("2d");
    canvas_blobs.width = document.documentElement.clientWidth;
    canvas_blobs.height = document.documentElement.clientHeight;

    const rand = (n) => Math.floor(Math.random() * n);
    const draw_blobs = () => {
	ctx_2d.clearRect(0, 0, canvas_blobs.width, canvas_blobs.height);
	for (let i = 0; i < 100; i++) {
	  ctx_2d.beginPath();
	  ctx_2d.fillStyle = `rgb(${rand(254)} ${rand(254)} ${rand(254)} / 50%)`;
	  ctx_2d.arc(
	      rand(canvas_blobs.width),
	      rand(canvas_blobs.height),
	      rand(50), 0, 2 * Math.PI);
	  ctx_2d.fill();
	}
    };
    gen_blobs.addEventListener("click", draw_blobs);
    calculate_btn.addEventListener("click", () => {
	for (let i = 1; i <= 10; i++) {
	    const col = `${i} x ${i} = ${i * i}`;
	    results.textContent += `${col}\n`;
	}
	results.textContent += "\nFinished!\n\n";
    });
    clear_btn.addEventListener("click", () => (results.textContent = ""));
    const monitor_input = document.getElementById("monitor_input"),
          monitor_output = document.getElementById("monitor_output");
    monitor_input.addEventListener("keydown", (e) => {
        monitor_output.textContent = `You type: ${e.key}`;
	results.textContent = `${e.code} ${e.target.value}`;
	console.log(`what? ${e.key}`);
	console.error(`${e}`);
	});

	const contacts = [ "Chis:2343223"
	,"Sar:2343243232", "Ball:2343224","Mary:92384329", "Dia:92384723984"];
	const search_bar = document.getElementById("search"),
	search_btn = document.getElementById("search_btn"),
	para = document.getElementById("sp");
	search_btn.addEventListener("click", () => {
	const search_name = search_bar.value.toLowerCase();
	search_bar.value = "";
	search_bar.focus();
	para.textContent = "";
	for (const contact of contacts) {
	const split_contact = contact.split(":");
	if (split_contact[0].toLowerCase() == search_name) {
	para.textContent = `${split_contact[0]}'s number is ${split_contact[1]}.`;
	break;
	}
	}
	if (para.textContent === "") { para.textContent = "Contact not found."; }
	});
    const num_input = document.getElementById("number_"),
    output_int = document.getElementById("output_int"),
    gen_int_btn = document.getElementById("gen_int_btn");
    gen_int_btn.addEventListener("click", () => {
    output_int.textContent = "Output: ";
    input_sav = num_input.value;
    num_input.value = "";
    num_input.focus();
    for (let i = 1; i <= input_sav; i++) {
			 let sqroot = Math.sqrt(i);
			 if (Math.floor(sqroot) !== sqroot) {
			 continue;
			 }
			 output_int.textContent += `${i}`;
			 }
    });
*/
/*
let users = [
    {id: 1, name: "A"},
    {id: 2, name: "B"},
    {id: 3, name: "C"}
];
let items = [
    {id: 1, name: "Ribbon"},
    {id: 2, name: "Key"},
    {id: 3, name: "Simple Potion"}
];
console.log(
    users.find(i => i.id === 3)    
);
console.log(
    items.find(i => i.id === 3)    
);

Object.fromEntries(
    Array.from({length: 10}, (_,i) => [
	i, Array.from({length: 10}, () => String.fromCharCode(97 + ~~(Math.random() * 26))).join("")
    ])
)

    Array.from({length:10},(_,i)=>({id:i,name:Array.from({length:7},()=>String.fromCharCode(97+~~(Math.random()*26))).join('')}))

const names = Array.from({length: 20}, (_, i) => ({
    id: i,
    name: Array.from({length: 7}, () => String.fromCharCode(97 + ~~(Math.random() * 26))).join("").replace(/^./, match => match.toUpperCase())
}))
/*
console.log(["Fsdsdkfj", "sldkfj", "sldkjsldsflkj", "lwekj"].map(i => i.length));
const ns = Array.from({length: 20}, () => ~~(Math.random() * 26));
console.log(ns);
ns.sort((a,b) => {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
});
console.log(ns);
*/
/*
let countries = ["Osdfj", "Feliwf", "WOifw"];
console.log(countries.sort(
    (a,b) => a.localeCompare(b)))
let arrrrr = ["Biblo", "Gangflf", "Masguz"].join(";");
console.log([1,11,111,1111].reduce((a,c) => a + c, 0));
"background-color".split("-").map((w, i) => i === 0 ? w : w[0].toUpperCase() + w.slice(1)).join("");
const a = ["a", "b", "c"];
const b = a.slice().sort();
*/
/*
function Calculator() {
    this.methods = {
	"-": (a, b) => a - b,
	"+": (a, b) => a + b,
	"*": (a, b) => a * b
    }
    this.calculate = function(str) {
	let split = str.split(" "),
	    a = +split[0],
	    op = split[1],
	    b = +split[2];

	if (!this.methods[op] || isNaN(a) || isNaN(b)) {
	    return NaN;
	}
	return this.methods[op](a, b);
    };
    this.addMethod = function(name, func) {
	this.methods[name] = func;
    };
}
*/
/*
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30};
let mary = { name: "Mary", age: 28};
let users = [ john, pete, mary];
let names = users.map(i => i["name"]).join(",");
*/
function sum_of_tripled_evens(arr) {
    arr.filter(x => x % 2 == 0).map(x => x * 3).reduce((a,c) => a + c)
}
