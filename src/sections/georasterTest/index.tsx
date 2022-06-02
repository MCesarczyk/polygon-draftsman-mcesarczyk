import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Section from "../../components/Section";
import Select from "../../components/Select";
import { LeafletMapWrapper } from "../../components/LeafletMapWrapper/styled";
import { georasterTestOptions } from "../../assets/georasterTestOptions";
import FileInput from "../../components/FileInput";
import { RenderGeotifFromFile } from "./RenderGeotifFromFile";
import NumberInput from "../../components/NumberInput";
import { ButtonsWrapper, ControlsWrapper, InputsWrapper } from "./styled";
import { RenderGeotifFromAPI } from "./RenderGeotifFromAPI";
import { EXAMPLE_GEOTIF_URL } from "../../assets/variables";

type waterAreaTypes = {
  mapRef: any
}

const GeorasterTest = ({ mapRef }: waterAreaTypes) => {
  const [chosenMap, setChosenMap] = useState("example");
  const [apiUrl, setApiUrl] = useState('');
  const [file, setFile] = useState(undefined);
  const [opacity, setOpacity] = useState(0.7);
  const [resolution, setResolution] = useState(256);

  const cogUrl = process.env.REACT_APP_COG_URL;
  const notCogUrl = process.env.REACT_APP_NOT_COG_URL;

  useEffect(() => {
    chosenMap === "cog" && cogUrl !== undefined && setApiUrl(cogUrl);
    chosenMap === "not_cog" && notCogUrl !== undefined && setApiUrl(notCogUrl);
    chosenMap === "example" && setApiUrl(EXAMPLE_GEOTIF_URL);
  }, [chosenMap, cogUrl, notCogUrl]);

  useEffect(() => {
    console.log('apiUrl: ', apiUrl);
  }, [apiUrl]);

  useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <Section title="Georaster test">
      <LeafletMapWrapper ref={mapRef}>
        <ControlsWrapper>
          <InputsWrapper>
            <NumberInput
              text="Opacity:"
              step={0.1}
              value={opacity}
              onChange={e => setOpacity(parseFloat(e.target.value))}
            />
            <NumberInput
              text="Resolution:"
              step={4}
              value={resolution}
              onChange={e => setResolution(parseFloat(e.target.value))}
            />
          </InputsWrapper>
          <ButtonsWrapper>
            <FileInput setFile={(e: any) => setFile(e.target.files[0])} />
            <Select
              chosenOption={chosenMap}
              setChosenOption={setChosenMap}
              availableOptions={georasterTestOptions}
            />
          </ButtonsWrapper>
        </ControlsWrapper>
        <MapContainer style={{ width: '100%', height: '560px' }} center={[52.2297, 21.0122]} zoom={10} scrollWheelZoom={true}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {file && <RenderGeotifFromFile opacity={opacity} resolution={resolution} file={file} />}
          {apiUrl && <RenderGeotifFromAPI url={apiUrl} opacity={opacity} resolution={resolution} />}
        </MapContainer>
      </LeafletMapWrapper>
    </Section>
  )
};

export default GeorasterTest;