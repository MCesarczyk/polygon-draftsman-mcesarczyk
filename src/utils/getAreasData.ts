const apiUrl = process.env.REACT_APP_API_URL;
const url = `${apiUrl}/areas/data`;

const headersList: any = {
  "Accept": "*/*",
  "Authorization": process.env.REACT_APP_AUTH_TOKEN
}

export const getAreasData = () => {
  fetch(url, {
    method: "GET",
    headers: headersList
  })
    .then(response => response.json())
    .then(data => console.log(data))
};