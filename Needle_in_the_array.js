// Find the string needle in the array and when you find it return 'Found the needle at position + position of element' 

function needletrace(array) {
    // for (let i = 0; i < array.length; i++) {
        
    //     if (array[i] === 'needle') {
    //             return ' Found the needle at position ' + i;
    //     }
    // }


    // Another Solution

    return ' Found the needle at position ' + array.indexOf('needle');

}

console.log(needletrace(['hi','stack','this','needle','is','not','here!']))