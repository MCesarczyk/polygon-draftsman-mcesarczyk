import { ReactNode } from "react";
import { Subtitle } from "../../../components/Subtitle/styled";
import { IconWrapper, ItemText, ItemWrapper } from "./styled";

type itemProps = {
  icon: ReactNode,
  title: string,
  text: string
}

const Item = ({ icon, title, text }: itemProps) => (
  <ItemWrapper>
    <IconWrapper>
      {icon}
    </IconWrapper>
    <Subtitle>
      {title}
    </Subtitle>
    <ItemText>
      {text}
    </ItemText>
  </ItemWrapper>
);

export default Item;