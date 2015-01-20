/*	
	    Zero is even.

	    One is odd.

	    For any other number N, its evenness is the same as N - 2.

	Define a recursive function isEven corresponding to this description. 
	The function should accept a number parameter and return a Boolean.
*/


var isEven = function(number){
		if(number == 0)
			return true;
		else if(number == 1)
			return false;
		else if(number < 0)
			return isEven(-number);
		else
			return isEven(number-2);
	}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-2));
