import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.jsx';
import Description from './Description.jsx';

class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: undefined 
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount () {

    }

    render () {
      return (
      <div className="Restaurant">
        <h2>Restaurant component</h2> 
        < Carousel />
        < Description />
      </div>
      )}
  }

  export default Restaurant;