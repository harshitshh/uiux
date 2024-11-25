import React from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/resume.png";

const Navigation = styled.nav`
  position: sticky;
  top: 0;
  background: black; /* Set the background to black */
  padding: 1rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); /* Subtle shadow for separation */

  img {
    width: 40px;
    height: 40px;
    margin: 0 10px;
  }

  .title {
    display: flex;
    align-items: center;

    a {
      color: white; /* Adjusted text color for dark background */
      text-decoration: none;

      :hover {
        color: #ddd; /* Slight hover effect for links */
      }
    }
  }

  .nav-links {
    display: flex;
    align-items: flex-end;

    a,
    .anchor-style {
      cursor: pointer;
      margin: 0 10px;
      color: white; /* Adjusted link color */
      text-decoration: none;

      :hover {
        color: #ddd; /* Subtle hover effect */
      }
    }

    input {
      margin-right: 10px;
      border: 1px solid #555; /* Border for the input */
      outline: none;
      border-radius: 4px;
      padding: 5px;
      background: #222; /* Input background matches dark theme */
      color: white; /* Input text color for readability */
    }

    [class^="fa"] {
      margin-right: 4px;
    }
  }

  @media (max-width: 675px) {
    flex-direction: column;
  }
`;

function Navbar({ titleColor, setTitleColor }) {
  const location = useLocation();
  const printResume = () => window.print();

  return (
    <Navigation id="navbar">
      <div className="title">
        <img src={logo} alt="logo" />
        <span>
          <h1>
            <Link to="/">Github Resume Generator</Link>
          </h1>
        </span>
      </div>
      <div className="nav-links">
        {location.pathname === "/" ? (
          <a href="https://github.com/harshitshh/uiux">
            <i className="fab fa-github"></i>Open in Github
          </a>
        ) : (
          <>
            <input
              className="anchor-style"
              type="color"
              value={titleColor}
              onChange={(e) => setTitleColor(e.target.value)}
            />
            <span className="anchor-style" onClick={printResume}>
              <i className="fas fa-print"></i>
              Print
            </span>
          </>
        )}
      </div>
    </Navigation>
  );
}

export default Navbar;
