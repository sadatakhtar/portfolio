import React from 'react';
import programmer from './programmer.svg';
import './Main.css';

function Main() {
    return (
        <div className="main">
            <div className="main_img">
                <img src={programmer} alt="" />
            </div>
            <div className="main_punchline">
                <h2>Junior Web Developer at CYF</h2>
                <p>Passionate about coding</p>
            </div>
            
        </div>
    )
}

export default Main
