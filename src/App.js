import React from 'react';
import $ from 'jquery'; 
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
      <div class="list" id="lst">

      </div>
    </div>
  );
}

export default App;
