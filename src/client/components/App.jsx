import React from 'react';
import ReactDOM from 'react-dom';
import Recommendation from './Recommendation.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYenSign } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faYenSign);

class App extends React.Component {

    render () {
      return (
      <div className="App">
        <hr  />
        <div id='nearby'>More Breakfast Nearby</div>
        < Recommendation />
      </div>
      )}
  }

  export default App;