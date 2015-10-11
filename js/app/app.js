// js/app/app

define([
	'backbone',
	'underscore',
	'jquery'
], function(
	Backbone,
	_,
	$,
	NavbarView,
	HomeView,
	SchoolView
){

	var app = {};

	app.initialize = function(){

		// Set up backbone router
		var Router = Backbone.Router.extend({
			routes: {
				"": 			"home", // Default homepage
			}
		});

		var router = new Router();

		// Start backbone history, allows bookmarking urls etc etc
		Backbone.history.start();
	}

	return app;

});
