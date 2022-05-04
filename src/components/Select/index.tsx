import { useState } from "react";
import { Arrow, Button, Dropdown } from "./styled";
import { ReactComponent as ArrowDown } from "../../assets/graphics/arrow_down.svg";
import { ReactComponent as ArrowUp } from "../../assets/graphics/arrow_up.svg";

type buttonProps = {
  text: string
}

const Select = ({ text }: buttonProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Dropdown hidden={open === false} onClick={() => setOpen(false)}>
        lorem ipsum
      </Dropdown>
      <Button onClick={() => setOpen(!open)}>
        {text}
        <Arrow>
          {open === false ? <ArrowDown /> : <ArrowUp />}
        </Arrow>
      </Button>
    </>
  )
};

export default Select;