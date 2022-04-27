const url = `${process.env.REACT_APP_API_URL}/users/login/`;

export const getCredentials = (username: string, password: string, setKey: (key: string) => void) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Accept": "*/*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "username": username,
      "password": password
    }),
  })
    .then(response => response.json())
    .then(data => setKey(data.key))
};