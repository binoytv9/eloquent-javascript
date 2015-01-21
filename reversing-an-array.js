var reverseArray = function(ar){
			new_ar = [];
			for(index in ar)
				new_ar.unshift(ar[index]);
			return new_ar;
		}

var reverseArrayInPlace = function(ar){
				l = ar.length - 1;

				for(var i = 0;i <= l/2; i += 1){
					t = ar[i];
					ar[i] = ar[l-i];
					ar[l-i] = t;
				}
				return ar;
			}




console.log(reverseArray(["A", "B", "C"]));

var arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
