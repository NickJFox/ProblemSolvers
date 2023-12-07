import React, { useState } from 'react';
import './Post.css';

function Post(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='post-form'>
      {props.edit ? (
        <>
        <div className='post-area'>
          <textarea
            placeholder='Edit Post'
            value={input}
            onChange={handleChange}
            name='text'
            className='post-input edit'
          />
          <button onClick={handleSubmit} className='post-button-edit'>
            Update
          </button>
          </div>
        </>
      ) : (
        <>
        <div className='post-area'>
          <textarea
            placeholder='Write something here'
            value={input}
            onChange={handleChange}
            name='text'
            className='post-input'
          />
          <button onClick={handleSubmit} className='post-button'>
            Post
          </button>
          </div>
        </>
      )}
    </form>
  );
}

export default Post;