// word vs keyword ✅

// Anything that doesn't have it's mean in javascript is a 'word' and anything
// that have some meaning in javascript is a 'keyword'.



// var vs const vs let ✅

// variables and constants

// variable - It is a container which is used to store data in
//            programming or code that may change in future.
//            (code mein koi bhi data store kerne ke liye jiska use hota hai
//            use kahte hai variable)

// var dulha = "Lab";
// var dulhan = "Laby";

// let dulha = "Lab";
// let dulhan = "Laby";

// const dulha = "Lab";
// const dulhan = "Laby";

// dulha = "Haraamzaada"; // -> This will throw an error.
// console.log(dulha + " weds " + dulhan);

// constant - It is also used for storing data but, the data can't be changed
//            in future.



// hoisting - variables and functions are hoisted which means there
//            declaration is moved on the top of code. ✅

// console.log(a); // Output - undefined
// var a = 12;
// console.log(a); // Output - 12

// javascript breaks the above line into 2 different lines

// var a; // This is called variable declaration. After the variable is declared and value is assigned to is 'undefined'.

// console.log(a); // If we run this console.log then and 'undefined' value will be printed.

// a = 12; // This is called variable initialization.

// but, after we initialize the variable and

// console.log(a); // then run this it will print the value '12' that was assigned to it later.



// types in js ✅
// There are two types in javaScript
// 1. primitive -> number, string, null, undefined, boolean
// 2. reference -> [], (), {}
// aisi koi bhi value jisko copy karne par real copy nahi hota, balki us main value ka reference pass hojaata hai, use hum reference value khate hai, aur jiska copy karne par real copy ho jaye wo value primitive type value hoti hai.

// var a = [1, 2, 3, 4];
// var b = a;

// console.log(a);
// console.log(b);
// b.pop();
// console.log(a);
// console.log(b);




// conditionals - if else else-if ✅

// if(true){
//     // Then this will be executed
// } else {
//     // if false then this will be executed
// }



// loops - for while ✅

// for(var i=0;i<11;i++){
//     console.log(i);
// }


// var a = 12;

// while(a<20){
//     console.log(a);
//     a++;
// }


// functions ✅

// functions ka matlab aap kuch code ko likh kar koi naam de sakte ho and baad me usey use kar sakte ho with that name as many times you want.

// 1) jab aapka code aap turant nahi chalana chaahte future mein chalaana chaahte ho
// 2) jab aapka code aap reuse karna chaahte ho
// 3) jab aap code chalana chaahte ho har baar with different data

// function abcd(){
//     // function statement
// }


// params, arguments ✅

// arguments - real value jo hum dete hai func chalaate waqt
// parameter - variables junme value store hoti hai arguments waali

// function abcd(a, b, c){
//     console.log(a, b, c);
// }

// abcd(12, 13, 14);


// arrays - group of values ✅

// var arr = [11, 12, 13, 123, 435, 654];
// console.log(arr);


// push pop shift unshift splice ✅

// var arr = [123, 6545, 3214, 75, 234];
// console.log(arr);
// arr.push(12); // This will add an given value to the last of an array
// console.log(arr);
// arr.pop(); // This will remove the last element of an array
// console.log(arr);
// arr.unshift(0); // This adds an given element to the front of an array
// console.log(arr);
// arr.shift(); // This will remove the first element of an array
// console.log(arr);
// arr.splice(2,2); // This takes two parameters first - index of the element, second - how many elements to be removed starting from that index
// console.log(arr);


// objects ✅

// 1) blank object
// var a = {};

// 2) filled object
// var userDetails = {
//     age: 22,
//     name: "Sagar",
//     email: "sagarghosh0610@gmail.com",
//     contact: 8420928825,
//     resume: function () { } // This is a method
// }


// updating object porp ✅
// console.log(userDetails);
// userDetails.age = 23;
// console.log(userDetails);



// ----------------------------------------------------------------------- //


// Advanced JavaScript Topics 🔥


// - var const let

// -- difference b/w var let & const ✅

// There are two versions of javaScript ES5 and ES6. ES5 is the old version of javaScript which only have 'var'. In ES6 we have 'let' and 'const'. We can use both ES5 and ES6 together at same time.

