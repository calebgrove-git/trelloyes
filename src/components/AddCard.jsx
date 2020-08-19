import React, { useState } from 'react';
import './AddCard.css';
export default function AddCard(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [list, setList] = useState(0);
  function newCard(e) {
    e.preventDefault();
    if (document.querySelector('form').reportValidity()) {
      props.newCard(list, title, content);
      setTitle('');
      setContent('');
    }
  }
  return (
    <div className='List' id='newCard'>
      <h2 className='List-Header'>Add New Card</h2>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor='list' className='label'>
          List
        </label>
        <select name='list' onChange={(e) => setList(e.target.value)}>
          <option value='0'>First List</option>
          <option value='1'>Second List</option>
          <option value='2'>Third List</option>
          <option value='3'>Fourth List</option>
        </select>
        <label htmlFor='title' className='label'>
          Title
        </label>
        <input
          type='text'
          name='title'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor='content' className='label'>
          Content
        </label>
        <input
          type='text'
          name='content'
          id='content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button className='submit' onClick={(e) => newCard(e)}>
          Submit
        </button>
      </form>
    </div>
  );
}
