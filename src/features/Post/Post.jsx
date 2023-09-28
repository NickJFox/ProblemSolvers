import React, { useState } from 'react';
import './Post.css';

function CreatePost() {
  const [enteredText, setEnteredText] = useState("");
  const [submittedText, setSubmittedText] = useState(null);

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setSubmittedText(enteredText);
    setEnteredText("");
  };

  return (
    <>
      <div className='CreatePost'>
        <textarea
          value={enteredText}
          onChange={textChangeHandler}
        />
        <button className='PostButton' onClick={submitHandler}>Post</button>
      </div>
      {submittedText && <p>You just typed: {submittedText}</p>}
    </>
  );
}

export default CreatePost;
