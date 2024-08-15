async function sumOfSquares(numbers) {
  const squares = numbers.map((number) => number * number);
  const sum = squares.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum;
}

// Write code below this line 

async function calculateSum(arrayOfNumbers) {
  try {
    let sum = await sumOfSquares(arrayOfNumbers);
    console.log(sum);
  } catch (e) {
    console.log(e.value)
  }
}

// Write code above this line