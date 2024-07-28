import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        {this.props.setProgress(100)}
      </div>
    )
  }
}
