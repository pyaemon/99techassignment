# Sum to N Approaches

## Approach A: Iterative Loop

```js
var sum_to_n_a = function (n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};
```

### How it Works

Starts with `sum = 0` and iterates through every number from `0` to `n`, adding each value to the running total.

For `n = 5`:

```text
sum = 0

sum += 0  => 0
sum += 1  => 1
sum += 2  => 3
sum += 3  => 6
sum += 4  => 10
sum += 5  => 15
```

### Time Complexity

The loop executes `n + 1` times.

**O(n)**

### Space Complexity

Only two variables (`sum` and `i`) are used regardless of the input size.

**O(1)**

---

## Approach B: Mathematical Formula

```js
var sum_to_n_b = function (n) {
  return (n * (n + 1)) / 2;
};
```

### How it Works

Uses the arithmetic series formula:

```text
1 + 2 + ... + n = n(n + 1) / 2
```

For `n = 5`:

```text
(5 × 6) / 2
= 30 / 2
= 15
```

### Time Complexity

Only a constant number of arithmetic operations are performed.

**O(1)**

### Space Complexity

No additional memory is required based on the value of `n`.

**O(1)**

---

## Approach C: Recursion

```js
var sum_to_n_c = function (n) {
  if (n <= 1) return n;
  return n + sum_to_n_c(n - 1);
};
```

### How it Works

Breaks the problem into smaller subproblems using:

```text
sum(n) = n + sum(n - 1)
```

For `n = 5`:

```text
sum(5)
= 5 + sum(4)

= 5 + 4 + sum(3)

= 5 + 4 + 3 + sum(2)

= 5 + 4 + 3 + 2 + sum(1)

= 5 + 4 + 3 + 2 + 1

= 15
```

### Call Stack Visualization

```text
sum(5)
 └─ sum(4)
     └─ sum(3)
         └─ sum(2)
             └─ sum(1)
```

As the recursive calls return:

```text
1
2 + 1 = 3
3 + 3 = 6
4 + 6 = 10
5 + 10 = 15
```

### Time Complexity

One recursive call is made for each value from `n` down to `1`.

**O(n)**

### Space Complexity

Each recursive call occupies a stack frame until all calls return.

**O(n)**

---

## Complexity Comparison

| Approach | Method               | Time Complexity | Space Complexity |
| -------- | -------------------- | --------------- | ---------------- |
| A        | Iterative Loop       | O(n)            | O(1)             |
| B        | Mathematical Formula | O(1)            | O(1)             |
| C        | Recursion            | O(n)            | O(n)             |
