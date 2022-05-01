import { API_URL } from "../assets/variables";

const url = `${API_URL}/users/login/`;

export const getCredentials = async (
  username: string,
  password: string,
  setKey: (key: string) => void,
  setLoginState: (key: string) => void
) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Origin": "http://127.0.0.1:3000",
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