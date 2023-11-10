import { TextInput } from "flowbite-react"
import SvgIconSearch from '../../assets/images/svg/IconSearch'
const customInputTheme = {
    addon: 'rounded-2xl'
    
}


const SearchBar = () => {
  return (
    <div className="mt-6">
      <TextInput theme={customInputTheme} className="rounded-2xl bg-blue" rightIcon={SvgIconSearch}/>
    </div>
  )
}

export default SearchBar
