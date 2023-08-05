const generateQuoteBtn = document.querySelector(".btn");
const showQuoteInHeader = document.getElementById("quoteId");
const showAuthor = document.getElementById("authorId");

const quotes = [
  'Look within. Within is the fountain of good and it will ever bubble up, if you ever dig.',
  'If a man knows not to which port to sails, no wind is favorable.',
  'First say to yourself what you would be; and then do what you have to do.',
  'Since every man dies, it is better to die with distinction than to live long.'
];

const author = [
    '- Marcus Aurelius',
    '- Lucius Annaeus Seneca',
    '- Epictetus',
    '- Gaius Musonius Rufus'
]

const showQuote = () => {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  showQuoteInHeader.textContent = quotes[quoteIndex];
  showAuthor.textContent = author[quoteIndex];
};

generateQuoteBtn.addEventListener("click", showQuote);
