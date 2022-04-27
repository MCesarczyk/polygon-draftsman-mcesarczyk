const url = `${process.env.REACT_APP_API_URL}/users/login/`;

export const getCredentials = async (
  username: string,
  password: string,
  setKey: (key: string) => void,
  setLoginState: (key: string) => void
) => {
  try {
    const response = await fetch(url, {
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

    if (!response.ok) {
      throw new Error;
    }

    const data = await response.json();
    setKey(data.key);
    setLoginState("logged in");
  } catch (error) {
    setLoginState("login failed");
  }
};