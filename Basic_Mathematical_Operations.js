// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).

// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2)
{

//   let sum = 0;

//   switch (operation) {
//     case '+':
//         sum = value1 + value2;
//         break;

//     case '-':
//         sum = value1 - value2;
//         break;

//     case '*':
//         sum = value1 * value2;
//         break;

//     case '/':
//         sum = value1 / value2;
//         break;
  
//     default:
//         break;
//   }

//   return sum;


    // or use eval 
    
    return eval(value1 + operation + value2);
    
}

console.log(basicOp('*',2,6));

