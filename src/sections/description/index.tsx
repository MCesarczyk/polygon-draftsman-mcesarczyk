import Section from "../../components/Section";
import Subsection from "../../components/Subsection";
import satellite from "../../assets/images/satellite.jpg";
import mine from "../../assets/images/mine.jpg";

const Description = () => (
  <Section title="What is RSOM?">
  <Subsection
    reversed
    image={satellite}
  >
    lorem ipsum
  </Subsection>
  <Subsection
    image={mine}
  >
    lorem ipsum
  </Subsection>
</Section>
);

export default Description;