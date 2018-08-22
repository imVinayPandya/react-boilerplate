import React from 'react';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClicked = this.handleClicked.bind(this);
  }

  handleClicked(e) {
    e.preventDefault();
    console.log('clicked');
  }

  render() {
    return (
      <div>
        <h1>Welcome to react world</h1>
        <button type="submit" onClick={this.handleClicked}>Click here</button>
      </div>
    );
  }
}

export default App;
