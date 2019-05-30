import React from 'react';
import ReactDOM from 'react-dom';
import Recommendation from './Recommendation.jsx';

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