import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;

  ul {
    display: flex;
  }

  li {
    display: inline-block;
    margin-left: 0.5em;
    font-size: 1.563em;
    &:first-child,
    &:nth-child(2),
    &:last-child {
      margin-left: 0;
    }
  }

  a {
    font-weight: 600;
  }
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>[</li>
          <li>
            <Link to="/i-like-this" activeStyle={activeLinkStyle}>
              I Like This
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/select-clients/" activeStyle={activeLinkStyle}>
              Select Clients
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
          <li>]</li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
