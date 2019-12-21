import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  background-image: linear-gradient(#fff, #D7D7D7);
  height: 30px;
  width: 90px;
  font-style: italic;
  font-weight: 600;
  font-size: 1.25em;
  margin-right: 0.625em;
`

const Button = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Button
