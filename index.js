#!/usr/bin/env node

console.log(
  "******************************************************************************"
);
console.log(
  "Connais tes congés de l'année ici ! En plus t'as droit à une petite blague..."
);
console.log(
  "******************************************************************************"
);

/*
const ora = require("ora");
const spinner = ora("Loading ").start();
setTimeout(() => {
  spinner.color = "yellow";
  spinner.text = "Loading ";
}, 1000);
*/

const chalk = require("chalk");
console.log(
  chalk.yellow.underline.bold("Oh bhe tien, t'es rentré de vacances ?")
);
console.log(
  chalk.yellow.underline.bold(
    "Non, j'adore venir au bureau pendant mes congés, connard !"
  )
);

var figlet = require("figlet");

figlet("HOLIDATES", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

const countryList = require("country-list");

const axios = require("axios");
axios
  .get("https://date.nager.at/api/v2/publicholidays/2020/BE")
  .then(function (response) {
    console.log(
      response.data.map((item) => [
        console.log(item.date + " " + "//" + " " + item.name),
      ])
    );
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {});
