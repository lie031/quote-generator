import { quotes} from "./quotes.js";
const quote = document.querySelector('.quote');
const autor = document.querySelector('.autor');
const twtBtn = document.querySelector('.twitter-btn')
const newQuote = document.querySelector('.new-quote');


newQuote.addEventListener('click',generateQuote);
twtBtn.addEventListener('click', tweetQuote);

function generateQuote(){
    let ramdomNum = Math.floor(Math.random()*quotes.length)
    quote.textContent = "“" + quotes[ramdomNum].quote + "”";
    autor.textContent = quotes[ramdomNum].author;
}

function tweetQuote() {
    const currentQuote = quote.textContent;
    const currentAuthor = autor.textContent;
    
    const twitterIntentURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentQuote)} - ${encodeURIComponent(currentAuthor)}`;

    // Open the Twitter intent URL in a new window or tab
    window.open(twitterIntentURL, '_blank');
}

