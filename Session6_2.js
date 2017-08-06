/*Create an Array of numbers Example as var arr= [3,4,5,6,76,7,8];
Push 4 elements in an existing array list.
Pop the inserted pushed elements.
Extract the elements from first index to fourth index and display the list
Iterate the array element using for of loop or forEach loop.*/

var defaultArray=[6,8,3,1,7,9];

// Function to push elements into Array.
function pushIntoArray(){

	defaultArray.push(9,10,11,12);
	console.log("Elements Pushed");
	console.log(defaultArray);
}

//Function to pop elements from Array
function popOutArray(arrayToPop, numberOfElements){

	for (var i = 0; i < numberOfElements; i++) {
		arrayToPop.pop();
	}
	console.log("Elements Poped");
	console.log(defaultArray);
}

// Function to display elements from Array. 
function printArray(arrayToPrint, numberOfElements){

	console.log("Print first four elements");
	for (var i = 0; i < numberOfElements; i++) {
		console.log(arrayToPrint[i]);
	}
}

//Function to call all the functions
function performArray()
{
	console.log(defaultArray);
	pushIntoArray();
	popOutArray(defaultArray,4);
	printArray(defaultArray,4);
}

// Calling main function
performArray();