import React from 'react';
import $ from 'jquery'; 
import Nav from '../../components/nav'
import php from './php/index.php';

var domain = "https://fitnessscribe.s3.eu-central-1.amazonaws.com";
var transcript = `${domain}/demos/transcript.json`

window.onload = function() {
  if (window.jQuery) {  
    main()
  } else {
      // jQuery is not loaded
      alert("Jquery Doesn't Work");
  }
}


function process(inf) {
    for(var item in inf){
        console.log(inf[item]["path"])
        
        let code = `
        <div class="row">
        <div class="col-sm-7">
        <video width="100%" id="">
          <source src="https://fitnessscribe.s3.eu-central-1.amazonaws.com/demos/${inf[item]["name"]}/video.mp4" type="video/mp4">
        </video>
        </div>
        <div class="col-sm-5" id="abt">
        <h2>${inf[item]["name"]}</h2>
        <b>Trainer: </b>${inf[item]["author"]} <br>
        <a href="/ts?q=${inf[item]["name"]}">Exercise Script</a>
        <a></a>
        </div>
        </div>
        <hr>

        `
        $("#classes").append(code)
    }

}
function main() {

    fetch(transcript)    
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        process(data[0])
    })
    .catch(err => {
        console.log(err);
    })
}

function train() {
  return (
    <div class="container">
        <Nav></Nav>
        <div class="container" id=''>
          <div id="classes">

          </div>

        </div>
    </div>
  );
}

export default train;
