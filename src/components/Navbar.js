import React, { Component } from "react";
import Showcase from "./Showcase";
import getMovie from "./GetMovie";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = { movie: "" };
    getMovie("Avengers", 2019).then(data =>
      this.setState(
        {
          movie: data
        },
        () => console.log("initial state set...")
      )
    );
  }
  render() {
    console.log("parent rendering..");

    return (
      <div className=" mt-2">
        <div
          className="py-3 row"
          style={{ backgroundColor: "rgba(27, 27, 27, 0.788)" }}
        >
          <div className="col-lg-2 bg-info p-2 rounded">
            <img
              src="http://icons.iconarchive.com/icons/designbolts/free-multimedia/64/Film-icon.png"
              alt=""
              className="rounded-circle p-2 bg-light "
            />
          </div>
          <div className="col-lg-8 mt-2 ">
            <nav className="navbar row">
              <div className="col-lg-11 p-0">
                <input
                  type="text"
                  className="form-control  search"
                  placeholder="Enter tittle of movie,search by year "
                />
              </div>
              <div className="text-center col-lg-1 p-0">
                <button
                  className="btn-light btn text-center   "
                  onClick={e => {
                    e.preventDefault();

                    getMovie(document.querySelector(".search").value).then(
                      data => {
                        this.setState({
                          movie: data
                        });
                      }
                    );
                  }}
                >
                  Go
                </button>
              </div>
            </nav>
          </div>
          <div className="col-lg-2 text-light mt-4 p-0 m-0">
            <strong>Welcome</strong>{" "}
          </div>
        </div>
        <Showcase movie={this.state.movie} />
      </div>
    );
  }
  componentWillReceiveProps() {
    console.log("parent props are recieving");
  }

  componentWillUpdate() {
    console.log("parent component will update..");
    console.log(this.props.movie);
  }

  componentDidUpdate() {
    console.log("parent updated...did");
    console.log(this.props.movie);
  }
  componentWillMount() {
    console.log("parent will Mount");
    console.log(this.props);
  }

  componentDidMount() {
    console.log("parent Mounted...");
  }
}
