import { API_URL } from "../assets/variables";
import { findViewCenter } from "./findViewCenter";
import { prepareBoundary } from "./prepareBoundary";

const apiUrl = API_URL;
const url = `${apiUrl}/areas/data`;

export const getAreasData = async (
  key: string,
  setData: any,
  setState: any
) => {
  try {
    setState("loading");
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Accept": "*/*",
        "Authorization": `Token ${key}`
      }
    });
    const data = await response.json();
    const points = data.coordinates_bounding_box;
    const boundary = prepareBoundary(points);
    const center = findViewCenter(boundary);
    await setData(data.data);
    await setState("ready");
  } catch (error) {
    setState("loading error");
  }
};