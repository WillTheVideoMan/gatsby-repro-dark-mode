import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const TestTitle = styled.h1`
  color: ${(props) => props.theme.colours.primary};
  cursor: pointer;
`;

const TestComponent = ({ handleClick, isDark }) => (
  <TestTitle onClick={handleClick}>
    click to {isDark ? "de-" : null}activate dark mode
  </TestTitle>
);

export default TestComponent;
