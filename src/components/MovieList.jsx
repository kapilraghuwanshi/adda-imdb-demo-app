import React from "react";

const MovieList = ({ moviesAndTVShows }) => {
  return (
    <div className="row">
      {moviesAndTVShows.map((item) => (
        <div key={item.id} className="col-lg-4">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">Year: {item.year}</p>
            <img className="card-image" src={item.image} />
            <div className="card-text">Director: {item.director.join(",")}</div>
            <div className="card-text"> IMDB Rating: {item.rating}/10</div>
            <div className="card-text"> Genre: {item.genre.join(",")}</div>
            <a href={item.trailer}>Watch Trailer</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
