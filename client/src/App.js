import React, { Component } from 'react';
import Jumbo from './Jumbo';
import CharactersContainer from './CharactersContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Jumbo />
        <CharactersContainer />
      </div>
    );
  }
}

export default App;
