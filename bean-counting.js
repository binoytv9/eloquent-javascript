/* a function countBs that takes a string as its only argument and returns a number 
   that indicates how many uppercase “B” characters are in the string	*/
var countBs = function(str){
		var count = 0;
		for(var i = 0;i < str.length; i += 1)
			if(str.charAt(i) == "B")
				count += 1;
		return count;
		}

/* a function called countChar that behaves like countBs, except it takes a second 
   argument that indicates the character that is to be counted (rather than counting 
   only uppercase "B" characters). 	*/
var countChar = function(str,ch){
		var count = 0;
		for(var i = 0;i < str.length; i += 1)
			if(str.charAt(i) == ch)
				count += 1;
		return count;
		}
		

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
