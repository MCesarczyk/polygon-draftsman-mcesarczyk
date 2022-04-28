export const findViewCenter = (array: number[][]) => {
  const arr_x: number[] = array.map(([a, b]) => a);
  const arr_y: number[] = array.map(([a, b]) => b);

  const avg_x = arr_x?.reduce((c, d) => c + d, 0) / arr_x.length;
  const avg_y = arr_y?.reduce((c, d) => c + d, 0) / arr_y.length;

  return [avg_x, avg_y];
};