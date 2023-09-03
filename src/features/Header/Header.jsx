import React from 'react';
import  './Header.css'

function Header() {
    return (
    <div className='header'>
        <img alt="" src="/logo.png"/>
        <h3>REDDIT</h3>
     <div className='search'>
        <input type="text" placeholder='Search Reddit'/>
        <button>Search</button>
     </div>
        
    </div>
);
}

export default Header;