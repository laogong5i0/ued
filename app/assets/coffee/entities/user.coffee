define ['common/app', 'marionette'], (App, Marionette)->
	class SignIn extends Backbone.Model
		# defaults:
		# 	Message: '22ee'
		# 	Text: ''

		parse: (resp)->
			console.log '响应数据：', resp
			super resp

	API = 
		getSignModel: (data) ->
			return @model if @model
			@model = new SignIn data
			@model

		signIn: (params={}, options={})->
			model = @getSignModel()
			model.url = "http://car.52zzb.com/webzzb/login/login"
			model.save params, options
			model

		signUp: (data)->
			console.log 'signUp: '

	# App.reqres.setHandler 'user:signIn', (params, options)->
	# 	API.signIn params, options
