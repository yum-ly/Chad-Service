import React from 'react';
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
      }

      handleClick(uuid) {
            console.log('chad uuid:', uuid);
            console.log('chad props:', this.props);
            
            this.props.uuidMaker(null, uuid);
            // window.onbeforeunload = function(){ window.scrollTo(0,0); }
            this.handleGetImage();
            this.handleScrollTOP();
      }

      handleScrollTOP () {
            window.scrollTo(0, 0);
      }
            
      // get data 
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

      render() {
      return (
      <div className="Recommendation">
            {this.state.restaurants.map((data, key) => (
                  <Restaurant data={data} key={key} click={this.handleClick.bind(this)}/>
            ))}
      </div>
      )}
  }

  export default Recommendation;