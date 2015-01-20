/*	Write a loop that makes seven calls to console.log to output the following triangle:

		#
		##
		###
		####
		#####
		######
		#######

*/


var star = '#';
while(star.length <= 7){
	console.log(star);
	star += '#';
}
