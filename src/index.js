//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
// var numbers = [3, 56, 2, 48, 5];

// const num = numbers.filter(function (elm) {
//   return elm > 10;
// });
// console.log(num);

// var total = numbers.reduce(function (a, b) {
//   return a + b;
// });
// console.log(total);

// console.log(
//   numbers.find(function (a) {
//     return a > 10;
//   })
// );

// console.log(
//   numbers.findIndex(function (a) {
//     return a > 10;
//   })
// );

import React from "react";
import reactDom from "react-dom";
import emoji from "./emojipedia";

console.log(emoji[0].meaning);

var meaning = emoji.map(function (imo) {
  return imo.meaning.substring(0, 100);
});

console.log(meaning);
