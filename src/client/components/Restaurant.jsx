import React from 'react';
// import ReactDOM from 'react-dom';
import Carousel from './Carousel.jsx';
import Description from './Description.jsx';

function Restaurant (props) {
      return (
      <div className="RestaurantChad" onClick={props.click}>
        < Carousel data={props.data}  />
        < Description data={props.data}  />
      </div>
      )
  }

  export default Restaurant;