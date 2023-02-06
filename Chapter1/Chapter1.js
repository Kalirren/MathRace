//Chapter1.js

function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min) ) + min;
}

const numProblemClasses = 3;

var numCorrect, numAbandoned, numInCorrect;
var stateProblemActive=[];

var answer=[];

function newProblem(problemClass) {
	resetProblem(problemClass);
	switch (problemClass){
		case 0:
			var a = getRndInteger(1,20);
			var b = getRndInteger(1,20);
			answer[0] = Math.max(a, b);
			var prompt = Math.min(a, b);
			var prompt2 = answer[0]-prompt;
			document.getElementById("addor0").innerHTML = prompt.toString();
			document.getElementById("addend0").innerHTML = prompt2.toString();
			break;
		case 1:
			var a = getRndInteger(10,100);
			var b = getRndInteger(1,10);
			answer[1] = Math.max(a, b);
			var prompt = Math.min(a, b);
			var prompt2 = answer[1]-prompt;
			document.getElementById("addor1").innerHTML = prompt.toString();
			document.getElementById("addend1").innerHTML = prompt2.toString();
			break;
		case 2:
			var a = getRndInteger(10,100);
			var b = getRndInteger(1,10);
			answer[2] = a-b;
			document.getElementById("addor2").innerHTML = b.toString();
			document.getElementById("sum2").innerHTML = a.toString();
			break;
		}
	stateProblemActive[problemClass] = true;
	}

function checkAnswer(problemClass) {
	var feedback;
	var i = problemClass.toString();
	let x = document.getElementById("studentAnswer"+i).value;
	if (x == answer[i]) { feedback = "Correct!"; }
	else { feedback = "Incorrect, try again."; }
	document.getElementById("feedbackText"+i).innerHTML = feedback;
	trackOutcome(problemClass);
}

function resetProblem(problemClass) {
		resetCheckDisplay(problemClass);
		resetAnswerField(problemClass);
}

function resetCheckDisplay(problemClass) {document.getElementById("feedbackText"+problemClass.toString()).innerHTML = "&nbsp;";}
function resetAnswerField(problemClass) {document.getElementById("studentAnswer"+problemClass.toString()).value = "";}



function trackOutcome(problemClass){
	//if problem not active do nothing
	//if problem active and answer is correct, deactivate problem, increment tries, and 
	//if problem active and no correct answer yet given, 
}