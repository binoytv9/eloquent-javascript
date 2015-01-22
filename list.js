function arrayToList(arr, index){
	if(index == undefined)
		index = 0;

	if(index >= arr.length)
		return null;

	var list = {};
	list.value = arr[index];
	list.rest = arrayToList(arr,index+1);

	return list;
}

function listToArray(list){
	var arr = [];
	while(list != null){
		arr.push(list.value);
		list = list.rest;
	}

	return arr;
}

function prepend(list, element){
	var new_l = {};
	new_l.value = element;
	new_l.rest = list;

	return new_l;
}

function nth(list,index){
	var count = 0;
	while(list != null){
		if(count == index)
			return list.value;
		count++;
		list = list.rest;
	}
	return undefined;
}

function nth_re(list,index,count){
	if(count == undefined)
		count = 0;
	if(count == index)
		return list.value;

	if(list == null)
		return undefined;
	else
		return nth_re(list.rest,index,count+1);
}

var arr = [1,2,3];
console.log("input arr : ",arr);
console.log();

// array to list
var list = arrayToList(arr);
console.log("output arrayToList :");
console.log(list);
console.log();

// list to array
var arr1 = listToArray(list);
console.log("output  listToArray : ",arr1);
console.log(arr1);
console.log();

// prepending element to list
console.log("output prepend :");
var new_l = prepend(list,10);
console.log(new_l);
console.log();

// nth element
console.log("output nth");
var ele = nth(list,2);
console.log(ele);
console.log();

// nth element using recursion
console.log("output nth");
var ele_re = nth_re(list,10);
console.log(ele_re);
console.log();
