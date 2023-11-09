
'use client';

import { Button, Dropdown } from 'flowbite-react';

const FontPicker = () => {
  return (<>
    <Dropdown id="dropdownId" label="Font Picker"  dismissOnClick={false}  renderTrigger={() => <button className='bg-red-400'>My custom trigger</button>}>

      <Dropdown.Item>Sans Serif</Dropdown.Item>
      <Dropdown.Item>Serif</Dropdown.Item>
      <Dropdown.Item>Mono</Dropdown.Item>
    </Dropdown>
  </>
  );
}

export default FontPicker