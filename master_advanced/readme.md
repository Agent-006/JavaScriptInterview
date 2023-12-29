🎯higher order functions ✅

-->Can you explain what is higher order functions?
->Higher Order Functions are the functions which accept a function ini a parameter or return a function or both.
⭐For Example: ForEach method always takes another function inside it, so ForEach is a higher order function.


🎯constructor functions ✅

--> What are constructor functions?

-> A function which whenever invoked with "new" keyword returns an object, if we use "this" keyword inside that function with this keyword, it returns an object with all of the properties and methods mentioned inside that function, such function is called construction function.

⭐Exmp:

        //constructor function
        function abcd(){ 
            this.name = 'Sagar';
        }

        // new keyword infront of function call makes a new blank object and returns to the person1 variable.
        let person1 = new abcd();


🎯first class functions ✅

--> What is first class functions?
-> A language is said to have first class function when the function in that language are treated as normal values or like variables, you can save them, you can pass them as arguments to another functions.

⭐Exmp: 

        // save them as normal values or like variables
        let abcd = function(){
            console.log('hey');
        }

        //or

        // pass them as arguments to another functions
        setTimeInterval(function(){
            console.log('hey');
        }, 1000);



🎯new keyword ✅

--> Can you explain what is new keyword ?
-> new keyword is used to create a blank object for the constructor function which is getting called just after new keyword.

⭐Exmp: 

        function abcd(){
            this.name = 'Sagar';
            this.age = 12;
        }

        let obj = new abcd();


🎯iife -> immediately invoked function expression ✅

--> What is IIFE?
-> Immediately Invoked Function Expression 
    iife hai function ko turant chalane ki kala, is tareeke se hum log koi private variable bana paaye
⭐Exmp:

        // iife function
        (function(){

        })();

        // private variable
        var ans = (function () {
        var privateVal = 12;

            return {
                getter: function () { // for getting the value of the private variable
                    console.log(privateVal);
                },
                setter: function (val) { // for changing the value of the   private variable
                    privateVal = val;
                }
            }
        })();


🎯prototype ✅

--> What is a prototype, what does it contains ?
-> Prototypes is the collection of build-in helper methods and helper functions those are available for furthur use.

⭐Exmp: Go to the browser console and create an object

        var obj = {
            name: 'Sagar';
        }

It contains an extra property called [[prototype]] so where does it come from and what does it contains.

--> Where it came from?
-> javascript by default adds a property called [[prototype]] to every object, so if you ever see any object, you can blindly say that object contains prototype, so now, what does it contains ?

--> What does it contains ?
-> [[prototype]] contains many helper properties and methods which can use to complete our task, let's say we create an array and we want to know length of it, what do we do, we use .length property on array, did we created .length on that array, no! but it still contains .length, the question is how?

the answer is, many properties and methods are already available to use built by javascript creators inside prototype of every object.


🎯prototypal inheritance ✅

--> What is prototypal inheritance ?
-> Inheritance is basically passing parent's features or properties to their childrens, to do the same thing in javascript with the help of prototype (one extra property always given by javascript to every object) is called prototypal inheritance.

so, how we perform prototypal inheritance?

make an object called human and put properties like, canFly, canTalk, willDie

    var Human = {
        name: 'Sagar',
        canFly: false,
        canTalk: true,
        willDie: true
    }

make another object called student, he can do all things which a human can do but he can do few more things like, he can slove js questions and create modern websites, so we create extra two props which normal humans can't do in that object and rest properties we will inherit from human.

    var Student = {
        solveJsQuestion: true,
        createModernWebsite: true
    }

    Student.__proto__ = Human;


🎯this, call, apply, bind ✅

--> Understanding this keyword
-> this keyword is a special keyword inJavaScript which changes it's value in different context.

jab bhi koi cheej {} brakets ke andar nahi hoti to hum use global scope kahte hai

⭐Exmp:

-> in global scope

    console.log(this); // gives window

-> in function scope

    function abcd(){
        console.log(this); // gives window
    }

-> in method scope

    var obj = {
        name: "Sagar",
        someMethod: function(){
            console.log(this); // gives object obj
        }
    }

    obj.someMethod();

🌟Imp: In any method, "this" keyword always refers to parent object

-> event linteners

    var button = document.querySelector("button");

    button.addEventListener("click", function(){
        console.log(this);
    });

📝 Note: this keyword is equal to whatever written before addEventListener, in this case button.

⭐ Whenever you want to run a function where the value of 'this' is a particular object (window) and you want to point it to another object, at that time we use .call() .apply() and .bind() 

--> Understanding call 

    function abcd(){
        console.log(this);
        console.lgo(this.age); // to access the value from the object
    }

    var obj = {age: 23};

    abcd.call(obj); // you can point 'this' value by giving in .call() function,
    by default value of 'this' is 'window'

In case you want to pass values in functions

    function abcd(val1, val2, val3){
        console.log(val1, val2, val3);
        console.log(this.age);
    }

    var obj = {age: 23};

    abcd.call(obj, 1, 2, 3);

--> apply 

    function abcd(val1, val2, val3){
        console.log(val1, val2, val3);
        console.log(this.age);
    }

    var obj = {age: 23};

    abcd.apply(obj, [1, 2, 3]); // pass the values in an array

📝Note: even though the values are passed in an array, it will take individual value by itself and pass it.

--> bind

    function abcd(){
        console.log(this);
    }

    var obj = {age: 23};

    var bindedFunc = abcd.bind(obj); // bind function doesn't run by 
                                        itself and we have to store it in a variable

    bindedFunc();

📝Note: binded functions doesn't run by itself we have to run it manually
        whenever required.



🎯pure & impure functions ✅

--> Understanding pure functions
-> Pure function is any function which has these 2 features:
    i.  fit should always return same output for same input
    ii. it will never change/update the value of a global variable.

🌟 Pure Function

    function calc(val){
        return val+2;
    }

📝Note: always same answer if you pass same value for 'val' argument, hence
        this function is pure function.


🎯closures



