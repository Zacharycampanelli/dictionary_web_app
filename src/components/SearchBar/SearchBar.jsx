import { useContext, useState } from 'react';
import { Button, TextInput } from 'flowbite-react';
import ThemeContext from '../../theme';
import SvgIconSearch from '../../assets/images/svg/IconSearch';

const SearchBar = () => {
  const themeCtx = useContext(ThemeContext);
  const [typedWord, setTypedWord] = useState('');
  return (
    <div className="relative mt-6">
      <div>
        <SvgIconSearch className="absolute top-4 right-4"/>
        <Button className="absolute right-0 inset-y-0" onClick={() => themeCtx.changeSearchedWord(typedWord)}></Button>
      </div>
      <input
        type="text"
        id="default-input"
        onKeyDown={(e) => (e.key === 'Enter' ? themeCtx.changeSearchedWord(typedWord) : '')}
        onChange={(e) => setTypedWord(e.target.value)}
        className="bg-lightestGray border-none text-blackGray text-base rounded-2xl block w-full p-3.5 dark:bg-lighterBlack  dark:text-white"
      />{' '}
    </div>
  );
};

export default SearchBar;
