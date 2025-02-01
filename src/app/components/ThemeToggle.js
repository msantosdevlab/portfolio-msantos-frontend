import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
      aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
    >
      {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-600" />}
    </button>
  );
}
