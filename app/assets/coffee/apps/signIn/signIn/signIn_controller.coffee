define ['common/app', 'marionette', 'apps/signIn/signIn/signIn_view',
'entities/user'], (App, Marionette, SignInView, User)->
	class MainApp extends Marionette.Controller
		initialize: (options={})->
			@updateView()
			
		updateView: ->
			data = 
				channelAccount:"620005858"
				channelPassword:"123456"

			model = User.signIn data, success: (model, resp, options)=>
  				view = @getView model;
  				App.mainRegion.show view

		getView: (model)->
			return new SignInView
				model:model
		
