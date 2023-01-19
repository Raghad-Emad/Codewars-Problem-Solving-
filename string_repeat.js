// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr (n, s) {

//     let newStr = '';
//     for (let i = 0; i < n; i++) {
//        newStr += s;
//     }
//   return newStr;

    // use built in function as a solution

   return s.repeat(n)

}

console.log(repeatStr(3,' R '))