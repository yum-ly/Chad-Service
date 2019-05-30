import React from 'react';
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "black", color: 'white' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "black", color: 'white' }}
      onClick={onClick}
    />
  );
}

class Carousel extends React.Component {
  

  render(props) {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
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