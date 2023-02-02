// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {


    // let newarr=[]
    // for (let i = 0; i < array.length; i++) {
    //     newarr.push(array[i]*-1);   
    // }
    // return newarr ;

    
    // short solution using map
    
    return array.map(x => x*-1);
}

console.log(invert([1,2,3,-4]))