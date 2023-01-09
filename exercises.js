// ---------------------
// Define a function that takes a string and an integer of i and creates
// a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

function multiArray(str, i) {
  const arr = [];
  for (let j = 0; j < i; j++) {
    arr.push(str);
  }
  return arr;
}

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

function reverse(arr) {
  let arrReversed = [];
  for (let i = arr.length - 1; i > -1; i--) {
    arrReversed.push(arr[i]);
  }
  return arrReversed;
}

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

function removeF(arr) {
  const falsies = [undefined, null, NaN, 0, "", false];
  return arr.filter(function (value) {
    if (!falsies.includes(value)) return value;
  });
}

// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object
// composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------
function arrayIntoObj(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i][0]] = arr[i][1];
  }
  return obj;
}

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if
// they have identical values (order does not matter), it should return
// false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------

function sameValuesArray(arr1, arr2) {
  let hasSameValue = false;

  if (
    arr1.every((i) => arr2.includes(i)) &&
    arr2.every((j) => arr1.includes(j)) &&
    arr1.length === arr2.length
  ) {
    hasSameValue = true;
  }

  return hasSameValue;
}

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------

// -----------------------------------------------
