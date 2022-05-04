import { useState } from "react";
import { Arrow, Button, Dropdown, DropdownOption, SelectWrapper } from "./styled";
import { ReactComponent as ArrowDown } from "../../assets/graphics/arrow_down.svg";
import { ReactComponent as ArrowUp } from "../../assets/graphics/arrow_up.svg";
import { waterAreaOptions } from "../../assets/waterAreaOptions";

type buttonProps = {
  chosenMap: string,
  setChosenMap: any
}

const Select = ({ chosenMap, setChosenMap }: buttonProps) => {
  const [open, setOpen] = useState(false);

  const chosenOption = waterAreaOptions.filter(({ value }) => value === chosenMap);
  const chosenOptionLabel = chosenOption[0].label;
  const otherOptions = waterAreaOptions.filter(({ value }) => value !== chosenMap);

  const handleOptionClick = (value: string) => {
    setChosenMap(value);
    setOpen(false);
  };

  return (
    <SelectWrapper>
      <Button onClick={() => setOpen(!open)}>
        {chosenOptionLabel}
        <Arrow>
          {open === false ? <ArrowDown /> : <ArrowUp />}
        </Arrow>
      </Button>
      <Dropdown hidden={open === false}>
        {otherOptions.map(item => (
          <DropdownOption
            key={item.id}
            onClick={() => handleOptionClick(item.value)}
          >
            {item.label}
          </DropdownOption>
        ))}
      </Dropdown>
    </SelectWrapper>
  )
};

export default Select;