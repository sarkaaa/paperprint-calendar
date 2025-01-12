const isAscending = (arr: number[]) =>
  arr.every((value, index) => index === 0 || value >= arr[index - 1]);

export default isAscending;
