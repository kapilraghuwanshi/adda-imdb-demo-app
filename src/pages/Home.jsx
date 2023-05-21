import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import SearchBy from "../components/SearchBy";
import SortBy from "../components/SortBy";
import { fetchMoviesAndTVShows } from "../services/movie-api";

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
        // Handle error
        console.error("Error fetching movies and TV shows:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSort = (option) => {
    setSortOption(option);
  };

  // Filter and sort movies and TV shows based on search query and sort option
  const filteredMoviesAndTVShows = moviesAndTVShows.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (sortOption === "year") {
    filteredMoviesAndTVShows.sort((a, b) => a.year - b.year);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <SearchBy onSearch={handleSearch} />
          <SortBy onSort={handleSort} />
          <MovieList moviesAndTVShows={filteredMoviesAndTVShows} />
        </div>
      </div>
    </div>
  );
};

export default Home;
