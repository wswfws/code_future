import Header from "./head";
import Carusel from "./slider";
import BookCard from "./cards";
import Feedback from "./feeetback";
import Footer from "./footer";
import './App.css';
import React, {useState} from "react";
import {CountProvider} from "./count";

function App() {

  const [Count, setCount] = useState(0);
  return (
    <div className="App">
        <CountProvider value={{c:Count, sc:setCount}}>
          <Header />
          <Carusel />
          <Feedback  className="feedback"/>
          <BookCard />
          <Footer className="footer" />
        </CountProvider>
        
    </div>
  );
}

export default App;
