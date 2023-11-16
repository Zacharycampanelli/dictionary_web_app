'use client';

import { useContext, useState } from 'react';
import { Button, Dropdown, theme } from 'flowbite-react';
import ThemeContext from '../../theme';
import IconArrowDown from '../../assets/images/svg/IconArrowDown';
import { capitalize } from '../../utils/capitalize';

const FontPicker = () => {
  const themeCtx = useContext(ThemeContext);
  const chooseFont = (font) => {
    themeCtx.changeFont(font);
  };

  const displayChosenFont = () => {
    let temp;
    if (themeCtx.font === 'sans') temp = 'sans serif';
    else temp = themeCtx.font;
    temp = capitalize(temp);

    return temp;
  };

  return (
    <>
      <Dropdown
        id="dropdownId"
        label="Font Picker"
        dismissOnClick={false}
        renderTrigger={() => (
          <button className="flex justify-between items-center text-sm font-bold dark:text-white md:text-[18px]">
            {displayChosenFont()}
            <IconArrowDown className="ml-4" />
          </button>
        )}
      >
        <Dropdown.Item onClick={() => chooseFont('sans serif')}>Sans Serif</Dropdown.Item>
        <Dropdown.Item onClick={() => chooseFont('serif')}>Serif</Dropdown.Item>
        <Dropdown.Item onClick={() => chooseFont('mono')}>Mono</Dropdown.Item>
      </Dropdown>
    </>
  );
};

export default FontPicker;
