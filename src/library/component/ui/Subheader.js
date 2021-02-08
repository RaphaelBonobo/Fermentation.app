// Subheader
// Classic reusable subheader component that is meant to encapsulate custom StyledSubheader sent from other components
// Usually meant for under titles and complementary but important informations

import React from 'react';
import styled from 'styled-components';

const Subheader = (props) => (
  <ContainerSubheader>
    <StyledSubheader>{props.subheader}</StyledSubheader>
  </ContainerSubheader>
);

const ContainerSubheader = styled.View`
  margin-left: auto;
  margin-right: auto;
  border-color: black;
`;

const StyledSubheader = styled.Text`
  color: ${(props) => props.theme.main};
  font-size: 20px;
`;

export default Subheader;
