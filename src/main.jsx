import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Apply initial theme
const applyInitialTheme = () => {
  const isDark = localStorage.theme === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  if (isDark) {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-mode', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.removeAttribute('data-mode');
  }
};

// Apply theme before rendering
applyInitialTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
