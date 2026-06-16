const SwapSuccess = ({
  fromAmount,
  fromToken,
  toAmount,
  toToken,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 "
      style={{
        backgroundColor: "var(--bg)",
        borderColor: "var(--border)",
        color: "var(--text-h)",
      }}
    >
      <div className="w-full max-w-md  rounded-2xl border border-green-500 p-4">
        <div className="text-center">
          <div className="text-center">
            <div className="text-5xl mb-3">✅</div>

            <h2 className="text-2xl font-bold text-white">Swap Successful</h2>

            <p className="text-gray-400 mt-2">Your swap has been completed.</p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-lg font-semibold">
              {fromAmount} {fromToken}
            </p>

            <p className="text-green-400 text-2xl my-2">↓</p>

            <p className="text-lg font-semibold">
              {toAmount} {toToken}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-full mt-6 bg-purple-600 hover:bg-purple-700 py-3 rounded-xl font-semibold text-white transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};
export default SwapSuccess;
