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
