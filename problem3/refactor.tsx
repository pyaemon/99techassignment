import React, { useMemo } from "react";

interface WalletBalance {
  currency: string;
  blockchain: string;
  amount: number;
}

interface FormattedWalletBalance extends WalletBalance {
  formatted: string;
}

interface Props extends BoxProps {}

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

const WalletPage: React.FC<Props> = ({ ...rest }) => {
  const balances = useWalletBalances();
  const prices = usePrices();

  const formattedBalances = useMemo<FormattedWalletBalance[]>(() => {
    return balances
      .filter((balance) => {
        const priority = getPriority(balance.blockchain);

        return priority > -99 && balance.amount > 0;
      })
      .sort((a, b) => getPriority(b.blockchain) - getPriority(a.blockchain))
      .map((balance) => ({
        ...balance,
        formatted: balance.amount.toFixed(2),
      }));
  }, [balances]);

  const rows = formattedBalances.map((balance) => {
    const usdValue = (prices[balance.currency] ?? 0) * balance.amount;

    return (
      <WalletRow
        key={`${balance.blockchain}-${balance.currency}`}
        amount={balance.amount}
        usdValue={usdValue}
        formattedAmount={balance.formatted}
      />
    );
  });

  return <div {...rest}>{rows}</div>;
};

export default WalletPage;
