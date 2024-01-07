// // sabse pahle ghar par aao
// // gate kholo aur gate lagao
// // khana pakao kahana khao
// // incognito mode chalao
// // sojao kyuki tum tkak gaye ho

// var ans = new Promise(function (res, rej) {
//     return res('sabse pehele ghar par aao');
// })

// var p2 = ans.then(function (data) {
//     console.log(data);
//     return new Promise(function (res, rej) {
//         return res("gate kholo aur gate lagao");
//     });
// });

// var p3 = p2.then(function (data) {
//     console.log(data);
//     return new Promise(function (res, rej) {
//         return res('khana pakao khana khaao');
//     });
// });

// var p4 = p3.then(function (data) {
//     console.log(data);
//     return new Promise(function (res, rej) {
//         return res('incognito mode chalao');
//     });
// });

// var p5 = p4.then(function (data) {
//     console.log(data);
//     return new Promise(function (res, rej) {
//         return res('sojao kyuki tum tkak gaye ho');
//     });
// });

// p5.then(function (data) {
//     console.log(data);
// })


// if we don't use async await

// function abcd(){
//     fetch(`https://randomuser.me/api/`)
//     .then(function(raw){
//         return raw.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })
// }

// async function abcd(){
//     let raw = await fetch(`https://randomuser.me/api/`);
//     let ans = await raw.json();
//     console.log(ans);
// }

// async function abcd(){
//     console.log(await (await fetch(`https://randomuser.me/api/`)).json());
// }

// abcd();