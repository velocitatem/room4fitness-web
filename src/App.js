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
    <div class="container" id='homeContainer'>
      <Nav></Nav>
      <div class="">
        <div class="container">
          <div class="row">
            <div class="col-lg-12" id='cover'>
            </div>
          </div>
          <div class="row" id="initalDescHome">
            <div class="col-sm-4" id="essQ"><h2>Dont Quite Understand An Exercise From a Video?</h2></div>
            <div class="col-sm-4" id="essQ"><h2>Do You Want a Better Explanation Of an Exercise?</h2></div>
            <div class="col-sm-4" id="essQ"><h2>Growing Sick of Basic Exercise Videos?</h2></div>
          </div>
          <br></br>
          <hr></hr>
          <br></br>
          <div class="row">
            <div class="col-lg-12">
              <h1 id="essQ">Use room4fitness!</h1>
              <h4 id="essQ">
                Get in-depth explanations of exercises with video and audio guidence
              </h4>                 
            </div>

          </div>
          <div class="row">
            <div class="col-lg-12">
              <h2 id="essQ"><a href="/trainings">Start Now</a></h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
