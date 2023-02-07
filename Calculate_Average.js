// Write a function which calculates the average of the numbers in a given list.

function findAverage(array) {
//   let averageArray = 0;
//   let sum = 0;

//   if (array.length === 0) {
//     return 0;
//   }

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   averageArray = sum / array.length;
//   return averageArray;
  
  // Another Solution with reduce 

  return array.reduce((curr,acc) => curr + acc ,0) / array.length;

}

console.log(findAverage([1, 2, 3, 4]));


