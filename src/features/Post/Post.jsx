import React, { useState } from 'react';
import './Post.css';


function Post(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const timestamp = new Date(); // Get the current timestamp

    if (props.edit) {
      props.onSubmit({
        id: props.edit.id,
        text: input,
        timestamp: props.edit.timestamp // Preserve the original timestamp when editing
      });
    } else {
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input,
        timestamp: timestamp // Include the current timestamp when posting a new comment
      });
    }

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
