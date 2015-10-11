// js/main

// config
require.config({
	baseUrl: 'js/app',
	paths:{
		jquery: '../vendor/jquery.min',
		underscore: '../vendor/underscore-min',
		backbone: '../vendor/backbone-min'
	}
});

// main
require(['app'], function(app){
	// initialize application
	app.initialize();
});
