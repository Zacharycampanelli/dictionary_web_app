import { useEffect, useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import SvgIconPlay from '../../assets/images/svg/IconPlay';

const PlayButton = ({ audio, disabledButton }) => {
  const [iconDimensions, setIconDimensions] = useState('48px');
  const [iconColor, setIconColor] = useState('#3A3A3A');
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');
  const isMediumDevice = useMediaQuery('only screen and (min-width : 769px) and (max-width : 1399px)');
  const isLargeDevice = useMediaQuery('only screen and (min-width : 1440px)');

  useEffect(() => {
    if (isSmallDevice) setIconDimensions('48px');
    if (isMediumDevice) setIconDimensions('75px');
  }, [isSmallDevice, isMediumDevice, isLargeDevice]);

  useEffect(() => {
    disabledButton ? setIconColor('#3A3A3A') : setIconColor('#A445ED');
  }, [disabledButton]);

  const playAudio = () => {
    const audioToPlay = new Audio(audio);
    audioToPlay.play();
  };

  return (
    <button className="mt-8" disabled={disabledButton} onClick={playAudio}>
      <SvgIconPlay width={iconDimensions} height={iconDimensions} color={iconColor} />
    </button>
  );
};

export default PlayButton;