// 🎯 var is present in old javaScript
// 🎯 var is function scoped -> var apne parent func mein kahi bhi use ho sakta hai
// function abcd() {
//     for (var i = 1; i < 12; i++) {
//         console.log(i); // This will print 1 to 11
//     }
//     console.log(i); // As var is function scoped, var can be used in it's parent func. So, now 'i' holds the value '12' and it will print '12'
// }
// abcd(); // The final output will be 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
// To get rid of this problem we use let or const
// 🎯 var add itself to the window object
// var a = 12;

// 🎯 let & const is present in new javaScript
// 🎯 let & const is braces scoped
// function efgh() {
//     for (let i = 0; i < 12; i++) {
//         console.log(i); // This will print 1 to 11
//     }
//     // console.log(i); // This will throw an error as 'i' is not defined
// }
// efgh();
// 🎯 let & const doesn't adds
// let b = 12;



// -- window object ✅

// js mein kai saare features hai par kuchh features jo hum use karte hai wo features jo nahi hai par fir bhi use kar paate hai kyuki wo features js language use kar leti hai window se, aur window hai ek box of features given by browser to use with js.



// --browser context api -> This is a set of window object, stack and heap memory ✅

// --stack ✅

// --heap memory ✅

// execution context -> Execution context is a container where the function's code is executed and it is created whenever a function is called, it contains 3 things:
// 1) variables
// 2) functions inside that parent fucntion
// 3) lexical environment of that function
// This temporary(imaginary) container is know as execution context. ✅


// lexical environment -> It is a chart where it is mentioned that which things of your function you can access and which you cannot, holds it's scope and scope chain. ✅



// --hwo to copy reference values ✅
// spread operator

// var a = [1, 2, 3, 4, 5, 6];
// var b = [...a];

// console.log(a);
// b.pop();
// console.log(b);

// var obj = {
//     name: 'Sagar',
//     age: 22
// };
// var copyObj = {...obj};

// copyObj.name = 'gullu';

// console.log(obj);
// console.log(copyObj);


// --truthy vs falsy ✅

// falsy -> values: 0 false undefined null NaN document.all
// truthy -> values: all values except falsy values

// if ("harsh") {
//     console.log('hey');
// } else {
//     console.log('hello');
// }


// --foreach forin forof do-while ✅

// foreach loop only runs on arrays

// var a = [123, 324, 2352, 463, 76, 7, 3533, 345, 6, 56];

// a.forEach(function (val) { // This function doesn't have it's name so it is known as anonymous funcion.
//     console.log(val + 2);
// })
// console.log(a);

// forEach by default doesn't makes changes in your original array, it creates an new array and stores the changed values in that and show you.

// forIn is used to loop over objects.

// var obj = {
//     name: "Sagar",
//     age: 22,
//     city: 'kolkata'
// }

// for (var key in obj) {
//     console.log(key, ":", obj[key]);
// }

// do-while

// var a = 12;

// do {
//     console.log("hey");
//     a++;
// }
// while (a < 15)


// --callback funcs ✅

// jab bhi koi aisa code jo baad me chalta hai aap likhoge, kyuki wo code baad mein chalta hai js ko ye pata nahi hota ke wo complete hua ya nahi, aise code ke completion par js ko btaya jaata hai ke wo complete hogya aur aap use chala sakte ho, ye bataane ka kaam callback ka hai.

// console.log("kya re kaab ayega?");
// setTimeout(function () {
//     console.log("me Aa gaya!");
// }, 2000);
// console.log("aaraha hu 2 sec!");

// aisa code jo baad me chalte hai use hum ek function dedete hai ke bhaiya jab complete hojaana to ye function chala dena, aur wo function jo hum dete hai wo ek normal func hi hota hai aur use kahte hai callback function.



// --what is first class funcs ✅

// In js there is a concept where we can use funs as a value.

// var a = function () { };

// function abcd(a) {
//     a();
// }

// abcd(function () { console.log("hey"); });


// --how arrays are made behind the scenes✅

// var arr = [1, 2, 3, 4]
// In js arrays are actually objects
// They looks something like this 👇
// arr = {
//     // index : value
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 4
// }

// arr[-1] = 2;
// console.log(arr);

// --how to delete object prop ✅

// var a = {
//     name: 'Sagar',
//     age: 22,
//     city: 'kolkata'
// }

// delete a.age;

// console.log(a);