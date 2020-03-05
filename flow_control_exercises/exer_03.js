function evenOrOdd (int) {
  if (Number.isInteger(int) === false) {
    console.log('Please input an integer');
    return;
  }
  if ((int % 2) === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(2);
evenOrOdd(3);
evenOrOdd(4);
evenOrOdd(5);
evenOrOdd(4.2); 