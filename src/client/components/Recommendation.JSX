import React from 'react';
import ReactDOM from 'react-dom';
import Restaurant from './Restaurant.jsx';
import axios from 'axios';


class Recommendation extends React.Component {
      constructor(props) {
            super(props);
            this.state = { 
                  images: [],
            };
      }
            
      componentDidMount(){
            this.handleGetImage();
      }
            
      // ajax get image request using axios
      handleGetImage () {

            axios.get('/restaurants')
            .then( (response) => {
            console.log(response.data);
            // handle success
            this.setState({images: response.data});
            })
            .catch( (error) => {
            // handle error
            console.log('error getting image for carousel:', error);
            })
      }

      render() {
      return (
      <div className="Recommendation">
            {this.state.images.map((img, key) => (
                  <Restaurant pics={img} key={key}/>
            ))}
      </div>
      )}
  }

  export default Recommendation;