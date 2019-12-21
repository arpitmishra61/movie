import React, { Component } from "react";
export default class Showcase extends Component {
  mainSection = () => {
    const movie = this.props.movie;
    return (
      <div
        className="row  pt-4 pb-3 mt-1 rounded "
        style={{ backgroundColor: "rgba(27, 27, 27, 0.788)" }}
      >
        <div className="col p-0 ">
          <img src={movie.Poster} alt="" />
        </div>
        <div className="col pr-4" style={{}}>
          <div className="pt-2 pr-4" style={{}}>
            <div
              className=""
              style={{ backgroundColor: "rgba(24, 164, 199, 0.555)" }}
            >
              {movie.Title.length < 11 ? (
                <h1 className=" p-1 m-0 text-white rounded">{movie.Title}</h1>
              ) : (
                <h2 className=" p-1 m-0 text-white rounded">{movie.Title}</h2>
              )}
              <p htmlFor="" className="lead d-inline-block">
                {movie.Genre}
              </p>
              <label className="badge badge-success p-2 f-left ml-2">
                {movie.imdbRating}{" "}
              </label>
            </div>

            <div
              className="card p-0 m-0 box"
              style={{
                width: "386.5px !important",
                overflowY: "scroll !important",
                overflowX: "hidden",
                height: "336px"
              }}
            >
              <ul
                className="list-group box"
                style={{
                  width: "386.5px !important",
                  overflowY: "scroll !important",
                  overflowX: "hidden",
                  height: "336px"
                }}
              >
                <li className="list-group-item p-2 m-1">
                  <label htmlFor="" className="badge-info rounded px-1 mr-1 ">
                    Name
                  </label>
                  {movie.Director}
                </li>
                <li className="list-group-item-info p-2 m-1">
                  <label htmlFor="" className="badge-light rounded px-1 mr-1 ">
                    IMDB Votes
                  </label>
                  {movie.imdbVotes}
                </li>
                <li className="list-group-item p-2 m-1">
                  <label htmlFor="" className="badge-info rounded px-1 mr-1 ">
                    Release Date
                  </label>
                  {movie.Released}
                </li>
                <li className="list-group-item-light p-2 m-1">
                  <label htmlFor="" className="badge-info rounded px-1 mr-1 ">
                    Page
                  </label>
                  <a href={movie.Website}>{movie.Website}</a>
                </li>
                <li className="list-group-item p-2 m-1">
                  <label htmlFor="" className="badge-info rounded px-1 mr-1 ">
                    Writers
                  </label>
                  {movie.Writer}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  error = () => {
    return (
      <div className="card bg-dark text-center p-4 mt-1">
        <h2 className="text-danger">Sorry No Movie Found Of This Name</h2>

        <i className="fas fa-exclamation-triangle fa-3x mt-3  text-danger" />
      </div>
    );
  };
  showcaseUi = () => {
    const movie = this.props.movie;
    return movie.Error ? (
      this.error()
    ) : (
      <div className="row">
        <div className="col-lg-9">
          {movie ? this.mainSection() : <h1>Loading</h1>}
        </div>

        <div className="col-lg-3 mt-2">
          <div
            className="div bg-info box"
            style={{
              width: "386.5px !important",
              overflowY: "scroll !important",
              overflowX: "hidden",
              height: "483px"
            }}
          >
            <h4 className="text-white p-1">Other Information</h4>
            <li className="list-group-item p-3">
              <label htmlFor="" className="badge-dark rounded px-1 mr-1 ">
                Runtime
              </label>
              {movie.Runtime}
            </li>
            <li
              className="list-group-item p-3  text-white"
              style={{ backgroundColor: "rgba(27, 27, 27, 0.788)" }}
            >
              <label htmlFor="" className="badge-light rounded px-1 mr-1 ">
                Actors
              </label>
              {movie.Actors}
            </li>
            <li className="list-group-item p-3 ">
              <label htmlFor="" className="badge-dark rounded px-1 mr-1 ">
                Awards
              </label>
              {movie.Awards}
            </li>
            <li
              className="list-group-item p-3 text-white"
              style={{ backgroundColor: "rgba(27, 27, 27, 0.788)" }}
            >
              <label htmlFor="" className="badge-light rounded px-1 mr-1 ">
                Collectons
              </label>
              {movie.BoxOffice}
            </li>
            <li className="list-group-item p-3">
              <label htmlFor="" className="badge-dark rounded px-1 mr-1 ">
                Languages
              </label>
              {movie.Language}
            </li>
            <li
              className="list-group-item p-3  text-white"
              style={{ backgroundColor: "rgba(27, 27, 27, 0.788)" }}
            >
              <label htmlFor="" className="badge-light rounded px-1 mr-1 ">
                Production
              </label>
              {movie.Production}
            </li>
          </div>
        </div>
      </div>
    );
  };

  render() {
    console.log("rendering");
    console.log(this.props.movie);

    return this.showcaseUi();
  }
  componentWillReceiveProps() {
    console.log("props are recieving");
  }

  componentWillUpdate() {
    console.log("component will update..");
    console.log(this.props.movie);
  }

  componentDidUpdate() {
    console.log("updated...did");
    console.log(this.props.movie);
  }
  componentWillMount() {
    console.log("will Mount");
    console.log(this.props);
  }

  componentDidMount() {
    console.log("Mounted...");
  }
}
