import React from 'react';
import SearchBar from './SearchBar';
import './Header.css';

function Header({ searchQuery, setSearchQuery }) {

  return (
    <div className='header'>
      <img alt="" src="/logo.png"/>
      <h3>REDDIT</h3>
      <div className='search'>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
    </div>
  );
}

export default Header;
