import React, { useState, useEffect } from 'react';
import './App.css';
import List from './components/List';
import AddCard from './components/AddCard';
App.defaultProps = {
  store: {
    allCards: {},
    lists: [],
  },
};
function App(props) {
  const initStore = props.store;
  const [lastClicked, setlastClicked] = useState('');
  const [store, setStore] = useState({
    lists: [],
    allCards: {},
  });

  useEffect(() => {
    setStore(initStore);
  }, [lastClicked]);

  function newRandomCard(event) {
    console.log(event);
    const id =
      Math.random().toString(36).substring(2, 4) +
      Math.random().toString(36).substring(2, 4);
    initStore.allCards[id] = {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    };
    initStore.lists[event].cardIds.push(id);
    setlastClicked(id);
  }
  function newCardForm(list, title, content) {
    const id =
      Math.random().toString(36).substring(2, 4) +
      Math.random().toString(36).substring(2, 4);
    initStore.allCards[id] = {
      id,
      title: title,
      content: content,
    };
    initStore.lists[list].cardIds.push(id);
    setlastClicked(id);
  }
  function handleDelete(event) {
    delete initStore.allCards[event];
    initStore.lists.map((list) =>
      list.cardIds.splice(list.cardIds.indexOf(event), 1)
    );
    setlastClicked(event);
  }

  function list() {
    if (undefined !== store.lists) {
      return (list = store.lists.map((obj, i) => (
        <List
          key={i}
          id={i}
          header={obj.header}
          cards={obj.cardIds.map((id) => store.allCards[id])}
          delete={handleDelete}
          newCard={newRandomCard}
        />
      )));
    }
  }
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {list()}
        <AddCard newCard={newCardForm} />
      </div>
    </main>
  );
}

export default App;
