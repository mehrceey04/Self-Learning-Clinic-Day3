module.exports = {
  findMissing : function(arr1, arr2) {
    for(var i = 0; i < arr2.length; i++ ) {
	  if(arr1.indexOf(arr2[i]) === -1) 
	    return arr2[i];
	}  
	return 0;
	}
}