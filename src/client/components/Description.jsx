import React from 'react';
import ReactDOM from 'react-dom';


class Description extends React.Component {
 


    render(props){

        return (
            <div className="Description">
            {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, ipsa!</p> */}
            <div>
                <h6>{this.props.data.name}</h6>
                <h6>{this.props.data.bld}</h6>
                <h6>$$</h6>
                <h6>{this.props.data.foodScore}</h6>
                <h6>{this.props.data.address}</h6>


            </div>
        </div>
        )
    }
  }

  export default Description;