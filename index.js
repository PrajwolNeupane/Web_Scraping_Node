const request = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
const json2csv = require('json2csv').Parser;

const url = "https://stickersnepal.com/";

(async () => {
    let imdbdata = [];
    const response = await request({
        uri: url,
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9"
        },
        gzip:true
    })

    let $ = cheerio.load(response);
    let title = $('h2[class="h5 text-uppercase mb-2 mb-sm-3"]').text().trim();
    console.log(title);

})();