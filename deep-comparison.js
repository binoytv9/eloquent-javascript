function deepEqual(obj1,obj2){
	if((typeof obj1 == "object" && obj1 != null) && (typeof obj2 == "object" && obj2 != null)){
		if(!sameNumOfProperty(obj1,obj2))
			return false;
		for(property in obj1){
			if(!(property in obj2))
				return false;
			else
				if(!deepEqual(obj1[property], obj2[property]))
					return false;
		}

		return true;
	}
	else
		return obj1 === obj2;
}

function sameNumOfProperty(x,y){
	count = 0;

	for(p in x)
		count++;
	for(p in y)
		count--;

	return !count;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

console.log(deepEqual(obj== {here: {is: "an"}, object: 2}));
