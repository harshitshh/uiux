import styled, { createGlobalStyle } from "styled-components";

// Global styles for black background and general app-wide design
const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    background-color: black; /* Set overall background to black */
    color: white; /* Default text color for visibility */
    font-family: "Raleway", sans-serif; /* Consistent font */
    min-height: 100vh;
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }
`;

const HomeDesign = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 120px;
  min-height: 100vh;
  background-color: black;
  color: white;

  h2 {
    font-size: 36px;
    color: white;
    font-family: "Raleway", sans-serif;
    font-weight: 600;

    @media (max-width: 675px) {
      font-size: 30px;
    }
  }

  p {
    font-size: 1.1em;
    margin: 1rem 0 4rem 0;
    color: #ddd;
    line-height: 1.5;

    @media (max-width: 675px) {
      margin-bottom: 2rem;
    }
  }

  .form {
    width: 600px;
    min-height: 450px;
    padding: 50px;
    background: #1e1e1e;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

    @media (max-width: 1024px) {
      box-shadow: none;
    }
    @media (max-width: 768px) {
      width: 80%;
      padding: 30px;
    }
    @media (max-width: 675px) {
      box-shadow: none;
    }
    @media (max-width: 374px) {
      padding: 0;
    }

    label {
      line-height: 32px;
      color: #bbb;
    }
  }

  img {
    width: 450px;

    @media (max-width: 1024px) {
      width: 375px;
      position: absolute;
      top: 40%;
      left: 50%;
    }
    @media (max-width: 675px) {
      display: none;
    }
  }

  button {
    padding: 8px 32px;
    margin: 1rem 0;
    cursor: pointer;
    outline: 0;
    border: 0;
    font-size: 22px;
    background: #0078d7;
    color: white;
    border-radius: 2rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

    :hover {
      opacity: 0.9;
    }
    :active {
      box-shadow: none;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 60px;
  }

  @media (max-width: 675px) {
    margin-top: 25px;
  }
`;

const InputBox = styled.div`
  position: relative;

  .fab {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 22px;
    color: #777;
    left: 8px;
  }

  input {
    padding: 12px;
    padding-left: 32px;
    border-radius: 8px;
    border: 2px solid #444;
    outline: 0;
    background: #222;
    color: white;
    width: 250px;
    font-family: "Quicksand", sans-serif;
    font-size: 16px;

    ::placeholder {
      color: #888;
    }
  }
`;

export { GlobalStyle, HomeDesign, InputBox };
