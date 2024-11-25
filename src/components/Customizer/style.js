import styled from "styled-components";

export const WrapperDiv = styled.div`
  margin: 16px;
  background-color: black; /* Black background */
  color: white; /* Default text color for visibility */
  padding: 16px; /* Add padding for spacing */
  border-radius: 8px; /* Optional for a rounded container */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Subtle shadow for depth */

  > h4 {
    padding-bottom: 8px;
    color: white; /* Ensure header text is visible */
  }

  label {
    display: flex;
    align-items: center;
    padding: 2px 0;
    margin-left: 12px;
    width: max-content;
    cursor: pointer;
    color: #ddd; /* Softer color for label text */
  }

  input {
    margin-left: 6px;

    &[type="radio"] {
      margin-left: 0;
      margin-right: 6px;
    }

    background-color: #222; /* Darker background for input */
    color: white; /* White text for contrast */
    border: 1px solid #444; /* Subtle border */
    border-radius: 4px;
  }
`;
