import { Arrow, Button } from "./styled";
import { ReactComponent as ArrowDown } from "../../assets/graphics/arrow_down.svg";
// import { ReactComponent as ArrowUp } from "../../assets/graphics/arrow_up.svg";

type buttonProps = {
  text: string
}

const Select = ({ text }: buttonProps) => {
  return (
    <Button>
      {text}
      <Arrow>
        <ArrowDown />
      </Arrow>
    </Button>
  )
};

export default Select;