//Chapter1.js

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

var answer;

function newProblem(int problemClass) {
	resetProblem();
	var a = getRndInteger(1,20);
	var b = getRndInteger(1,20);
	answer = Math.max(a, b);
	var prompt = Math.min(a, b);
	var prompt2 = answer-prompt;
	document.getElementById("addor").innerHTML = prompt.toString();
	document.getElementById("addend").innerHTML = prompt2.toString();
}

function checkAnswer(int problemClass) {
	var feedback;
	let x = document.getElementById("studentAnswer").value;
	if (x == answer) { feedback = "Correct!"; }
	else { feedback = "Incorrect, try again."; }
	document.getElementById("feedbackText").innerHTML = feedback;
}

function resetProblem(int problemClass) {
		resetCheckDisplay();
		resetAnswerField();
}

function resetCheckDisplay(int problemClass) {document.getElementById("feedbackText"+problemClass.toString()).innerHTML = "&nbsp"}
function resetAnswerField(int problemClass) {document.getElementById("studentAnswer"+problemClass.toString()).value = ""}

var numCorrect, numAbandoned, numInCorrect
var stateProblemActive


function trackOutcome(int problemClass){
	if (stateGenerated == false) {}
	else if (stateGenerated == true && stateAnswered==false) {numAbandoned++;}
	else if (stateGenerated == true && stateAnswered == true && stateFinished=false) {}
	else if (stateGenerated==true && stateFinished==true) {numCorrect++;}
}