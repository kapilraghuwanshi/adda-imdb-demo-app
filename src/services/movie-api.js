import axios from "axios";

export const fetchMoviesAndTVShows = async () => {
  const options = {
    method: "GET",
    url: "https://imdb-top-100-movies.p.rapidapi.com",
    headers: {
      "X-RapidAPI-Key": "0dc05d46a9msha08884cc5b2585fp180ec4jsne7d6d9f1105b",
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
