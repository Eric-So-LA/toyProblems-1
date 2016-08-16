//function is passed an array of numbers that represent heights of boxes.
//bad time complexity//I have to find the largest rectangular area that can be created with the heights
function largestRectangleArea(heights){
	var highestArea = 0;
	var currentArea = 0;;
	var currentSubset = [];
	var currentLowest = null;
	for(var i = 0; i < heights.length; i++){
		currentLowest = heights[i];
		for(var j = i; j < heights.length; j++){
			if(heights[j] < currentLowest){
				currentLowest = heights[j];
			}
			currentSubset.push(heights[i]);
			currentArea = currentSubset.length * currentLowest;
			if(currentArea > highestArea){
				highestArea = currentArea;
			}

		}
		currentSubset = [];
	}

	return highestArea;

}

console.log(largestRectangleArea([2,4,3,2,6]));

//linear time complexity
function Stack(){

	var storage = [];
	var numberOfElements = 0;
}
Stack.prototype.push(element){
	storage[numberOfElements] = element;
	numberOfElements++;
}
Stack.prototype.pop(){
	return storage.splice(numberOfElements--,1)[0];
}
Stack.prototype.size(){
	return numberOfElements;
}
function largestRectangleArea2(heights){

	var stack = new Stack();
	













}






















