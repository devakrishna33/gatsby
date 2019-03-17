import React, { Component } from 'react'
import Container from '../components/container'
import styles from './about-css-modules.module.css'

const User = props => (
    <div className={styles.user}>
      <img src={props.avatar} className={styles.avatar} alt="" />
      <div className={styles.description}>
        <h2 className={styles.username}>{props.username}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
    </div>
  )

export default class AboutCssModules extends Component {
  render() {
    return (
      <div>
        <Container>
            <h1>About Css Modules Page</h1>
            <h5>Demo</h5>
            <User
                username="Jane Doe"
                avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
                excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
            <User
                username="Bob Smith"
                avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
                excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
        </Container>
      </div>
    )
  }
}
