import React, { useState } from 'react';
import Post from '/Users/nickfox/Desktop/Coding/CodeAcademy/Reddit Project/reddit/src/features/Post/Post.jsx';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";



const Str = ({ content, completeStr, removeStr, updateStr, increment, decrement }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    const strToUpdate = content.find(str => str.id === edit.id);
    updateStr(edit.id, { ...value, count: strToUpdate.count });
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

        <IoIosArrowUp 
        onClick={() => increment(str.id)}
        style={{ color: str.count > 0 ? 'green' : 'black'}}
        />

        <span>{str.count}</span>

        <IoIosArrowDown
        onClick={() => decrement(str.id)}
        style={{ color: str.count < 0 ? 'red' : 'black' }}
        />

      </div>
    </div>
  ));
};

export default Str;