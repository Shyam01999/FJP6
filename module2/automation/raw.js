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
    
})
