import React from 'react';

import '../styles/App.css';

function App() {
  const leftBrace ="{"
  const rightBrace = "}"
  return (
    <div className="portfolio">
      <header>
          <h2>Michał Ostachowski</h2>

          <nav>
            <ul>
              <li>About</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </nav>

      </header>

      <div className="background">
        <h2>Hi, My name is</h2>
        <h1>Michał.</h1>

        
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
          
        </div>

        <div className="language">
          
        </div>

        <div className="hobby">
          
        </div>
        <div className="contact">
          
        </div>

      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
