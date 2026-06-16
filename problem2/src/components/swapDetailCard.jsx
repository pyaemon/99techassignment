const SwapDetail = ({
  fromToken = "",
  toToken = "",
  rate = 0,
  toAmount = "",
}) => {
  return (
    <div
      className="mt-4  rounded-xl p-4"
      style={{
        backgroundColor: "var(--bg)",
        borderColor: "var(--border)",
        color: "var(--text-h)",
      }}
    >
      <h3 className="text-sm font-semibold text-gray-400 mb-3">Swap Details</h3>

      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-400">Rate</span>
        <span>
          1 {fromToken || "-"} = {Number(rate || 0).toFixed(6)} {toToken || "-"}
        </span>
      </div>

      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-400">Fee</span>
        <span>0.5%</span>
      </div>

      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-400">Network Fee</span>
        <span>0.01 {toToken}</span>
      </div>

      <div className="border-t border-gray-700 my-2"></div>

      <div className="flex justify-between font-semibold">
        <span>You Receive</span>
        <span className="text-green-600">
          {toAmount || "0.00"} {toToken}
        </span>
      </div>
    </div>
  );
};
export default SwapDetail;
