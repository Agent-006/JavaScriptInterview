// Higher Order Functions -> aisa func jo accept karle ek aur function ya fir wo return karde ek aur func. ✅
// function abcd(val) {

// }

// abcd(function () { });

// or

// function abcd() {
//     return function () { }
// }

// abcd();

// var arr = [1, 2, 3, 4, 5]

// arr.forEach(function (elem) {
//     console.log(elem);
// })


// constructor functions ✅

// jab aapke paas aisa koi bhi mauka ho ke aapko ek jaisi properties waale bahut saare elements banaane hai us waqt aap constructor func use kar sakte ho.

// function saanchaOfBiscuit(){
//     this.width = 12;
//     this.height = 22;
//     this.color = 'brown';
//     this.taste = 'sugary';
// }

// let bis1 = new saanchaOfBiscuit();
// let bis2 = new saanchaOfBiscuit();
// let bis3 = new saanchaOfBiscuit();

// function circularButtonBanao(color) {
//     this.radius = 2;
//     this.color = color;
//     this.icon = false;
//     this.pressable = true;
// }

// let redbtn = new circularButtonBanao('red');
// let greenbtn = new circularButtonBanao('green');


// new keyword ✅

// function abcd (){
//     this.age = 12;
//     this.name = "Sagar";
// }

// new abcd();
// new keyword is used to create a blank object for the constructor function which is getting called just after new keyword.

// this will be converted to 
// {
//     age: 12,
//     name: 'Sagar',
// }

// iife ✅

// private variable
// var ans = (function () {
//     var privateVal = 12;

//     return {
//         getter: function () { // for getting the value of the private variable
//             console.log(privateVal);
//         },
//         setter: function (val) { // for changing the value of the private variable
//             privateVal = val;
//         }
//     }
// })();

// prototypal inheritance ✅

// var Human = {
//     name: 'Sagar',
//     canFly: false,
//     canTalk: true,
//     willDie: true
// }
// var Student = {
//     solveJsQuestion: true,
//     createModernWebsite: true
// }

// Student.__proto__ = Human;
