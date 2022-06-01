import { useMap } from "react-leaflet";
import L from "leaflet";

interface props {
  coords: number[],
  waterbody: number[][],
  boundary: {
    left: number,
    right: number,
    bottom: number,
    top: number
  },
  color: string
}

export const RenderGeoJsonFromFile = ({ coords, waterbody, boundary, color }: props) => {
  const map = useMap();
  console.log("Map: ", map);
  console.log("Waterbody: ", waterbody);
  console.log("Boundary: ", boundary);
  // waterbody.map(row => console.log(row));

  const areaWidth = boundary.right - boundary.left;
  const areaHeight = boundary.top - boundary.bottom;

  console.log('areaWidth: ', areaWidth, 'areaHeight: ', areaHeight);
  
  
  const geojsonFeature: any = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": coords
    }
  };

  const geojsonMarkerOptions = {
    radius: 5,
    fillColor: color,
    color: color,
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  };

  const layer = L.geoJSON(geojsonFeature, {
    pointToLayer: (_, latLng) => L.circleMarker(latLng, geojsonMarkerOptions)
  });

  console.log("Layer:", layer);
  layer.addTo(map);
  
  return null;
};