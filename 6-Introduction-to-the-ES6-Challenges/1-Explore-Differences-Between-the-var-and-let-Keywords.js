/*In this lesson we learn that using Var to declare variables could potentially
cause errors if variables are unknowingly overridden. And that Let was introduced
in ES6, and will throw an error if 2 variables exist with the same name.*/
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
