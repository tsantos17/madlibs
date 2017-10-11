//Initialize Variables
var sentence = [];
var replacements = [];
var index = 0;

filler(sentence, "Next Word");
filler(replacements, "Next Position");
replace(sentence,replacements,"Part of speech for word in sentence ");
alert("Switch positions");

function filler (myArray,myPrompt){
	index = -1;
	do{
		index++;
		myArray[index] = prompt(myPrompt+"["+index+"] = ");
	}
	while(myArray[index] != "^");
	myArray.pop();
	console.log(myArray);
}

function replace (mySArray,myRArray,myPrompt){
	for (index=0;index<myRArray.length;index++){
		mySArray[myRArray[index]] = prompt(myPrompt+"["+[myRArray[index]]+"] = ");
	}
	console.log(mySArray);
}