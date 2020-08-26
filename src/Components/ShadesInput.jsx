import React from "react";

const ShadesInput = (props) => {
  return (
    <>
      <div className="shades-search">
        <div className="brand-name">
          <span className="Fletter">C</span>olor{" "}
          <span className="Sletter">F</span>etcher
        </div>
        <div className="search-box">
          <input
            type="text"
            className="shades-input"
            placeholder="search for colors"
            value={props.color}
            onChange={(e) => props.onInputChange(e.target.value)}
          />
          <a className="search-btn" href="#" style={{ textDecoration: "none" }}>
            <i class="fa fa-search"></i>
          </a>
        </div>

        <div className="links">
          <a
            href="https://github.com/jvnaveenbabu"
            style={{ textDecoration: "none", color: "#333" }}
          >
            <span
              className="fa fa-github"
              style={{ margin: "4px", cursor: "pointer", fontSize: "26px" }}
            ></span>
          </a>

          <a
            href="https://www.linkedin.com/in/j-v-naveen-babu/"
            style={{ textDecoration: "none", color: "#333" }}
          >
            <span
              className="fa fa-linkedin"
              style={{ margin: "4px", cursor: "pointer", fontSize: "26px" }}
            ></span>
          </a>

          <a
            href="https://www.instagram.com/webdev.commune/"
            style={{ textDecoration: "none", color: "#333" }}
          >
            <span
              className="fa fa-instagram"
              style={{ margin: "4px", cursor: "pointer", fontSize: "26px" }}
            ></span>
          </a>
        </div>
      </div>
    </>
  );
};

export default ShadesInput;
