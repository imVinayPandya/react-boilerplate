import React from 'react';
import './App.scss';
class App extends React.Component {

  handleClicked = evt => console.log('clicked', evt);

  render() {
    return (
      <div>
        <h1>Welcome to react world</h1>
        <button onClick={this.handleClicked}>Click here</button>
      </div>
    );
  }
}

export default App;