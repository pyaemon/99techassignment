const API_URL = import.meta.env.VITE_TOKEN_API_URL;
const IMAGE_BASE_URL = import.meta.env.VITE_TOKEN_IMAGE_URL;
export const fetchUniqueToken = async () => {
  try {
    const response = await fetch(API_URL);
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
  `${IMAGE_BASE_URL}/${currency}.svg`;

export const getSelectedToken = (tokens, currency) =>
  tokens.find((token) => token.currency === currency);
