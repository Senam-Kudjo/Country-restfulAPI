let searchButton = document.getElementById("searchButton");
let countryInput = document.getElementById("countryInput");
let result = document.getElementById("result");
let searchButton2 = document.getElementById("searchButton2");
let countryInput2 = document.getElementById("countryInput2");
let result2 = document.getElementById("result2");

let compareButton = document.getElementById("compare");
let container = document.getElementById("container");
let container2 = document.getElementById("container2");
let gc1;
let gc2;
searchButton.addEventListener("click", function () {
  let countryName = countryInput.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      let c1P = data[0].population;
      gc1 = c1P;
      // console.log(gc1);
      // console.log(data[0]);
      // console.log(data[0].capital[0]);
      // console.log(data[0].flags.svg);
      // console.log(data[0].name.common);
      // console.log(data[0].continents[0]);
      // console.log(Object.keys(data[0].currencies)[0]);
      // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      // console.log(
      //   Object.values(data[0].languages).toString().split(",").join(",")
      // );
      result.innerHTML = `
      <img src = "${data[0].flags.svg}"
      class="flags-img">
      <h2> ${data[0].name.common} </h2>
      <div class = "wrapper">
        <div class = "data-wrapper">
        <h4> Capital: </h4>
        <span>${data[0].capital} </span>
        </div>
    </div>
    <div class = "wrapper">
        <div class = "data-wrapper">
        <h4> Continent: </h4>
        <span>${data[0].continents[0]} </span>
        </div>
    </div>
    <div class = "wrapper">
        <div class = "data-wrapper">
        <h4> Population: </h4>
        <span>${data[0].population} </span>
        </div>
    </div>
    <div class = "wrapper">
        <div class = "data-wrapper">
        <h4> Currency: </h4>
        <span>${
          data[0].currencies[Object.keys(data[0].currencies)].name
        } - ${Object.keys(data[0].currencies)} </span>
        </div>
    </div>
    <div class = "wrapper">
        <div class = "data-wrapper">
        <h4> Currency: </h4>
        <span>${Object.values(data[0].languages)
          .toString()
          .split(",")
          .join(",")}</span>
        </div>
    </div>
      `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `
            <h3> The input field cannot be empty</h3>
            `;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name. </h3>`;
      }
    });

  searchButton2.addEventListener("click", function () {
    let countryName2 = countryInput2.value;
    let finalURL2 = `https://restcountries.com/v3.1/name/${countryName2}?fullText=true`;
    console.log(finalURL2);
    fetch(finalURL2)
      .then((response) => response.json())
      .then((data) => {
        let c2P = data[0].population;
        gc2 = c2P;
        compareButton.addEventListener("click", function () {
          if (gc1 > gc2) {
            container.style.backgroundColor = "red";
            gc1 = "";
          } else {
            container2.style.background = "yellow";
            gc2 = "";
          }
        });
        //   console.log(data[0].capital[0]);
        //   console.log(data[0].flags.svg);
        //   console.log(data[0].name.common);
        //   console.log(data[0].continents[0]);
        //   console.log(Object.keys(data[0].currencies)[0]);
        //   console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        //   console.log(
        //     Object.values(data[0].languages).toString().split(",").join(",")
        //   );
        result2.innerHTML = `
      <img src = "${data[0].flags.svg}"
      class="flags-img">
      <h2> ${data[0].name.common} </h2>
      <div class = "wrapper">
        <div class = "data-wrapper">
        <h4> Capital: </h4>
        <span>${data[0].capital} </span>
        </div>
    </div>
    <div class = "wrapper">
        <div class = "data-wrapper">
        <h4> Continent: </h4>
        <span>${data[0].continents[0]} </span>
        </div>
    </div>
    <div class = "wrapper">
        <div class = "data-wrapper">
        <h4> Population: </h4>
        <span>${data[0].population} </span>
        </div>
    </div>
    <div class = "wrapper">
        <div class = "data-wrapper">
        <h4> Currency: </h4>
        <span>${
          data[0].currencies[Object.keys(data[0].currencies)].name
        } - ${Object.keys(data[0].currencies)} </span>
        </div>
    </div>
    <div class = "wrapper">
        <div class = "data-wrapper">
        <h4> Currency: </h4>
        <span>${Object.values(data[0].languages)
          .toString()
          .split(",")
          .join(",")}</span>
        </div>
    </div>
      `;
      })
      .catch(() => {
        if (countryName2.length == 0) {
          result.innerHTML = `
            <h3> The input field cannot be empty</h3>
            `;
        } else {
          result.innerHTML = `<h3>Please enter a valid country name. </h3>`;
        }
      });
    console.log(gc1);
    console.log(gc2);
  });
});
