import { SectionTitle, SectionWrapper } from "./styled";

type props = {
  title: string,
  children: JSX.Element | JSX.Element[]
}

const Section = ({ title, children }: props) => (
  <SectionWrapper>
    <SectionTitle>
      {title}
    </SectionTitle>
    {children}
  </SectionWrapper>
);

export default Section;