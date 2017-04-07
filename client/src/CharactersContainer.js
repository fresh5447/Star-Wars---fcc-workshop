import React, { Component } from 'react';
import Spinner from './Spinner';
import CharactersList from './CharactersList';

class CharactersContainer extends Component {

  state = {
    characters: undefined
  }

  componentDidMount = () => this.fetchCharacters()

  fetchCharacters = () =>
    fetch('/api/starwars')
      .then(blob => blob.json())
      .then(characters => this.setState({ characters }))
      .catch(e => e)

  render(){
     return (
       <div>
        { this.state.characters ? <CharactersList chars={this.state.characters}/> : <Spinner />  }
       </div>
     )
  }

}


export default CharactersContainer;
