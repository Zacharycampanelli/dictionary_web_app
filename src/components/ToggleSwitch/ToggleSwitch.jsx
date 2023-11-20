import { useContext } from 'react';

import ThemeContext from '../../theme'; 
import SvgIconMoon from '../../assets/images/svg/IconMoon'; 

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
      <input type="checkbox" defaultChecked={themeCtx.theme === 'dark' ? true : false} className="sr-only peer" />
      <div
        onClick={themeCtx.changeTheme}
        className="w-11 h-6 bg-mediumGray rounded-full peer peer-focus:outline-none peer-checked:bg-lightPurple peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[6px] after:left-[2px] after:h-5 after:w-5 after:bg-white after:border after:rounded-full after:transition-all hover:bg-lightPurpl lg:after:top-[8px] dark:bg-gray-700 dark:border-gray-600"
      ></div>
      <span className="ml-3 font-medium text-sm text-gray-900 dark:text-gray-300">
        <SvgIconMoon color={themeCtx.theme === 'light' ? '#757575' : '#A445ED'} />
      </span>
    </label>
  );
};

export default ToggleSwitch; 
