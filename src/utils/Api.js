import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
// const TMBD_TOKEN = import.meta.env.REACT_APP_MOVIE_API_TOKEN;
const TMBD_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjQ0NDNiNzM2N2NiNjhlYWM5NGNiMjczOGU0MGUxZiIsIm5iZiI6MTczNDU0MTU4NS4zMDU5OTk4LCJzdWIiOiI2NzYzMDExMTcxM2U5ZmY0NWJhYjA5OGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.0iW68uQIY441mMr4JGb5twTjPWTHyu7cF9LvJ6zS7X0";
const headers = {
  Authorization: "bearer " + TMBD_TOKEN,
};
export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
