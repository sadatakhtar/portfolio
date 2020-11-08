import React from 'react'
import './SideBar.css';

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar_title">
            <h2>Menu</h2>
            </div>
            <hr className="hr"/>
            <div className="sidebar_list">
            <p><a href="https://www.google.com">Projects</a></p>
            <p><a href="https://www.google.com">CV</a></p>
            <p><a href="https://www.google.com">About</a></p>
            <p><a href="https://www.google.com">Contact</a></p>
            </div>
            <hr className="hr"/>
           
           
        </div>
    )
}

export default SideBar
