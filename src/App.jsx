import React from 'react';
import Header from './features/Header/Header';
import Card from './components/Card/Card.jsx';
import CreatePost from './features/Post/Post';
import Subreddit from './features/Subreddits/Subreddits';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <main>
        <div className='Cards'>
            <div className='PostContent'>
        <CreatePost />
        <Card />
           </div>
        <Subreddit />
        </div>
      </main>
    </div>
  );
}

export default App;