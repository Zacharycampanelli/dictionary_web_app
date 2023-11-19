import { useEffect, useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks'; // Importing custom hook for media queries

import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'; // Importing ToggleSwitch component
import FontPicker from '../FontPicker/FontPicker'; // Importing FontPicker component
import Logo from '../../assets/images/svg/Logo'; // Importing Logo SVG component


/**
 * Header component displays a header section with a logo, font picker, and a toggle switch.
 * The logo's dimensions change based on the screen size.
 */
const Header = () => {
  // State to manage logo dimensions
  const [logoDimensions, setLogoDimensions] = useState({ width: 34, height: 38 });

  // Check if the device screen is small using the custom media query hook
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');

  // useEffect to update logo dimensions based on screen size changes
  useEffect(() => {
    // If the device screen is small, set smaller logo dimensions, else set larger dimensions
    isSmallDevice ? setLogoDimensions({ width: 34, height: 38 }) : setLogoDimensions({ width: 38, height: 42 });
  }, [isSmallDevice]);

  // Render the header component with logo, font picker, and toggle switch
  return (
    <div className="flex justify-between w-full m-0 md:pt-2 mb-12">
      <div className="logo_container">
        <Logo width={logoDimensions.width} height={logoDimensions.height} />
      </div>
      <div className="options_container flex justify-around w-2/3 md:w-1/3">
        <hr className="w-px h-8 bg-lightGray" /> 
        <ToggleSwitch /> 
      </div>
    </div>
  );
};

export default Header;