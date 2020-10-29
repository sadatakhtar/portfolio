import React from 'react';
import Header from './Header';
import RandomQuotes from './RandomQuotes';
import Main from './Main';
import './Body.css';

function Body({fetchQuote}) {
    return (
        <div className="body">
            <Header />
            <RandomQuotes  fetchQuote={fetchQuote}/>
            <Main />
        </div>
    )
}

export default Body
