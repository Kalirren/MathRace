var numCorrect, numAbandoned, numInCorrect
var stateProblemActive


function trackOutcome(int problemClass){
	if (stateGenerated == false) {}
	else if (stateGenerated == true && stateAnswered==false) {numAbandoned++;}
	else if (stateGenerated == true && stateAnswered == true && stateFinished=false) {}
	else if (stateGenerated==true && stateFinished==true) {numCorrect++;}
}