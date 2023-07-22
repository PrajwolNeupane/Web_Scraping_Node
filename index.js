const request = require('request-promise');
const cheerio = require('cheerio');

const url = "https://stickersnepal.com/";

(async () => {
    try {
        const porducts = [];
        const response = await request({
            uri: url,
            headers: {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "en-US,en;q=0.9"
            },
            gzip: true
        });

        const $ = cheerio.load(response);
        $('h5[class="mb-0 text-sm"] > a').each((index, element) => {
            const productName = $(element).text().trim();
            porducts.push({name:productName})
        });
        console.log(porducts);
    } catch (error) {
        console.error("Error:", error);
    }
})();
