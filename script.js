//let apiQoutes = [];

//show new quotes get quotes from local
function newQuote() {
  //pick random qoutes from API
  const quote = localQuotes[Math.trunc(Math.random() * localQuotes.length)];
  console.log(quote);
}

newQuote();

//get qoutes from API
// async function getQuotes() {
//   const apiUrl = 'https://type.fit/api/quotes';
//   try {
//     const response = await fetch(apiUrl);
//     apiQoutes = await response.json();
//     newQuote();
//   } catch (error) {
//     //catch error here
//   }
// }

//call the function
// getQuotes();
