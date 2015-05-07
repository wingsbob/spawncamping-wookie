(function () {
	'use strict';

	function HelloWorld (options) {
		this.options = options || {};
	}

	HelloWorld.prototype.sendToConsole = function(message) {
		this.defaultmessage = 'my default message';
		return message || this.defaultMessage;
	};

	module.exports = HelloWorld;
}());