import { useContext } from 'react';
import ThemeContext from '../../theme';

const DisplayWord = ({ phonetic }) => {
  const themeCtx = useContext(ThemeContext);
  return (
    <div>
      <h1 className="mt-6 mb-1 text-[32px] text-blackGray font-bold dark:text-white md:mt-11">
        {themeCtx.searchedWord}
      </h1>
      <p className="text-[18px] text-lightPurple">{phonetic}</p>
    </div>
  );
};

export default DisplayWord;
