(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(['common/app', 'marionette', 'apps/signIn/signIn/signIn_controller'], function(App, Marionette, SignInController) {
    var MainApp;
    return MainApp = (function(superClass) {
      extend(MainApp, superClass);

      function MainApp() {
        return MainApp.__super__.constructor.apply(this, arguments);
      }

      MainApp.prototype.routes = {
        '': 'signIn',
        'signUp': 'signUp'
      };

      MainApp.prototype.signIn = function() {
        console.log('signIn------>>1');
        return new SignInController;
      };

      MainApp.prototype.signUp = function() {
        return console.log('signUp child page ------->>');
      };

      return MainApp;

    })(Marionette.AppRouter);
  });

}).call(this);
