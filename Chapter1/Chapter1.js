//Chapter1.js

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

var answer;

function newProblem() {
	resetProblem();
	var a = getRndInteger(1,20);
	var b = getRndInteger(1,20);
	answer = Math.max(a, b);
	var prompt = Math.min(a, b);
	var prompt2 = answer-prompt;
	document.getElementById("addor").innerHTML = prompt.toString();
	document.getElementById("addend").innerHTML = prompt2.toString();
}

function checkAnswer() {
	var feedback;
	let x = document.getElementById("studentAnswer").value;
	if (x == answer) { feedback = "Correct!"; }
	else { feedback = "Incorrect, try again."; }
	document.getElementById("feedbackText").innerHTML = feedback;
}

function resetProblem() {
		resetCheckDisplay();
		resetAnswerField();
}

function resetCheckDisplay() {document.getElementById("feedbackText").innerHTML = "&nbsp"}
function resetAnswerField() {document.getElementById("studentAnswer").value = ""}