(function () {
	'use strict';

	var HelloWorld = require('../JS/helloWorld'),
		helloWorldInstance;

	describe('helloWorld', function () {
		describe('constructor', function () {
			it('should store the options as a parameter', function () {
				helloWorldInstance = new HelloWorld('some options');

				expect(helloWorldInstance.options).toEqual('some options');
			});
			it('should store an empty object if no options are provided', function () {
				helloWorldInstance = new HelloWorld();

				expect(helloWorldInstance.options).toEqual({});
			});
		});

		describe('sendToConsole', function () {
			beforeEach(function () {
				helloWorldInstance = new HelloWorld();
				spyOn(console, 'log');
			});

			describe('when called with no arguments', function () {
				it('should log the default message in the options', function () {
					helloWorldInstance.options.defaultMessage = 'my default message';

					helloWorldInstance.sendToConsole();

					expect(console.log).toHaveBeenCalledWith('my default message');
				});
				it('should log "hello world" if there is no default message', function () {
					helloWorldInstance.sendToConsole();

					expect(console.log).toHaveBeenCalledWith('hello world');
				});
			});
			describe('when called with an argument', function () {
				it('should log it to the console if it is a string', function () {
					helloWorldInstance.sendToConsole('my special message');

					expect(console.log).toHaveBeenCalledWith('my special message');
				});
				it('should throw an error if it is an object', function () {
					expect(function(){helloWorldInstance.sendToConsole({});}).toThrow();
				});
				it('should throw an error if it is null', function () {
					expect(function(){helloWorldInstance.sendToConsole(null);}).toThrow();
				});
				it('should throw an error if it is undefined', function () {
					expect(function(){helloWorldInstance.sendToConsole(undefined);}).toThrow();
				});
			})
		});
	});

}());