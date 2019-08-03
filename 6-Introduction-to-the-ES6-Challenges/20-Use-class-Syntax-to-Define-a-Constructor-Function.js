/*In this lesson we learn about the keyword Class, and how its just a syntax to be used
to replace the constructor function.*/
function makeClass() {
  "use strict";
  /* Alter code below this line */
   class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
