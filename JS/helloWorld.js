(function () {
	'use strict';

	function HelloWorld (options) {
		this.options = options || {};
	}

	HelloWorld.prototype.sendToConsole = function(message) {
		if (arguments.length === 0) {
			console.log (this.options.defaultMessage || "hello world");
		}
		else{
			switch (typeof message){
				case "string":
					console.log(message);
					break;
				default:
					throw "Error: message is type \"" + typeof message + "\" type";
			}
		};
	};

	module.exports = HelloWorld;
}());