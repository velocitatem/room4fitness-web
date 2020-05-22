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
var count= 0
var file = ``
var parts = []
function addMeta() {
    let temp = `
    <div class="row">
    <pre>
    "${count}": {
        "exercise": "${$("#exerciseName").val()}",
        "start": {
            "min": ${$("#startMin").val()},
            "sec": ${$("#startSec").val()}
        },
        "end": {
            "min": ${$("#endMin").val()},
            "sec": ${$("#endSec").val()}
        },
        "about": "${$("#aboutExercise").val()}",
        "reptitions": "${$("#reps").val()}",
        "note": "${$("#exerciseNotes").val()}"
    
    },    
    </pre>
    </div>
    `
    count+=1
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

function Tui() {
  return (
    <div class="container">
      <Nav></Nav>
      <div class="">
        <div class="">
            <div class="row">
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
                        <input onClick={addMeta} type="button" class="form-control" value="Add Data"></input>


                     
                                     


                    </div>

                </div>

            </div>
            <div class="row">
                <br></br>
                 <div class="col-lg-12" id="listOI">

                 </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Tui;
