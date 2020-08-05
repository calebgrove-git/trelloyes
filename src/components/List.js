import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
  const cards = props.cards.map((card, i) => (
    <Card key={card.id} title={card.title} content={card.content}></Card>
  ));
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {cards}
        <button type='button' className='List-add-button'>
          + Add Random Card
        </button>
      </div>
    </section>
  );
}
export default List;
