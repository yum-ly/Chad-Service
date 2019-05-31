import React from 'react';
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div>
    <div
    
      className={className}
      style={{ ...style, color: 'white', zIndex: "99", marginRight: '34px', opacity: '1'}}
      onClick={onClick}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div>
    <div
      className={className}
      style={{ ...style, color: 'white', zIndex: "99", marginLeft: '24px', opacity: '1'}}
      onClick={onClick}
      />
    </div>
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