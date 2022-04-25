// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let array = JSON.parse(localStorage.getItem("amount"));

let wallet = (document.getElementById("wallet").innerText = array);

let movies = document.getElementById("movies");

let data = JSON.parse(localStorage.getItem("movie"));
console.log(data);

appendMovies(data);

function appendMovies(data) {
  let div = document.createElement("div");

  let tittle = document.createElement("p");
  tittle.innerText = data.Title;

  let img = document.createlement("img");
  img.src = data.Poster;

  div.append(tittle, img);
  movies.append(div);
}
let submit = document.getElementById("number_of_seats").value;
let total = +(seats * 100);
let new_wallet = arr.total;

if (new_wallet < 0) {
  alert("Insufficient Balance!");

  document.getElementById("wallet").innerText = arr;
} else {
  alert("Booking successfull!");
  localStorage.setItem("amount", new_wallet);
  if (new_wallet < 0) {
    document.getElementById("wallet").innerText = 0;
  } else {
    document.getElementById("wallet").innerText = new_wallet;
  }
}
