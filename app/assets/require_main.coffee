require.config
	baseUrl: 'assets'
	urlArgs: 'bust=' + Math.random(),
	paths:
		backbone: '../../bower_components/backbone-amd/backbone'
		jquery: '../../bower_components/jquery/dist/jquery',
		json2: '../../bower_components/json2/json2',
		underscore: '../../bower_components/underscore-amd/underscore',
		marionette: '../../bower_components/backbone.marionette/lib/backbone.marionette',
		tpl: "../../bower_components/requirejs-tpl/tpl",
		localstorage: "../../bower_components/backbone.localstorage/backbone.localstorage",
		common: 'js/common'
		apps: 'js/apps'
		entities: 'js/entities'
	shim:
		underscore:
			exports: '_'
		backbone:
			deps: ['jquery', 'underscore', 'json2'],
			exports: 'Backbone'
		marionette: 
			deps: ['backbone']
			exports: 'Marionette'


