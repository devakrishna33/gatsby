import React from "react"
import Header from './header'
import { Link } from 'gatsby'

export default class gatsby extends React.Component{
    render(){
        return (
        <div>
            <Link to="/contact/">Contact</Link>
            <Header headText="Home Header" />
            <h1 style={{ color: 'purple' }}>Hello Gatsby!!</h1>
            <p>World is Hell!</p>
            <img src="https://source.unsplash.com/random/400x200" alt="" />
        </div>
        )
    }
}
