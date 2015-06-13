import $ from 'jquery';

class B {
  methodB(message="Some default") {
  	
		$(document).ready(() =>{
		 $("#msgid").html(`This is ${message} by JQuery`);
		});
				
  }
}

export default B;