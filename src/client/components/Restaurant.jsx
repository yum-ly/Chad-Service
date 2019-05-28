import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.jsx';
import Description from './Description.jsx';

class Restaurant extends React.Component {

    render () {
      return (
      <div className="Restaurant">
        < Carousel />
        < Description />
      </div>
      )}
  }

  export default Restaurant;