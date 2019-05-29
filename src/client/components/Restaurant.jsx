import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.jsx';
import Description from './Description.jsx';

function Restaurant (props) {
      return (
      <div className="Restaurant">
        < Carousel pics={props.pics}/>
        < Description />
      </div>
      )
  }

  export default Restaurant;