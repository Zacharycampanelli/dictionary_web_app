import { useEffect, useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';

import SvgIconPlay from '../../assets/images/svg/IconPlay';
/**
 * PlayButton component renders a button with a play icon for playing audio.
 * It adjusts the icon size based on the screen size and provides hover effects.
 * @param {Object} props - React props containing the audio file and the disabled state of the button.
 */
const PlayButton = ({ audio, disabledButton }) => {
  // State to manage the dimensions of the play icon
  const [iconDimensions, setIconDimensions] = useState('48px');

  // State to manage the opacity of the play icon
  const [opacity, setOpacity] = useState(0.25);

  // State to manage the color of the play icon's triangle
  const [triangleColor, setTriangleColor] = useState('#A445ED');

  // Media query hooks to determine the screen size
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');
  const isMediumDevice = useMediaQuery('only screen and (min-width : 769px) and (max-width : 1399px)');
  const isLargeDevice = useMediaQuery('only screen and (min-width : 1440px)');

  // useEffect to update the icon dimensions based on the screen size
  useEffect(() => {
    if (isSmallDevice) setIconDimensions('48px');
    if (isMediumDevice) setIconDimensions('75px');
  }, [isSmallDevice, isMediumDevice, isLargeDevice]);

  // Function to play the audio when the button is clicked
  const playAudio = () => {
    const audioToPlay = new Audio(audio);
    audioToPlay.play();
  };

  // Function to update the state for hover effects
  const hoverState = () => {
    setOpacity(1);
    setTriangleColor('#FFF');
  };

  // Function to reset the state when hover is removed
  const removeHoverState = () => {
    setOpacity(0.25);
    setTriangleColor('#A445ED');
  };

  // Render the PlayButton component with a button, play icon, and event handlers
  return (
    <button className="mt-8" disabled={disabledButton} onClick={playAudio} onMouseEnter={() => hoverState()} onMouseLeave={() => removeHoverState()}>
      <SvgIconPlay width={iconDimensions} height={iconDimensions} opacity={opacity} trianglecolor={triangleColor} />
    </button>
  );
};

export default PlayButton; 