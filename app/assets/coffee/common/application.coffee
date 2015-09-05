define ['marionette'], (Marionette)->
	class Application extends Marionette.Application

		navigate: (route, options={}) ->
			Backbone.history.navigate route, options

		startHistory: ->
			if Backbone.history
				Backbone.history.start()
