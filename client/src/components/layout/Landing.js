import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "90vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Welcome</b> to {" "}
              <span style={{ fontFamily: "monospace" }}>DeadRhose_Games</span>! 
            </h4>
            <p className="flow-text blue-text text-darken-1">
            Here you can learn about youTuber/Twitch streamer <b>DeadRhose</b>
            </p>
            <br />
           
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable orange accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect blue white-text"
              >
                Log In
              </Link>
                </div>
              </div>
            </div>
          </div>

    );
  }
}
export default Landing;