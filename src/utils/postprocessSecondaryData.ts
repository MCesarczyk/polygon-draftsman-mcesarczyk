export const postprocessSecondaryData = (dataString: string) => {
  const trimmed = dataString?.replace(/SRID=4326;POLYGON \(\(/, "").replace(/\)\)/, "");

  const roughed = trimmed.split(', ');

  const chunked = roughed.map(item => item.split(' '));

  const result: number[][] = chunked.map(item => item.map(str => parseFloat(str)));

  return result;
};