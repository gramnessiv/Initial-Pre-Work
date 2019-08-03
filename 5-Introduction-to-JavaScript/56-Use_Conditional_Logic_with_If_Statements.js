/*In this lesson we learn about using if statements to execute code if a condition
is true or false. */
// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if (wasThatTrue) {
      return "Yes, that was true";
  }
  return "No, that was false";
  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);
