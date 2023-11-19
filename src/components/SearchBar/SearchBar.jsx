import { useContext, useEffect, useState } from 'react';
import { Button } from 'flowbite-react';

import ThemeContext from '../../theme'; 
import SvgIconSearch from '../../assets/images/svg/IconSearch';

/**
 * SearchBar component provides a search input field with a search icon and error message for empty searches.
 * It utilizes the ThemeContext to access and modify theme-related information.
 * @param {Object} props - React props containing the state of empty searches and a function to set the empty search state.
 */
const SearchBar = ({ emptySearch, setEmptySearch }) => {
  // Accessing the ThemeContext to get the current theme and theme-related functions
  const themeCtx = useContext(ThemeContext);

  // State to manage the typed word in the search bar
  const [typedWord, setTypedWord] = useState('');

  // State to manage the border style based on the emptySearch state
  const [borderClass, setBorderClass] = useState('border-none');

  // useEffect to update the border style based on the emptySearch state
  useEffect(() => {
    if (emptySearch === true) setBorderClass('border-solid border-brightRed border-1');
    else setBorderClass('border-none');
  }, [emptySearch]);

  // Function to handle the search, checking for an empty search and updating the theme's searched word
  const changeSearch = () => {
    if (typedWord === '') setEmptySearch(true);
    else {
      setEmptySearch(false);
      themeCtx.changeSearchedWord(typedWord);
    }
  };

  // Render the SearchBar component with input field, search icon, and error message for empty searches
  return (
    <div className="relative mt-6">
      <div>
        <SvgIconSearch className="absolute top-4 right-4 md:top-5 md:right-5" /> {/* Search icon */}
        <Button className="absolute right-0 inset-y-0" onClick={() => themeCtx.changeSearchedWord(typedWord)}></Button>
      </div>
      <input
        type="text"
        id="default-input"
        placeholder="Search for any word"
        onKeyDown={(e) => (e.key === 'Enter' ? changeSearch() : '')}
        onChange={(e) => setTypedWord(e.target.value)}
        className={`bg-lightestGray ${borderClass} text-blackGray font-bold text-base rounded-2xl block w-full p-3.5 placeholder:opacity-25 md:text-xl focus:ring-lightPurple focus:caret-lightPurple  md:pl-6 cursor-pointer dark:bg-lighterBlack  dark:text-white `}
      />
      {emptySearch && <p className="mt-2 text-brightRed text-xl">Whoops, can’t be empty…</p>}
    </div>
  );
};

export default SearchBar;