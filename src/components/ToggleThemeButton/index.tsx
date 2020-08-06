import React, { useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

import { ThemeSwitcherContext } from "../../context/ThemeSwitcher";

const ToggleThemeButton = ({ ...props }) => {
  const { toggleTheme, theme } = useContext(ThemeSwitcherContext);

  return theme.title === "light" ? (
    <FiMoon onClick={toggleTheme} size={24} {...props} />
  ) : (
    <FiSun onClick={toggleTheme} size={24} {...props} />
  );
};

export default ToggleThemeButton;
