import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import Body from './components/Body';




function App() {
  const [fetchQuote, setFetchQuote] = useState("");
  //const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch('https://quotes-cyf.glitch.me/quotes/random')
    .then(response => {
      return response.json();
    })
    .then(data => {
      //setLoader(true);
      console.log(data);
      setFetchQuote(data);
     // setLoader(false);
     
      
    })
  }, []);
  return  (
    <div className="App">
      <div className="App_container">
      <SideBar />
      <Body fetchQuote={fetchQuote} />
      

      </div>
     
     <Footer />
    </div>
  ) 
}

export default App;
