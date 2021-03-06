// Generated by CoffeeScript 1.6.1
(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery', 'input/principal-actor-character'], function($, PrincipalActorCharacter) {
    var PrincipalActorDemo,
      _this = this;
    PrincipalActorDemo = (function() {

      function PrincipalActorDemo(index) {
        var _this = this;
        this.index = index;
        this.onInputActors = function(event) {
          return PrincipalActorDemo.prototype.onInputActors.apply(_this, arguments);
        };
        this.html = "<fieldset>\n  I'll need\n  <input type=\"number\" name=\"num-actors\" id=\"num-actors\" value=\"0\" min=\"0\" max=\"10\">\n  <a href=\"#principal-actor\" class=\"term open\">principal actor</a>(s).\n</fieldset>";
        this.$el = $(this.html);
        this.el = this.$el[0];
        this.actors = [];
        this.$el.on('input change', '#num-actors', this.onInputActors);
      }

      PrincipalActorDemo.prototype.onInputActors = function(event) {
        var actor, numActors, _results, _results1;
        numActors = parseInt(event.target.value, 10);
        if (numActors === this.actors.length) {
          return;
        }
        if (numActors > this.actors.length) {
          _results = [];
          while (this.actors.length < numActors) {
            actor = new PrincipalActorCharacter(this.actors.length + 1);
            this.actors.push(actor);
            _results.push(this.$el.appendPolyfill(actor.$el));
          }
          return _results;
        } else {
          _results1 = [];
          while (this.actors.length > numActors) {
            _results1.push(this.actors.pop().$el.remove());
          }
          return _results1;
        }
      };

      return PrincipalActorDemo;

    })();
    return PrincipalActorDemo;
  });

}).call(this);
