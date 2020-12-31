/*
Synchronous programming -  run without blocking
Asynchronous programming - divert into blocking and runing
User interface and browser - generally work as Asynchronous programming(Button click, link click etc)
Promises handle Asynchronous programming
Promise exit in three state - pending, fulfilled and rejected
*/

console.log("Promises Example");
let p = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolved Promise Data"), 3000);
    //reject("Rejected Promise Data")
})

p.then(response => console.log(response))
.catch(error => console.log(error));

console.log("After Promise Print");