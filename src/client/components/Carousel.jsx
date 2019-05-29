import React from 'react';
import Slider from "react-slick";
import axios from 'axios';

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = { img: [null, null, null, null, null, null] }
  }

  componentDidMount(){
    this.handleGetImage();
  }

  // ajax get image request 
  handleGetImage () {

    axios.get('/restaurants')
    .then( (response) => {
      // handle success
      console.log('success carousel image get:', response.data);
      this.setState({img: [response.data]});
      return response.data;
    })
    .catch( (error) => {
      // handle error
      console.log('error getting image for carousel:',error);
    })
  }

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
            <img src={this.state.img[0]}/>
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