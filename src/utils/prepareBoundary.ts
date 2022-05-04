interface Points {
  left: number,
  right: number,
  top: number,
  bottom: number
}

export const prepareBoundary = (points: Points) => {
  return [
    [points.left, points.top],
    [points.right, points.top],
    [points.right, points.bottom],
    [points.left, points.bottom],
    [points.left, points.top]
  ];
};