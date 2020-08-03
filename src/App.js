import React from 'react';
import './App.css';
import List from './components/List';

function App(props) {
  const list = props.store.lists.map((obj, i) => (
    <List key={i} header={obj.header} cards={obj.cardIds} />
  ));
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>{list}</div>
    </main>
  );
}

export default App;
