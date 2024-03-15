import React from 'react';
import SearchBar from './SearchBar';
import './Header.css';

function Header({ searchQuery, setSearchQuery }) {

  return (
    <div className='header'>
      <a href="/">
        <img alt="" src="/ProblemSolversLogo.jpg"/>
      </a>
      <a href="/">
      <h3>ProblemSolvers</h3>
      </a>
      <div className='search'>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
    </div>
  );
}

export default Header;
