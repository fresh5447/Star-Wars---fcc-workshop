import React, { Component } from 'react';
import Spinner from './Spinner';
import CharactersList from './CharactersList';

class CharactersContainer extends Component {
  state = {
    characters: undefined
  }
  render(){
     return (
       <div>
        { this.state.characters ? <CharactersList /> : <Spinner />  }
       </div>
     )
  }
}


export default CharactersContainer;
