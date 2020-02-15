quotes = [
    "You need to stick with the fundamentals, learn to grow in the process. \n--'Ionware'",
    "Talk is sweet, show me the code! --'Jk'",
    "I took it serious, I thought of it this way; it's like taking a three unit course which i must pass at the end of the semester --'CodeLeaf'",
    "Write simple codes!! \n--'Seven'"
]

const getQuote = () => {
    let quotesResults = Math.floor(Math.random() * 4) + 1;
    document.getElementById("quote-area").innerHTML = quotes[quotesResults];
}
