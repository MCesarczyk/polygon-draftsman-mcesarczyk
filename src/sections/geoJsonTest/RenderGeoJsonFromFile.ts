import { useMap } from "react-leaflet";
import L from "leaflet";

interface props {
  waterbody: number[][],
  boundary: {
    left: number,
    right: number,
    bottom: number,
    top: number
  }
}

const createPoint = (map: any, lng: number, lat: number, color: string) => {
  const geojsonFeature: any = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [lng, lat]
    }
  };

  const geojsonMarkerOptions = {
    radius: 2,
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
};

const valueToColor = (value: number, min: number, max: number, maxHue = 200, minHue = 0) => {
  const base = (max - min);

  if (base === 0) { value = 1 }
  else {
    value = (value - min) / base;
  };

  const hue = value * (maxHue - minHue) + minHue;
  return `hsl(${hue}, 100%, 50%)`;
};

export const RenderGeoJsonFromFile = ({ waterbody, boundary }: props) => {
  const map = useMap();

  const areaWidth = boundary.right - boundary.left;
  const areaHeight = boundary.top - boundary.bottom;
  const waterbodyLength = waterbody.length;
  const rowHeight = areaHeight / waterbodyLength;

  waterbody.map((row, index) => {
    const rowLat = boundary.top - rowHeight * index;

    row.map((point, index) => {
      const rowLength = row.length;
      const columnWidth = areaWidth / rowLength;
      const columnLng = boundary.left + columnWidth * index;
      const color = valueToColor(point, 0, 200);

      if (point > 0 && point < 300) {
        createPoint(map, columnLng, rowLat, color);
      }

      return null;
    });

    return null;
  });

  return null;
};