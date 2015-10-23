var simpleXhrFactory=(function(){


	var standard={
	 createXhrObject:function(){
             return new XMLHttpRequest();
	  }
	};

	var activeXNew={
  	   createXhrObject:function(){
		return new ActiveXObject('Msxml2.XMLHTTP');
	  }
	 };

        var activeXOld = {
  	   createXhrObject:function(){
              return new ActiveXObject('Microsoft.XMLHTTP');
	   }
        };

        var testObject;
        try{
           testObject = standard.createXhrObject();
	   return standard;
        }
        catch(e){


		//ªÒ»°new old
        }


})();