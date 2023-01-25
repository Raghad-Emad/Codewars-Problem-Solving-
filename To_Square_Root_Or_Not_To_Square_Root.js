// Return the square root of array & numbers with no square root return square

function squareOrSquareRoot(array) {

    // let newarr = [];

    // for (let i = 0; i < array.length; i++) {
        
    //     if (Number.isInteger(Math.sqrt(array[i]))) {
    //         newarr.push(Math.sqrt(array[i]));
    //     }
    //      else {
    //         newarr.push(array[i]*array[i])
    //     }
        
    // }

    // return newarr;


    //// Another solution with map 

    return array.map( x => Number.isInteger(Math.sqrt(x)) ?  Math.sqrt(x) : x*x );
}

console.log(squareOrSquareRoot([5,9,2,4,49]))