import { API_URL } from "../assets/variables";
import { findViewCenter } from "./findViewCenter";
import { postprocessPolygonData } from "./postprocessPolygonData";

const apiUrl = API_URL;
const url = `${apiUrl}/areas/secondary`;

export const getAreasSecondary = async (
  key: string,
  setSecondary: any,
  setSecondaryCenter: any,
  setSecondaryState: any
) => {
  try {
    setSecondaryState("loading");
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Accept": "*/*",
        "Authorization": `Token ${key}`
      }
    });
    const data = await response.json();
    const result = postprocessPolygonData(data.extent);
    const center = findViewCenter(result);
    await setSecondaryCenter(center);
    await setSecondary(result);
    await setSecondaryState("ready");
  } catch (error) {
    setSecondaryState("loading error");
  }
};