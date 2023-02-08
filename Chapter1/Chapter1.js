//Chapter1.js

function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min) ) + min;
}

const numProblemClasses = 3;

var numCorrect = [];
var numAbandoned = [];
var stateProblemActive = [];
var numTries = [];
var answer = [];

document.addEventListener('DOMContentLoaded', initializeOnLoad(),false);

function initializeOnLoad() {
	for (let i = 0; i<numProblemClasses; i++){
		numCorrect[i] = 0;
		numAbandoned[i] = 0;
		stateProblemActive[i] = false;
		numTries[i] = 0;
		answer[i] = -1;		
	}
}

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
	}

function checkAnswer(problemClass) {
	var feedback;
	var i = problemClass.toString();
	let x = document.getElementById("studentAnswer"+i).value;
	if (stateProblemActive[problemClass]== true){ // only do anything if the problem is active
		if ( x!= '') { // the problem has been answered 
			numTries[problemClass]++;
		}
		if (x == answer[problemClass]) { // the answer is correct
			feedback = "Correct!";
			trackOutcome(problemClass,true); // track successful outcome immediately upon correct check
			stateProblemActive[problemClass] = false;
		}
		else { feedback = "Incorrect, try again."; }	
		document.getElementById("feedbackText"+i).innerHTML = feedback;
	}
}

function resetProblem(problemClass) {
	if (stateProblemActive[problemClass] == true) {trackOutcome(problemClass,false)}; // track unsuccessful outcome upon new problem generation
	resetCheckDisplay(problemClass);
	resetAnswerField(problemClass);
	stateProblemActive[problemClass] = true;
	numTries[problemClass]=0;
}

function resetCheckDisplay(problemClass) {document.getElementById("feedbackText"+problemClass.toString()).innerHTML = "&nbsp;";}
function resetAnswerField(problemClass) {document.getElementById("studentAnswer"+problemClass.toString()).value = "";}

function trackOutcome(problemClass,studentSucceeded){
	console.log(problemClass, studentSucceeded, numTries[problemClass]); // eventually this will be an SQL table update
	if(studentSucceeded) {numCorrect[problemClass]++;}
	else{numAbandoned[problemClass]++;}
	let Score = numCorrect[problemClass] * 2 - numAbandoned[problemClass]*5;
	if (Score > 3) {displayCuteAnimal(problemClass);}
}

function displayCuteAnimal(problemClass) {
	let i = problemClass.toString();
	document.getElementById("reward"+i).style.zIndex = 1;
}
