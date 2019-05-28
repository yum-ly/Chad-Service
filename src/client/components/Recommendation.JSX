import React from 'react';
import ReactDOM from 'react-dom';
import Restaurant from './Restaurant.jsx';

function Recommendation (props) {
      return (
        <div className="Recommendation">
            <h2>Recommendation component</h2> 
            <h3>More Japanese Near Ni-Kome</h3> 
            {/* bootstrap below  */}
            <div className="container">
                <div className="row">
                  <div className="col">< Restaurant/></div>
                  <div className="col">< Restaurant/></div>
                </div>

            </div>
        </div>
      )
  }

  export default Recommendation;