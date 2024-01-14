## 🎯 let and const ✅

-> variables and constants

🎈 You can store value using both let and const, but they behave differently,\
value stored in let can be changed in future and value stored in a const\
cannot be changed any furthur.

🌟Exmp:

        let a = 23;
        a = 12;

        const b = 34;
        // b = 23; // will throw and error as value cannot be assign to a constant.

🎈 It is not mandatory to assign a value to let, but it is mandatory to assign\
to a const.

🌟Exmp:

        let a; // this is possible

        // const a; // this will throw an error (missing initializer in const declaration)

🎈 Both have some similarities -

1. let and const do not add themselves to the window object.
2. both are braces scoped.

<hr style= "border-top: 1px dotted #ccc;">

## 🎯 arrow functions ✅

-> In old JavaScript (ES5) there were three type of functions-

🎈 function statement \
🎈 function expression\
🎈 anonymous function

In new JavaScript (ES6) there is only one type of function of three different variations-

⭐ Arrow Functions

🎈 basic fat arrow function

🌟Exmp:

       let func = () => {
            // code here
        };

        func();

🎈 fat arrow function with one parameter

🌟Exmp:

        let func = (parm) => {
            console.log(parm);
        };

        func(12);

📝 It you want you can remove the fat brackets only if you are passing single arguments.

        let func = parm => {
            console.log(parm);
        };

        func(12);

📝 It you want to pass more than one arguments then you have to give the fat brackets.

        let func = (parm1, parm2) =>{
            console.log(parm1, parm2);
        };

        func(12, 23);

🎈 fat arrow function with implicit return

-> It returns the value without writing the return keyword.

🌟Exmp:

        let func = ()=> 12;

        func(); // now this contain the value
        console.log(func()); // this will print the value in the console

<hr style= "border-top: 1px dotted #ccc;">

## 🎯 template literals ✅

-> ``

🌟Exmp:

        console.log(`hey ${3*6} is 18 and ${2-2} is 0`);

<hr style= "border-top: 1px dotted #ccc;">

## 🎯 default parameters ✅

-> Whenever we pass an arguments to a function(the function should take a parameter)\
the function take the parameter and acts accordingly.

🌟Exmp:

        function abcd(parm){ // recieving parameter
            console.log(parm); // so this will print 6
        }

        abcd(6); // passing arguments

But, when we do not pass any arguments even though the function takes a parameter

🌟Exmp:

        function abcd(parm) { // recieving parameter
            console.log(parm);
        }

        abcd(); // not passing any arguments

📝 if we don't pass any arguments then by default JavaScript assigns 'undefined'.

To get rid of this we can set default parameter

🌟Exmp:

        function abcd(parm = 0) { // recieving parameter | default value is set to 0
            console.log(parm);
        }

        abcd(); // not passing any arguments

📝 even though we have not passed any arguments to the function the function will print\
the value 0 in place of 'undefined'.

<hr style= "border-top: 1px dotted #ccc;">

## 🎯 rest and spread ✅

-> ... triple dots which acts different in different context\
The (...) triple dots operator can act both as spread operator as well as rest operator.\

📝 This different behaviour of a single operator is know as operator overloading.

📌 Spread Operator

🌟Exmp: Suppose there is an array,

        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

If we want to copy the array,

        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var brr = arr; // This is not coping, this is referencing

The right way to copy an arr or object is to use spread operator

        var arr = [1, 2, 3, 4, 5, 6, 7, 8];
        var brr = [...arr];

📝 The triple dot acts as a spread operator here. It spreads the array 'arr' elements into the variable 'brr'.

📌 Rest Operator

🌟Exmp: Suppose there is a function which takes only three parametes, but we are passing more than\
three arguments.

        function abcd(a, b, c) {
            console.log(a, b, c);
        }

        abcd(1, 2, 3, 4, 5, 6, 7);

📝 In this case the argument passed to the function will only assign first three value, a=1, b=2\
and c=3. The rest of the arguments will be ignored.\
If we don't want the function to ignore the rest of the values we can use the 'rest' operator.

        function abcd(a, b, c, ...variableName) {
            console.log(a, b, c, variableName);
        }

        abcd(1, 2, 3, 4, 5, 6, 7);

📝 So, now the function will take and print the values of a, b and c and also store and print the\
rest of the values in an array.

<hr style= "border-top: 1px dotted #ccc;">

## 🎯 destructuring ✅

-> Taking out data from arrays and objects.

Suppose there is an array and you don't want to take the values in the old traditional way like this

🌟Exmp:

        var arr = [1, 2, 3];
        console.log(arr[0], arr[1]); // like this

What you can do is, you can use the destructuring of an array

🌟Exmp:

        var arr = [1, 2, 3];
        var [a, b] = arr;

        console.log(a, b);

📝 You can create variables and assign the values to it. In the above example, the 'a' and 'b' are\
the variables, the [] brackets are used to say that it is an array and ' = arr ' is telling that\
you are reffering to the array named 'arr'.

Similarly, in objects you don't want to write it like this

🌟Exmp:

        var obj = {name: 'Sagar', age: 22};
        var name = obj.name;
        var age = obj.age; // like this

        console.log(name, age);

What you can do is, you can use the destructuring of an object

🌟Exmp:

        var obj = {name: 'Sagar', age: 22};
        var {name, age} = obj;

        console.log(name, age);

📝 You can create variables of same name of the attributes of the object and directly use them.

<hr style= "border-top: 1px dotted #ccc;">

## 🎯 classes ✅

-> to make objects from a particular blueprint

<hr style= "border-top: 1px dotted #ccc;">

## 🎯 \*try catch ✅

-> to take care of code when it gets errors

Many times it is necessary to run the code even though there maybe an error.\
As JavaScript is an interpreted language, it runs the code to the line number\
untill it doesn't face any error and stops when it gets one. To solve this we \
use try catch claws.

🌟 Exmp:

        console.log('hey');

        try{
            console.log(hey);
        }
        catch (err) {
            console.log(err);
        }

        console.log('hey');

So, this code will run without crashing the whole application/program.

<hr style= "border-top: 1px dotted #ccc;">
