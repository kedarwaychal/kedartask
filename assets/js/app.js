var cl = console.log;

// 1 scope 
// var >> can create only global and functional scope

// let and const >> van create block scope
for(var i  = 0; i <= 5; i++){
    cl(`value of i inside for loop ${i}`)
}


cl(`value of i outside for loop ${i}`);
cl(`value of i outside for loop ${i}`);


for (let j = 0; j <= 5; j++){
    cl(`value of i inside for loop ${j}`)
}

//cl (`value of i outside for loop ${j});

// 2 redeclaration and reassignment 
// var >> redeclaration and reassignment both possible
//let >> reassignment is possible but redeclaration is not possible
//const >> redeclaration and reassignment both are not possible

//const >>'const' declaration must be initialized as soon as they declare

var x = 10;
cl(x);

x =100;
cl(x);

var a;

var x = "helo";
cl(x);

let y = 20;
cl(y);
let b;
y = "javascript";//reassihnment
cl(y);


//var y = 123 // can not declare
//pi = 3.14

const s =123;


//3.hoisting
//var >> hoisting is possible and property is assigned by undefinedd value 
//let >> hoisting is possible but can use before intialization
// const >> hoisting is possible but can use before intialization
cl(p);
var p = 10;

 cl(q);
 let q = 25;

cl(r);
const r = 45;






