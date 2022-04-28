import { postprocessSecondaryData } from "./postprocessSecondaryData";

const apiUrl = process.env.REACT_APP_API_URL;
const url = `${apiUrl}/areas/secondary`;

export const getAreasSecondary = (key: string, setSecondary: any) => {
  fetch(url, {
    method: "GET",
    headers: {
      "Accept": "*/*",
      "Authorization": `Token ${key}`
    }
  })
    .then(response => response.json())
    .then(data => postprocessSecondaryData(data.extent))
    .then(result => setSecondary(result))
};