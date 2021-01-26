import React from 'react';

import '../styles/App.css';

function App() {
  const leftBrace ="{"
  const rightBrace = "}"
  return (
    <div className="portfolio">
      <header>

          <nav>
            <ul>
              <li>About</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </nav>

      </header>

      <div className="background">
        <div className="helloText">
          <h2>Hi, My name is</h2>
          <h1>Michał.</h1>
          <h2>Nice to meet you</h2>
        </div>
        

        
        <div className="code">  
          <code>
            <div className="codeWindow">

            </div>
            <div className="codeContainer">
              <brace>{leftBrace}</brace><br/>
              <p>"name"</p> : <p>"Michał"</p>,<br/>
              <p>"surname"</p> : <p>"Ostachowski"</p>,<br/>
              <p>"location"</p> : <p>"Cracow/Katowice"</p><br/>
              <brace>{rightBrace}</brace>
            </div>
              
          </code>
          
        </div>
        
      </div>
      <main>

        <div className="about">
          <h5>About</h5>

        </div>

        <div className="technology">
          Technology
        </div>

        <div className="language">
          Language
        </div>

        <div className="hobby">
          hobby
        </div>
        <div className="contact">
          contact
        </div>

      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
