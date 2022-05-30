import { useMap } from "react-leaflet";
import GeoRasterLayer from "georaster-layer-for-leaflet";
const parse_georaster = require("georaster");

interface props {
  url: string,
  opacity: number,
  resolution: number
}

export const RenderGeotifFromAPI = ({ url, opacity, resolution }: props) => {
  const map = useMap();
  console.log("Map: ", map);

  parse_georaster(url).then((georaster: any) => {
    console.log("Georaster: ", georaster);

    const layer = new GeoRasterLayer({
      attribution: "Planet",
      georaster: georaster,
      opacity: opacity,
      resolution: resolution
    });
    console.log("Layer:", layer);
    layer.addTo(map);

    map.fitBounds(layer.getBounds());
  });

  return null;
};