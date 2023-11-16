// import { ToggleSwitch } from 'flowbite-react'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import Logo from '../../assets/images/svg/Logo';
import FontPicker from '../FontPicker/FontPicker';
// import { useContext } from 'react';
// import ThemeContext from '../../theme';
const Header = () => {
  // const themeCtx = useContext(ThemeContext);

  return (
    <div className="flex justify-between w-full m-0 md:pt-8 mb-12">
      <div className="logo_container">
        <Logo />
      </div>
      <div className="options_container flex justify-around w-2/3 md:w-1/3">
        <FontPicker />
        <hr className="w-px h-8 bg-lightGray" />

        <ToggleSwitch />
      </div>
    </div>
  );
};

export default Header;
