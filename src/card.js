import React, { useState } from 'react';
import './card.css';

function Card(props) {
  return (
    <div className={`card number${props.title}`} onClick={props.onclick}>
      {props.title}
    </div>
  );
}

export default Card;
