import { getTokenImageUrl } from "../helper/tokenHelper";
const TokenList = ({ tokens }) => {
  return (
    <div className="w-full mx-auto px-2">
      <div
        className=" rounded-xl overflow-hidden border border-gray-800 mt-10 "
        style={{
          backgroundColor: "var(--bg)",
          borderColor: "var(--border)",
          color: "var(--text-h)",
        }}
      >
        <div
          className="overflow-y-auto token-scroll"
          style={{ maxHeight: "680px" }}
        >
          <table className="w-full">
            <thead className=" border-b border-gray-700">
              <tr className="text-gray-400 text-sm">
                <th className="px-6 py-4 text-left  font-bold">Tokens</th>
                <th className="px-6 py-4 text-right">Price (USD)</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((token) => (
                <tr
                  key={token.currency}
                  className="border-b border-gray-800 hover:bg-gray-800/50"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={getTokenImageUrl(token.currency)}
                        alt={token.currency}
                        className="w-8 h-8 rounded-full"
                        onError={(e) => (e.target.style.display = "none")}
                      />
                      <span className="font-medium">{token.currency}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right ">
                    ${Number(token.price || 0).toFixed(4)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default TokenList;
