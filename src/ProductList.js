import React from 'react';
import Cars from './Cars';
export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
   }
   static getDerivedStateFromProps(props, state) {}
   componentDidMount() {
   }
   render() {
    return <div className="product-list"><h2>Product list:</h2><Cars /></div>
  }
   shouldComponentUpdate(nextProps, nextState) {
   
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {

  }
  componentDidUpdate(prevProps, prevState, snapshot) {
  }
  componentWillUnmount() {
  } 
 
}