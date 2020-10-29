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
            <p>Projects</p>
            <p>CV</p>
            <p>About</p>
            <p>Contact</p>
            </div>
            <hr className="hr"/>
           
           
        </div>
    )
}

export default SideBar
