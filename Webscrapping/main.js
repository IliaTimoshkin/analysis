import  { gotScraping } from "got-scraping";
import cheerio from 'cheerio';

const response = await gotScraping('https://www.ozon.ru/category/telefony-i-smart-chasy-15501/');
const html = response.body;

const $ = cheerio.load(html);
const titleElement = $('title');
const titleText = titleElement.text();
console.log(html);


