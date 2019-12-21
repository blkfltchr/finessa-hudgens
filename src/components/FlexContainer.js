import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  align-items: center;

  img {
    height: 2em;
    width: auto;
  }
`

const FlexContainer = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default FlexContainer
