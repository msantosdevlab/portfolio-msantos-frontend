import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-lightSecondary dark:bg-darkSecondary cursor-pointer"
      aria-label={darkMode ? "Activate light mode" : "Activate dark mode"}
    >
      {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-600" />}
    </button>
  );
}
