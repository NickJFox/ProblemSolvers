import React, { useState } from 'react';
import Header from './features/Header/Header';
import Card from './components/Card/Card.jsx';
import Subreddit from './features/Subreddits/Subreddits';
import Comment from './features/Comment/Comment.jsx';
import useNode from './hooks/useNode.js';
import './App.css';

const comments = {
  id: 1,
  items: []
};

function App() {

  const [commentsData, setCommentsData] = useState(comments);
  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };

  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
  };

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  };

  return (
    <div>
      <Header />
      <main>
        <div className='Cards'>
            <div className='PostContent'>
        <Card />
        <Comment 
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        handleEditNode={handleEditNode}
        comment={commentsData} />
           </div>
        <Subreddit />
        </div>
      </main>
    </div>
  );
}

export default App;