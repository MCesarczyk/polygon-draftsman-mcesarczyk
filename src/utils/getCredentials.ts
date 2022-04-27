const url = `${process.env.REACT_APP_API_URL}/users/login/`;

const headersList = {
  "Accept": "*/*",
  "Content-Type": "application/json"
}

const bodyContent = JSON.stringify({
  "username": process.env.REACT_APP_API_USERNAME,
  "password": process.env.REACT_APP_API_PASSWORD
});

export const getCredentials = () => {
  fetch(url, {
    method: "POST",
    body: bodyContent,
    headers: headersList
  })
    .then(response => response.json())
    .then(data => console.log(data))
};