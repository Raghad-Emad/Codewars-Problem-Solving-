// Convert number to reversed array of digits

// we use map to iterate and convert to Number

function digitize(n) {
  return n.toString().split('').map((m) => Number(m)).reverse();
}

console.log(digitize(123))