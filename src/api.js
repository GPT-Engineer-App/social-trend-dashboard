import axios from "axios";

const BASE_URL = "https://api.rapidapi.com";
const API_KEY = process.env.REACT_APP_RAPIDAPI_KEY;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "rapidapi.com",
  },
});

export const fetchRedditData = async () => {
  const response = await api.get("/data/reddit/trending");
  return response.data;
};

export const fetchYouTubeData = async () => {
  const response = await api.get("/data/youtube/trending");
  return response.data;
};

export const fetchTwitterData = async () => {
  const response = await api.get("/data/twitter/trending");
  return response.data;
};
