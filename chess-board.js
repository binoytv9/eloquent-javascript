/*	Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
	At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

			 # # # #
			# # # #
			 # # # #
			# # # #
			 # # # #
			# # # #
			 # # # #
			# # # #

*/

var size = 10;
//var size = Number(prompt("Enter the size","8"));

if(!isNaN(size))
	for(var i = 0;i < size;i += 1){
		var pat = "";
		for(var j = 0;j < size;j += 1){
			if((i+j)%2 == 0)
				pat += " ";
			else
				pat += "#";
		}
		console.log(pat);
	}
else
	consolle.log("Not a number!!!");
