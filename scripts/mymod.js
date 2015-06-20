import $ from 'jquery';

class B {
	methodB(message = "Some default") {

		var p = new Promise((resolve, reject) => {
			$(document).ready(() => {
				resolve();
			});
		});

		p.then(() => {
			$("h1").html(`
				This is ${message} by JQuery
				<i>Things<i/>
				`);
		});
	}
}

export default B;