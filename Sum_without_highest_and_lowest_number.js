// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

function SumWithoutHighestAndLowestNumber(array) {
    
    if(array == null) return 0;

    // let sum = 0 ;
    // let maxValue = Math.max(...array);
    // let minValue = Math.min(...array);

    // let filteredArray = array.filter((x) => x != maxValue && x!= minValue );
    
    // for (let index = 0; index < filteredArray.length; index++) {
                
    //     sum += filteredArray[index];
    // }
    // console.log(sum);



    ///// we can replace for loop with reduce method

    // let newArr = filteredArray.reduce ((acc,curr) => acc + curr ,0)

    // console.log(newArr);


    

    ///// short solution 

    // console.log( array.filter((x) => x !== Math.max(...array) && x !== Math.min(...array)).reduce((acc,current) => acc + current ,0))

    
    ///// Solution for all test cases if there is a number is repeated 

    console.log(array.sort((a,b) => a-b).slice(1,-1).reduce((acc,current) => acc + current ,0))
 
}

SumWithoutHighestAndLowestNumber([1,1,2,3,1,1,4,7]);