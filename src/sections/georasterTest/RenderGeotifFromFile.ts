import { useMap } from "react-leaflet";
import GeoRasterLayer from "georaster-layer-for-leaflet";
const parse_georaster = require("georaster");

interface props {
  file: any,
  opacity: number,
  resolution: number
}

export const RenderGeotifFromFile = ({ file, opacity, resolution }: props) => {
  const map = useMap();
  console.log("Map: ", map);
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
          const arrayBuffer = reader.result;
          parse_georaster(arrayBuffer).then((georaster: any) => {
            console.log("Georaster: ", georaster);

            const layer = new GeoRasterLayer({
              georaster: georaster,
              opacity: opacity,
              resolution: resolution
            });
            console.log("Layer:", layer);
            layer.addTo(map);

            map.fitBounds(layer.getBounds());
          });
        };
  return null;
};