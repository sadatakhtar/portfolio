import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import Body from './components/Body';
import LoaderMessage from './components/LoaderMessage';



function App() {
  const [fetchQuote, setFetchQuote] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetch('https://quotes-cyf.glitch.me/quotes/random')
    .then(response => {
      return response.json();
    })
    .then(data => {
      setLoader(true);
      console.log(data);
      setFetchQuote(data);
      
    })
  }, []);
  return loader ? (
    <div className="App">
      <div className="App_container">
      <SideBar />
      <Body fetchQuote={fetchQuote} />
      

      </div>
     
     <Footer />
    </div>
  ) : <LoaderMessage />
}

export default App;
