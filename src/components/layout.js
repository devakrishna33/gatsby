import React from 'react'
import { Link } from 'gatsby'

const ListLink = ( props ) => {
  return (
    <li style={{ marginRight: '1rem', display: 'inline-block' }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )
}

export default function layout({ children }) {
  return (
    <div style={{ margin: '3rem auto', maxWidth: 600, padding: '0 1rem' }}>
      <header style={{ marginBottom: '1.5rem' }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>MySweetSite</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
        {children}
      </header>
    </div>
  )
}

