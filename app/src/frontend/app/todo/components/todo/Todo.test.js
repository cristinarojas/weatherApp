// Functions for test.
//import { add, total } from './Todo';

/* Unit test
test('add', () => {
  const value = add(1, 2);
  expect(value).toBe(3)
}) */

/* Integration test
//console.log(total(5, 20))
test('total', () => {
  expect(total(5, 20)).toBe('$25')
})*/

import { total } from './Todo'; // We are no importing the function

// Mock function
const add = jest.fn(() => 3); // Declaring an empty function

test('add', () => {
  expect(add(1, 2)).toBe(3)
  expect(add).toHaveBeenCalledTimes(1);
})
