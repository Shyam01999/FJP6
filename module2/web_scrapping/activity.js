const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2022-23-1298134/bangladesh-vs-india-35th-match-group-2-1298169/full-scorecard";

request(link, cb);

function cb(error, response, html ){
    if(error){
        console.error('error:', error); // Print the error if one occurred
    }
    else{
         const dom = new JSDOM(html);
         const document = dom.window.document;
         let teamName = document.querySelectorAll("ds-text-tight-l ds-font-bold ds-text-ui-typo hover:ds-text-ui-typo-primary ds-block ds-truncate");
         console.log(teamName[0].textContent);
         console.log(teamName[1].textContent);
        // console.log(html);
    }
}