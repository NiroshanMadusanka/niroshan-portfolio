import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

const ThemeSelectorPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setThemeDirectly } = useTheme();

  useEffect(() => {
    // Show popup on every reload until user makes a selection
    const hasSelectedTheme = localStorage.getItem("hasSelectedTheme");
    if (hasSelectedTheme !== "true") {
      setIsOpen(true);
    }
  }, []);

  const handleThemeSelection = (selectedTheme) => {
    setThemeDirectly(selectedTheme);
    localStorage.setItem("hasSelectedTheme", "true");
    setIsOpen(false);
  };

  const handleClose = () => {
    localStorage.setItem("hasSelectedTheme", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glassmorphism-light max-w-md w-full p-8 rounded-2xl text-center"
      >
        <h2 className="text-2xl font-bold text-theme-primary mb-4">
          Choose Your Theme
        </h2>

        <p className="text-theme-secondary mb-6">
          Select your preferred theme to get started
        </p>

        <div className="flex justify-center space-x-6 mb-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleThemeSelection("light")}
            className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-theme-secondary-50 hover:bg-theme-secondary-100 transition-colors"
          >
            <span className="text-4xl">☀️</span>
            <span className="text-sm font-medium text-theme-primary">
              Light
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleThemeSelection("dark")}
            className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-theme-secondary-50 hover:bg-theme-secondary-100 transition-colors"
          >
            <span className="text-4xl">🌙</span>
            <span className="text-sm font-medium text-theme-primary">Dark</span>
          </motion.button>
        </div>

        <div className="text-xs text-theme-gray mb-4">
          You can change the theme anytime using the theme toggle button in the
          navigation bar
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClose}
          className="text-sm text-theme-gray hover:text-theme-secondary transition-colors"
        >
          Skip for now
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ThemeSelectorPopup;
