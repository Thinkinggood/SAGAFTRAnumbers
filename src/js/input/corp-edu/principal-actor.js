// Generated by CoffeeScript 1.6.1
(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery', 'underscore', 'input/corp-edu/principal-actor-hour'], function($, _, PrincipalActorHour) {
    var PrincipalActor,
      _this = this;
    PrincipalActor = (function() {

      function PrincipalActor() {
        var _this = this;
        this.onInputPrincipals = function(event) {
          return PrincipalActor.prototype.onInputPrincipals.apply(_this, arguments);
        };
        this.html = "<fieldset>\n	I'll need:\n	<div>\n		<input type=\"number\" name=\"num-principals\" id=\"num-principals\" value=\"0\" min=\"0\" max=\"10\">\n		<a href=\"#principal-actor\" class=\"term open\">principal actor</a>(s),\n	</div>\n</fieldset>";
        this.$el = $(this.html);
        this.el = this.$el[0];
        this.principals = [];
        this.$el.on('input change', '#num-principals', this.onInputPrincipals);
      }

      PrincipalActor.prototype.onInputPrincipals = function(event) {
        var numPrincipals, principal;
        numPrincipals = parseInt(event.target.value, 10);
        if (numPrincipals === this.principals.length) {
          return;
        }
        if (this.principals.length < numPrincipals) {
          while (this.principals.length < numPrincipals) {
            principal = new PrincipalActorHour(this.principals.length + 1);
            this.principals.push(principal);
            $(event.target).closest('div').appendPolyfill(principal.$el);
          }
        } else {
          while (this.principals.length > numPrincipals) {
            this.principals.pop().$el.remove();
          }
        }
        if (event.type === 'input') {
          return this.$el.trigger('change');
        }
      };

      return PrincipalActor;

    })();
    return PrincipalActor;
  });

}).call(this);
