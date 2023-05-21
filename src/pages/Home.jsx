import React, { useState, useEffect } from "react";
import { fetchMoviesAndTVShows } from "../services/movie-api";
import MovieList from "../components/MovieList";
import SearchBy from "../components/SearchBy";
import SortBy from "../components/SortBy";

const Home = () => {
  const [moviesAndTVShows, setMoviesAndTVShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMoviesAndTVShows();
        setMoviesAndTVShows(data);
      } catch (error) {
        console.error("Error while fecthing movies API in Home page", error);
      }
    };

    fetchData();
  }, []);


  const filterMoviesAndTVShows = moviesAndTVShows.filter(
    (item) => item.title === searchQuery
  );

  if (sortOption === "year") {
    filterMoviesAndTVShows.sort((a, b) => a.year - b.year);
  }

  console.log(filterMoviesAndTVShows);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSort = (option) => {
    setSortOption(option);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <SearchBy onSearch={handleSearch} />
          <SortBy onSort={handleSort} />
          <MovieList moviesAndTVShows={moviesAndTVShows} />
        </div>
      </div>
    </div>
  );
};

export default Home;
