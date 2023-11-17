import SvgIconMoon from "../../assets/images/svg/IconMoon"
import ThemeContext from '../../theme';
import { useContext } from "react";

const ToggleSwitch = () => {
    const themeCtx = useContext(ThemeContext);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" className="sr-only peer" />
    <div  onClick={themeCtx.changeTheme} className="w-11 h-6 bg-mediumGray peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[8px] after:left-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-lightPurple hover:bg-lightPurple"></div>
    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"><SvgIconMoon color={themeCtx.theme === 'light' ? '#757575' : '#A445ED' }/></span>
  </label>
  
  )
}

export default ToggleSwitch
