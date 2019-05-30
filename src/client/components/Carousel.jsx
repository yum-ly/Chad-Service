import React from 'react';
import Slider from "react-slick";

class Carousel extends React.Component {

  render(props) {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="Carousel">
        <Slider {...settings}> 
            {this.props.data.images.map((img, key) => {
              return <div key={key}><img src={img}/></div>
            })}
        </Slider>
      </div>
    );
  }
}

  export default Carousel;