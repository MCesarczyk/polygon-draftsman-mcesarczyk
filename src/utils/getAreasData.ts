import { API_URL } from "../assets/variables";

const apiUrl = API_URL;
const url = `${apiUrl}/areas/data`;

export const getAreasData = (key: string, setAreasData: any) => {
  fetch(url, {
    method: "GET",
    headers: {
      "Accept": "*/*",
      "Authorization": `Token ${key}`
    }
  })
    .then(response => response.json())
    .then(data => setAreasData(data.data))
};