import { ReactNode } from "react";
import { HeroLogo, HeroTitle, HeroWrapper } from "./styled";

type heroProps = {
  icon: ReactNode,
  text: string
}

const Hero = ({ icon, text }: heroProps) => (
  <HeroWrapper>
    <HeroLogo>
      {icon}
    </HeroLogo>
    <HeroTitle>
      {text}
    </HeroTitle>
  </HeroWrapper>
);

export default Hero;