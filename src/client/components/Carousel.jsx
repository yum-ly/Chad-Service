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
        <img src="https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?cs=srgb&dl=animal-dog-maltese-33053.jpg&fm=jpg" />
        {/* <Slider {...settings}> */}
          {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider> */}
      </div>
    );
  }
}

  export default Carousel;