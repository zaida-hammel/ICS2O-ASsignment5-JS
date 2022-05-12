// Created by: Zaida Hammel
// Created on: May 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
*/
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Assignment-5-JS/sw.js", {
    scope: "/ICS20-Assignment-5-JS/",
  });
}

/**
 * This function
 */
function myButtonClicked() {
  var userInteger = parseInt(document.getElementById("userInteger").value);
  var pi;
  var number = 1;
  var plusOrMinus = "minus";

  pi = 4 / number;
  while (userInteger > 1) {
    if (plusOrMinus == "minus") {
      numbeer = number + 2;
      pi = pi - (4 / number);
      plusOrMinus = "plus";
    } else if (plusOrMinus == "plus") {
      number = number + 2;
      pi = pi + (4 / number)
      plusOrMinus = "minus";
    }
    userInteger = userInteger - 1;
  }
  plusOrMinus = "minus";
  number = 1;
  document.getElementById("answers").innerHTML = "The answer is: " + pi;
}