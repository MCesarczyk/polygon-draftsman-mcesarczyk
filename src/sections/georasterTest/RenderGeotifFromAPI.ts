import { useMap } from "react-leaflet";
import GeoRasterLayer from "georaster-layer-for-leaflet";
const parse_georaster = require("georaster");

interface Props {
  url: string;
  opacity: number;
  resolution: number;
};

export const RenderGeotifFromAPI = ({ url, opacity, resolution }: Props) => {
  const map = useMap();

  parse_georaster(url).then((georaster: any) => {
    console.log("Georaster: ", georaster);

    const layer = new GeoRasterLayer({
      attribution: "Planet",
      georaster: georaster,
      opacity: opacity,
      debugLevel: 1,
      pixelValuesToColorFn: values => values[0] === 0 ? 'rgba(0,0,0,0)' : '#000',
      resolution: resolution
    });

    layer.addTo(map);

    map.fitBounds(layer.getBounds());
  });

  return null;
};
