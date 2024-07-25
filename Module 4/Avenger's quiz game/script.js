// #1. Display the starting page with onload. 
// #1.1. Hide all questions and the results page elements on the starting page with onload.
// KP: JavaScript OnLoad
// KP: JavaScript Style Display
// KP: JavaScript Waterfall Model (Verbally explain to student the flow of the script.)
function start() {
  document.getElementById("question").style.display = "none";
  document.getElementById("button1").style.display = "none";
  document.getElementById("button2").style.display = "none";
  document.getElementById("button3").style.display = "none";
  document.getElementById("name").style.display = "none";
  document.getElementById("image").style.display = "none";
}

// #2. Create a list of question-and-answer pairs.
// KP: JavaScript Arrays
// KP: JavaScript Nested Arrays
const questions = [
  [
    ["How would you describe yourself?"],
    ["Smart", "Sarcastic", "A Born Leader"]
  ],[
    ["Which of these jobs appeals to you the most?"],
    ["Scientist", "Engineer", "Soldier"]
  ],[
    ["Which of these colours appeals to you the most?"],
    ["Green", "Yellow", "Blue"]
  ],[
    ["Which of these is more important to you?"],
    ["Knowledge", "Money", "Friendship"]
  ],[
    ["Which of these would you do in your spare time?"],
    ["Draw", "Build", "Play"]
  ]
]

// #3. Create a function to change quiz questions.
var questionNumber = 0;

function setQuestion() {
  // #3.1. Change the text displayed by showing the correct question-and-answer pairs.
  document.getElementById("question").innerHTML = 
  document.getElementById("button1").innerHTML = 
  document.getElementById("button2").innerHTML = 
  document.getElementById("button3").innerHTML = 

  // #3.2. Display the required elements on the questions and options page.
  document.getElementById("question").style.display = 
  document.getElementById("button1").style.display = 
  document.getElementById("button2").style.display = 
  document.getElementById("button3").style.display = 
  document.getElementById("name").style.display = 
  document.getElementById("start").style.display = 
  document.getElementById("description").style.display = 
  document.getElementById("image").style.display = 
}

// #4. Create a function to add points to selected answers. 
var hulk = 0;
var ironman = 0;
var captainamerica = 0;

function addpoint(selected) { 

}

// #5. Calculate the result of the quiz.
// KP: Chrome Console (Show student how to check the value of variables on Chrome Console.)
function result() {
  let highest = Math.max(hulk, ironman, captainamerica)
  if (hulk == highest) {
    document.getElementById("name").innerHTML = 
    document.getElementById("image").src = 
  } else if (ironman == highest) {

  } else if (captainamerica == highest) {

  } 
  document.getElementById("name").style.display = 
  document.getElementById("image").style.display = 
  document.getElementById("question").style.display = 
  document.getElementById("button1").style.display = 
  document.getElementById("button2").style.display = 
  document.getElementById("button3").style.display = 
}

// #6. Create functions for actions following button clicks.
// KP: JavaScript OnClick
function button1_clicked() {

}

function button2_clicked() {

}

function button3_clicked() {

}
