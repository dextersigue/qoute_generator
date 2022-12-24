const quoteContainer = document.getElementById('quote--container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new--quote');
const loader = document.getElementById('loader');


//show new quotes get quotes from API
let apiQuotes = [];

//Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

function newQuote() {
    loading();
    //pick random qoutes from API
    const quote = apiQuotes[Math.trunc(Math.random() * apiQuotes.length)];
    // authorText.textContent = quote.author;
    //check if author field is blank and replace it with 'Unknown'
    if(!quote.author){
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }

    //in this line of code create a style in classList to change font of text if 80 words 
    //but if not regular design style apply for font
    if(quote.text.length > 80) {
        quoteText.classList.add('long--quote');
    } else {
        quoteText.classList.remove('long--quote');
    }

    //Set Quote Hide Loader
    quoteText.textContent = quote.text;
    complete();
  }
   
//show new quotes get quotes from local quotes.js
// function newQuote() {
//   //pick random qoutes from API
//   const quote = localQuotes[Math.trunc(Math.random() * localQuotes.length)];
//   console.log(quote);
// }
// newQuote();

//get qoutes from API
async function getQuotes() {
  loading();
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //catch error here
  }
}

//Tweet Quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//event Listeners
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)


//on load the function
getQuotes();

