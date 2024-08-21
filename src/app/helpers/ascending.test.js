/* eslint-disable */
const isAscending = require('./isAscending');

test('adds 1 + 2 to equal 3', () => {
  expect(isAscending.isAscending([1, 2, 3, 4, 5, 6, 7])).toBe(true);
});

test('aaaadds 1 + 2 to equal 3', () => {
  expect(isAscending.isAscending([26, 27, 28, 29, 30, 31, 1])).toBe(false);
});
