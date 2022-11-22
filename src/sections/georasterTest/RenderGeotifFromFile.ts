import { useMap } from "react-leaflet";
import GeoRasterLayer from "georaster-layer-for-leaflet";
const parse_georaster = require("georaster");

const customColors: { [index: number]: string } = {
  0: '#c46bdb', // water bodies
  1: '#176304', // tree cover
  2: '#9f6a1a', // shrubs
  3: '#transparent', // nackground
  4: '#07baff', // mangroces
  5: '#57bfb9', // wetland
  6: '#5ebc32', // grass
  7: '#e9d100', // bare sparse
  8: '#fff', // moss
  9: '#3d767d', // buildup
  10: '#a1d3b5', // cropland
  11: '#36880f', // ice snow
};

const worldCoverColors: { [index: number]: string } = {
  0: 'transparent', // background
  1: '#006400', // tree cover
  2: '#ffd900', // shrubland
  3: '#ffff00', // grass
  4: '#ee82ee', // cropland
  5: '#ff0000', // buildup
  6: '#5e5e5e', // bare/sparse vegetation
  7: '#f5f5f5', // snow and ice
  8: '#1e8fff', // permanent water bodies
  9: '#20b2ab', // herbaceous wetland
  10: '#32cd32', // mangroves
  11: '#f0e68c', // moss and lichen
};

interface Props {
  file: any;
  opacity: number;
  resolution: number;
  colorScheme: string;
};

export const RenderGeotifFromFile = ({ file, opacity, resolution, colorScheme }: Props) => {
  const map = useMap();
  var reader = new FileReader();
  reader.readAsArrayBuffer(file);

  const setLayersColors = (colorScheme: string) => {
    switch (colorScheme) {
      case 'worldCover':
        return worldCoverColors;
      case 'custom':
        return customColors;
      default:
        return worldCoverColors
    };
  }

  const layersColors = setLayersColors(colorScheme);

    reader.onloadend = () => {
      const arrayBuffer = reader.result;

      parse_georaster(arrayBuffer).then((georaster: any) => {
        console.log("Georaster: ", georaster);

        const layer = new GeoRasterLayer({
          georaster: georaster,
          opacity: opacity,
          resolution: resolution,
          pixelValuesToColorFn: (pixelValues: number[]) => {
            for (let i = 0; i < 11; i++) {

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
