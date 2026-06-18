## Refactor Improvement

## 1. Centralized Blockchain Priority Handling

### Original Issue

Blockchain priorities were defined inside a `switch` statement. Adding or updating supported blockchains required modifying the function logic, and unsupported blockchains were not handled in a centralized way.

### Refactor

```ts
const PRIORITY_MAP: Record<string, number> = {
  Osmosis: 100,
  Ethereum: 50,
  Arbitrum: 30,
  Zilliqa: 20,
  Neo: 20,
};

const getPriority = (blockchain: string): number => {
  return PRIORITY_MAP[blockchain] ?? -99;
};
```

### Why

- Centralizes all blockchain priorities in one place.
- Makes it easier to add or update supported blockchains.
- Provides a consistent fallback value for unsupported blockchains.
- Improves readability and maintainability.

---

## 2. Simplified Filtering Logic

### Original Issue

The filtering logic was unnecessarily complex and difficult to follow.

### Refactor

```ts
.filter((balance) => {
  const priority = getPriority(balance.blockchain);

  return priority > -99 && balance.amount > 0;
})
```

### Why

- Makes the filtering criteria explicit.
- Removes unsupported blockchains.
- Excludes zero or negative balances.
- Improves code readability.

---

## 3. Fixed `useMemo` Dependencies

### Original Issue

The original memoized computation included dependencies that were not used in the calculation.

### Refactor

```ts
useMemo(() => {
  ...
}, [balances]);
```

### Why

- Prevents unnecessary recalculations.
- Improves rendering performance.
- Ensures dependencies accurately reflect the computation.

---

## 4. Consolidated Data Transformation

### Original Issue

The original code performed filtering, sorting, and formatting in separate steps.

### Refactor

```ts
balances
  .filter(...)
  .sort(...)
  .map(...)
```

### Why

- Creates a clear data transformation pipeline.
- Reduces intermediate variables.
- Makes the logic easier to understand and maintain.

---

## 5. Improved Type Safety

### Original Issue

The original code used `any` for blockchain values.

### Refactor

```ts
const getPriority = (blockchain: string): number
```

### Why

- Leverages TypeScript's type checking.
- Reduces the risk of runtime errors.
- Improves maintainability.

---

## 6. Removed Unused Variables

### Original Issue

Unused variables such as `children` were destructured but never used.

### Refactor

```ts
const WalletPage: React.FC<Props> = ({ ...rest }) => {
```

### Why

- Eliminates dead code.
- Reduces unnecessary complexity.
- Keeps the component focused on required data.

---
