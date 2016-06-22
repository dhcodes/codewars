<!--
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

	Example:

	list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'
//
// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'
//
// list([ {name: 'Bart'} ])
// // returns 'Bart'
//
// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and ''
//
// Answer
//
//
function list(names){
  
  var nameList = "";
    var lastTwo;
      
      if (names.length==1) {
          nameList+= names[0].name;
          }
	    else if (names.length>1) {
	        
	        var lastTwo = names[names.length-2].name + ' & ' + names[names.length-1].name;
	        
	        for (var i = 0; i<names.length-2; i++) {
		      nameList += names[i].name + ', ';
		    
		    }
	        
	        nameList +=lastTwo;
	      
	      
	      }
	        return nameList;
		    }
