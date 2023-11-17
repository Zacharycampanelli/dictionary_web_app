import { useContext, useEffect, useState } from 'react';
import { Button, TextInput } from 'flowbite-react';
import ThemeContext from '../../../theme';
import SvgIconSearch from '../../../assets/images/svg/IconSearch';

const SearchBar = ({emptySearch ,setEmptySearch}) => {
  const themeCtx = useContext(ThemeContext);
  const [typedWord, setTypedWord] = useState('')
  const [borderClass, setBorderClass] = useState('border-none')

 
useEffect(()=> {
    if(emptySearch === true)
    setBorderClass('border-solid border-brightRed border-1')
  else setBorderClass('border-none')
  },[emptySearch])

  const changeSearch = (e) => {
    if (typedWord === '') setEmptySearch(true)
    else {
      setEmptySearch(false)
      themeCtx.changeSearchedWord(typedWord)
}
  }

  
  return (
    <div className="relative mt-6">
      <div>
        <SvgIconSearch className="absolute top-4 right-4 md:top-5 md:right-5"/>
        <Button className="absolute right-0 inset-y-0" onClick={() => themeCtx.changeSearchedWord(typedWord)}></Button>
      </div>
      <input
        type="text"
        id="default-input"
        placeholder='Search for any word'
        onKeyDown={(e) => (e.key === 'Enter' ? changeSearch() : '')}
        onChange={(e) => setTypedWord(e.target.value)}
        className={`bg-lightestGray ${borderClass} text-blackGray font-bold text-base rounded-2xl block w-full p-3.5 placeholder:opacity-25 md:text-xl  md:pl-6 dark:bg-lighterBlack  dark:text-white `}
      />{' '}
      {emptySearch && <p className='mt-2 text-brightRed text-xl'>Whoops, can’t be empty…</p>}
    </div>
  );
};

export default SearchBar;
