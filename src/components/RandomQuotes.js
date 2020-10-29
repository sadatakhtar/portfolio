import React from 'react'
import './RandomQuotes.css';

function RandomQuotes({fetchQuote}) {
    
    const handleClick = () => {
        window.location.reload();  
    }
    return (
        <div className="quotes">
            <div className="quotes_quote">
                <p>"{fetchQuote.quote}"</p>
            </div>
            <div className="quotes_author">
             <p>{fetchQuote.author}</p>
             <button onClick={handleClick}>Click me</button>
            </div>
            
        </div>
    )
}

export default RandomQuotes
