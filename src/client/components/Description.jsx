import React from 'react';
import ReactDOM from 'react-dom';


class Description extends React.Component {
 


    render(props){

        return (
            <div className="Description">
            {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, ipsa!</p> */}
            <div>
                <div id='name'>{this.props.data.name}</div>
                <div id='bld'>{this.props.data.bld} <span>&#183;</span> $$</div>
                {/* <div id='money'>$$</div> */}
                {/* <div>{this.props.data.foodScore}</div> */}
                <div id='address'>{this.props.data.address}</div>
                <div id='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, repellat.</div>


            </div>
        </div>
        )
    }
  }

  export default Description;