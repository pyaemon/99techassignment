/*
Approach A: Iteration
 *
 * Accumulates the result by traversing every integer from 1 to n.
 * The running total is updated during each loop iteration.
 * 
 ** Time: O(n)  - loops through n numbers
 * Space: O(1) - uses constant extra memory
.

*/
var sum_to_n_a = function (n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};
/*
Approach B: Arithmetic Series Formula

 * Uses the mathematical property of consecutive integers:
 * 1 + 2 + ... + n = n(n + 1) / 2
 *
 * Time: O(1)  - direct calculation
 * Space: O(1) - uses constant extra memory
*/
var sum_to_n_b = function (n) {
  return (n * (n + 1)) / 2;
};

/*
 * Approach C: Recursion
 * sum(n) = n + sum(n - 1) //The recursion terminates when n reaches 1.
 *
 * Time: O(n)  - one recursive call per number
 * Space: O(n) - call stack grows with n
 */
var sum_to_n_c = function (n) {
  if (n <= 1) return n;
  return n + sum_to_n_c(n - 1);
};
console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));
