// You get an array of numbers, return the sum of all of the positives ones. 

function positiveSum(arr) {
    let initvalue = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            initvalue += arr[i];
        }
    }  
    return initvalue;
  }
  console.log(positiveSum([2,4,-2]))

// Another solution using built in function

function posSum(myArr) {
        return myArr.filter((x) => x > 0)
    .reduce((acc,current) => acc + current , 0)
}

console.log(posSum([-2,9,0,8,2]))