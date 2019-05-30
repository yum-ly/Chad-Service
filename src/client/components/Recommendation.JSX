import React from 'react';
import ReactDOM from 'react-dom';
import Restaurant from './Restaurant.jsx';
import axios from 'axios';


class Recommendation extends React.Component {
      constructor(props) {
            super(props);
            this.state = { 
                  images: [],
                  name:[],
                  bld: [],
                  address: [],
                  foodScore: [],
            };
      }
            
      componentDidMount(){
            this.handleGetImage();
            this.handleName();
            this.handleBLD();
            this.handleAddress();
            this.handleFoodScore();
      }
            
      // get image 
      handleGetImage () {
            axios.get('/images')
            .then( (response) => {
            // handle success
            this.setState({images: response.data});
            })
            .catch( (error) => {
            // handle error
            console.log('error getting image:', error);
            })
      }
      // get name
      handleName(){
            axios.get('/name')
            .then( (response) => {
            // handle success
            this.setState({name: response.data});
            })
            .catch( (error) => {
            // handle error
            console.log('error getting name:', error);
            })
      }
      // get bld
      handleBLD(){
            axios.get('/bld')
            .then( (response) => {
            // handle success
            this.setState({bld: response.data});
            })
            .catch( (error) => {
            // handle error
            console.log('error getting bld:', error);
            })
      }
      // get address
      handleAddress(){
            axios.get('/address')
            .then( (response) => {
            // handle success
            this.setState({address: response.data});
            })
            .catch( (error) => {
            // handle error
            console.log('error getting address:', error);
            })
      }
      // get foodScore
      handleFoodScore(){
            axios.get('/foodScore')
            .then( (response) => {
            // handle success
            this.setState({foodScore: response.data});
            })
            .catch( (error) => {
            // handle error
            console.log('error getting foodScore:', error);
            })
      }

      render() {
      return (
      <div className="Recommendation">
            {this.state.images.map((img, key) => (
                  <Restaurant pics={img} key={key}/>
            ))}
            {/* DONT BE FANCY AND RENDER EACH RESTAURANT INDIVIDUALLY, PASSING IN ALL THEY NEED FOR STATE */}
      </div>
      )}
  }

  export default Recommendation;