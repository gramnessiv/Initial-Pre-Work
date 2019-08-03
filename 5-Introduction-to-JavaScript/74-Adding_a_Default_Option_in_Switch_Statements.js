/*In this lesson we learn about the importance of the default statement, and how it acts
as the closing Else statement and should always be placed last.*/
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 'a':
      return "apple";
      break;
    case 'b':
      return "bird";
      break;
    case 'c':
      return "cat";
      break;
    default:
      return "stuff";
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);
