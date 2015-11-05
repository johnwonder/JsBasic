var asyncRequest = (function(){

	function handleReadyState(o,callback){
		var poll = window.setInterval(

			  function(){

			  	 if(o && o.readyState == 4){
			  	 	 window.clearInterval(poll);
			  	 	 if(callback)
			  	 	 	callback(o);
			  	 }
			  },50);
	};

	var getXHR = function(){
		var http;
		try{
			http = new XMLHttpRequest;
			getXHR = function(){
				return new XMLHttpRequest;
			};
		}
		catch(e){
			var msxml = [
				'MSXML2.XMLHTTP.3.0',
				'MSXML2.XMLHTTP',
				'Microsoft.XMLHTTP'
			];

		   for (var i = 0;len= msxml.length; i < len; ++i) {
		   	  	try{
		   	  		http = new ActiveXObject(msxml[i]);
		   	  		getXHR = function(){
		   	  			return new ActiveXObject(msxml[i]);
		   	  		};
		   	  		break;
		   	  	}catch(e){}
		   };

		}

		return http;

	};

	return function(method,uri,callback,postData){
		var http = getXHR();
		http.open(method,uri,true);
		handleReadyState(http,callback);
		http.send(postData|| null);
		return http;
	}


});

Function.prototype.method = function(name,fn){

	this.prototype[name] = fn;
	return this;
}

if(!Array.prototype.foreach){
  Array.method('foreach',function(fn,thisObj){

  	var scope = thisObj|| window;
  	for (var i = 0;len = this.length; i < len; i++) {
  			fn.call(scope,this[i],i,this);
  		};
  });
}

if(!Array.prototype.filter){
	Array.method('filter',function(fn,thisObj){
		var scope = thisObj || window;
		var a = [];
		for (var i = 0,len = this.length; i < len; i++){
			if(!fn.call(scope,this[i],i,this)){
				continue;
			}
			a.push(this[i]);
		}
		return a;
	});
}
//http://www.cnblogs.com/TomXu/archive/2012/04/19/2437321.html
