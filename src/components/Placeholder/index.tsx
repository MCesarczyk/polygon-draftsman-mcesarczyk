import { PlaceholderWrapper } from "./styled";

type props = { text: string }

const Placeholder = ({ text }: props) => (
  <PlaceholderWrapper>
    <h2>{text}</h2>
  </PlaceholderWrapper>
);

export default Placeholder;