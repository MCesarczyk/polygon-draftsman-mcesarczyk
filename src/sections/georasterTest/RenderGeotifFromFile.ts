import { useMap } from "react-leaflet";
import GeoRasterLayer from "georaster-layer-for-leaflet";
const parse_georaster = require("georaster");

interface props {
  opacity: number,
  resolution: number
}

export const RenderGeotifFromFile = ({ opacity, resolution }: props) => {
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
              opacity: opacity,
              resolution: resolution
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