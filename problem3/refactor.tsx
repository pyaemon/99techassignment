interface WalletBalance {
  currency: string;
  blockchain: string; // added missing blockchain
  amount: number;
}

interface FormattedWalletBalance extends WalletBalance {
  //Added explicit TypeScript interfaces (WalletBalance and FormattedWalletBalance) to improve type safety and code clarity.
  formatted: string;
}

interface Props extends BoxProps {}

const PRIORITY_MAP: Record<string, number> = {
  //  Replaced the switch statement with PRIORITY_MAP and getPriority helper to centralize blockchain priority management and improve maintainability.
  Osmosis: 100,
  Ethereum: 50,
  Arbitrum: 30,
  Zilliqa: 20,
  Neo: 20,
};

const getPriority = (blockchain: string): number => {
  return PRIORITY_MAP[blockchain] ?? -99;
};

const WalletPage: React.FC<Props> = ({ ...rest }) => {
  const balances = useWalletBalances();
  const prices = usePrices();

  const formattedBalances = useMemo<FormattedWalletBalance[]>(() => {
    return balances
      .filter((balance) => {
        const priority = getPriority(balance.blockchain);
        //Simplified the filtering logic to only include supported blockchains (priority > -99) with positive balances (amount > 0).
        return priority > -99 && balance.amount > 0;
      })
      .sort((a, b) => getPriority(b.blockchain) - getPriority(a.blockchain)) //Replaced the custom comparator with a simpler numeric comparison: to sort balances by priority in descending order.
      .map((balance) => ({
        ...balance,
        formatted: balance.amount.toFixed(2),
      })); //Combined filtering, sorting, and formatting into a single transformation pipeline, making the data flow easier
  }, [balances]); // Removed unnecessary dependencies from useMemo by keeping only [balances]

  const rows = formattedBalances.map((balance) => {
    // Added a fallback value when calculating USD amounts: (prices[balance.currency] ?? 0)
    // to prevent NaN when a price is unavailable.
    const usdValue = (prices[balance.currency] ?? 0) * balance.amount;

    return (
      <WalletRow
        key={`${balance.blockchain}-${balance.currency}`} //Used a stable and unique React key:
        amount={balance.amount}
        usdValue={usdValue}
        formattedAmount={balance.formatted}
      />
    );
  });

  return <div {...rest}>{rows}</div>;
};

export default WalletPage;
