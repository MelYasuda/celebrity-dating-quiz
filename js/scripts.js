$(document).ready(function() {

$("select#gender").submit(function(event){
  var gender = $("#gender").val();
  var interest = $("#interest").val();
  event.preventDefault();

  // if (gender === A) {          //No option
  //   $("#gender").show("Please make sure all selections have been made.");

if (gender === B) {
  if(interest === B){
    $("img#1person").toggle();
    $(".intro").toggle();
    $("#pairingResult").toggle();
    else if(interest === C){
         $("img#2person").toggle();
         $(".intro").toggle();
         $("#pairingResult").toggle();
     }
   else if(interest === D){
        $("img#3person").toggle();
        $(".intro").toggle();
        $("#pairingResult").toggle();
    }
  }
  // var quote = (100 - age) * 3;
  // if (#gender === 'A')
  // {
  //   prompt('Please enter your selection.')
  // }
  // else if (gender === 'B' && '1')
  //      {
  //        result = "Androgynous Andy"
  //      }
  //  }

  $("#pairingResult").show();
  $("#result").text(result);
});


//
//   if (#gender === optionB) {
//     $('#drinks').show();
//   } else if (age === optionA) {
//     alert("Now don't go crazy!");
//     $('#drinks').show();
//   } else {
//     $('#under-21').show();
//   }
// });
//
//     prompt(result);
});




        // <div id="pairingResult">
        //   <h2>The Result of you answers yields the following Celebrity Pairing</h2>
        //   <select class="form-control">
        //     <option a>Make a selection</option>
        //     <option b>Androgynous Andy</option>
        //     <option c>Scintillating Sam</option>
        //     <option d>Lucious Lex</option>
        //   </select>
