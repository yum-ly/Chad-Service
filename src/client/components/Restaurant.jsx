import React from 'react';
import Carousel from './Carousel.jsx';
import Description from './Description.jsx';

function Restaurant (props) {
      return (
      <div className="Restaurant" >
        < Carousel data={props.data}  />
        < Description data={props.data}  click={props.click}/>
      </div>
      )
  }

  export default Restaurant;