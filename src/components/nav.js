import React from 'react';
import $ from 'jquery'; 
window.onload = function() {
  if (window.jQuery) {  
    main()
  } else {

  }
}

function main() {


  
}

function App() {
  return (
<div className="App">
      <header class="App-header">
      <nav class="navbar navbar-expand-sm " id="navbarM">
      <div class="" id="navbarTogglerDemo01">      
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <a class="navbar-brand" href="/">Home</a>
          <li class="nav-item">
            <a class="nav-link" href="/test" id="navI"><b>Demo</b></a>            
          </li>              
          <li class="nav-item">
            <a class="nav-link" href="/trainings" id="navI">Trainings</a>            
          </li>              
        </ul>
      </div>        
      </nav>
      </header>
    </div>
  );
}

export default App;
