import $ from 'jquery';

class B {
  methodB(message="Some default") {
  	
  	console.log(`This is ${message} by JQuery`);
		$(document).ready(() =>{
		 $("h1").html(`This is ${message} by JQuery`);
		});
				
  }
}

export default B;