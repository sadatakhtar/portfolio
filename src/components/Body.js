import React from 'react';
import Header from './Header';
import RandomQuotes from './RandomQuotes';
import Main from './Main';
import Icons from './Icons';
import './Body.css';

function Body({fetchQuote}) {
    return (
        <div className="body">
            <Header />
           
            <Main />
            <Icons />
            <RandomQuotes  fetchQuote={fetchQuote}/>
        </div>
    )
}

export default Body
