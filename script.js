fetch('https://dummyjson.com/quotes/random')
.then(res => res.json())
.then(data => displayQuote(data))
.catch(error => console.log(error));

function displayQuote(data) {
    document.getElementById('quote').textContent = data.quote;
    document.getElementById('owns').textContent = data.author;
}

function clicked(){
    fetch('https://dummyjson.com/quotes/random')
    .then(res => res.json())
    .then(data => displayQuote(data))
    .catch(error => console.log(error));
}