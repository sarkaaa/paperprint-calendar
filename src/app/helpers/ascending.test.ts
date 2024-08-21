import isAscending from './isAscending';

test('values in the list are ascending', () => {
  expect(isAscending([1, 2, 3, 4, 5, 6, 7])).toBe(true);
});

test('values in the list are not ascending', () => {
  expect(isAscending([26, 27, 28, 29, 30, 31, 1])).toBe(false);
});
