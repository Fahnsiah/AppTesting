import { check } from 'k6';
import factorial from './factorial.js';

export default function () {
  const number = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10

  const result = factorial(number);

  check(result, {
    'Factorial Calculation is Correct': (r) => r === expectedFactorial(number),
  });
}

function expectedFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * expectedFactorial(n - 1);
  }
}
