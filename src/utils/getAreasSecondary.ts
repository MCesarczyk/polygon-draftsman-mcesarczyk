import { API_URL } from "../assets/variables";
import { findViewCenter } from "./findViewCenter";
import { postprocessSecondaryData } from "./postprocessSecondaryData";

const apiUrl = API_URL;
const url = `${apiUrl}/areas/secondary`;

export const getAreasSecondary = async (
  key: string,
  setSecondary: any,
  setViewCenter: any,
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
    const result = postprocessSecondaryData(data.extent);
    const center = findViewCenter(result);
    await setViewCenter(center);
    await setSecondary(result);
    await setSecondaryState("ready");
  } catch (error) {
    setSecondaryState("loading error");
  }
};