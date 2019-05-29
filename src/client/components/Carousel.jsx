import React from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";

class Carousel extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="Carousel">
        <Slider {...settings}> 
          <div>
            <img src="https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?cs=srgb&dl=animal-dog-maltese-33053.jpg&fm=jpg"/>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?cs=srgb&dl=animal-dog-maltese-33053.jpg&fm=jpg"/>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?cs=srgb&dl=animal-dog-maltese-33053.jpg&fm=jpg"/>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?cs=srgb&dl=animal-dog-maltese-33053.jpg&fm=jpg"/>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?cs=srgb&dl=animal-dog-maltese-33053.jpg&fm=jpg"/>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?cs=srgb&dl=animal-dog-maltese-33053.jpg&fm=jpg"/>
          </div>
        </Slider>
      </div>
    );
  }
}

  export default Carousel;