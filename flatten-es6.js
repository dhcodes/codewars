/*
Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
*/

//My Answer
let flatten = (array) => {
  // TODO: Program me
  var flattened = array.reduce((a, b) => { return a.concat(b)}, [])
  return flattened;
}

//Suggested Answer
var flatten = function (lol){
  return [].concat.apply([],lol);
}


//Comments
This prompted me to look at the .apply() method which I've rarely seen.
