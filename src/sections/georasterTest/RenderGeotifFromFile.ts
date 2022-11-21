import { useMap } from "react-leaflet";
import GeoRasterLayer from "georaster-layer-for-leaflet";
const parse_georaster = require("georaster");

const layersColors: { [index: number]: string } = {
  1: '#E91A1A',
  2: '#FCFF6A',
  3: '#0D852E',
  4: '#c46bdb',
  5: '#176304',
  6: '#9f6a1a',
  7: '#transparent',
  8: '#07baff',
  9: '#57bfb9',
  10: '#5ebc32',
  11: '#e9d100',
  12: '#fff',
  13: '#3d767d',
  14: '#a1d3b5',
  15: '#36880f',
};

interface Props {
  file: any;
  opacity: number;
  resolution: number;
};

export const RenderGeotifFromFile = ({ file, opacity, resolution }: Props) => {
  const map = useMap();
  var reader = new FileReader();
  reader.readAsArrayBuffer(file);

  reader.onloadend = () => {
    const arrayBuffer = reader.result;

    parse_georaster(arrayBuffer).then((georaster: any) => {
      console.log("Georaster: ", georaster);

      const layer = new GeoRasterLayer({
        georaster: georaster,
        opacity: opacity,
        resolution: resolution,
        pixelValuesToColorFn: (pixelValues: number[]) => {
          for (let i = 1; i < 15; i++) {

            if (isNaN(pixelValues[i])) {
              return 'transparent';
            };

            if (pixelValues[i] === 1) {
              return layersColors[i];
            };
          };

          return 'transparent';
        },
      });
      layer.addTo(map);

      map.fitBounds(layer.getBounds());
    });
  };
  return null;
};
