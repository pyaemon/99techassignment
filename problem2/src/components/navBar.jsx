import { Moon, Sun } from "lucide-react";

export default function Navbar({ darkMode, toggleTheme }) {
  return (
    <nav
      className="flex items-center justify-between px-6 py-4 border-b relative overflow-hidden navbar"
      style={{
        backgroundColor: "var(--bg)",
        borderColor: "var(--border)",
        color: "var(--text-h)",
      }}
    >
      <img src="/crypto.gif" alt="" className="navbar-gif" />

      <h2 className="font-bold navbar-title ">Crypto Swap</h2>

      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-4 py-2 rounded-lg transition theme-toggle"
        style={{
          backgroundColor: "var(--bg)",
          borderColor: "var(--border)",
          color: "var(--text-h)",
        }}
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>
    </nav>
  );
}
