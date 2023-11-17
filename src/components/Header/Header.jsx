// import { ToggleSwitch } from 'flowbite-react'
import { useEffect, useState } from 'react';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import Logo from '../../assets/images/svg/Logo';
import FontPicker from '../FontPicker/FontPicker';
import { useMediaQuery } from '@uidotdev/usehooks';
const Header = () => {
  const[logoDimensions, setLogoDimensions] = useState({width: 34, height: 38})
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  useEffect(() => {
    isSmallDevice ? setLogoDimensions({width: 34, height: 38}) : setLogoDimensions({width: 38, height: 42})
  }, [isSmallDevice])
  return (
    <div className="flex justify-between w-full m-0 md:pt-2 mb-12">
      <div className="logo_container">
        <Logo width={logoDimensions.width} height={logoDimensions.height}/>
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
