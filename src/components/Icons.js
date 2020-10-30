import React from 'react';
import js from './js.png';
import node from './node.jpeg';
import html from './html.png';
import git from './git.jpeg';
import react from './react.png';
import './Icons.css';

function Icons() {
    return (
        <div className="icons">
            <div className="icons_container">
                <img src={js} alt="js" />
                <img src={html} alt="html" />
                <img className="node" src={node} alt="node" />
                <img src={git} alt="git" />
                <img src={react} alt="react" />
            </div>
            
        </div>
    )
}

export default Icons
