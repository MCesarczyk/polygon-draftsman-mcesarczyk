import { useEffect, useState } from "react";
import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import { getAreasData } from "../../utils/getAreasData";
import Section from "../../components/Section";
import Placeholder from "../../components/Placeholder";
import { ChlorophyllWrapper } from "./styled";

type chlorophyllTypes = {
  loginState: string,
  token: string
}

const Chlorophyll = ({ loginState, token }: chlorophyllTypes) => {
  const [data, setData] = useState([]);
  const [center, setCenter]: [any, React.Dispatch<React.SetStateAction<number[]>>] = useState([0, 0]);
  const [boundary, setBoundary] = useState([]);
  const [state, setState] = useState("idle");

  useEffect(() => {
    token && getAreasData(token, setData, setBoundary, setCenter, setState);
  }, [token]);

  return (
    <Section title="Chlorophyll">
      <ChlorophyllWrapper>
        {loginState === "login failed" ? <Placeholder text={loginState} /> :
          loginState === "logged in" && state === "ready" ?
            <MapContainer style={{ width: '100%', height: '560px' }} center={center} zoom={11} scrollWheelZoom={false}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Polygon pathOptions={{ color: 'purple' }} positions={boundary} />
            </MapContainer> :
            <Placeholder text={state} />
        }
      </ChlorophyllWrapper>
    </Section>
  )
};

export default Chlorophyll;