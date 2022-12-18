let arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

// sort the array in ascending order
let sortedArr = arr.sort(function (a, b) {
  return a - b;
});

// function takes sorted array and return ordered array
function answer(arr) {
  // subArray is array in which are equal numbers pushed and later pushed into orderedArr
  // if indexed item value is NOT equal to next value
  let orderedArr = [],
    subArray = [];
  // loop through given array
  for (i = 0; i < arr.length; i++) {
    if (arr[i + 1] === arr[i]) {
      // if next value is equal current value
      subArray.push(arr[i]); // push current value into subArray
    } else {
      // if next value is NOT equal to current value
      if (subArray.length > 0) {
        // if subArray lenght is not zero(SubArray is not empty)
        subArray.push(arr[i]); // push current value to subArray
        orderedArr.push(subArray); // push subArray to orderedArray
        subArray = []; // clear subArray
      } else {
        // if sub aray lenght is zero(subArray is empty)
        orderedArr.push(arr[i]); // push current value directly to orderedArr
      }
    }
  } //end of for loop
  return orderedArr;
}

answer(sortedArr);
