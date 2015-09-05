(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(['common/app', 'marionette'], function(App, Marionette) {
    var API, SignIn;
    SignIn = (function(superClass) {
      extend(SignIn, superClass);

      function SignIn() {
        return SignIn.__super__.constructor.apply(this, arguments);
      }

      SignIn.prototype.parse = function(resp) {
        console.log('响应数据：', resp);
        return SignIn.__super__.parse.call(this, resp);
      };

      return SignIn;

    })(Backbone.Model);
    return API = {
      getSignModel: function(data) {
        if (this.model) {
          return this.model;
        }
        this.model = new SignIn(data);
        return this.model;
      },
      signIn: function(params, options) {
        var model;
        if (params == null) {
          params = {};
        }
        if (options == null) {
          options = {};
        }
        model = this.getSignModel();
        model.url = "http://car.52zzb.com/webzzb/login/login";
        model.save(params, options);
        return model;
      },
      signUp: function(data) {
        return console.log('signUp: ');
      }
    };
  });

}).call(this);
