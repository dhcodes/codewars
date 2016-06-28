/*
 * Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.
 *
 * Use method prototypes to enable all Dogs to bark.
 *
 */


//My Answer

function Dog (breed) {
  this.breed = breed;
  this.bark = function() {
  return "Woof";
    }
  }

  var snoopy = new Dog("Beagle");
  snoopy.bark();

  var scoobydoo = new Dog("Great Dane");
  scoobydoo.bark();


//Suggested Answer
  
function Dog (breed) {
  this.breed = breed;
  }  

  var snoopy = new Dog("Beagle");

  Dog.prototype.bark = function() {
    return "Woof";
    };

  var scoobydoo = new Dog("Great Dane");
