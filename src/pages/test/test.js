import React from 'react';
import $ from 'jquery'; 
import video from './demo/video.mp4'
import desc from './demo/desc.json'
var data = desc[0]
window.onload = function() {
  if (window.jQuery) {  
    main()
  } else {
      // jQuery is not loaded
      alert("Jquery Doesn't Work");
  }
}

function main() {
    
    console.log(data)
    for(var e in data) {
        let temp = data[e]
        let startT = (temp["start"]["min"] * 60) + (temp["start"]["sec"])
        let endT = (temp["end"]["min"] * 60) + (temp["end"]["sec"])
        let trim = `#t=${startT},${endT}` //form #t=10,20
        console.log(`${video}${trim}`)
        let res = `
        <h2>${temp["exercise"]}</h2>
        <video controls width="100%">
            <source src="${video}${trim}" type="video/mp4">
        </video>
        <p>
        <b>About:</b>
        ${temp["about"]}
        </p>
        `
        $("#list").append(res)
    }
  
}

function test() {
  return (
    <div className="App">
      <div class="wr">
          <h1>list algorithm</h1>
          <hr></hr>
          <div id="list">

          </div>
      </div>
    </div>
  );
}

export default test;
