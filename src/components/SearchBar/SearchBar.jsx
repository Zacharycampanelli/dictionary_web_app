import { Button, TextInput } from "flowbite-react"
import SvgIconSearch from '../../assets/images/svg/IconSearch'
import { useContext, useState } from "react"
import ThemeContext from "../../theme"
// const customInputTheme = {
//     addon: 'rounded-2xl'
    
// }


const SearchBar = () => {
    const themeCtx = useContext(ThemeContext);
    const [typedWord, setTypedWord] = useState('')
  return (
    <div className="relative mt-6">
      <TextInput className="rounded-2xl bg-blue" rightIcon={SvgIconSearch} onKeyDown={(e => e.key === 'Enter' ?  themeCtx.changeSearchedWord(typedWord) : '')} onChange={e => setTypedWord(e.target.value)} />
      <Button className="absolute right-0 top-0" onClick={(() => themeCtx.changeSearchedWord(typedWord))} ></Button>
    </div>
  )
}

export default SearchBar
