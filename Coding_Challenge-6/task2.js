/* idea is to take each number in given array and check it with all other numbers in array
 *  if they make target sum, using two for loops
 */
let arr = [1, 2, 3],
  target = 4;

function answer(arr = [], target) {
  for (i = 0; i <= arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [[i, j], target];
      }
    }
  }
  return "no matches";
}

answer(arr, target);
