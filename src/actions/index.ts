import axios from "axios";

export const fetchAllCountries = async () => {
  try {
    const data = await axios.get(process.env.REACT_APP_API_REST_COUNTRIES as string);
    return data;
  } catch (error) {
    return error;
  }
};
