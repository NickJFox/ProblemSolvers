import React, { useState } from 'react';
import './Card.css';
import Str from './Str';
import Post from '/Users/nickfox/Desktop/Coding/CodeAcademy/Reddit Project/reddit/src/features/Post/Post.jsx';

function Card() {
  const [content, setContent] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addStr = str => {
    if (!str.text || /^\s*$/.test(str.text)) {
      return;
    }

    // Adding count property to each str object
    const newStr = { ...str, count: 0 };

    const newContent = [newStr, ...content];

    // Sorting the content array based on count in descending order
    newContent.sort((a, b) => b.count - a.count);

    setContent(newContent);
    console.log(...content);
  };

  const increment = strId => {
    setContent(prev =>
      prev.map(item => (item.id === strId ? { ...item, count: item.count + 1 } : item))
    );

    // Sorting the content array based on count in descending order after incrementing
    setContent(prev => [...prev].sort((a, b) => b.count - a.count));
  };

  const decrement = strId => {
    setContent(prev =>
      prev.map(item => (item.id === strId ? { ...item, count: item.count - 1 } : item))
    );

    // Sorting the content array based on count in descending order after decrementing
    setContent(prev => [...prev].sort((a, b) => b.count - a.count));
  };

  const updateStr = (strId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setContent(prev => prev.map(item => (item.id === strId ? newValue : item)));

    // Sorting the content array based on count in descending order after updating
    setContent(prev => [...prev].sort((a, b) => b.count - a.count));
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

    // Sorting the content array based on count in descending order after completing
    setContent(updatedContent.sort((a, b) => b.count - a.count));
  };

  // Filter content based on search query
  const filteredContent = content.filter(str =>
    str.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <Post onSubmit={addStr} />
      <Str
        content={filteredContent}
        completeStr={completeStr}
        removeStr={removeStr}
        updateStr={updateStr}
        increment={increment}
        decrement={decrement}
      />
    </>
  );
}

export default Card;
