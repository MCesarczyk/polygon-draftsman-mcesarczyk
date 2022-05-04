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
  const [data, setData] = useState([]);
  const [center, setCenter]: [any, React.Dispatch<React.SetStateAction<number[]>>] = useState([0, 0]);
  const [state, setState] = useState("idle");

  const [chosenMap, setChosenMap] = useState("primary");

  useEffect(() => {
    chosenMap === "primary" && getAreasPrimary(setData, setCenter, setState);
    chosenMap === "secondary" && getAreasSecondary(token, setData, setCenter, setState);
  }, [chosenMap, token]);

  return (
    <Section title="Water area detection">
      <WaterAreaWrapper>
        <ButtonSection>
          <Select chosenMap={chosenMap} setChosenMap={setChosenMap} />
        </ButtonSection>
        {loginState === "login failed" ? <h2>{loginState}</h2> :
          loginState === "logged in" && state === "ready" ?
            <MapContainer style={{ width: '100%', height: '100vh' }} center={center} zoom={11} scrollWheelZoom={false}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Polygon pathOptions={{ color: 'purple' }} positions={data} />
            </MapContainer> :
            <h2>{state}</h2>
        }
      </WaterAreaWrapper>
    </Section>
  )
};

export default WaterArea;