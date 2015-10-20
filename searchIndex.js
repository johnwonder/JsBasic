function indexOf(arr,item){
	var i = arr.length;
	while(i -- ){
		if(arr[i] ==item)
			return i;
	}
	return -1;
}