define ['common/app', 'marionette',
'apps/signIn/signIn/signIn_controller'], (App, Marionette, SignInController)->
	class MainApp extends Marionette.AppRouter
		routes:
			'': 'signIn'
			'signUp': 'signUp'

		signIn: ->
			console.log 'signIn------>>1'
			new SignInController

		signUp: ->
			console.log 'signUp child page ------->>'