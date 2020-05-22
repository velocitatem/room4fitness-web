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
    <div class="container">
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
            <div class="col-sm-8">
              <img width="100%" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmissysfamilyrestaurantri.com%2Fwp-content%2Fuploads%2F2018%2F11%2Fexercise-for-weight-loss-1.jpg&f=1&nofb=1" id="im"></img>
            </div>
            <div class="col-sm-4">
              
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
