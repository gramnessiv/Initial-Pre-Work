/*In this lesson we learn how to use wordBlanks variables, and assign them to a
string to form a sentence.*/
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
 result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";
  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("pig", "tiny", "jump", "high");
