import React from 'react'
import { Link } from 'gatsby'
import Header from './header'

export default class Contact extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Link to="/">Home</Link>
                <Header headText="Contact Header!"/>
                <h4>Contact Page</h4>
                <img src="https://source.unsplash.com/random/400x200" alt="" />
            </div>
        )
    }
} 