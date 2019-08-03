/*In this lesson we learn about Get and Set functions, and how get functions can
pull a value from an objects veriable without calling out the object then variable.
The set functions in much the opposite way as get, to change a variables value thats
inside of an object.*/
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(Fahrenheit) {
      this.Fahrenheit = Fahrenheit;
    }
    get temperature () {
      return 5 / 9 * (this.Fahrenheit - 32);
    }
    set temperature (celsius) {
      this.Fahrenheit = celsius * 9.0 / 5 + 32;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
