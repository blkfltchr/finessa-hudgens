import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Post = styled.li`
  list-style: disc;
  font-size: 1.563em;
  margin-bottom: 1em;
  a {
    color: ${props => props.theme.colors.link};
  }
`

const Project = ({
  slug,
  title,
  ...props
}) => {
  return (
    <Post featured={props.featured}>
      <Link to={`/${slug}/`}>
        {title}
      </Link>
    </Post>
  )
}

export default Project
