import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import Section from "../../components/Section";
import { LeafletMapWrapper } from "../../components/LeafletMapWrapper/styled";
import { RenderGeotifFromFile } from "../georasterTest/RenderGeotifFromFile";
import waterbodyMeta from "../../assets/waterbodyMeta.json";
import waterbodyRaw from "../../assets/waterbodyRaw.json";
import { prepareBoundary } from "../../utils/prepareBoundary";

type waterAreaTypes = {
  mapRef: any
}

const GeoJSONTest = ({ mapRef }: waterAreaTypes) => {
  console.log('waterbodyMeta: ', waterbodyMeta);
  console.log('waterbodyRaw: ', waterbodyRaw);

  const centerCoords = waterbodyMeta.center_of_image_coords;
  const center: any = [centerCoords.y, centerCoords.x];

  const boundary: any[] = prepareBoundary(waterbodyMeta.boundary_box);  
  
  return (
    <Section title="GeoJSON test">
      <LeafletMapWrapper ref={mapRef}>
        <MapContainer style={{ width: '100%', height: '560px' }} center={center || [52.2297, 21.0122]} zoom={14} scrollWheelZoom={true}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Polygon pathOptions={{color: 'gray'}} positions={boundary} />
          {/* {file && <RenderGeotifFromFile opacity={opacity} resolution={resolution} file={file} />} */}
        </MapContainer>
      </LeafletMapWrapper>
    </Section>
  )
};

export default GeoJSONTest;