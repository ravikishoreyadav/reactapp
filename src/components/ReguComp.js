import React, { Component } from 'react'

class ReguComp extends Component {
  render() {
    console.log("Regular Component");
    return (
      <div>Regu Component {this.props.name} </div>
    )
  }
}

export default ReguComp