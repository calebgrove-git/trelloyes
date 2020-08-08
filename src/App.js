import React, { useState, useEffect } from 'react';
import './App.css';
import List from './components/List';
App.defaultProps = {
  store: {
    allCards: {},
    lists: [],
  },
};
function App(props) {
  console.log('rendered');
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
    const id =
      Math.random().toString(36).substring(2, 4) +
      Math.random().toString(36).substring(2, 4);
    initStore.allCards[id] = {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    };
    initStore.lists[event].cardIds.push(id);
    setlastClicked(event);
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
      <div className='App-list'>{list()}</div>
    </main>
  );
}

export default App;
