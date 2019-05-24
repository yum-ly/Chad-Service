import React from 'react';
import ReactDOM from 'react-dom';
import Recommendation from './Recommendation.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
      return (
      <div className="App">
        <h2>App component</h2> 
        < Recommendation />
      </div>
      )}
  }

  export default App;