/*In this lesson we learn how to convert a function using Var into a function using
Let, we also learn how the 2 declarations behave within a function*/
function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
