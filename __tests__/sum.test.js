// sum.test.js
// simple function that adds two numbers
import { sum } from '../code-to-unit-test/sum';

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(4);
});

// another test calling the sum() function
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});