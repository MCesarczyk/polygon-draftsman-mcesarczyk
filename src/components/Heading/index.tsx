import AppBar from "./Appbar";
import { ReactComponent as HeroIcon } from "../../assets/graphics/rsom_logo_big.svg";
import { StyledHeading } from "./styled";
import Hero from "./Hero";

const Heading = () => (
  <StyledHeading>
    <AppBar />
    <Hero
      icon={<HeroIcon />}
      text="Helping mining professionals make smarter decisions with data, satellite imaging and analytics"
    />
  </StyledHeading>
);

export default Heading;