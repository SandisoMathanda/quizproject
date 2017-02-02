var fire = 0
var air = 0
var water = 0
var earth = 0
var notABender = 0





function checkAnswer(currentSelection) {
  if (currentSelection == "water") {
    water += 1
  }
  else if (currentSelection == "earth") {
    earth += 1
  }
  else if (currentSelection == "fire") {
    fire += 1
  }
  else if (currentSelection == "air")  {
    air += 1
  }

}

 //for (var q = 1; q < 12; q++ ) {
  // console.log(q)

// }



function submitQuiz() {
  var currentSelection = document.querySelector("input[name='q1']:checked").value;
  checkAnswer(currentSelection)
  console.log(currentSelection)
  var currentSelection = document.querySelector("input[name='q2']:checked").value;
  checkAnswer(currentSelection)
  console.log(currentSelection)
  var currentSelection = document.querySelector("input[name='q3']:checked").value;
  checkAnswer(currentSelection)
  console.log(currentSelection)
  var currentSelection = document.querySelector("input[name='q4']:checked").value;
  checkAnswer(currentSelection)
  console.log(currentSelection)
  var currentSelection = document.querySelector("input[name='q5']:checked").value;
  checkAnswer(currentSelection)
  console.log(currentSelection)
  var currentSelection = document.querySelector("input[name='q6']:checked").value;
  checkAnswer(currentSelection)
  console.log(currentSelection)
  var currentSelection = document.querySelector("input[name='q7']:checked").value;
  checkAnswer(currentSelection)
  console.log(currentSelection)
  var currentSelection = document.querySelector("input[name='q8']:checked").value;
  checkAnswer(currentSelection)
  console.log(currentSelection)
  var currentSelection = document.querySelector("input[name='q9']:checked").value;
  checkAnswer(currentSelection)
  console.log(currentSelection)
  var currentSelection = document.querySelector("input[name='q10']:checked").value;
  checkAnswer(currentSelection)
  console.log(currentSelection)
  var currentSelection = document.querySelector("input[name='q11']:checked").value;
  checkAnswer(currentSelection)
  console.log(currentSelection)


var typeOfBender  = Math.max(earth, air, fire, water)
var bender = "the avatar!"

console.log(typeOfBender)

 if (typeOfBender == (water && air))
{
  console.log("You are the avatar!")
  //document.getElementById("result").innerHtml = "You are the avatar!"


}

else if (typeOfBender == (water && fire))
{
 console.log("You are the avatar!")
 //document.getElementById("result").innerHtml = "You are the avatar!"

}

else if (typeOfBender == (water && earth))
{
 console.log("You are the avatar!")
 //document.getElementById("result").innerHtml = "You are the avatar!"

}

else if (typeOfBender == (air && fire))
{
 console.log("You are the avatar!")
 //document.getElementById("result").innerHtml = "You are the avatar!"

}

else if (typeOfBender == (air && earth))
{
 console.log("You are the avatar!")
 //document.getElementById("result").innerHtml = "You are the avatar!"

}

else if (typeOfBender == (fire && earth))
{
 console.log("You are the avatar!")
 //document.getElementById("result").innerHtml = "You are the avatar!"

}
else if ( typeOfBender == fire )
{
  console.log("firebender")
//  document.getElementById("result").innerHtml = "You are a firebender!"
bender = "a firebender!"
}

else if ( typeOfBender == air ) {
  console.log("airbender")
//  document.getElementById("result").innerHtml = "You are an airbender!"
bender = "an airbender!"
}

else if (typeOfBender == water) {
  console.log("waterbender")
  //document.getElementById("result").innerHtml = "You are a waterbender!"
  bender = "a waterbender!"
}

else {
  console.log("Sorry you are not a bender")
  bender = "not a bender. ): Sorry dude but you can still be cool."
}

document.getElementById("result").textContent = "You are  " + bender 

}
