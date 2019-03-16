import React from 'react'
import Header from './header'

export default class about extends React.Component{
    render(){
        return (
            <div>
                <Header headText="About Header"/>
                <h4>About Page!!</h4>
                <img src="https://source.unsplash.com/random/400x200" alt="" />
            </div>
        )
    }
}