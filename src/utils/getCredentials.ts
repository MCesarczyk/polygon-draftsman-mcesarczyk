import { API_URL } from "../assets/variables";

const url = `${API_URL}/users/rest-auth/login/`;

export const getCredentials = async (
  username: string | undefined,
  password: string | undefined,
  setKey: (key: string) => void,
  setLoginState: (key: string) => void
) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username": username,
        "password": password
      }),
    })

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();
    setKey(data.key);

    setLoginState("logged in");
  } catch (error) {
    setLoginState("login failed");
  }
};