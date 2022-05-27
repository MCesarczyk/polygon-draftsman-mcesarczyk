import { useState } from "react";
import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import Section from "../../components/Section";
import Select from "../../components/Select";
import Placeholder from "../../components/Placeholder";
import { LeafletMapWrapper } from "../../components/LeafletMapWrapper/styled";
import { ButtonSection } from "../../components/ButtonSection/styled";
import { georasterTestOptions } from "../../assets/georasterTestOptions";

type waterAreaTypes = {
  loginState: string,
  token: string
}

const GeorasterTest = ({ loginState, token }: waterAreaTypes) => {
  const [data, setData] = useState([]);
  const [center, setCenter]: [any, React.Dispatch<React.SetStateAction<number[]>>] = useState([0, 0]);
  const [state, setState] = useState("idle");

  const [chosenMap, setChosenMap] = useState("cog");

  return (
    <Section title="Georaster test">
      <LeafletMapWrapper>
        <ButtonSection>
          <Select
            chosenOption={chosenMap}
            setChosenOption={setChosenMap}
            availableOptions={georasterTestOptions}
          />
        </ButtonSection>
        {loginState === "login failed" ? <Placeholder text={loginState} /> :
          loginState === "logged in" && state === "ready" ?
            <MapContainer style={{ width: '100%', height: '560px' }} center={center} zoom={11} scrollWheelZoom={false}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Polygon pathOptions={{ color: 'purple' }} positions={data} />
            </MapContainer> :
            <Placeholder text={state} />
        }
      </LeafletMapWrapper>
    </Section>
  )
};

export default GeorasterTest;