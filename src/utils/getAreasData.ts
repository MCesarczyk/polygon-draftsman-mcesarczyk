const apiUrl = process.env.REACT_APP_API_URL;
const url = `${apiUrl}/areas/data`;

export const getAreasData = (key: string) => {
  fetch(url, {
    method: "GET",
    headers: {
      "Accept": "*/*",
      "Authorization": `Token ${key}`
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
};