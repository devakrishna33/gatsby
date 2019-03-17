import React from 'react'
import containerStyles from './container.module.css'

export default class Container extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={containerStyles.container}>{this.props.children}</div>        
        )
    }
}