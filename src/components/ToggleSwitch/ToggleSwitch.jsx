import { useContext } from "react";

import ThemeContext from "../../theme";
import SvgIconMoon from "../../assets/images/svg/IconMoon";

/**
 * ToggleSwitch component is a switch that toggles between light and dark themes.
 * It utilizes the ThemeContext to access and modify the current theme.
 */
const ToggleSwitch = () => {
  // Accessing the ThemeContext to get the current theme and theme-related functions
  const themeCtx = useContext(ThemeContext);

  // Render the toggle switch with a checkbox input, a styled slider, and a moon icon
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        defaultChecked={themeCtx.theme === "dark" ? true : false}
        className="sr-only peer"
      />
      <div
        onClick={themeCtx.changeTheme}
        className="hover:bg-lightPurpl peer h-6 w-11 rounded-full bg-mediumGray after:absolute after:left-[2px] after:top-[6px] after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:bg-lightPurple peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700 lg:after:top-[8px]"
      ></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        <SvgIconMoon
          color={themeCtx.theme === "light" ? "#757575" : "#A445ED"}
        />
      </span>
    </label>
  );
};

export default ToggleSwitch;
