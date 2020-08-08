import React from 'react';
import './Card.css';

function Card(props) {
  function handleClick(event) {
    props.delete(event.target.id);
  }
  return (
    <div className='Card'>
      <button id={props.id} type='button' onClick={handleClick}>
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}
export default Card;
