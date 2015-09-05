(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(['marionette'], function(Marionette) {
    var Application;
    return Application = (function(superClass) {
      extend(Application, superClass);

      function Application() {
        return Application.__super__.constructor.apply(this, arguments);
      }

      Application.prototype.navigate = function(route, options) {
        if (options == null) {
          options = {};
        }
        return Backbone.history.navigate(route, options);
      };

      Application.prototype.startHistory = function() {
        if (Backbone.history) {
          return Backbone.history.start();
        }
      };

      return Application;

    })(Marionette.Application);
  });

}).call(this);
