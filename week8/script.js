"use strict";

const countries = document.querySelector(".countries");
const search_contry = document.querySelector(".country_search");
const search_button = document.querySelector(".search-button");

const getCountry = function (country) {
  const req = new XMLHttpRequest();
  req.open("GET", `https://restcountries.com/v3.1/name/${country}`);

  req.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const lang = Object.entries(data.languages);
    const cur = Object.entries(data.currencies);
    const html = `
    <article class="country">
      <button class = "btn-close" onclick = "remove(this)">&times;</button>
      <img src="${data.flags.png}" class="country_img">
      <div class="country_data">
        <h3 class="country_name">${data.name.common}</h3>
        <a href="#" onclick="searchByRegion()'${
          data.region
        }')"><h4 class="country_region">${data.region}</h4></a>
        <p class = "country_row"><span>🗣️</span>${lang[0][1]}</p>
        <p class = "country_row"><span>🪙</span>${cur[0][1].name}(${
      cur[0][1].symbol
    })</p>
        <p class = "country_row"><span>🧑‍🤝‍🧑</span>${data.population}</p>
        <p class = "country_row"><span>🗺️</span>${
          data.borders ? data.borders : "-"
        }</p>
        <p class = "country_row"><span>🏙️</span>${data.capital}</p>
      </div>
    </article>`;

    countries.insertAdjacentHTML("beforeend", html);
    countries.style.opacity = 1;
  });
  req.send();
};

search_button.addEventListener("click", (e) => {
  e.preventDefault();
  getCountry(search_contry.value);
  search_contry.value = "";
});

function remove(e) {
  e.parentNode.remove();
}

function clear_all() {
  countries.innerHTML = "";
}

function searchByRegion(region) {
  clear_all();
  const req = new XMLHttpRequest();
  req.open("GET", `https://restcountries.com/v3.1/region/${region}`);
  req.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    data.forEach((country) => {
      getCountry(country.name.common);
    });
  });

  req.send();
}

// function show_all_country(){
//   const req = new XMLHttpRequest();
//   req.open("GET", `https://restcountries.com/v3.1/all`);
//   req.addEventListener("load", function () {
//     const data = JSON.parse(this.responseText);
//     const country_name = data.map(country => country.name.common)
//     const myList = arrayToUl(country_name);
//     document.body.appendChild(country_name)
//   })
//   req.send();
// }

// function arrayToUl(array) {
//   const ul = document.createElement('ul'); // Create ul element
  
//   // Iterate over the array and create li elements
//   array.forEach(item => {
//     const li = document.createElement('li'); // Create li element
//     li.textContent = item; // Set text content to array element
//     ul.appendChild(li); // Append li to ul
//   });
  
//   return ul; // Return the ul element
// }



getCountry("usa");
