// let quoteResults = document.getElementById("quote-area");

quotes = [
    "You need to stick with the fundamentals, learn to grow in the process. --'Ionware'",
    "Talk is sweet, show me the code! --'Jk'",
    "I took it serious, I thought of it this way; it's like taking a three unit course which i must pass at the end of the semester --'CodeLeaf'",
    "Write simple codes!! --'Seven'"
]

const getQuote = () => {
    quotes = Math.floor(Math.random() * 4).innerText
}

getQuote()