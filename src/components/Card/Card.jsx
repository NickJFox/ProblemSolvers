import React, { useState } from 'react';
import './Card.css';
import Str from './Str';
import Post from '/Users/nickfox/Desktop/Coding/CodeAcademy/Reddit Project/reddit/src/features/Post/Post.jsx';

// todos = content
// todo = str

function Card() {
  const [content, setContent] = useState([]);

  const addStr = str => {
    if (!str.text || /^\s*$/.test(str.text)) {
      return;
    }

    const newContent = [str, ...content];

    setContent(newContent);
    console.log(...content);
  };

  const updateStr = (strId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setContent(prev => prev.map(item => (item.id === strId ? newValue : item)));
  };

  const removeStr = id => {
    const removedArr = [...content].filter(str => str.id !== id);

    setContent(removedArr);
  };

  const completeStr = id => {
    let updatedContent = content.map(str => {
      if (str.id === id) {
        str.isComplete = !str.isComplete;
      }
      return str;
    });
    setContent(updatedContent);
  };

  return (
    <>
      <Post onSubmit={addStr} />
      <Str
        content={content}
        completeStr={completeStr}
        removeStr={removeStr}
        updateStr={updateStr}
      />
    </>
  );
}

export default Card;