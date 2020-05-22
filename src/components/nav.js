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

        <nav class="navbar sticky-top navbar-dark bg-primary">
            <a class="navbar-brand" href="/"><b>room4fitness</b></a>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="/test">test</a>
                </li>
            </ul>
        </nav>
  );
}

export default App;
