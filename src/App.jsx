import React from 'react';
import Header from './features/Header/Header';
import Card from './components/Card/Card.jsx';
import Subreddit from './features/Subreddits/Subreddits';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <main>
        <div className='Cards'>
        <Card />
        <Subreddit />
        </div>
      </main>
    </div>
  );
}

export default App;