const searchAPI = document.getElementById("search-btn");
const quote = document.getElementById("qoute");
const author = document.getElementById("author");
// API

async function getData() {
  const res = await fetch("https://stoic.tekloon.net/stoic-quote");
  const data = await res.json();
  displayData(data);
}

// Display response

function displayData(data) {
  console.log(data);
  author.textContent = data.author;
  quote.textContent = data.quote;
}

searchAPI.addEventListener("click", getData);
