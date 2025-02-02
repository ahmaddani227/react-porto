import axios from "axios";

export async function getCodewarsData() {
  const USER_ID = import.meta.env.VITE_USER_ID_CODEWARS;
  const CODEWARS_API = `https://www.codewars.com/api/v1/users/${USER_ID}`;

  try {
    const response = await axios.get(CODEWARS_API);
    return response.data;
  } catch (error) {
    reportError(error);
  }
}
