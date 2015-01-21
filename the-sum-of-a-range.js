var range = function(start, end, step){
		arr = [];
		if(step == undefined)
			step = 1;
		else if(step < 0){
			if(start < end)
				return [];
		}
		else
			if(start > end)
				return [];

		for(end += step;start != end; start += step)
			arr.push(start);
		return arr;
	}

var sum = function(arr){
		s = 0;
		for(index in arr)
			s += arr[index];
		return s;
	}

console.log(range(0,10));
console.log(sum(range(0,10)));

console.log(range(21,12,-1));
console.log(sum(range(21,12,-1)));
