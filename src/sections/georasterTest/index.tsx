import { useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import GeoRasterLayer from "georaster-layer-for-leaflet";
import Section from "../../components/Section";
import Select from "../../components/Select";
import { LeafletMapWrapper } from "../../components/LeafletMapWrapper/styled";
import { ButtonSection } from "../../components/ButtonSection/styled";
import { georasterTestOptions } from "../../assets/georasterTestOptions";
const parse_georaster = require("georaster");

type waterAreaTypes = {
  mapRef: any
}

const GeorasterTest = ({ mapRef }: waterAreaTypes) => {
  const [chosenMap, setChosenMap] = useState("cog");

  const MapEventHandler = () => {
    const map = useMap();
    console.log("Map: ", map);

    if (document === null) {
      return null;
    } else {
      document.getElementById("geotiff-file")!.addEventListener("change", event => {
        if (event === null || event.target === null) {
          return null;
        } else {
          //@ts-ignore
          const file = event.target.files[0];
          console.log("File: ", file);

          var reader = new FileReader();
          reader.readAsArrayBuffer(file);
          reader.onloadend = function () {
            const arrayBuffer = reader.result;
            parse_georaster(arrayBuffer).then((georaster: any) => {
              console.log("Georaster: ", georaster);
              
              const layer = new GeoRasterLayer({
                georaster: georaster,
                opacity: 0.7,
                resolution: 256
              });
              console.log("Layer:", layer);
              layer.addTo(map);

              map.fitBounds(layer.getBounds());
            });
          };
        };
      });
    }
    return null;
  };

  return (
    <Section title="Georaster test">
      <LeafletMapWrapper ref={mapRef}>
        <ButtonSection>
          <input
            type='file'
            id="geotiff-file"
          />
          <Select
            chosenOption={chosenMap}
            setChosenOption={setChosenMap}
            availableOptions={georasterTestOptions}
          />
        </ButtonSection>
        <MapContainer style={{ width: '100%', height: '560px' }} center={[52.2297, 21.0122]} zoom={10} scrollWheelZoom={true}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <MapEventHandler />
        </MapContainer>
      </LeafletMapWrapper>
    </Section>
  )
};

export default GeorasterTest;