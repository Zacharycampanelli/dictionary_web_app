import { useContext } from 'react';
import ThemeContext from '../../theme';

const DisplayWord = ({ phonetic }) => {
  const themeCtx = useContext(ThemeContext);

  if(themeCtx.searchedWord === '') return ''
  return (
    <div>
      <h1 className="mt-6 mb-1 text-[32px] text-blackGray font-bold md:text-[64px] dark:text-white md:mt-11 md:mb-0">
        {themeCtx.returnedWord}
      </h1>
      <p className="text-[18px] text-lightPurple md:text-[24px">{phonetic}</p>
    </div>
  );
};

export default DisplayWord;
