var sum_to_n_a = function (n) {
  // your code here
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

var sum_to_n_b = function (n) {
  // your code here
  const A = 1;
  const D = 1;
  return (n / 2) * (2 * A + (n - 1) * D);
};

var sum_to_n_c = function (n) {
  // your code here
  let sum = 0;
  while (n) {
    sum += n--;
  }
  return sum;
};

console.log(sum_to_n_a(20));
console.log(sum_to_n_b(20));
console.log(sum_to_n_c(20));
