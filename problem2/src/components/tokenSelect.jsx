import { getTokenImageUrl } from "../helper/tokenHelper";

export default function TokenSelect({ token, value, onChange, tokens }) {
  return (
    <>
      <img
        src={getTokenImageUrl(token?.currency)}
        alt={token?.currency}
        className="w-6 h-6 mt-2 rounded-full"
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/24x24?text=?";
        }}
      />
      <select value={value} onChange={onChange}>
        {tokens.map(({ currency }) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </>
  );
}
