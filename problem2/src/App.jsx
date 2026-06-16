import { useEffect, useState } from "react";
import "./App.css";
import SwapToken from "./components/swapToken";
import TokenList from "./components/tokenList";
import { fetchUniqueToken } from "./helper/tokenHelper";
import SwapSuccess from "./components/swapSuccess";
import Navbar from "./components/navBar";
import useTheme from "./hook/useTheme";

function App() {
  const { darkMode, toggleTheme } = useTheme();
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fromToken, setFromToken] = useState("");
  const [toToken, setToToken] = useState("");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const loadTokens = async () => {
      setLoading(true);
      try {
        const result = await fetchUniqueToken();

        if (result?.data && Array.isArray(result.data)) {
          const validToken = result.data?.filter((token) => token.price > 0);
          setTokens(validToken);

          if (result.data.length >= 2) {
            setFromToken(result.data[0].currency);
            setToToken(result.data[1].currency);
          }
        }
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    if (!showSuccess) {
      loadTokens();
    }
  }, [showSuccess]);
  const handleCloseModal = () => {
    setShowSuccess(false);
    setFromToken("");
    setFromAmount("");
    setToToken("");
    setToAmount("");
    setTokens([]);
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      {showSuccess ? (
        <SwapSuccess
          fromAmount={fromAmount}
          fromToken={fromToken}
          toAmount={toAmount}
          toToken={toToken}
          isOpen={showSuccess}
          onClose={handleCloseModal}
        />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SwapToken
            tokens={tokens}
            fromToken={fromToken}
            toToken={toToken}
            setFromToken={setFromToken}
            setToToken={setToToken}
            fromAmount={fromAmount}
            toAmount={toAmount}
            setToAmount={setToAmount}
            setFromAmount={setFromAmount}
            showSuccess={showSuccess}
            setShowSuccess={setShowSuccess}
          />
          <TokenList tokens={tokens} />
        </div>
      )}
    </div>
  );
}

export default App;
