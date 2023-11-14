document.addEventListener('DOMContentLoaded', function () {
  const showQuoteButton = document.getElementById('show-quote-button');
  const quoteText = document.getElementById('quote-text');

  const inspirationalQuotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  ];

  showQuoteButton.addEventListener('click', function () {
    const randomQuote = getRandomElementFromArray(inspirationalQuotes);
    quoteText.textContent = randomQuote;
  });

  function getRandomElementFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
});
