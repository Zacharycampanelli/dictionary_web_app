'use client';

import { useContext } from 'react';
import { Button, Dropdown } from 'flowbite-react';
import ThemeContext from '../../theme';
import IconArrowDown from '../../assets/images/svg/IconArrowDown';
import { capitalize } from '../../utils/capitalize';

const FontPicker = () => {
  const themeCtx = useContext(ThemeContext);

  const chooseFont = (font) => {
    themeCtx.changeFont(font)
  }
  return (
    <>
    
      <Dropdown
        id="dropdownId"
        label="Font Picker"
        dismissOnClick={false}
        renderTrigger={() => (
          <button className="flex justify-between items-center">
            {`${capitalize(themeCtx.font)}`}
            <IconArrowDown className="ml-4" />
          </button>
        )}
        // onChange={themeCtx.changeTheme('mono')}
      >
        <Dropdown.Item  onClick={() => chooseFont('sans serif')}>Sans Serif</Dropdown.Item>
        <Dropdown.Item onClick={() => chooseFont('serif')}>Serif</Dropdown.Item>
        <Dropdown.Item onClick={() => chooseFont('mono')}>Mono</Dropdown.Item>
      </Dropdown>
    </>
  );
};

export default FontPicker;
