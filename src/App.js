import React from 'react';
import $ from 'jquery'; 
import Nav from './components/nav'
window.onload = function() {
  if (window.jQuery) {  
    main()
  } else {
      // jQuery is not loaded
      alert("Jquery Doesn't Work");
  }
}

function main() {


  
}

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div class="">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <center>
                <h1>room4fitness</h1>
              </center>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5">
              IMAGE
            </div>
            <div class="col-sm-7">
              SOME TEXT
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
