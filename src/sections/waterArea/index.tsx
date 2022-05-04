import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import Section from "../../components/Section";
import Select from "../../components/Select";
import { ButtonSection, WaterAreaWrapper } from "./styled";

type waterAreaTypes = {
  loginState: string,
  primaryState: string,
  secondaryState: string,
  mapCenter: any,
  primary: any,
  secondary: any
}

const WaterArea = ({ loginState, primaryState, secondaryState, mapCenter, primary, secondary }: waterAreaTypes) => (
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
);

export default WaterArea;