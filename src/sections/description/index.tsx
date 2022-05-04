import Section from "../../components/Section";
import Subsection from "../../components/Subsection";
import satellite from "../../assets/images/satellite.jpg";
import mine from "../../assets/images/mine.jpg";
import { SubsectionList, SubsectionParagraph } from "../../components/Subsection/styled";
import { Subtitle } from "../../components/Subtitle/styled";
import { DescriptionWrapper } from "./styled";

const Description = () => (
  <DescriptionWrapper>
    <Section title="What is RSOM?">
      <Subsection
        reversed
        image={satellite}
      >
        <SubsectionParagraph>
          <strong>Remote sensing for opencast mines (RSOM) </strong>app is designed to analyze the productivity of a mine, its impact on the environment, plan new extraction and track machine telematics. It is addressed to mine managements, state bodies and consulting companies that deal with the design and rehabilitation of the area.
        </SubsectionParagraph>
        What, among other things, can be tracked in the RSOM app?
        <SubsectionList>
          <li>
            terrain changes,
          </li>
          <li>
            identification of the mine site,
          </li>
          <li>
            which area is affected by the mine,
          </li>
          <li>
            identification of specified areas on satellite images (water area, vegetation areas, buildings,large vehicles, clouds).
          </li>
        </SubsectionList>
      </Subsection>
      <Subsection
        image={mine}
      >
        <Subtitle>
          Improving the management of mines and streamlining the process of opencast mining through the use of satellite images.
        </Subtitle>
        <SubsectionParagraph>
          RSOM is a satellite eye that looks at the mines and their surrounding areas. This innovative project can track the level and quality of water in the vicinity of the mine, the quality of the afforestation, the level of humidity, pollution and detect the potential danger created inside the quarry.
        </SubsectionParagraph>
      </Subsection>
    </Section>
  </DescriptionWrapper>
);

export default Description;