import React from 'react';
import ReactDOM from 'react-dom';
import Restaurant from './Restaurant.jsx';
import axios from 'axios';


class Recommendation extends React.Component {
      constructor(props) {
            super(props);
            this.state = {restaurants: 
                  [],
            };
      }
            
      componentDidMount(){
            this.handleGetImage();
            // this.handleName();
            // this.handleBLD();
            // this.handleAddress();
            // this.handleFoodScore();
      }

      handleClick(e) {
            console.log({e});
      }
            
      // get image 
      handleGetImage () {
            axios.get('http://ec2-52-14-174-92.us-east-2.compute.amazonaws.com/images')
            .then( (response) => {
            // handle success
            this.setState({restaurants: response.data});
            })
            .catch( (error) => {
            // handle error
            console.log('error getting image:', error);
            })
      }
      // // get name
      // handleName(){
      //       axios.get('/name')
      //       .then( (response) => {
      //       let myData = this.state.restaurant;
      //       myData.splice(1, 1, response.data);
      //       // handle success
      //       this.setState({restaurant: myData});
      //       })
      //       .catch( (error) => {
      //       // handle error
      //       console.log('error getting name:', error);
      //       })
      // }
      // // get bld
      // handleBLD(){
      //       axios.get('/bld')
      //       .then( (response) => {
      //       let myData = this.state.restaurant;
      //       myData.splice(2, 1, response.data);
      //       // handle success
      //       this.setState({restaurant: myData});
      //       })
      //       .catch( (error) => {
      //       // handle error
      //       console.log('error getting bld:', error);
      //       })
      // }
      // // get address
      // handleAddress(){
      //       axios.get('/address')
      //       .then( (response) => {
      //       let myData = this.state.restaurant;
      //       myData.splice(3, 1, response.data);
      //       // handle success
      //       this.setState({restaurant: myData});
      //       })
      //       .catch( (error) => {
      //       // handle error
      //       console.log('error getting address:', error);
      //       })
      // }
      // // get foodScore
      // handleFoodScore(){
      //       axios.get('/foodScore')
      //       .then( (response) => {
      //       let myData = this.state.restaurant;
      //       myData.splice(4, 1, response.data);
      //       // handle success
      //       this.setState({restaurant: myData});
      //       })
      //       .catch( (error) => {
      //       // handle error
      //       console.log('error getting foodScore:', error);
      //       })
      // }

      render() {
      return (
      <div className="Recommendation">
            {this.state.restaurants.map((data, key) => (
                  <Restaurant data={data} key={key} click={this.handleClick.bind(this)}/>
            ))}
            {/* < Restaurant images={this.state.restaurant}/>  */}
            {/* < Restaurant images={this.state.images}/> 
            < Restaurant images={this.state.images}/> 
            < Restaurant images={this.state.images}/> 
            < Restaurant images={this.state.images}/> 
            < Restaurant images={this.state.images}/>  */}
      </div>
      )}
  }

  export default Recommendation;