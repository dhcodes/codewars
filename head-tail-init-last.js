/*
Haskell has some useful functions for dealing with lists:

$ ghci
GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
λ head [1,2,3,4,5]
1
λ tail [1,2,3,4,5]
[2,3,4,5]
λ init [1,2,3,4,5]
[1,2,3,4]
λ last [1,2,3,4,5]
5
Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

head [x] = x
tail [x] = []
init [x] = []
last [x] = x

*/

//My Answer
function head(arr) {
  return arr[0];
}

function tail(arr) {
  return arr.slice(1)
  }

function init(arr) {
  return arr.slice(0,arr.length-1)
  }

function last(arr) {
  return Number(arr.slice(-1).toString())
}


//Suggested Answer
function head(a) {return a[0]}

function last(a) {return a[a.length - 1]}

function init(a) {return a.slice(0, -1)}

function tail(a) {return a.slice(1)}



//Comments
This is almost the same as my answer except for tail. I had tried a[a.length] but was getting undefined and did not immediately realize the simple mistake I had made, being that length is one position longer than the last index value.
