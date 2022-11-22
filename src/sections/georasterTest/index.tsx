import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Section from "../../components/Section";
import Select from "../../components/Select";
import { LeafletMapWrapper } from "../../components/LeafletMapWrapper/styled";
import { georasterTestOptions } from "../../assets/georasterTestOptions";
import FileInput from "../../components/FileInput";
import NumberInput from "../../components/NumberInput";
import { ButtonsWrapper, ControlsWrapper, InputsWrapper } from "./styled";
import { RenderGeotifFromFile } from "./RenderGeotifFromFile";

type waterAreaTypes = {
  mapRef: any
}

const GeorasterTest = ({ mapRef }: waterAreaTypes) => {
  const [opacity, setOpacity] = useState(0.7);
  const [resolution, setResolution] = useState(256);
  const [colorScheme, setColorScheme] = useState<'worldCover'|'custom'>("worldCover");
  const [file, setFile] = useState(undefined);

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
              chosenOption={colorScheme}
              setChosenOption={setColorScheme}
              availableOptions={georasterTestOptions}
            />
          </ButtonsWrapper>
        </ControlsWrapper>
        <MapContainer style={{ width: '100%', height: '560px' }} center={[52.2297, 21.0122]} zoom={10} scrollWheelZoom={true}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {file && <RenderGeotifFromFile opacity={opacity} resolution={resolution} file={file} colorScheme={colorScheme} />}
        </MapContainer>
      </LeafletMapWrapper>
    </Section>
  )
};

export default GeorasterTest;
