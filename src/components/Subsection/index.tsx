import { SubsectionImage, SubsectionWrapper } from "./styled";

type subsectionProps = {
  reversed?: boolean,
  image: string,
  children: any
}

const Subsection = ({ reversed, image, children }: subsectionProps) => (
  <SubsectionWrapper reversed={reversed}>
    <SubsectionImage reversed={reversed} src={image} />
    {children}
  </SubsectionWrapper>
);

export default Subsection;