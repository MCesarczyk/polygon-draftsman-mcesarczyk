import { useEffect, useState } from "react";
import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import { getAreasPrimary } from "../../utils/getAreasPrimary";
import { getAreasSecondary } from "../../utils/getAreasSecondary";
import Section from "../../components/Section";
import Select from "../../components/Select";
import { ButtonSection, WaterAreaWrapper } from "./styled";

type waterAreaTypes = {
  loginState: string,
  token: string
}

const WaterArea = ({ loginState, token }: waterAreaTypes) => {
  const [primary, setPrimary] = useState([]);
  const [primaryCenter, setPrimaryCenter]: [any, React.Dispatch<React.SetStateAction<number[]>>] = useState([0, 0]);
  const [primaryState, setPrimaryState] = useState("idle");

  const [secondary, setSecondary] = useState([]);
  const [secondaryCenter, setSecondaryCenter]: [any, React.Dispatch<React.SetStateAction<number[]>>] = useState([0, 0]);
  const [secondaryState, setSecondaryState] = useState("idle");

  useEffect(() => {
    token && getAreasPrimary(setPrimary, setPrimaryCenter, setPrimaryState);
    token && getAreasSecondary(token, setSecondary, setSecondaryCenter, setSecondaryState);
  }, [token]);

  const mapCenter: any = [(primaryCenter[0] + secondaryCenter[0]) / 2, (primaryCenter[1] + secondaryCenter[1]) / 2];

  return (
    <Section title="Water area detection">
      <WaterAreaWrapper>
        <ButtonSection>
          <Select text="Primary area" />
        </ButtonSection>
        {loginState === "login failed" ? <h2>{loginState}</h2> :
          loginState === "logged in" && primaryState === "ready" && secondaryState === "ready" ?
            <MapContainer style={{ width: '100%', height: '100vh' }} center={mapCenter} zoom={11} scrollWheelZoom={false}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Polygon pathOptions={{ color: 'purple' }} positions={primary} />
              <Polygon pathOptions={{ color: 'green' }} positions={secondary} />
            </MapContainer> :
            <h2>{primaryState}</h2>
        }
      </WaterAreaWrapper>
    </Section>
  )
};

export default WaterArea;