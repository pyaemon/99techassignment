import { useEffect } from "react";
import { getSelectedToken, getTokenImageUrl } from "../helper/tokenHelper";
import SwapDetail from "./swapDetailCard";

const SwapToken = ({
  tokens,
  fromToken,
  toToken,
  setFromToken,
  setToToken,
  fromAmount,
  toAmount,
  setToAmount,
  setFromAmount,
  showSuccess,
  setShowSuccess,
}) => {
  const selectedFromToken = getSelectedToken(tokens, fromToken);
  const selectedToToken = getSelectedToken(tokens, toToken);
  const fromPrice = selectedFromToken?.price ?? 0;
  const toPrice = selectedToToken?.price ?? 0;

  const rate =
    fromPrice > 0 && toPrice > 0 ? (fromPrice / toPrice).toFixed(6) : 0;

  useEffect(() => {
    const amount = parseFloat(fromAmount);
    if (!isNaN(amount) && rate > 0) {
      setToAmount((amount * rate).toFixed(6));
    } else {
      setToAmount("");
    }
  }, [fromAmount, rate]);

  const handleFromAmountChange = (e) => {
    setFromAmount(e.target.value);
  };

  const handleSwap = () => {
    setShowSuccess(!showSuccess);
  };
  const handleSwapTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);

    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };
  const isSwapDisabled =
    !fromAmount || Number(fromAmount) <= 0 || fromToken === toToken;

  return (
    <>
      <div className="w-full px-2">
        <div
          className=" mx-auto mt-10 rounded-2xl border border-purple-500 p-6"
          style={{
            backgroundColor: "var(--bg)",
            color: "var(--text-h)",
          }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Swap Tokens</h2>

          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <label className="text-gray-400">From</label>
            </div>
            <div className="flex gap-2">
              <input
                type="number"
                value={fromAmount}
                onChange={handleFromAmountChange}
                placeholder="0.00"
                className="token-input flex-1 px-4 py-2 rounded-lg"
              />
              <img
                src={getTokenImageUrl(selectedFromToken?.currency)}
                alt={selectedFromToken?.currency}
                className="w-6 h-6 mt-2 rounded-full"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/24x24?text=?";
                }}
              />
              <select
                value={fromToken}
                onChange={(e) => setFromToken(e.target.value)}
              >
                {tokens.map((token) => (
                  <option key={token.currency} value={token.currency}>
                    {token.currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            onClick={handleSwapTokens}
            className="mx-auto flex items-center justify-center w-10 h-10 rounded-full text-white bg-purple-600 hover:bg-purple-700 transition"
          >
            ⇅
          </button>

          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <label className="text-gray-400">To</label>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={toAmount}
                readOnly
                placeholder="0.00"
                className="flex-1 px-4 py-2 token-input rounded-lg"
              />
              <img
                src={getTokenImageUrl(selectedToToken?.currency)}
                alt={selectedToToken?.currency}
                className="w-6 h-6 mt-2 rounded-full"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/24x24?text=?";
                }}
              />
              <select
                value={toToken}
                onChange={(e) => setToToken(e.target.value)}
              >
                {tokens.map((token) => (
                  <option key={token.currency} value={token.currency}>
                    {token.currency}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4 p-3 token-input rounded-lg">
            <p className="text-sm">
              Rate: 1 {fromToken} = {rate} {toToken}
            </p>
          </div>
          <SwapDetail
            fromToken={fromToken}
            toToken={toToken}
            rate={rate}
            toAmount={toAmount}
          />

          <button
            onClick={handleSwap}
            disabled={isSwapDisabled}
            className={`
              w-full py-3 rounded-xl text-white transition mt-4
              ${
                isSwapDisabled
                  ? "token-input cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700  "
              }
            `}
          >
            Swap Now
          </button>
        </div>
      </div>
    </>
  );
};
export default SwapToken;
