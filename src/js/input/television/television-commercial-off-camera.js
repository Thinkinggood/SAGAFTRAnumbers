// Generated by CoffeeScript 1.6.1
(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery', 'underscore', 'input/television/principal-actor', 'input/version', 'input/tag', 'input/television/use-off-camera'], function($, _, PrincipalActor, Version, Tag, Use) {
    var TelevisionCommercialOffCamera;
    TelevisionCommercialOffCamera = (function() {

      function TelevisionCommercialOffCamera() {
        var _this = this;
        this.label = "Television Commercial - (Voiceover/Off Camera)";
        this.value = "television_commercial_off_camera";
        this.definitionId = "tv-commercial";
        this.headsUpItems = ['Lifts', 'Non-broadcast use'];
        this.steps = [new PrincipalActor(), new Version(), new Tag(), new Use()];
        this.el = [];
        _.each(this.steps, function(el, i) {
          return _this.el.push(el.el);
        });
        this.$el = $(this.el);
      }

      TelevisionCommercialOffCamera.prototype.destroy = function() {
        return this.$el.off("**");
      };

      return TelevisionCommercialOffCamera;

    })();
    return TelevisionCommercialOffCamera;
  });

}).call(this);
