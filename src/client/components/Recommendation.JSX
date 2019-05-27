import React from 'react';
import ReactDOM from 'react-dom';
import Restaurant from './Restaurant.jsx';

function Recommendation (props) {
      return (
        <div className="Recommendation">
            <h2>Recommendation component</h2> 
            <h3>More Japanese Near Ni-Kome</h3> 
            {/* bootstrap below  */}
            <div class="container">
              <div class="row">
                <div class="col-sm">
                < Restaurant />
                </div>
                <div class="col-sm">
                < Restaurant />                
                </div>
                <div class="col-sm">
                < Restaurant />                
                </div>
                <div class="col-sm">
                < Restaurant />                
                </div>
                <div class="col-sm">
                < Restaurant />                
                </div>
                <div class="col-sm">
                < Restaurant />                
                </div>
              </div>
            </div>
        </div>
      )
  }

  export default Recommendation;