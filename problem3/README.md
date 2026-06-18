1. WalletBalance is missing blockchain,but it is used
2. getPriority(blockchain: any) should be strongly typed
3. lhsPriority is undefined in filter
4. Filter logic is reversed (amount<=0 should be excluded)
5. Prices is unnecessarily included in sortedBalances dependencies
6. formattedBalances is computed but never used correctly
7. sortedBalances.map((balance: FormattedWalletBalance...)) is incorrect because sortedBalances does not contain formatted
8. Using index as React key is not recommended
9. Missing return value in sort when priorities are equal.
10. Unused children
