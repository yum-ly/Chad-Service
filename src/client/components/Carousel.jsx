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
          {/* <div>
            {this.props.pics.map((pic) => {
              <img src={pic}/>
            })}
          </div> */}
          <div>
            <img src={this.props.pics[0]}/>
          </div>
          <div>
            <img src={this.props.pics[1]}/>
          </div>
          <div>
            <img src={this.props.pics[2]}/>
          </div>
          <div>
            <img src={this.props.pics[3]}/>
          </div>
          <div>
            <img src={this.props.pics[4]}/>
          </div>
          <div>
            <img src={this.props.pics[5]}/>
          </div>
          <div>
            <img src={this.props.pics[6]}/>
          </div>
          <div>
            <img src={this.props.pics[7]}/>
          </div>
          <div>
            <img src={this.props.pics[8]}/>
          </div>
          <div>
            <img src={this.props.pics[9]}/>
          </div>
        </Slider>
      </div>
    );
  }
}

  export default Carousel;