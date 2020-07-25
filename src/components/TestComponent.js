import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const TestTitle = styled.h1`
  color: ${props => props.theme.colours.primary};
`

const TestComponent = ({ handleClick }) => (
  <TestTitle onClick={handleClick}>Click to toggle theme.</TestTitle>
)

export default TestComponent
