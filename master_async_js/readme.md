🎯 What is sync and async ? ✅

-->

Synchronous - sync means one after another, until and unless one command is\
 completed the second command will not be executed.

🌟Exmp: task a - 5s\
task b - 2s\
task c - 15s\
task d - 1s

📝Note: to complete all the execution it will take 23s.

Asynchronous - async means start executing every commands at the same time,\
 whichever have completed it's execution give the output.

🌟Exmp: task a - 5s\
task b - 2s\
task c - 15s\
task d - 1s

📝Note: to complete all the execution it will take only 15s.

📌 How do we know that if we are writing sync or async code ?\
-> If you are using any of these, then you are writing asynchronous js:

1️⃣ setTimeout\
2️⃣ setInterval\
3️⃣ promises\
4️⃣ fetch\
5️⃣ axios\
6️⃣ XMLHttpRequest

🎯 What is async javascript ? ✅

--> Sometimes our final code is depended on someone's else server, in this\
 case we don't know when the server will response and give the requested\
 data. What we can't do in this situation is writing synchronous code,\
to deal with such issues we write asynchronous code so that blocking\
 doesn't occurs and whenever the server send it's response the code \
 with respect to the response gets executed.

🌟Exmp:

    console.log('hey');
    setTimeout(function(){
        console.log('hey after 2sec');
    }, 2000);
    console.log('hey 2');

📝Note: The code inside the setTimeout will give output after 2sec.

🎯 Javascript is not asynchronous ✅
🎯 The story of async. ✅

--> As we know javascript is single threaded therefore it cannot run tasks\
 parallelly. So, there are two stacks,\
 1️⃣ Main stack\
 2️⃣ Side stack\
 The main stack is the 'execution' stack. Every line of code that gets\
 into the main stack gets executed immediately and ever synchronous code\
 goes to the main stack.\
The side stack is the waiting stack, every asynchronous code goes to the\
 side stack and waits for the response.\
Only after the main stack is empty or all the execution in the main stack\
 is completed, the main stack goes to the side stack and check if there is\
 anything to be executed. The main stack asks if the side stack code if\
 the work is done or not, if done then only it gets into the main stack to\
 get executed.\
The whole operation between the main stack and the side stack is done by\
 'Event loop'.

🌟Exmp:

        console.log('hey');
        console.log('hey2');
        setTimeout(function(){
            console.log('hey3 after 0 sec');
        }, 0);
        console.log('hey4');

📝Note: Even though the setTimeout is set to 0s. It will only run after\
 the main stack is empty.

🎯 Single threading and multi threading ✅

--> Single therading means one task at a time, multi threading means 2 or \
 more tasks at a time.

🎯 Callbacks ✅

--> Callback is a function which runs only when the execution of async code\
 is completed.

🌟Exmp:

        setTimeout(function(){
            \\ some code
        }, 1000);

📝Note: The function here is a normal function but it is called a callback\
 function.

🎯 Promises ✅
🎯 then and catch ✅

--> Promises can have only two outcomes, first is resolve(res) and second is\
 reject(rej). If it is in resolved state then '.then' is executed else\ 'catch' is executed. By default it is in pending state. We can store it in a variable.

🌟Exmp:

        let ans = new Promise((res, rej)=>{
            if(true){
                return res();
            }
            else {
                return rej();
            }
        });

        ans
        .then(function(){
            console.log('resolved');
        })
        .catch(function(){
            console.log('rejected');
        })

🌟Exmp: user will ask for a number between 0 to 9 and if the number is below\
        5 then resolve if not reject

        let ans = new Promise((res, rej)=>{
            let n = Math.floor(Math.random()*10);

            if(n<5){
                return res();
            }
            else {
                return rej();
            }
        });

        ans
        .then(function(){
            console.log('below');
        })
        .catch(function(){
            console.log('above');
        })



🎯 async await ✅

--> Any function in which you will write async code, coz you will write async\
    code you can use promises, when it will get resolved then you have to use\
    '.then'. If you don't want to use '.then' we can use async await.

🌟Exmp:

        async function abcd(){
        let raw = await fetch(`https://randomuser.me/api/`);
        let ans = await raw.json();
        console.log(ans);
        }

        abcd();



🎯 5 real world use cases
🎯 in node 
🎯 fetch
🎯 setTimeout
🎯 setInterval

🎯 [concept aside]


🎯 concurrency ✅

--> In javascript synchronous code and asynchronous code is processing at the \
    same time is know as concurrency.

🎯 parallelism ✅

--> focuses on different processors and their cores to run the processes

🎯 throttling ✅

--> to control the number of execution of a code
