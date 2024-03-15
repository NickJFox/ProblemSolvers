import React from 'react';
import './Subreddits.css'

function Subreddit() {
    return (
    <div className='subredditBox'>
        <div className='subreddit-categories'>
            <p style={{textDecoration: 'underline'}}>Communities</p>
            <a href='/technology'><p>Technology</p></a>
            <a href='/science'><p>Science</p></a>
            <a href='/psychology'><p>Psychology</p></a>
            <a href='/education'><p>Education</p></a>
            <a href='/leadership'><p>Leadership</p></a>
            <a href='/creativity'><p>Creativity</p></a>
            <a href='/environment'><p>Environment</p></a>
            <a href='/social-issues'><p>Social Issues</p></a>
            <a href='/health-wellness'><p>Health & Wellness</p></a>
            <a href='/business-entrepreneurship'><p>Business & Entrepreneurship</p></a>
        </div>
    </div>
    );
}

export default Subreddit;
