// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let array = JSON.parse(localStorage.getItem("amount"));

let wallet = (document.getElementById("wallet").innerText = array);

let movies = document.getElementById("movies");

function searchMovies() {
  let search = document.getElementById("search").value;

  const url = `https://www.omdbapi.com/?apikey=b15d3153&s=${search}`;

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      let data = res.search;
      appendMovies(data);
      console.log(data);
    });
}
function appendMovies(data) {
  movies.innerHTML = null;
  data.map((elem) => {
    let div = document.createElement("div");
    div.style.border = "1px solid red";

    let tittle = document.createElement("p");
    tittle.innerText = elem.Title;

    let img = document.createlement("img");
    img.src = elem.Poster;

    let btn = document.createElement("button");
    btn.class = "book_now";
    btn.innerText = "Book Now";

    btn.addEventListener("click", () => {
      localStorage.setItem("movies", JSON.stringify(elem));
      window.location.href = "checkout.html";
    });
    div.append(img, tittle, btn);
    movies.append(div);
  });

  let id;
  function debounce(func, delay) {
    if (id) {
      clearTimeout(id);
    }

    let id = setTimeout(function () {
      func();
    }, delay);
  }
}
