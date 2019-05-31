import React from 'react';
import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Description extends React.Component {
    randomPrice () {
        let money = ' $';
        let randNum = Math.ceil(Math.random() * 4);
        let i = 1;
        while(i < randNum){
            money+= '$';
            i++;
        }
        return money;
    }

    render(props){

        return (
            <div className="Description">
            {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, ipsa!</p> */}
            <div>
                <div id='name'>{this.props.data.name}</div>
                <div id='bld'>{this.props.data.bld} <span>&#183;</span> {this.randomPrice()} <span>&#183;</span> {this.props.data.address}</div>
                {/* <div id='money'>$$</div> */}
                {/* <div>{this.props.data.foodScore}</div> */}
                {/* <div id='address'>{this.props.data.address}</div> */}
                <div><FontAwesomeIcon icon="yen-sign" className="icon"/> YUMLY RATED |</div>
                <div id='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, repellat.</div>


            </div>
        </div>
        )
    }
  }

  export default Description;