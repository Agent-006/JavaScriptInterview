JavaScript

📝Note: 🎯 --> means basic topics.
         🎯 ---> means advanced topics 



🎯 word vs keyword ✅

--> Anything that doesn't have it's meaning in JavaScript is known as a 'word'.
   Anything that have some meaning in JavaScript is known as a 'keyword'.



🎯 var vs const vs let ✅

--> 
🎈 variable - Is is a container which is used to store data in 
                   programming or code that may change in future (code
                   mein koi bhi  data store karne ke liye jiska use hota hai
                   use kahte hai variable).

⭐Exmp:

        var dulha = "Lab";
        var dulhan = "Laby";

🎈 constant - It is also used for storing data but, the data can't be changed in future.

⭐Exmp: 

        const dulha = "Lab";
        const dulhan = "Laby";

🎈 let - It is also used for storing data.

⭐Exmp: 

        let dulha = "Lab";
        let dulhan = "Laby";

        dulha = "Haraamzada"; // This will throw an error if const is used.
        console.log(dulha + " weds " + dulhan);



🎯 the difference ✅

---> There are two versions of JavaScript ES5 and ES6. ES5 is the old version of JavaScript
      which only have 'var'. In ES6 we have both 'let' and 'const'. 

📝Note: We can use both ES5 and ES6 together and at the same time.

🎈 var is present in old (ES5) JavaScript\
🎈 var is function scoped - 'var' can be anywhere in it's parent function ('var' apne parent
                             function me kahi bhi use ho sakta hai).

⭐Exmp: 

        function abcd() {
            for (var i = 1; i < 12; i++) {
                console.log(i); // This will print 1 to 11
            }
            console.log(i); // As 'var' is function scoped, 'var' can be used in it's parent function. So, now 'i' holds the value '12' and it will print '12'
        }

        abcd(); 

👉 The final output will be: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12

🎈 var adds itself to the window object 

⭐Exmp:      

        var a = 12; // Open inspect element, then console and type window, then unfold the window object

🎈 let & const is present in new JavaScript
🎈 let & const is braces scoped 

⭐Exmp:

        function abcd() {
            for (let i = 0; i < 12; i++) {
                console.log(i); // This will print 1 to 11
            }
            // console.log(i); // This will throw an error as 'i' is not defined
        }

        abcd();

👉 The final output will be: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11

🎈 let & const doesn't adds itself to the window object

⭐Exmp:      

        let a = 12; // Open inspect element, then console and type window, then unfold the window object

        const b = 12; // Open inspect element, then console and type window, then unfold the window object
           
        
        
🎯 window object ✅

---> In JavaScript there are many features that we can use, there are features that we can use
     but, they are not in JavaScript but, JavaScript can use those features through window.\
    🌟window is a box of features given by the browser to use with JavaScript.








-- browser context api
-- stack
-- heap memory
-- execution context
-- lexical environment
-hoisting
-types in js
-- how to copy reference values
-conditionals
-if else else-if
-- truthy vs falsy
-- switch
-loops
-for while
--foreach forin forof do-while
-functions
--callback funcs
--what is first class funcs
-params, arguments
-arrays
-push pop shift unshift
--how arrays are made behind the scenes
--why we can make negaitve indexes arrays in js
--practice questions and scenarios
-objects
-props vs methods
-updating object porps
--how to delete object prop
--practice questions, scenarios
