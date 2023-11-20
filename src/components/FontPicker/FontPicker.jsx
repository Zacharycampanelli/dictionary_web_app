import { useContext } from 'react';
import { Dropdown } from 'flowbite-react';

import ThemeContext from '../../theme'; 
import IconArrowDown from '../../assets/images/svg/IconArrowDown';
import { capitalize } from '../../utils/capitalize';

/**
 * FontPicker component is a dropdown menu that allows users to choose different font styles.
 * It uses the ThemeContext to access and modify the selected font in the application's theme.
 */
const FontPicker = () => {
  // Accessing the ThemeContext to get the current theme and change the font
  const themeCtx = useContext(ThemeContext);

  // Function to handle font selection and update the theme
  const chooseFont = (font) => {
    themeCtx.changeFont(font);
  };

  // Function to display the currently chosen font with proper formatting
  const displayChosenFont = () => {
    let temp;
    // If the font is 'sans', display 'sans serif'; otherwise, capitalize and display the font
    if (themeCtx.font === 'sans') temp = 'sans serif';
    else temp = themeCtx.font;
    temp = capitalize(temp);

    return temp;
  };

  // Render the FontPicker component with a Dropdown menu and font options
  return (
    <>
      <Dropdown
        id="dropdownId"
        label="Font Picker"
        dismissOnClick={false}
        renderTrigger={() => (
          <button className="flex justify-between items-center font-bold text-sm md:text-[18px] dark:text-white">
            {displayChosenFont()}
            <IconArrowDown className="ml-4" />
          </button>
        )}
      >
        <Dropdown.Item
          className="focus:bg-transparent hover:bg-transparent hover:text-lightPurple"
          onClick={() => chooseFont('sans serif')}
        >
          Sans Serif
        </Dropdown.Item>
        <Dropdown.Item
          className="focus:bg-transparent hover:bg-transparent hover:text-lightPurple"
          onClick={() => chooseFont('serif')}
        >
          Serif
        </Dropdown.Item>
        <Dropdown.Item
          className="focus:bg-transparent hover:bg-transparent hover:text-lightPurple"
          onClick={() => chooseFont('mono')}
        >
          Mono
        </Dropdown.Item>
      </Dropdown>
    </>
  );
};

export default FontPicker;