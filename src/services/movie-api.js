import axios from "axios";

export const fetchMoviesAndTVShows = async () => {
  const options = {
    method: "GET",
    url: "https://imdb-top-100-movies.p.rapidapi.com",
    headers: {
      "X-RapidAPI-Key": "<Add your own API key>", // Add your own API here from RapidApi.com
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error while fecthing movies API", error);
  }
};
