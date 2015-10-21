//http://www.cnblogs.com/yy-hh/p/4591852.html
function unique(arr){
	
   var tmp =  new Array();
   for(var m in arr){
	tmp[arr[m]] =1;
   }

   var tmparr = new Array();
   for(var n in tmp){
	tmparr.push(n);
    }
    return tmparr;
}