import React, { Component } from 'react'

export class Header extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
        <div>
            <h1>{this.props.headText}</h1>
        </div>
        )
    }
}

export default Header
