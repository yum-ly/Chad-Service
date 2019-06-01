import React from 'react';
import ReactDOM from 'react-dom';
import Recommendation from './Recommendation.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYenSign, faStar } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faYenSign, faStar);

class App extends React.Component {

    render () {
      return (
      <div className="AppChad">
        <hr  />
        <div id='nearby'>More Places Nearby</div>
        < Recommendation />
      </div>
      )}
  }

  export default App;