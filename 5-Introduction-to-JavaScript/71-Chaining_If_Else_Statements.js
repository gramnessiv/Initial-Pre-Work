/*In this lesson we learn how to link If / Else statements together, we also learn that
the If statement always goes first, with as many Else If statements as needed and
the last statement is the Else statement.*/
function testSize(num) {
  // Only change code below this line
 if (num < 5){
    return "Tiny";
  }
  else if (num < 10) {
    return "Small";
  }
  else if (num < 15){
    return "Medium";
  }
  else if (num < 20){
    return "Large";
  }
  else {
    return "Huge";
  }
  // Only change code above this line
}

// Change this value to test
testSize(18);
