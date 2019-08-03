/*In this lesson we learn how to link multiple Conditional statements together.*/
function checkSign(num) {
  return ((num == 0) ? "zero" : (num < 0) ? "negative" : "positive")
}

checkSign(10);
