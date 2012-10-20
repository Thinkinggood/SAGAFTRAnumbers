(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery', 'underscore', 'input/television/principal-actor-demo', 'input/version'], function($, _, PrincipalActorDemo, Version) {
    var TelevisionCommercialDemo;
    TelevisionCommercialDemo = (function() {

      function TelevisionCommercialDemo() {
        var _this = this;
        this.label = "Television Commercial Demo - (Voiceover/Off Camera, Non-air)";
        this.steps = [new PrincipalActorDemo(), new Version()];
        this.el = [];
        _.each(this.steps, function(el, i) {
          return _this.el.push(el.el);
        });
        this.$el = $(this.el);
      }

      TelevisionCommercialDemo.prototype.destroy = function() {
        return this.$el.off("**");
      };

      return TelevisionCommercialDemo;

    })();
    return TelevisionCommercialDemo;
  });

}).call(this);
