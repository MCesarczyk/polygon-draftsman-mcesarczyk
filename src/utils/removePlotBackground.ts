export const removePlotBackground = (data: number[][]) => {
  let pureHeatmap: (number | null)[][] = [];

  data.forEach((array: number[]) => {
    pureHeatmap.push(array.map(item => item === 0 ? null : item))
  })

  return pureHeatmap;
};