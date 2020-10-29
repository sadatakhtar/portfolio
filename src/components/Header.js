import React from 'react'
import './Header.css';
import code2 from './code2.svg';

function Header() {
    return (
        <div className="header">
            <div className="header_title">
                <div className="header_first_title">
                    <h2>Sadat's</h2>
                </div>
                <div className="header_second_title">
                    <h1>Portfolio</h1>
                </div>
                <div className="header_third_title">
                    <h2>Website</h2>
                </div>

            </div>
            <div className="header_logo">
                <img src={code2} alt="" />
            </div>
        </div>
    )
}

export default Header
