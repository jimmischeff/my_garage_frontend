import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const OilDropdown = (props) => {
    const {vehicles} = props
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} style={{width: "25%", margin: "25px"}}>
      <DropdownToggle caret>
        Oil Information
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem text>{vehicles.oilType}</DropdownItem>
        <DropdownItem text>{vehicles.filterType}</DropdownItem>
        <DropdownItem text>{vehicles.capacity}quarts</DropdownItem>
        <DropdownItem text>{vehicles.drainPlug}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    
  );
}

export default OilDropdown;