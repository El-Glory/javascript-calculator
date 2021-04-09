function history(){
	return document.getElementById("historyValue").innerText
}

function printHistory(num){
	document.getElementById("historyValue").innerText= num
}

function output(){
	return document.getElementById("outputValue").innerText
}

function printOutput(num){
	document.getElementById("outputValue").innerText= num
}

printOutput("99999")