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
      alert("Something went wrong - Jquery Doesn't Work !check import!");
  }
}
$(document).on('click', 'video', function(){
    if (this.paused) {
        this.play();
    } else {
        this.pause();
    }
});
function main() {    
    console.log(data)
    for(var e in data) {
        let temp = data[e]
        let startT = (temp["start"]["min"] * 60) + (temp["start"]["sec"])
        let endT = (temp["end"]["min"] * 60) + (temp["end"]["sec"])
        let trim = `#t=${startT},${endT}` //form #t=10,20
        console.log(`${video}${trim}`)
        let res = `
        <h2>${temp["exercise"]} - ${(endT-startT)} seconds</h2>
        <video width="100%" id="${temp["exercise"]}">
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
