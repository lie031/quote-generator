import { quotes} from "./quotes.js";
const quote = document.querySelector('.quote');
const autor = document.querySelector('.autor');
const twtBtn = document.querySelector('.twitter-btn')
const newQuote = document.querySelector('.new-quote');


newQuote.addEventListener('click',generateQuote);

function generateQuote(){
    let ramdomNum = Math.floor(Math.random()*quotes.length)
    quote.textContent = "“" + quotes[ramdomNum].quote + "”";
    autor.textContent = quotes[ramdomNum].author;
}

