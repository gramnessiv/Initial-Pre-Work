/*In this lesson we learn about the Radix argument that is applied to ParseInt,
it specifies type of number in a string (2 = binary).*/
function convertToInteger(str) {
  var a = parseInt(str, 2);
  return a;
}

convertToInteger("10011");
