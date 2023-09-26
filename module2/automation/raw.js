const puppeteer = require("puppeteer");

// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://developers.google.com/web/');

//     await browser.close();
//   })();

let browserPromise = puppeteer.launch({headless: false});

browserPromise.then(function(browser){
    console.log("Browser is opened");
    let pagePromise = browser.newPage();
    return pagePromise; 
}).then(function(page){
    console.log("Page is opened");
    let urlPromise = page.goto("https://www.google.com/");
    return urlPromise;
}).then(function(){
    console.log("google is opened");
}).catch(function(error){
    console.log(error);
})
