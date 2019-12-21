import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  margin: 4.375em 0 4.375em 1em;
`

const ProjectList = props => {
  return <List>{props.children}</List>
}

export default ProjectList
