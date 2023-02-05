var numCorrect, numAbandoned, numInCorrect
var stateGenerated, stateAnswered, stateFinished


function trackOutcome(int problemClass){
	if (stateGenerated == false) {}
	else if (stateGenerated == true && stateAnswered==false) {numAbandoned++;}
	else if (stateGenerated == true && stateAnswered == true && stateFinished=false) {}
	else if (stateGenerated==true && stateFinished==true) {numCorrect++;}
}