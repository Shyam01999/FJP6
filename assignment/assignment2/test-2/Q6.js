// How to implement setInterval of your own using setTimeout

// Solution:
let intervalId = setInterval(function(){
    console.log("Hello");
},2000);

setTimeout(function(){
    clearInterval(intervalId);
    console.log("world");
},10000);