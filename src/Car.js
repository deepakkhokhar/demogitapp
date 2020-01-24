import React from 'react';
export default class Car extends React.Component {
    
    render() {
      return <div>
      <p>Name: {this.props.name}</p>
      <p>Price: ${this.props.price}</p>
      <button onClick={this.props.incrementPrice}>&uarr;</button>
      <button onClick={this.props.decrementPrice}>&darr;</button>
  </div>
    }
}