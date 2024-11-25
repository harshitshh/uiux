import React from "react";
import styled from "styled-components";

import IntroductionView from "./IntroductionView";
import StatsView from "./StatsView";
import RepositoriesView from "./RepositoriesView";
import ContributionsView from "./ContributionsView";

const OptionsWrapper = styled.div`
  padding: 1rem 0;
  text-align: left;
  background-color: black; 
  color: white; /* Ensure text is visible on the black background */
  border-radius: 8px; /* Optional for rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Optional subtle shadow */
`;

export default () => {
  return (
    <OptionsWrapper>
      <IntroductionView />
      <StatsView />
      <RepositoriesView />
      <ContributionsView />
    </OptionsWrapper>
  );
};
