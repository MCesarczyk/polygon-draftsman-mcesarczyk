import { useMap } from "react-leaflet";
import L from "leaflet";

interface props {
  coords: number[],
  color: string
}

export const RenderCircleMarker = ({ coords, color }: props) => {
  const map = useMap();
  
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

  layer.addTo(map);
  
  return null;
};