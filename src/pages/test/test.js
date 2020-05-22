import React from 'react';
import $ from 'jquery'; 
import Nav from '../../components/nav'

var video = "https://fitnessscribe.s3.eu-central-1.amazonaws.com/demos/demo1/video.mp4"
var desc = ""
fetch("https://fitnessscribe.s3.eu-central-1.amazonaws.com/demos/demo1/video.mp4.json") 
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data[0])
  desc = data
  main(data[0])
})
.catch(err => {
  console.log(err);
})
//var video = link
$(document).on('click', 'video', function(){
    if (this.paused) {
        this.play();
    } else {
        this.pause();
    }
});
function main(data) {    
    console.log(data)

    for(var e in data) {
        let temp = data[e]
        let startT = (temp["start"]["min"] * 60) + (temp["start"]["sec"])
        let endT = (temp["end"]["min"] * 60) + (temp["end"]["sec"])
        let trim = `#t=${startT},${endT}` //form #t=10,20
        console.log(`${video}${trim}`)
        let res = `
        <div id='exercise#${e}' class="row">
        <div class="col-sm-7">
        <video width="100%" id="${temp["exercise"]}">
            <source src="${video}${trim}" type="video/mp4">
        </video>
        </div>
        <div class="col-sm-5">
        <h2>${temp["exercise"]}</h2>        
        <p>
        <b>Duration: </b>${(endT-startT)} seconds <br>
        <b>About:</b>
        ${temp["about"]} <br>
        <b>Reptitions:</b>
        ${temp["reptitions"]} <br>
        <b>Note:</b>
        ${temp["note"]} <br>
        </p>
        </div>
        </div>
        `
        $("#listDEMO").append(res)
    }  
    
}
function test() {
  return (    
    <div class="container">
      <Nav></Nav>
      <div class="">
          <h1>Exercise transcript DEMO</h1>
          <hr></hr>
          <div id="listDEMO">

          </div>
      </div>
    </div>
  );
}
export default test;
