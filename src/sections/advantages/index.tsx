import { advantages } from "../../assets/advantages";
import Section from "../../components/Section";
import Item from "./Item";
import { Subtitle } from "../../components/Subtitle/styled";
import { AdvantagesTitleWrapper, DataGrid } from "./styled";

const Advantages = () => (
  <Section title="Advantages of RSOM">
    <>
      <AdvantagesTitleWrapper>
        <Subtitle>
          Our data science platform helps mining companies source, centralize and analyze new and historic datasets
        </Subtitle>
      </AdvantagesTitleWrapper>
      <DataGrid>
        {advantages.map(item => (
          <Item
            key={item.id}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </DataGrid>
    </>
  </Section>
);

export default Advantages;