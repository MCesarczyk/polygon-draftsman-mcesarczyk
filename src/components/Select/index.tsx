import { useState } from "react";
import { Arrow, Dropdown, DropdownOption, SelectWrapper } from "./styled";
import { ReactComponent as ArrowDown } from "../../assets/graphics/arrow_down.svg";
import { ReactComponent as ArrowUp } from "../../assets/graphics/arrow_up.svg";
import { Button } from "../Button/styled";

type selectProps = {
  chosenOption: string,
  setChosenOption: any,
  availableOptions:   {
    id: number,
    value: string,
    label: string
  }[],
}

const Select = ({ chosenOption, setChosenOption, availableOptions }: selectProps) => {
  const [open, setOpen] = useState(false);

  const selectedOption = availableOptions.filter(({ value }) => value === chosenOption);
  const selectedOptionLabel = selectedOption[0].label;
  const otherOptions = availableOptions.filter(({ value }) => value !== chosenOption);

  const handleOptionClick = (value: string) => {
    setChosenOption(value);
    setOpen(false);
  };

  return (
    <SelectWrapper>
      <Button onClick={() => setOpen(!open)}>
        {selectedOptionLabel}
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