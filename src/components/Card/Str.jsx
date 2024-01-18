import React, { useState } from 'react';
import Post from '/Users/nickfox/Desktop/Coding/CodeAcademy/Reddit Project/reddit/src/features/Post/Post.jsx';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Str = ({ content, completeStr, removeStr, updateStr, increment, decrement }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateStr(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <Post edit={edit} onSubmit={submitUpdate} />;
  }

  return content.map((str, index) => (
    <div
      className={str.isComplete ? 'row complete' : 'row'}
      key={index}
    >
      <div key={str.id} onClick={() => completeStr(str.id)}>
        {str.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeStr(str.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: str.id, value: str.text })}
          className='edit-icon'
        />
        <button onClick={() => increment(str.id)}>+</button>
        <span>{str.count}</span>
        <button onClick={() => decrement(str.id)}>-</button>
      </div>
    </div>
  ));
};

export default Str;