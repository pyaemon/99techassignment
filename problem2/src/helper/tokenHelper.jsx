export const fetchUniqueToken = async () => {
  try {
    const response = await fetch("https://interview.switcheo.com/prices.json");
    if (!response.ok) throw new Error("Network response was not ok");

    const result = await response.json();

    const uniqueTokens = result.reduce((acc, current) => {
      const exists = acc.find((item) => item.currency === current.currency);
      if (!exists) acc.push(current);
      return acc;
    }, []);

    return { data: uniqueTokens, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

export const getTokenImageUrl = (currency) =>
  `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${currency}.svg`;

export const getSelectedToken = (tokens, currency) =>
  tokens.find((token) => token.currency === currency);
