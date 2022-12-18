/* idea is to create two arrays in which we store numbers and strings separately 
and use forEach metod to check type of each value, if value is number, put that 
value in numbers array and if value is string, put that value into strings array,
then order both arrays in ascending order and push them in ordered array.*/

let arr = [1, "12", "2", "3", 24, 3, 2, 12, "11"]; // given array

/* function takes array and returns another array which consist of two arrays
that hold numbers and strings separately, numbers and strings are sorted in
ascending order */
function order(arr) {
  /*initialize two arrays in which we store numbers and strings separately
    and ordered array*/
  let numbers = [],
    strings = [],
    ordered = [];
  arr.forEach((el) => {
    if (typeof el === "number") {
      numbers.push(el);
    } else if (typeof el === "string") {
      strings.push(el);
    }
  });
  // return ordered numbers and strings arrays into ordered array
  return ordered.push(ascend(numbers), ascend(strings));
}

// function that sorted arrays in ascending order
function ascend(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

order(arr);
