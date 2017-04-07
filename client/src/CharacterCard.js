import React from 'react';

const CharacterCard = (props) =>
  <div className="character-panel">
    <div className="char-header">
      <img className="char-img" src="https://pbs.twimg.com/media/BNuL2NKCYAA0e5W.png" />
      <h2> { props.name } </h2>
    </div>
    <div className="card-info-flex">
      <h3> <span className="info">hair</span> { props.hair_color } </h3>
      <h3> <span className="info">eyes</span> { props.eye_color } </h3>
      <h3> <span className="info">skin</span> { props.skin_color } </h3>
      <h3> <span className="info">gender</span> { props.gender } </h3>
    </div>
  </div>

export default CharacterCard;
