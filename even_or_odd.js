// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_odd(nums) {
    if (nums % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

even_odd(parseInt());

// Another Solution

function evenOdd(value) {
    return value % 2 == 0 ? "Even number" : "Odd number";
}

console.log(evenOdd());