function rentalCarCost(d) {
  let total = 0;
  let cost = 40;

  if (d >= 7) {
    total = ( d * cost ) - 50
    }
  else if (d >= 3 && d <= 6 ) {
    total = ( d * cost ) - 20
    }
  else {
    total = d * cost;
    }

    return total
}