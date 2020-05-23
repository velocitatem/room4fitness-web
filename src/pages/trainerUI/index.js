import React from 'react';
import $ from 'jquery'; 
import Nav from '../../components/nav'
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

var exercise = []
var start = []
var end = []
var about = []
var reps = []
var note = []

var count= 0
var file = ``
var parts = []
function addMeta() {
  exercise.push($("#exerciseName").val())
  start.push([$("#startMin").val(), $("#startSec").val()])
  end.push([$("#endMin").val(), $("#endSec").val()])
  about.push($("#aboutExercise").val())
  reps.push($("#reps").val())
  note.push($("#exerciseNotes").val())

    count+=1
    let temp = `Exercise #${count} added <br>`
    file+=temp
    $("#exerciseName").val("") 
    $("#startMin").val("") 
    $("#startSec").val("") 
    $("#endMin").val("") 
    $("#endSec").val("") 
    $("#aboutExercise").val("") 
    $("#reps").val("") 
    $("#exerciseNotes").val("") 

    console.log(file)
    $("#listOI").append(temp)
}
var gen = ``
function GenerateMeta() {
  var tbl = {exercise, start, end, about, reps, note}
  console.table({exercise, start, end, about, reps, note})
  let index = 0
  var afix = ""

  for(var Ex=0;Ex<exercise.length-1;Ex++){
    index+=1
    let code = `
    <pre>
      "${Ex}": {
        "exercise": "${exercise[Ex]}",
        "start": {
            "min": ${start[Ex][0]},
            "sec": ${start[Ex][1]}
        },
        "end": {
            "min": ${end[Ex][0]},
            "sec": ${end[Ex][1]}
        },
        "about": "${about[Ex]}",
        "reptitions": "${reps[Ex]}",
        "note": "${note[Ex]}"

      },
      </pre>
    `
    gen+=code
  }

  var E = index
  let code = `
  <pre>
    "${E}": {
      "exercise": "${exercise[E]}",
      "start": {
          "min": ${start[E][0]},
          "sec": ${start[E][1]}
      },
      "end": {
          "min": ${end[E][0]},
          "sec": ${end[E][1]}
      },
      "about": "${about[E]}",
      "reptitions": "${reps[E]}",
      "note": "${note[E]}"

    }
    </pre>
  `
  gen+=code


  var res = `
  <pre>
  [{ 
    ${gen} 
  }]
  </pre>
  `
  $("#listOI").html(res)

}
function upload() {
  var link = "http://localhost:5000/file/s3/upload/"
  const opt = {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  }

  function getData(link, opt) {

    fetch(link, opt)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
      })
      .catch(err => {
        console.log(err);
      })
  }
}
function nameE() {
  var settings = {
    "url": window.location.origin+"/filename",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({"name":$("#ExName").val()}),
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
var domain = "https://fitnessscribe.s3.eu-central-1.amazonaws.com";
var transcript = `${domain}/demos/transcript.json`
function deploy() {
  fetch(transcript)    
  .then((response) => {
      return response.json();
  })
  .then((data) => {
      console.log(data)
      let crop = data[0]
      var trans = ``
      var transLength = 0
      for (var item in crop) {
        transLength+=1
      }
      for (var sc=0;sc<transLength;sc++) {

          let temp = crop
          let meta= `
          "${sc}": {
            "path": "${temp[sc]["path"]}",
            "name": "${temp[sc]["name"]}",
            "author": "${temp[sc]["author"]}"
        },
          `
          trans += meta
          console.log("old PROC")
      }

      let metaPlus= `
      "${transLength}": {
        "path": "/demos/${$("#ExName").val()}/video.mp4",
        "name": "${$("#ExName").val()}",
        "author": "${$("#username").val()}"
    }
      `
      trans += metaPlus

      let result  = `
      {"content": { "0": [{${trans}}]}}
      `
      console.log(result)

      var settings = {
        "url": window.location.origin+"/deploy",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": result,
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });

  })
  .catch(err => {
      console.log(err);
  })
}
function Tui() {
  return (
    <div class="container">
      <Nav></Nav>
      <div class="">
        <div class="">
            <div class="row">
              <a href="#gen">
                Generate Data
              </a>
              |
              <a href="#upload">
                upload
              </a>
            </div>
            <div class="row" id="gen">
                <div class="col-sm-12">
                    <div>

                    </div>
                    <div id="trackRecord">
                        <br></br>
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Exercise Name</span>
                        </div>
                                <input type="Exercise" id='exerciseName' class="form-control"></input>   
                        </div>
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">About exercise</span>
                        </div>
                                <textarea class="form-control" id="aboutExercise"></textarea>                                
                        </div>
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Exercise reptitions</span>
                        </div>
                                <input class="form-control" type="text" placeholder="x resp with x sets" id="reps"></input>                         
                        </div>
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Notes</span>
                        </div>
                                <textarea class="form-control" id="exerciseNotes"></textarea>                       
                        </div>
                        
                        <h3>start</h3>
                        <input class="form-control" type="number" placeholder="minute" id="startMin"></input>
                        <input class="form-control" type="number" placeholder="second" id="startSec"></input>
                        <h3>end</h3>
                        <input class="form-control" type="number" placeholder="minute" id="endMin"></input>
                        <input class="form-control" type="number" placeholder="second" id="endSec"></input> 
                        <br></br>
                        <input onClick={addMeta} type="button" class="form-control" id="subm" value="Add Data"></input>


                     
                                     


                    </div>

                </div>

            </div>
                <hr></hr>
            <div class="row">

                <div class="col-lg-12">
                <input onClick={GenerateMeta} type="button" class="form-control" id="subm" value="Generate"></input>

                  <div width="100%" class="form-control" id="listOI">
                  </div>
                </div>

            </div>
            <div class="row" id="upload">
              <div class="col-lg-12">
                <h1 id="essQ">Upload Trainer Video To Database</h1>
                  <input type="text" name="name" id="ExName" class="form-control" placeholder="Workout name"></input>
                  <input type="button" onClick={nameE} class="form-control" value="Add Exercise Name"/>
                <form action="/uploadfile" enctype="multipart/form-data" method="POST"> 
                <b>Upload Video Script</b>
                  <input type="file" class="form-control" name="myFile" />
                  <input type="submit" class="form-control" value="Upload a file"/>
                </form>

                <form action="/uploadvideo" enctype="multipart/form-data" method="POST"> 
                  <b>Upload Video</b>
                  <input type="file" class="form-control" name="myVideo" />
                  <input type="submit" class="form-control" value="Upload a file"/>
                </form>
                  
                <form action="/deploy" enctype="multipart/form-data" method="POST"> 
                  <input type="text" name="userName" id="username"></input>
                  
                  <input type="button" value="Deploy" onClick={deploy}></input>
                </form>

              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Tui;
