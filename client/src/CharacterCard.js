import React from 'react';

const CharacterCard = (props) =>
  <div>
    <h1> { props.name } </h1>
    <h3> { props.hair_color } </h3>
    <h3> { props.eye } </h3>
    <h3> { props.skin_color } </h3>
    <h3> { props.gender } </h3>
  </div>

export default CharacterCard;
